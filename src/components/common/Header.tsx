'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: 'Структура', href: '#structure' },
    { text: 'Про мене', href: '#about' },
    { text: 'Плюси', href: '#benefits' },
    { text: 'Відгуки', href: '#reviews' },
    { text: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`w-full ${className}`}>
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px] lg:mt-[40px]">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0 lg:mr-[159px]">
            <img
              src="/images/img_header_logo.png"
              alt="Viral Video Academy Logo"
              width={200}
              height={24}
              className="w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[57px]">
            <nav className="flex items-center gap-[28px] w-[409px] h-[19px]">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[16px] font-medium text-text-white hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                  style={{ fontFamily: 'Raleway', lineHeight: '19px' }}
                >
                  {item.text}
                </a>
              ))}
            </nav>

            <Dropdown
              placeholder="UA"
              text_font_size="text-base"
              text_font_family="Raleway"
              text_font_weight="font-bold"
              text_line_height="leading-base"
              text_text_align="left"
              text_color="text-text-white"
              layout_gap="8px"
              padding="t=2px,b=2px,l=12px"
              rightImage={{
                src: '/images/img_arrowdown_white_a700.svg',
                width: 16,
                height: 16,
              }}
            />

            <Button
              text="Придбати зі знижкою"
              text_font_size="text-sm"
              text_font_family="Raleway"
              text_font_weight="font-semibold"
              text_line_height="leading-none"
              text_text_align="center"
              text_color="text-white"
              fill_background="linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)"
              border_border_radius="rounded-full"
              padding="t=0px,r=16px,b=0px,l=16px"
              variant="gradient"
              className="w-[190px] h-[40px] rounded-full px-4 text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_10px_rgba(223,147,255,0.6)]"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 pb-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200 py-2"
                style={{ fontFamily: 'Raleway' }}
                onClick={() => setMenuOpen(false)}
              >
                {item.text}
              </a>
            ))}

            <div className="flex items-center justify-between pt-4 border-t border-gray-600">
              <Dropdown
                placeholder="UA"
                text_font_size="text-base"
                text_font_family="Raleway"
                text_font_weight="font-bold"
                text_line_height="leading-base"
                text_text_align="left"
                text_color="text-text-white"
                layout_gap="8px"
                padding="t=2px,b=2px,l=12px"
                rightImage={{
                  src: '/images/img_arrowdown_white_a700.svg',
                  width: 16,
                  height: 16,
                }}
              />

              <Button
                text="Придбати зі знижкою"
                text_font_size="text-xs"
                text_font_family="Raleway"
                text_font_weight="font-semibold"
                text_line_height="leading-none"
                text_text_align="center"
                text_color="text-white"
                fill_background="linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)"
                border_border_radius="rounded-full"
                padding="t=0px,r=16px,b=0px,l=16px"
                variant="gradient"
                className="w-[190px] h-[40px] rounded-full px-4 text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_10px_rgba(223,147,255,0.6)]"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

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

// // 'use client';
// // import { useState } from 'react';
// // import Button from '../ui/Button';
// // import Dropdown from '../ui/Dropdown';

// // interface HeaderProps {
// //   className?: string;
// // }

// // const Header = ({ className = '' }: HeaderProps) => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const menuItems = [
// //     { text: 'Структура', href: '#structure' },
// //     { text: 'Про мене', href: '#about' },
// //     { text: 'Плюси', href: '#benefits' },
// //     { text: 'Відгуки', href: '#reviews' },
// //     { text: 'FAQ', href: '#faq' },
// //   ];

// //   return (
// //     <header className={`w-full ${className}`}>
// //       <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px] lg:mt-[40px]">
// //         <div className="flex justify-between items-center w-full">
// //           {/* Logo */}
// //           <div className="flex-shrink-0 lg:mr-[159px]">
// //             <img
// //               src="/images/img_header_logo.png"
// //               alt="Viral Video Academy Logo"
// //               width={200}
// //               height={24}
// //               className="w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
// //             />
// //           </div>

