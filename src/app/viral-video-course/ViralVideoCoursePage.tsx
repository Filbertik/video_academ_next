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
    console.log('Purchase clicked:', tierId);
  };

  const handleDiscountPurchase = () => {
    console.log('Discount purchase clicked');
  };

  return (
    <div className="min-h-screen bg-[#0b0117] relative overflow-hidden">
      {/* Фонова декоративна пляма */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-[889px] right-[22px] w-[30%] h-[346px] bg-[#a75df3] rounded-[184px] shadow-[0px_4px_577px_#888888ff]" />
      </div> */}

      {/* Хедер */}
      <Header />

      {/* Основний контент */}
      <main className="relative z-10">
        {/* Hero Section */}
        {/* <section className="w-full px-4 sm:px-6 lg:px-8 mt-[100px] md:mt-[120px] lg:mt-[150px]"> */}
        <section
          className="w-full px-4 sm:px-6 lg:px-8 
             mt-[24px] lg:mt-[67px]" // мобілка 24px, десктоп 67px
        >
          {/* <div className="flex flex-col lg:flex-row items-start justify-between max-w-[1440px] mx-auto gap-8"> */}
          <div className="relative flex flex-col lg:flex-row items-start justify-between max-w-[1120px] mx-auto gap-8 lg:gap-[60px]">
            {/* Ліва колонка */}
            <div className="relative w-full lg:w-1/2 flex flex-col items-start gap-6 z-10">
              <div className="relative w-[644px] h-[466px] -mr-[120px] z-10">
                <img
                  src="/images/img_image_2.png"
                  alt="Hero image"
                  className="absolute top-0 left-0 w-[644px] h-[466px] object-cover rounded-[18px] z-10"
                  style={{
                    transform: 'translateX(1px)', // зсув вправо
                  }}
                />
              </div>

              <div className="w-[534px] flex flex-col items-center gap-3 z-20">
                <div className="relative flex items-center justify-center w-full">
                  <button
                    onClick={handleDiscountPurchase}
                    className="w-full h-[74px] rounded-[18419px] bg-white shadow-[inset_7px_11px_18px_rgba(167,93,243,0.2)] flex items-center justify-center text-black font-semibold text-[18px]"
                  >
                    Придбати зі знижкою
                  </button>

                  <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-[74px] h-[74px] bg-[#ff4a77] rounded-[37px] flex items-center justify-center text-white font-bold text-[18px]">
                    -50%
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span
                    className="font-semibold text-[24px] leading-[154%]"
                    style={{
                      fontFamily: 'var(--font-family)',
                      color: '#ff4a77',
                    }}
                  >
                    1000 грн
                  </span>
                  <span
                    className="font-semibold text-[14px] leading-[263%] line-through"
                    style={{
                      fontFamily: 'var(--font-family)',
                      color: '#c5c5c5',
                    }}
                  >
                    1200 грн
                  </span>
                </div>
              </div>
            </div>

            {/* Права колонка */}
            <div className="relative w-[396px] flex flex-col gap-4 z-20  mt-[84px]">
              <p className="text-[18px] font-normal text-white" style={{ fontFamily: 'Raleway' }}>
                Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ до створення
                вірусного контенту та перетворите свої ідеї на мільйонні перегляди.
              </p>

              <h2
                className="text-[32px] font-bold w-[570px] relative -left-[130px]"
                style={{
                  fontFamily: 'Raleway',
                  background:
                    'linear-gradient(151deg, #90e8ff 0%, #9c9eff 40.3%, #e3a1ff 79.87%, #e56f8c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Від 0 до 100,000 за 90 днів
              </h2>

              <h1
                className="relative font-extrabold uppercase text-white leading-[1.1] w-[70px] -left-[130px]"
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: 800,
                  fontSize: '96px',
                }}
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

            {/* 🔹 ЗМІНИ: додано items-stretch щоб колонки мали однакову висоту */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-[20px] items-stretch">
              {pricingTiers.map((tier, index) => (
                // 🔹 ЗМІНИ: використано flex layout із minHeight, щоб уникнути "вилазіння" кнопки
                // <div
                //   key={tier.id}
                //   className={`relative flex flex-col justify-between rounded-[28px] shadow-[4px_6px_10px_#a75df333]
                //     ${
                //       tier.isPopular
                //         ? 'bg-white'
                //         : tier.isExpert
                //           ? 'bg-gradient-to-r from-[#5adafc] via-[#df93ff] to-[#e56f8c]'
                //           : 'bg-[#0c0117]'
                //     }`}
                //   style={{ minHeight: '465px' }}
                // >

                // 🔹 ЗМІНА: оновлено градієнт для третьої картки (isExpert)
                <div
                  key={tier.id}
                  className={`relative flex flex-col justify-between rounded-[28px] shadow-[4px_6px_10px_#a75df333] 
                    ${
                      tier.isPopular
                        ? 'bg-white'
                        : tier.isExpert
                          ? 'bg-[linear-gradient(121deg,_#5bdbfd_0%,_#7375ff_60.3%,_#df93ff_99.87%,_#e56f8c_100%)]' // 🔹 ЗМІНА: точний градієнт як у ТЗ
                          : 'bg-[#0c0117]'
                    }`}
                  style={{ minHeight: '465px' }}
                  // style={{
                  //   width: '360px', // 🔹 ЗМІНА
                  //   height: '466px', // 🔹 ЗМІНА
                  //   borderRadius: '28px', // 🔹 ЗМІНА
                  // }}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Button
                        text="Best seller"
                        text_font_size="text-base"
                        text_font_family="Raleway"
                        text_font_weight="font-bold"
                        text_color="text-white"
                        fill_background="linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)"
                        border_border_radius="rounded-[18px]"
                        padding="t=10px,r=32px,b=10px,l=32px"
                        effect_box_shadow="0 4px 16px 1px rgba(0, 0, 0, 0.25)"
                        className="uppercase text-sm w-[169px] h-[42px]"
                      />
                    </div>
                  )}

                  {/* 🔹 ЗМІНИ: вирівнювання контенту всередині картки */}
                  <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-[18px]">
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
                            text_font_size="text-[16px]"
                            text_font_family="Raleway"
                            text_font_weight="font-bold"
                            // text_transform="uppercase"
                            border_border_radius="rounded-[30px]"
                            padding="t=10px,r=34px,b=10px,l=34px"
                            // Жорсткий клас — щоб компонент не намагався "додати" градієнт
                            className={`uppercase  w-[119px] h-[42px] rounded-[30px] flex items-center justify-center uppercase text-[16px] font-bold ${
                              tier.isPopular ? 'bg-[#0c0117] text-white' : 'bg-white text-[#0c0117]'
                            }`}
                            // Забираємо inline-градієнт зі стилю — усе через класи вище
                            style={{}}
                          />
                          // <Button
                          //   text={tier.isPopular ? 'Pro' : 'Expert'}
                          //   text_font_size="text-[16px]"
                          //   text_font_family="Raleway"
                          //   text_font_weight="font-bold"
                          //   border_border_radius="rounded-[30px]"
                          //   padding="t=10px,r=34px,b=10px,l=34px"
                          //   className={`uppercase w-[119px] h-[42px] rounded-[30px] flex items-center justify-center ${
                          //     tier.isPopular ? 'bg-[#0c0117] text-white' : 'bg-white text-[#0c0117]'
                          //   }`}
                          // />
                        )}
                      </div>

                      <div className="flex items-center gap-4 mb-[29px]">
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

                      <div className="mb-6 sm:mb-8">
                        <ul className="space-y-2 sm:space-y-3">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 sm:gap-3">
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
                    </div>

                    {/* 🔹 ЗМІНИ: закріпили кнопку так, щоб вона була на одному рівні по низу */}
                    <div className="pt-[26px] sm:pt-[32px] mt-auto flex justify-center">
                      <Button
                        text={tier.buttonText}
                        text_font_size="text-base"
                        text_font_family="Manrope"
                        text_font_weight="font-semibold"
                        text_line_height="leading-xl"
                        border_border_radius="rounded-[52px]"
                        padding="t=16px,r=63px,b=16px,l=63px"
                        className={`w-[287px] h-[57px] rounded-[52px] font-semibold text-[16px] uppercase flex items-center justify-center
    ${tier.buttonStyle === 'white' ? '!bg-white !text-[#0c0117]' : '!bg-[#0c0117] !text-white'}`}
                        style={{
                          background: tier.buttonStyle === 'white' ? '#ffffff' : '#0c0117',
                          color: tier.buttonStyle === 'white' ? '#0c0117' : '#ffffff',
                          backgroundImage: 'none', // знімає градієнт
                        }}
                        onClick={() => handlePurchaseClick(tier.id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Нижній CTA блок */}
        {/* <section className="w-full mt-[120px] md:mt-[160px] lg:mt-[200px] relative"> */}
        <section
          className="w-full relative mt-[120px] md:mt-[160px] lg:mt-[200px] mb-[59px]"
          style={{
            maxWidth: '1280px',
            height: '488px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {/* 🔹 Підложка (реальне розмиття фону) */}
          {/* <div className="absolute inset-0 flex justify-center items-center z-[1]"> */}
          <div className="absolute inset-0 flex justify-center items-center z-[1] overflow-hidden">
            <div
              className="rounded-full"
              style={{
                width: '712px',
                // width: '488px',
                height: '488px',
                // height: '1280px',
                backgroundColor: 'rgba(12, 1, 23, 0.85)',
                filter: 'blur(100px)',
                backdropFilter: 'blur(60px)',
                WebkitBackdropFilter: 'blur(60px)',
                borderRadius: '50%',
              }}
            />
          </div>
          {/* 🔹 Підложка (розмита еліптична форма) */}
          {/* <div className="absolute inset-0 flex justify-center items-center z-0">
            <svg
              width="1280"
              height="488"
              viewBox="0 0 1280 488"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g filter="url(#filter0_f)">
                <ellipse cx="640" cy="244" rx="356" ry="743" fill="#0C0117" />
              </g>
              <defs>
                <filter
                  id="filter0_f"
                  x="-51.2"
                  y="-834.2"
                  width="1382.4"
                  height="2156.4"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="167.6" result="effect1_foregroundBlur" />
                </filter>
              </defs>
            </svg>
          </div> */}

          {/* 🔹 Фон правий градієнт */}
          <div className="absolute inset-0">
            <div
              className="absolute top-0 right-0"
              style={{
                width: '608px',
                height: '488px',
                background:
                  'linear-gradient(124deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)',
              }}
            />
            {/* Ліве зображення */}
            <div className="absolute left-0 bottom-0">
              <img
                src="/images/img_unsplash_a64viljbv9q.png"
                alt="Content creator"
                width={498}
                height={488}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 🔹 Горизонтальні градієнтні лінії */}
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

          {/* 🔹 Контент поверх підложки */}
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

          {/* 🔹 Нижня пульсуюча смуга */}

          {/* 🔹 Нижня пульсуюча смуга */}
          <div className="absolute inset-0 overflow-hidden z-[5] pointer-events-none">
            <div
              className="absolute bg-gradient-to-r from-[#5adafc] via-[#df93ff] to-[#e56f8c] animate-pulse flex items-center justify-center"
              style={{
                width: '1547px',
                height: '97px',
                filter: 'blur(1.73px)',
                transform: 'rotate(-36deg)',
                transformOrigin: 'center',
                left: '50%',
                bottom: '-160px', // зміщуємо вниз у межах секції
                translate: '-40%', // центрування по горизонталі
                background: 'linear-gradient(121deg, #5bdbfd 0%, #7375ff 98%, #df93ff 100%)',
              }}
            >
              <div className="flex items-center gap-8 whitespace-nowrap px-8">
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[38px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секрети вірусних відео
                </span>
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[39px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секреты вирусных видео
                </span>
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[38px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секрети вірусних відео
                </span>
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 overflow-visible z-[5] pointer-events-none">
            <div
              className="absolute bg-gradient-to-r from-[#5adafc] via-[#df93ff] to-[#e56f8c] animate-pulse flex items-center justify-center"
              style={{
                width: '1547px',
                height: '97px',
                filter: 'blur(1.73px)',
                // transform: 'rotate(136deg)',
                transform: 'rotate(-36deg)',
                transformOrigin: 'center',
                right: '-300px', // відступ праворуч, щоб була у полі зору
                bottom: '-250px', // підніми/опусти, якщо треба
              }}
            >
              <div className="flex items-center gap-8 whitespace-nowrap px-8">
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[38px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секреты вирусных видео
                </span>
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[39px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секрети вірусних відео
                </span>
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[38px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секреты вирусных видео
                </span>
              </div>
            </div>
          </div> */}
          {/* <div className="absolute bottom-0 left-0 right-100 overflow-hidden">
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
                  Секрети вірусних відео
                </span>
                <span
                  className="text-[28px] sm:text-[32px] md:text-[34px] font-bold leading-[32px] sm:leading-[36px] md:leading-[38px] text-white uppercase"
                  style={{ fontFamily: 'Sansation' }}
                >
                  Секреты вирусных видео
                </span>
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}
