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
        <div
          className="absolute top-[147px] left-[56px] w-[54%] h-[466px] rounded-[18px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/img_image_2.png)' }}
        />
        <div className="absolute top-[889px] right-[22px] w-[30%] h-[346px] bg-[#a75df3] rounded-[184px] shadow-[0px_4px_577px_#888888ff]" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 lg:px-8 mt-[100px] md:mt-[120px] lg:mt-[150px]">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex flex-col items-end text-right">
                  <p
                    className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[18px] sm:leading-[19px] md:leading-[21px] text-white mb-6 sm:mb-8 md:mb-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[460px]"
                    style={{ fontFamily: 'Raleway' }}
                  >
                    Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ до
                    створення вірусного контенту та перетворите свої ідеї на мільйонні перегляди.
                  </p>

                  <h2
                    className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-white mb-3 sm:mb-4"
                    style={{
                      fontFamily: 'Raleway',
                      background: 'linear-gradient(150deg, #8fe7ff 0%, #e3a0ff 50%, #e56f8c 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Від 0 до 100,000 за 90 днів
                  </h2>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h1
                  className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-extrabold leading-[56px] sm:leading-[72px] md:leading-[96px] lg:leading-[112px] text-white uppercase mb-4 sm:mb-6 md:mb-10"
                  style={{ fontFamily: 'Raleway' }}
                >
                  Секрети вірусних відео
                </h1>

                <div className="flex flex-col items-start gap-2 sm:gap-3">
                  <Button
                    text="Придбати зі знижкою"
                    text_font_size="text-[16px] sm:text-[18px] md:text-[22px]"
                    text_font_family="Raleway"
                    text_font_weight="font-semibold"
                    text_line_height="leading-[20px] sm:leading-[22px] md:leading-[26px]"
                    text_color="text-black"
                    fill_background_color="#ffffff"
                    border_border_radius="rounded-[36px]"
                    padding="t=16px,r=60px,b=16px,l=28px"
                    effect_box_shadow="4px 6px 10px #a75df333"
                    layout_gap="34px"
                    onClick={handleDiscountPurchase}
                    className="shadow-[4px_6px_10px_#a75df333]"
                  />

                  <div className="flex items-end gap-4 sm:gap-5">
                    <span
                      className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[24px] sm:leading-[26px] md:leading-[29px] text-[#ff4a76]"
                      style={{ fontFamily: 'Raleway' }}
                    >
                      1000 грн
                    </span>
                    <span
                      className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-[15px] sm:leading-[16px] md:leading-[17px] text-[#c5c5c5] line-through"
                      style={{ fontFamily: 'Raleway' }}
                    >
                      2000грн
                    </span>
                  </div>
                </div>
              </div>
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
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Border gradients */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)',
            }}
          />

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