// //           {/* Desktop group: nav + lang selector + CTA (gap 57px) */}
// //           <div className="hidden lg:flex items-center gap-[57px]">
// //             {/* Navigation */}
// //             <nav className="flex items-center gap-[14px] md:gap-[20px] lg:gap-[28px]">
// //               {menuItems.map((item, index) => (
// //                 <a
// //                   key={index}
// //                   href={item.href}
// //                   className="text-sm md:text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200"
// //                   style={{ fontFamily: 'Raleway' }}
// //                 >
// //                   {item.text}
// //                 </a>
// //               ))}
// //             </nav>

// //             {/* Language selector */}
// //             <div className="flex items-center">
// //               <Dropdown
// //                 placeholder="UA"
// //                 text_font_size="text-base"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-bold"
// //                 text_line_height="leading-base"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 layout_gap="8px"
// //                 padding="t=2px,b=2px,l=12px"
// //                 rightImage={{
// //                   src: '/images/img_arrowdown_white_a700.svg',
// //                   width: 16,
// //                   height: 16,
// //                 }}
// //               />
// //             </div>

// //             {/* CTA Button */}
// //             <div className="flex items-center">
// //               <Button
// //                 text="Придбати зі знижкою"
// //                 text_font_size="text-xs"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-semibold"
// //                 text_line_height="leading-xs"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
// //                 border_border_radius="rounded-2xl"
// //                 padding="t=10px,r=30px,b=10px,l=30px"
// //                 variant="gradient"
// //               />
// //             </div>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200"
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             aria-label="Toggle menu"
// //             aria-expanded={menuOpen}
// //           >
// //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               {menuOpen ? (
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M6 18L18 6M6 6l12 12"
// //                 />
// //               ) : (
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M4 6h16M4 12h16M4 18h16"
// //                 />
// //               )}
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         <nav className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
// //           <div className="flex flex-col space-y-4 pb-4">
// //             {menuItems.map((item, index) => (
// //               <a
// //                 key={index}
// //                 href={item.href}
// //                 className="text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200 py-2"
// //                 style={{ fontFamily: 'Raleway' }}
// //                 onClick={() => setMenuOpen(false)}
// //               >
// //                 {item.text}
// //               </a>
// //             ))}

// //             <div className="flex items-center justify-between pt-4 border-t border-gray-600">
// //               <Dropdown
// //                 placeholder="UA"
// //                 text_font_size="text-base"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-bold"
// //                 text_line_height="leading-base"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 layout_gap="8px"
// //                 padding="t=2px,b=2px,l=12px"
// //                 rightImage={{
// //                   src: '/images/img_arrowdown_white_a700.svg',
// //                   width: 16,
// //                   height: 16,
// //                 }}
// //               />

// //               <Button
// //                 text="Придбати зі знижкою"
// //                 text_font_size="text-xs"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-semibold"
// //                 text_line_height="leading-xs"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
// //                 border_border_radius="rounded-2xl"
// //                 padding="t=8px,r=20px,b=8px,l=20px"
// //                 variant="gradient"
// //                 className="text-xs"
// //               />
// //             </div>
// //           </div>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

// // 'use client';
// // import { useState } from 'react';
// // import Button from '../ui/Button';
// // import Dropdown from '../ui/Dropdown';

// // interface HeaderProps {
// //   className?: string;
// // }

// // const Header = ({ className = '' }: HeaderProps) => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const menuItems = [
// //     { text: 'Структура', href: '#structure' },
// //     { text: 'Про мене', href: '#about' },
// //     { text: 'Плюси', href: '#benefits' },
// //     { text: 'Відгуки', href: '#reviews' },
// //     { text: 'FAQ', href: '#faq' },
// //   ];

