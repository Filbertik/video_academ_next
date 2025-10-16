import { Metadata } from 'next';
 import ContactModal from'./ContactModal';

export const metadata: Metadata = {
  title: 'Зв\'язатися з нами - Форма контактів',
  description: 'Заповніть контактну форму для отримання персональної консультації з створення вірусних відео. Вкажіть ваші дані для зв\'язку через Telegram або email.',
  keywords: 'контактна форма, зв\'язатися, консультація, вірусні відео, Telegram, email, персональна допомога',
  
  openGraph: {
    title: 'Зв\'язатися з нами - Форма контактів',
    description: 'Заповніть контактну форму для отримання персональної консультації з створення вірусних відео. Вкажіть ваші дані для зв\'язку через Telegram або email.',
  }
}

export default function Page() {
  return <ContactModal />
}