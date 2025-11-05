'use client';
import { useState } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ім'я є обов'язковим";
    }

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
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
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
        // Успіх: очищаємо форму і показуємо повідомлення
        setFormData({ name: '', telegram: '', email: '' });
        setIsModalOpen(false);
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

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault()

  //   if (!validateForm()) {
  //     return
  //   }

  //   setIsSubmitting(true)

  //   try {
  //     // Simulate API call
  //     await new Promise(resolve => setTimeout(resolve, 1000))

  //     // Reset form and close modal on success
  //     setFormData({ name: '', telegram: '', email: '' })
  //     setIsModalOpen(false)

  //   } catch (error) {
  //     console.error('Form submission error:', error)
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return (
      <div className="w-full min-h-screen bg-[#0c0117] flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Дякуємо за ваш запит!
            </h1>
            <p className="text-gray-300 mb-6">Ми зв'яжемося з вами найближчим часом.</p>
            <Button text="Повернутися" onClick={() => setIsModalOpen(true)} variant="gradient" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0c0117] flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4 mt-[39px] md:mt-[59px] lg:mt-[78px]">
        <div className="w-full max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-[30px] md:gap-[45px] lg:gap-[60px]">
          {/* Contact Form Modal */}
          <div className="relative w-full max-w-[400px] lg:max-w-[350px] xl:max-w-[400px]">
            {/* <div
              className="bg-[#0c0117] rounded-[28px] p-[14px] md:p-[21px] lg:p-[28px] relative"
              style={{ boxShadow: '4px 6px 10px #a75df333' }}
            > */}
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
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-[14px] md:top-[21px] lg:top-[28px] right-[14px] md:right-[21px] lg:right-[28px] w-[32px] h-[32px] flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200 z-10"
                aria-label="Закрити модальне вікно"
              >
                <img
                  src="/images/img_material_symbol.svg"
                  alt="close"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px]"
                />
              </button>

              <div className="pt-[17px] md:pt-[26px] lg:pt-[34px] pb-[22px] md:pb-[33px] lg:pb-[44px] px-[10px] md:px-[15px] lg:px-[20px]">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-[17px] md:gap-[26px] lg:gap-[34px]"
                >
                  {/* Form Title */}
                  <h1 className="text-[18px] md:text-[21px] lg:text-[24px] font-bold leading-[22px] md:leading-[25px] lg:leading-[29px] text-center uppercase text-white font-raleway">
                    Укажіть свої дані
                  </h1>

                  <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]">
                    {/* Form Fields */}
                    <div className="flex flex-col gap-[9px] md:gap-[14px] lg:gap-[18px]">
                      <EditText
                        placeholder="Ім'я"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                        error={!!errors.name}
                        helperText={errors.name}
                        text_font_size="text-sm"
                        text_font_family="Raleway"
                        text_font_weight="font-normal"
                        text_line_height="leading-sm"
                        text_text_align="left"
                        text_color="text-[#0c0117]"
                        fill_background_color="bg-white"
                        border_border_radius="rounded-[14px]"
                        effect_box_shadow="0px 10px 78px #7979791e"
                        padding="t=12px,r=20px,b=12px,l=20px"
                        layout_width="flex-1"
                      />

                      <EditText
                        placeholder="Нік Telegram"
                        value={formData.telegram}
                        onChange={handleInputChange('telegram')}
                        error={!!errors.telegram}
                        helperText={errors.telegram}
                        text_font_size="text-sm"
                        text_font_family="Raleway"
                        text_font_weight="font-normal"
                        text_line_height="leading-sm"
                        text_text_align="left"
                        text_color="text-[#0c0117]"
                        fill_background_color="bg-white"
                        border_border_radius="rounded-[14px]"
                        effect_box_shadow="0px 10px 78px #7979791e"
                        padding="t=12px,r=20px,b=12px,l=20px"
                        layout_width="flex-1"
                      />

                      <EditText
                        placeholder="Email*"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        error={!!errors.email}
                        helperText={errors.email}
                        text_font_size="text-sm"
                        text_font_family="Raleway"
                        text_font_weight="font-normal"
                        text_line_height="leading-sm"
                        text_text_align="left"
                        text_color="text-[#0c0117]"
                        fill_background_color="bg-white"
                        border_border_radius="rounded-[14px]"
                        effect_box_shadow="0px 10px 78px #7979791e"
                        padding="t=12px,r=20px,b=12px,l=20px"
                        layout_width="flex-1"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      text={isSubmitting ? 'Відправляємо...' : 'Відправити'}
                      disabled={isSubmitting}
                      text_font_size="text-sm"
                      text_font_family="Raleway"
                      text_font_weight="font-semibold"
                      text_line_height="leading-sm"
                      text_text_align="center"
                      text_color="text-[#0c0117]"
                      fill_background_color="bg-white"
                      border_border_radius="rounded-[12px]"
                      effect_box_shadow="0px 1px 2px #0000000c"
                      padding="t=14px,r=34px,b=14px,l=34px"
                      layout_width="flex-1"
                      className="border-2 border-transparent bg-white text-[#0c0117] hover:bg-gray-50 transition-colors duration-200"
                      style={{
                        borderImage:
                          'linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%) 1',
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Decorative Purple Circle */}
          {/* <div
            className="hidden lg:block w-[184px] md:w-[276px] lg:w-[368px] h-[173px] md:h-[260px] lg:h-[346px] bg-[#a75df3] rounded-full"
            style={{
              boxShadow: '0px 4px 577px #888888ff',
              borderRadius: '184px',
            }}
          /> */}
        </div>
      </main>
    </div>
  );
}