// //   return (
// //     <header className={`w-full ${className}`}>
// //       <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px] lg:mt-[40px]">
// //         <div className="flex justify-between items-center w-full">
// //           {/* Logo */}
// //           <div className="flex-shrink-0 lg:mr-[159px]">
// //             <img
// //               src="/images/img_header_logo.png"
// //               alt="Viral Video Academy Logo"
// //               width={200}
// //               height={24}
// //               className="w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
// //             />
// //           </div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center justify-between w-[68%]">
// //             <nav className="flex items-center gap-[14px] md:gap-[20px] lg:gap-[28px]">
// //               {menuItems.map((item, index) => (
// //                 <a
// //                   key={index}
// //                   href={item.href}
// //                   className="text-sm md:text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200"
// //                   style={{ fontFamily: 'Raleway' }}
// //                 >
// //                   {item.text}
// //                 </a>
// //               ))}
// //             </nav>

// //             <div className="flex items-center gap-4">
// //               <Dropdown
// //                 placeholder="UA"
// //                 text_font_size="text-base"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-bold"
// //                 text_line_height="leading-base"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 layout_gap="8px"
// //                 padding="t=2px,b=2px,l=12px"
// //                 rightImage={{
// //                   src: '/images/img_arrowdown_white_a700.svg',
// //                   width: 16,
// //                   height: 16,
// //                 }}
// //               />
// //             </div>
// //           </div>

// //           {/* CTA Button - Desktop */}
// //           <div className="hidden lg:block">
// //             <Button
// //               text="Придбати зі знижкою"
// //               text_font_size="text-xs"
// //               text_font_family="Raleway"
// //               text_font_weight="font-semibold"
// //               text_line_height="leading-xs"
// //               text_text_align="left"
// //               text_color="text-text-white"
// //               fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
// //               border_border_radius="rounded-2xl"
// //               padding="t=10px,r=30px,b=10px,l=30px"
// //               variant="gradient"
// //             />
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200"
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             aria-label="Toggle menu"
// //             aria-expanded={menuOpen}
// //           >
// //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               {menuOpen ? (
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M6 18L18 6M6 6l12 12"
// //                 />
// //               ) : (
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M4 6h16M4 12h16M4 18h16"
// //                 />
// //               )}
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         <nav className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
// //           <div className="flex flex-col space-y-4 pb-4">
// //             {menuItems.map((item, index) => (
// //               <a
// //                 key={index}
// //                 href={item.href}
// //                 className="text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200 py-2"
// //                 style={{ fontFamily: 'Raleway' }}
// //                 onClick={() => setMenuOpen(false)}
// //               >
// //                 {item.text}
// //               </a>
// //             ))}

// //             <div className="flex items-center justify-between pt-4 border-t border-gray-600">
// //               <Dropdown
// //                 placeholder="UA"
// //                 text_font_size="text-base"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-bold"
// //                 text_line_height="leading-base"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 layout_gap="8px"
// //                 padding="t=2px,b=2px,l=12px"
// //                 rightImage={{
// //                   src: '/images/img_arrowdown_white_a700.svg',
// //                   width: 16,
// //                   height: 16,
// //                 }}
// //               />

// //               <Button
// //                 text="Придбати зі знижкою"
// //                 text_font_size="text-xs"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-semibold"
// //                 text_line_height="leading-xs"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
// //                 border_border_radius="rounded-2xl"
// //                 padding="t=8px,r=20px,b=8px,l=20px"
// //                 variant="gradient"
// //                 className="text-xs"
// //               />
// //             </div>
// //           </div>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

// // 'use client';
// // import { useState } from 'react';
// // import Button from '../ui/Button';
// // import Dropdown from '../ui/Dropdown';

// // interface HeaderProps {
// //   className?: string;
// // }

// // const Header = ({ className = '' }: HeaderProps) => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const menuItems = [
// //     { text: 'Структура', href: '#structure' },
// //     { text: 'Про мене', href: '#about' },
// //     { text: 'Плюси', href: '#benefits' },
// //     { text: 'Відгуки', href: '#reviews' },
// //     { text: 'FAQ', href: '#faq' },
// //   ];

