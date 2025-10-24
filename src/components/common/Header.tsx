'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  features: string[];
  isPopular?: boolean;
  isExpert?: boolean;
  buttonText: string;
  buttonStyle: 'white' | 'dark';
}

export default function ViralVideoCoursePage() {
  const [discountPercentage, setDiscountPercentage] = useState<string>('');

  useEffect(() => {
    setDiscountPercentage('-50%');
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      id: 'basic',
      name: 'Базовий',
      price: '99 $',
      originalPrice: '139 $',
      features: ['Базовий курс', '38 уроків'],
      buttonText: 'Купити',
      buttonStyle: 'white',
    },
    {
      id: 'advanced',
      name: 'Продвинутий',
      price: '149 $',
      originalPrice: '199$',
      features: ['База', 'Додаткові уроки', '48 уроків', 'Чат-комюніті для творців контента'],
      isPopular: true,
      buttonText: 'Купити',
      buttonStyle: 'dark',
    },
    {
      id: 'expert',
      name: 'Експерт',
      price: '299 $',
      originalPrice: '500 $',
      features: [
        'Додаткові уроки',
        '48 уроків',
        'Чат-комюніті для творців контента',
        'Розбір вашої сторінки в форматі відеозвінка',
      ],
      isExpert: true,
      buttonText: 'Купити',
      buttonStyle: 'white',
    },
  ];

  const handlePurchaseClick = (tierId: string) => {
    // Handle purchase logic here
  };

  const handleDiscountPurchase = () => {
    // Handle discount purchase logic
  };

  return (
    <div className="min-h-screen bg-[#0b0117] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[889px] right-[22px] w-[30%] h-[346px] bg-[#a75df3] rounded-[184px] shadow-[0px_4px_577px_#888888ff]" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 lg:px-8 mt-[100px] md:mt-[120px] lg:mt-[150px]">
          <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left Block: Image + Button + Price */}
            <div className="relative w-full lg:w-[644px] flex flex-col items-start">
              <img
                src="/images/img_image_2.png"
                alt="Viral course"
                width={644}
                height={466}
                className="rounded-[18px] w-full h-auto"
              />

              {/* Button */}
              <div className="relative mt-6 w-full flex items-center">
                <Button
                  text="Придбати зі знижкою"
                  text_font_size="text-[18px] sm:text-[20px] md:text-[22px]"
                  text_font_family="Raleway"
                  text_font_weight="font-semibold"
                  text_color="text-black"
                  fill_background_color="#ffffff"
                  border_border_radius="rounded-[18419px]"
                  padding="t=0px,r=29px,b=0px,l=29px"
                  layout_width="w-[534px]"
                  layout_height="h-[74px]"
                  effect_box_shadow="inset 7px 11px 18px 7px rgba(167, 93, 243, 0.2)"
                  onClick={handleDiscountPurchase}
                />

                {/* Discount badge */}
                {discountPercentage && (
                  <div
                    className="absolute -top-2 -right-2 flex items-center justify-center text-white font-bold"
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '37px',
                      background: '#ff4a77',
                      fontSize: '18px',
                    }}
                  >
                    {discountPercentage}
                  </div>
                )}
              </div>

              {/* Prices */}
              <div className="flex items-center gap-4 mt-4">
                <span className="text-[20px] font-semibold text-[#ff4a76]">1000 грн</span>
                <span className="text-[20px] font-semibold text-[#c5c5c5] line-through">
                  2000 грн
                </span>
              </div>
            </div>

            {/* Right Block: Headings */}
            <div className="flex-1 flex flex-col gap-6">
              <p
                className="text-[18px] font-normal text-white"
                style={{ fontFamily: 'var(--font-family)' }}
              >
                Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ до створення
                вірусного контенту та перетворите свої ідеї на мільйонні перегляди.
              </p>

              <h2
                className="text-[32px] font-bold"
                style={{
                  fontFamily: 'var(--font-family)',
                  background:
                    'linear-gradient(151deg, #90e8ff 0%, #9c9eff 40.3%, #e3a1ff 79.87%, #e56f8c 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Від 0 до 100,000 за 90 днів
              </h2>

              <h1
                className="text-[96px] font-extrabold uppercase text-white leading-[100px]"
                style={{ fontFamily: 'var(--font-family)' }}
              >
                Секрети вірусних
                <br />
                відео
              </h1>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full px-4 sm:px-6 lg:px-8 mt-[120px] md:mt-[160px] lg:mt-[194px]">
          <div className="w-full max-w-[1120px] mx-auto">
            <h2
              className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[38px] sm:leading-[48px] md:leading-[57px] text-center text-white uppercase mb-8 sm:mb-10 md:mb-[44px]"
              style={{ fontFamily: 'Raleway' }}
            >
              Тарифи
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-[20px]">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.id}
                  className={`relative rounded-[28px] shadow-[4px_6px_10px_#a75df333] ${
                    tier.isPopular
                      ? 'bg-white'
                      : tier.isExpert
                        ? 'bg-gradient-to-r from-[#5adafc] via-[#df93ff] to-[#e56f8c]'
                        : 'bg-[#0c0117]'
                  } ${index === 0 ? 'mt-[30px]' : index === 2 ? 'mt-[30px]' : 'mt-[-12px]'}`}
                >
                  {/* Popular Badge */}
                  {tier.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Button
                        text="Best seller"
                        text_font_size="text-base"
                        text_font_family="Raleway"
                        text_font_weight="font-bold"
                        text_color="text-white"
                        fill_background="linear-gradient(120deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
                        border_border_radius="rounded-[18px]"
                        padding="t=10px,r=32px,b=10px,l=32px"
                        effect_box_shadow="0px 4px 16px #0000003f"
                        className="uppercase text-sm"
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-7 lg:p-8">
                    {/* Tier Header */}
                    <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-[18px] sm:text-[20px] font-semibold leading-[22px] sm:leading-[24px] uppercase ${
                            tier.isPopular ? 'text-[#0c0117]' : 'text-white'
                          }`}
                          style={{ fontFamily: 'Raleway' }}
                        >
                          {tier.name}
                        </h3>
                        {(tier.isPopular || tier.isExpert) && (
                          <Button
                            text={tier.isPopular ? 'Pro' : 'Expert'}
                            text_font_size="text-base"
                            text_font_family="Raleway"
                            text_font_weight="font-bold"
                            text_color={tier.isPopular ? 'text-white' : 'text-white'}
                            fill_background={tier.isPopular ? '#0c0117' : '#ffffff'}
                            border_border_radius="rounded-[20px]"
                            padding="t=10px,r=28px,b=10px,l=28px"
                            className="uppercase text-sm"
                            style={{
                              background: tier.isPopular
                                ? '#0c0117'
                                : 'linear-gradient(120deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)',
                            }}
                          />
                        )}
                      </div>

                      <div className="flex items-center gap-4 sm:gap-6">
                        <span
                          className={`text-[56px] sm:text-[64px] md:text-[74px] font-bold leading-[76px] sm:leading-[88px] md:leading-[102px] uppercase ${
                            tier.isPopular ? 'text-[#0c0117]' : 'text-white'
                          }`}
                          style={{ fontFamily: 'Manrope' }}
                        >
                          {tier.price}
                        </span>
                        <span
                          className={`text-[18px] sm:text-[20px] font-bold leading-[24px] sm:leading-[28px] uppercase line-through ${
                            tier.isPopular ? 'text-[#0c0117]' : 'text-white'
                          }`}
                          style={{ fontFamily: 'Manrope' }}
                        >
                          {tier.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6 sm:mb-8">
                      <ul className="space-y-2 sm:space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                            {featureIndex === 0 && tier.isPopular ? (
                              <div className="w-[14px] h-[14px] bg-[#0c0117] border border-[#0c0117] rounded-[6px]" />
                            ) : (
                              <img
                                src={
                                  tier.isPopular
                                    ? '/images/img_record_black_900_01.svg'
                                    : '/images/img_record.svg'
                                }
                                alt="feature"
                                width={20}
                                height={20}
                                className="flex-shrink-0"
                              />
                            )}
                            <span
                              className={`text-[14px] sm:text-[16px] font-semibold leading-[17px] sm:leading-[19px] uppercase ${
                                tier.isPopular ? 'text-[#0c0117]' : 'text-white'
                              }`}
                              style={{ fontFamily: 'Raleway' }}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      text={tier.buttonText}
                      text_font_size="text-base"
                      text_font_family="Manrope"
                      text_font_weight="font-semibold"
                      text_line_height="leading-xl"
                      text_color={tier.buttonStyle === 'white' ? 'text-[#0c0117]' : 'text-white'}
                      fill_background_color={tier.buttonStyle === 'white' ? '#ffffff' : '#0c0117'}
                      border_border_radius="rounded-[28px]"
                      padding="t=16px,r=34px,b=16px,l=34px"
                      layout_width="w-full"
                      onClick={() => handlePurchaseClick(tier.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="w-full mt-[120px] md:mt-[160px] lg:mt-[200px] relative">
          {/* Background with gradient and image */}
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 w-[48%] h-full bg-gradient-to-r from-[#5adafc] via-[#df93ff] to-[#e56f8c]" />
            <div className="absolute left-0 top-[117px] w-[32%] h-[488px]">
              <img
                src="/images/img_unsplash_a64viljbv9q.png"
                alt="Content creator"
                width={498}
                height={488}
                className="w-full h-full object-cover rounded-[18px]"
              />
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center min-h-[488px] px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[600px] text-center py-12 sm:py-16 lg:py-20">
              <div className="mb-8 sm:mb-10 lg:mb-[42px]">
                <h2
                  className="text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-[28px] sm:leading-[36px] md:leading-[42px] text-center text-white uppercase mb-4 sm:mb-5 lg:mb-[18px]"
                  style={{ fontFamily: 'Raleway' }}
                >
                  <span>Дізнайся як створити контент, який </span>
                  <span
                    style={{
                      background: 'linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    підкорює аудиторію
                  </span>
                </h2>

                <p
                  className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[22px] sm:leading-[24px] md:leading-[28px] text-center text-white"
                  style={{ fontFamily: 'Raleway' }}
                >
                  Матеріали, які мають змогу охопити тисячі людей
                </p>
              </div>

              <div className="relative">
                <Button
                  text="Придбати зі знижкою"
                  text_font_size="text-[18px] sm:text-[20px] md:text-[22px]"
                  text_font_family="Raleway"
                  text_font_weight="font-semibold"
                  text_line_height="leading-[22px] sm:leading-[24px] md:leading-[26px]"
                  text_color="text-white"
                  fill_background="linear-gradient(120deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
                  border_border_radius="rounded-[36px]"
                  padding="t=20px,r=90px,b=20px,l=34px"
                  effect_box_shadow="7px 11px 18px #a75df333"
                  layout_gap="34px"
                  onClick={handleDiscountPurchase}
                  className="shadow-[7px_11px_18px_#a75df333]"
                />

                {discountPercentage && (
                  <div className="absolute -top-2 -right-2 bg-[#ff4a76] text-white text-sm font-bold px-3 py-1 rounded-full">
                    {discountPercentage}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Scrolling text background */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <div
              className="flex items-center py-4 px-2 bg-gradient-to-r from-[#5adafc] via-[#df93ff] to-[#e56f8c] animate-pulse"
              style={{ transform: 'rotate(-15deg)', transformOrigin: 'center' }}
            >
              <div className="flex items-center gap-8 whitespace-nowrap">
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[32px] sm:leading-[36px] md:leading-[38px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секреты вирусных видео
                </span>
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[32px] sm:leading-[36px] md:leading-[39px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секрети вірсних відео
                </span>
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[32px] sm:leading-[36px] md:leading-[38px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секреты вирусных видео
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// 'use client';
// import { useState } from 'react';
// import Button from '../ui/Button';
// import Dropdown from '../ui/Dropdown';

// interface HeaderProps {
//   className?: string;
// }

// const Header = ({ className = '' }: HeaderProps) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { text: 'Структура', href: '#structure' },
//     { text: 'Про мене', href: '#about' },
//     { text: 'Плюси', href: '#benefits' },
//     { text: 'Відгуки', href: '#reviews' },
//     { text: 'FAQ', href: '#faq' },
//   ];

//   return (
//     <header className={`w-full ${className}`}>
//       <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px] lg:mt-[40px]">
//         <div className="flex justify-between items-center w-full">
//           {/* Logo */}
//           <div className="flex-shrink-0 lg:mr-[159px]">
//             <img
//               src="/images/img_header_logo.png"
//               alt="Viral Video Academy Logo"
//               width={200}
//               height={24}
//               className="w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
//             />
//           </div>

//           {/* Desktop group: nav + lang selector + CTA */}
//           <div className="hidden lg:flex items-center gap-[57px]">
//             {/* Navigation */}
//             <nav className="flex items-center gap-[28px] w-[409px] h-[19px]">
//               {menuItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="text-[16px] font-medium text-text-white hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
//                   style={{ fontFamily: 'Raleway', lineHeight: '19px' }}
//                 >
//                   {item.text}
//                 </a>
//               ))}
//             </nav>

//             {/* Language selector */}
//             <div className="flex items-center">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />
//             </div>

//             {/* CTA Button */}
//             <div className="flex items-center">
//               <Button
//                 text="Придбати зі знижкою"
//                 text_font_size="text-sm"
//                 text_font_family="Raleway"
//                 text_font_weight="font-semibold"
//                 text_line_height="leading-none"
//                 text_text_align="center"
//                 text_color="text-white"
//                 fill_background="linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)"
//                 border_border_radius="rounded-full"
//                 padding="t=0px,r=16px,b=0px,l=16px"
//                 variant="gradient"
//                 className="w-[190px] h-[40px] rounded-full px-4 text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_10px_rgba(223,147,255,0.6)]"
//               />
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <nav className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
//           <div className="flex flex-col space-y-4 pb-4">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200 py-2"
//                 style={{ fontFamily: 'Raleway' }}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.text}
//               </a>
//             ))}

//             <div className="flex items-center justify-between pt-4 border-t border-gray-600">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />

//               <Button
//                 text="Придбати зі знижкою"
//                 text_font_size="text-xs"
//                 text_font_family="Raleway"
//                 text_font_weight="font-semibold"
//                 text_line_height="leading-none"
//                 text_text_align="center"
//                 text_color="text-white"
//                 fill_background="linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)"
//                 border_border_radius="rounded-full"
//                 padding="t=0px,r=16px,b=0px,l=16px"
//                 variant="gradient"
//                 className="w-[190px] h-[40px] rounded-full px-4 text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_10px_rgba(223,147,255,0.6)]"
//               />
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// 'use client';
// import { useState } from 'react';
// import Button from '../ui/Button';
// import Dropdown from '../ui/Dropdown';

// interface HeaderProps {
//   className?: string;
// }

// const Header = ({ className = '' }: HeaderProps) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { text: 'Структура', href: '#structure' },
//     { text: 'Про мене', href: '#about' },
//     { text: 'Плюси', href: '#benefits' },
//     { text: 'Відгуки', href: '#reviews' },
//     { text: 'FAQ', href: '#faq' },
//   ];

//   return (
//     <header className={`w-full ${className}`}>
//       <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px] lg:mt-[40px]">
//         <div className="flex justify-between items-center w-full">
//           {/* Logo */}
//           <div className="flex-shrink-0 lg:mr-[159px]">
//             <img
//               src="/images/img_header_logo.png"
//               alt="Viral Video Academy Logo"
//               width={200}
//               height={24}
//               className="w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
//             />
//           </div>

//           {/* Desktop group: nav + lang selector + CTA */}
//           <div className="hidden lg:flex items-center gap-[57px]">
//             {/* Navigation */}
//             <nav className="flex items-center gap-[28px] w-[409px] h-[19px]">
//               {menuItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="text-[16px] font-medium text-text-white hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
//                   style={{ fontFamily: 'Raleway', lineHeight: '19px' }}
//                 >
//                   {item.text}
//                 </a>
//               ))}
//             </nav>

//             {/* Language selector */}
//             <div className="flex items-center">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />
//             </div>

//             {/* CTA Button */}
//             <div className="flex items-center">
//               <Button
//                 text="Придбати зі знижкою"
//                 text_font_size="text-sm"
//                 text_font_family="Raleway"
//                 text_font_weight="font-semibold"
//                 text_line_height="leading-none"
//                 text_text_align="center"
//                 text_color="text-white"
//                 fill_background="linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)"
//                 border_border_radius="rounded-full"
//                 padding="t=0px,r=16px,b=0px,l=16px"
//                 width="190px"
//                 height="40px"
//                 variant="gradient"
//                 className="w-[190px] h-[40px] rounded-full px-4 text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_10px_rgba(223,147,255,0.6)]"
//               />
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <nav className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
//           <div className="flex flex-col space-y-4 pb-4">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200 py-2"
//                 style={{ fontFamily: 'Raleway' }}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.text}
//               </a>
//             ))}

//             <div className="flex items-center justify-between pt-4 border-t border-gray-600">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />

//               <Button
//                 text="Придбати зі знижкою"
//                 text_font_size="text-xs"
//                 text_font_family="Raleway"
//                 text_font_weight="font-semibold"
//                 text_line_height="leading-none"
//                 text_text_align="center"
//                 text_color="text-white"
//                 fill_background="linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)"
//                 border_border_radius="rounded-full"
//                 padding="t=0px,r=16px,b=0px,l=16px"
//                 width="190px"
//                 height="40px"
//                 variant="gradient"
//                 className="w-[190px] h-[40px] rounded-full px-4 text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_10px_rgba(223,147,255,0.6)]"
//               />
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// 'use client';
// import { useState } from 'react';
// import Button from '../ui/Button';
// import Dropdown from '../ui/Dropdown';

// interface HeaderProps {
//   className?: string;
// }

// const Header = ({ className = '' }: HeaderProps) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { text: 'Структура', href: '#structure' },
//     { text: 'Про мене', href: '#about' },
//     { text: 'Плюси', href: '#benefits' },
//     { text: 'Відгуки', href: '#reviews' },
//     { text: 'FAQ', href: '#faq' },
//   ];

//   return (
//     <header className={`w-full ${className}`}>
//       <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px] lg:mt-[40px]">
//         <div className="flex justify-between items-center w-full">
//           {/* Logo */}
//           <div className="flex-shrink-0 lg:mr-[159px]">
//             <img
//               src="/images/img_header_logo.png"
//               alt="Viral Video Academy Logo"
//               width={200}
//               height={24}
//               className="w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
//             />
//           </div>

//           {/* Desktop group: nav + lang selector + CTA (gap 57px) */}
//           <div className="hidden lg:flex items-center gap-[57px]">
//             {/* Navigation */}
//             <nav className="flex items-center gap-[14px] md:gap-[20px] lg:gap-[28px]">
//               {menuItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="text-sm md:text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200"
//                   style={{ fontFamily: 'Raleway' }}
//                 >
//                   {item.text}
//                 </a>
//               ))}
//             </nav>

//             {/* Language selector */}
//             <div className="flex items-center">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />
//             </div>

//             {/* CTA Button */}
//             <div className="flex items-center">
//               <Button
//                 text="Придбати зі знижкою"
//                 text_font_size="text-xs"
//                 text_font_family="Raleway"
//                 text_font_weight="font-semibold"
//                 text_line_height="leading-xs"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
//                 border_border_radius="rounded-2xl"
//                 padding="t=10px,r=30px,b=10px,l=30px"
//                 variant="gradient"
//               />
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <nav className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
//           <div className="flex flex-col space-y-4 pb-4">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200 py-2"
//                 style={{ fontFamily: 'Raleway' }}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.text}
//               </a>
//             ))}

//             <div className="flex items-center justify-between pt-4 border-t border-gray-600">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />

//               <Button
//                 text="Придбати зі знижкою"
//                 text_font_size="text-xs"
//                 text_font_family="Raleway"
//                 text_font_weight="font-semibold"
//                 text_line_height="leading-xs"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
//                 border_border_radius="rounded-2xl"
//                 padding="t=8px,r=20px,b=8px,l=20px"
//                 variant="gradient"
//                 className="text-xs"
//               />
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// 'use client';
// import { useState } from 'react';
// import Button from '../ui/Button';
// import Dropdown from '../ui/Dropdown';

// interface HeaderProps {
//   className?: string;
// }

// const Header = ({ className = '' }: HeaderProps) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { text: 'Структура', href: '#structure' },
//     { text: 'Про мене', href: '#about' },
//     { text: 'Плюси', href: '#benefits' },
//     { text: 'Відгуки', href: '#reviews' },
//     { text: 'FAQ', href: '#faq' },
//   ];

//   return (
//     <header className={`w-full ${className}`}>
//       <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px] lg:mt-[40px]">
//         <div className="flex justify-between items-center w-full">
//           {/* Logo */}
//           <div className="flex-shrink-0 lg:mr-[159px]">
//             <img
//               src="/images/img_header_logo.png"
//               alt="Viral Video Academy Logo"
//               width={200}
//               height={24}
//               className="w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center justify-between w-[68%]">
//             <nav className="flex items-center gap-[14px] md:gap-[20px] lg:gap-[28px]">
//               {menuItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="text-sm md:text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200"
//                   style={{ fontFamily: 'Raleway' }}
//                 >
//                   {item.text}
//                 </a>
//               ))}
//             </nav>

//             <div className="flex items-center gap-4">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />
//             </div>
//           </div>

//           {/* CTA Button - Desktop */}
//           <div className="hidden lg:block">
//             <Button
//               text="Придбати зі знижкою"
//               text_font_size="text-xs"
//               text_font_family="Raleway"
//               text_font_weight="font-semibold"
//               text_line_height="leading-xs"
//               text_text_align="left"
//               text_color="text-text-white"
//               fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
//               border_border_radius="rounded-2xl"
//               padding="t=10px,r=30px,b=10px,l=30px"
//               variant="gradient"
//             />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <nav className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
//           <div className="flex flex-col space-y-4 pb-4">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200 py-2"
//                 style={{ fontFamily: 'Raleway' }}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.text}
//               </a>
//             ))}

//             <div className="flex items-center justify-between pt-4 border-t border-gray-600">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />

//               <Button
//                 text="Придбати зі знижкою"
//                 text_font_size="text-xs"
//                 text_font_family="Raleway"
//                 text_font_weight="font-semibold"
//                 text_line_height="leading-xs"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
//                 border_border_radius="rounded-2xl"
//                 padding="t=8px,r=20px,b=8px,l=20px"
//                 variant="gradient"
//                 className="text-xs"
//               />
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// 'use client';
// import { useState } from 'react';
// import Button from '../ui/Button';
// import Dropdown from '../ui/Dropdown';

// interface HeaderProps {
//   className?: string;
// }

// const Header = ({ className = '' }: HeaderProps) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { text: 'Структура', href: '#structure' },
//     { text: 'Про мене', href: '#about' },
//     { text: 'Плюси', href: '#benefits' },
//     { text: 'Відгуки', href: '#reviews' },
//     { text: 'FAQ', href: '#faq' },
//   ];

//   return (
//     <header className={`w-full ${className}`}>
//       <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px] lg:mt-[40px]">
//         <div className="flex justify-between items-center w-full">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img
//               src="/images/img_header_logo.png"
//               alt="Viral Video Academy Logo"
//               width={200}
//               height={24}
//               className="w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center justify-between w-[68%]">
//             <nav className="flex items-center gap-[14px] md:gap-[20px] lg:gap-[28px]">
//               {menuItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="text-sm md:text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200"
//                   style={{ fontFamily: 'Raleway' }}
//                 >
//                   {item.text}
//                 </a>
//               ))}
//             </nav>

//             <div className="flex items-center gap-4">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />
//             </div>
//           </div>

//           {/* CTA Button - Desktop */}
//           <div className="hidden lg:block">
//             <Button
//               text="Придбати зі знижкою"
//               text_font_size="text-xs"
//               text_font_family="Raleway"
//               text_font_weight="font-semibold"
//               text_line_height="leading-xs"
//               text_text_align="left"
//               text_color="text-text-white"
//               fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
//               border_border_radius="rounded-2xl"
//               padding="t=10px,r=30px,b=10px,l=30px"
//               variant="gradient"
//             />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <nav className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
//           <div className="flex flex-col space-y-4 pb-4">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200 py-2"
//                 style={{ fontFamily: 'Raleway' }}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.text}
//               </a>
//             ))}

//             <div className="flex items-center justify-between pt-4 border-t border-gray-600">
//               <Dropdown
//                 placeholder="UA"
//                 text_font_size="text-base"
//                 text_font_family="Raleway"
//                 text_font_weight="font-bold"
//                 text_line_height="leading-base"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 layout_gap="8px"
//                 padding="t=2px,b=2px,l=12px"
//                 rightImage={{
//                   src: '/images/img_arrowdown_white_a700.svg',
//                   width: 16,
//                   height: 16,
//                 }}
//               />

//               <Button
//                 text="Придбати зі знижкою"
//                 text_font_size="text-xs"
//                 text_font_family="Raleway"
//                 text_font_weight="font-semibold"
//                 text_line_height="leading-xs"
//                 text_text_align="left"
//                 text_color="text-text-white"
//                 fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
//                 border_border_radius="rounded-2xl"
//                 padding="t=8px,r=20px,b=8px,l=20px"
//                 variant="gradient"
//                 className="text-xs"
//               />
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
