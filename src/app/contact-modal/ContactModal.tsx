'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import EditText from '@/components/ui/EditText';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  telegram: string;
  email: string;
}

interface FormErrors {
  name?: string;
  telegram?: string;
  email?: string;
}

export default function ContactModal() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    telegram: '',
    email: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // --- Закриття по ESC ---
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ім'я є обов'язковим";
    if (!formData.email.trim()) {
      newErrors.email = "Email є обов'язковим";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введіть коректний email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange =
    (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setFormData({ name: '', telegram: '', email: '' });
        setIsSubmitted(true);
      } else {
        alert('❌ Не вдалося відправити повідомлення. Спробуйте ще раз.');
      }
    } catch (err) {
      console.error('Помилка при відправленні:', err);
      alert('❌ Сталася помилка під час надсилання форми.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  // if (!isModalOpen) return null;
  if (!isModalOpen) {
    return (
      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/50"
        onClick={() => setIsModalOpen(false)} // ← закриває по кліку на бекдроп
      >
        <div
          className="relative w-full min-h-screen bg-[#0c0117] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()} // ← щоб клік усередині не закривав
        >
          {/* Хедер */}
          <div className="fixed top-0 left-0 w-full z-50">
            <Header />
          </div>

          <main className="flex-1 flex items-center justify-center p-4 mt-[100px] md:mt-[120px] lg:mt-[140px]">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Дякуємо за ваш запит!
              </h1>
              <p className="text-gray-300 mb-6">Ми зв'яжемося з вами найближчим часом.</p>
              <Button
                text="Повернутися"
                onClick={() => setIsModalOpen(false)} // ← кнопка закриває
                variant="gradient"
              />
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/50"
      onClick={handleCloseModal} // бекдроп
    >
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
        <Header />
      </div>

      <main
        className="relative z-50 flex flex-col items-center justify-center p-4 mt-[100px] md:mt-[120px] lg:mt-[140px]"
        onClick={(e) => e.stopPropagation()} // щоб клік усередині не закривав
      >
        {/* === ФОРМА === */}
        {!isSubmitted && (
          <div
            className="relative flex flex-col items-center justify-center"
            style={{
              borderRadius: '28px',
              width: '410px',
              height: '491px',
              boxShadow: 'inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)',
              background: '#0c0117',
              padding: '28px',
            }}
          >
            {/* Хрестик */}
            <button
              onClick={handleCloseModal}
              className="absolute top-[14px] right-[14px] w-[32px] h-[32px] flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Закрити модальне вікно"
            >
              <img src="/images/img_material_symbol.svg" alt="close" width={32} height={32} />
            </button>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full items-center">
              <h1 className="text-[22px] font-bold text-white text-center uppercase mb-3">
                Укажіть свої дані
              </h1>

              <EditText
                placeholder="Ім'я"
                value={formData.name}
                onChange={handleInputChange('name')}
                error={!!errors.name}
                helperText={errors.name}
              />
              <EditText
                placeholder="Нік Telegram"
                value={formData.telegram}
                onChange={handleInputChange('telegram')}
              />
              <EditText
                placeholder="Email*"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                required
              />

              <Button
                type="submit"
                text={isSubmitting ? 'Відправляємо...' : 'Відправити'}
                disabled={isSubmitting}
                variant="gradient"
                className="mt-2"
              />
            </form>
          </div>
        )}

        {/* === ДЯКУВАЛЬНЕ ВІКНО === */}
        {isSubmitted && (
          <div
            className="relative flex flex-col items-center justify-center text-center text-white"
            style={{
              borderRadius: '28px',
              width: '410px',
              minHeight: '350px',
              background: '#0c0117',
              boxShadow: 'inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)',
              padding: '28px',
            }}
          >
            {/* Хрестик */}
            <button
              onClick={handleCloseModal}
              className="absolute top-[14px] right-[14px] w-[32px] h-[32px] flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Закрити дякувальне вікно"
            >
              <img src="/images/img_material_symbol.svg" alt="close" width={32} height={32} />
            </button>

            <h1 className="text-2xl md:text-3xl font-bold mb-4">Дякуємо за ваш запит!</h1>
            <p className="text-gray-300 mb-6">Ми зв'яжемося з вами найближчим часом.</p>
            <Button text="Повернутися" onClick={handleCloseModal} variant="gradient" />
          </div>
        )}
      </main>
    </div>
  );
}