// //   return (
// //     <header className={`w-full ${className}`}>
// //       <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px] lg:mt-[40px]">
// //         <div className="flex justify-between items-center w-full">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <img
// //               src="/images/img_header_logo.png"
// //               alt="Viral Video Academy Logo"
// //               width={200}
// //               height={24}
// //               className="w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
// //             />
// //           </div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center justify-between w-[68%]">
// //             <nav className="flex items-center gap-[14px] md:gap-[20px] lg:gap-[28px]">
// //               {menuItems.map((item, index) => (
// //                 <a
// //                   key={index}
// //                   href={item.href}
// //                   className="text-sm md:text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200"
// //                   style={{ fontFamily: 'Raleway' }}
// //                 >
// //                   {item.text}
// //                 </a>
// //               ))}
// //             </nav>

// //             <div className="flex items-center gap-4">
// //               <Dropdown
// //                 placeholder="UA"
// //                 text_font_size="text-base"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-bold"
// //                 text_line_height="leading-base"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 layout_gap="8px"
// //                 padding="t=2px,b=2px,l=12px"
// //                 rightImage={{
// //                   src: '/images/img_arrowdown_white_a700.svg',
// //                   width: 16,
// //                   height: 16,
// //                 }}
// //               />
// //             </div>
// //           </div>

// //           {/* CTA Button - Desktop */}
// //           <div className="hidden lg:block">
// //             <Button
// //               text="Придбати зі знижкою"
// //               text_font_size="text-xs"
// //               text_font_family="Raleway"
// //               text_font_weight="font-semibold"
// //               text_line_height="leading-xs"
// //               text_text_align="left"
// //               text_color="text-text-white"
// //               fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
// //               border_border_radius="rounded-2xl"
// //               padding="t=10px,r=30px,b=10px,l=30px"
// //               variant="gradient"
// //             />
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200"
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             aria-label="Toggle menu"
// //             aria-expanded={menuOpen}
// //           >
// //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               {menuOpen ? (
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M6 18L18 6M6 6l12 12"
// //                 />
// //               ) : (
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M4 6h16M4 12h16M4 18h16"
// //                 />
// //               )}
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         <nav className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
// //           <div className="flex flex-col space-y-4 pb-4">
// //             {menuItems.map((item, index) => (
// //               <a
// //                 key={index}
// //                 href={item.href}
// //                 className="text-base font-medium leading-base text-text-white hover:text-gray-300 transition-colors duration-200 py-2"
// //                 style={{ fontFamily: 'Raleway' }}
// //                 onClick={() => setMenuOpen(false)}
// //               >
// //                 {item.text}
// //               </a>
// //             ))}

// //             <div className="flex items-center justify-between pt-4 border-t border-gray-600">
// //               <Dropdown
// //                 placeholder="UA"
// //                 text_font_size="text-base"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-bold"
// //                 text_line_height="leading-base"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 layout_gap="8px"
// //                 padding="t=2px,b=2px,l=12px"
// //                 rightImage={{
// //                   src: '/images/img_arrowdown_white_a700.svg',
// //                   width: 16,
// //                   height: 16,
// //                 }}
// //               />

// //               <Button
// //                 text="Придбати зі знижкою"
// //                 text_font_size="text-xs"
// //                 text_font_family="Raleway"
// //                 text_font_weight="font-semibold"
// //                 text_line_height="leading-xs"
// //                 text_text_align="left"
// //                 text_color="text-text-white"
// //                 fill_background="linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)"
// //                 border_border_radius="rounded-2xl"
// //                 padding="t=8px,r=20px,b=8px,l=20px"
// //                 variant="gradient"
// //                 className="text-xs"
// //               />
// //             </div>
// //           </div>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;
