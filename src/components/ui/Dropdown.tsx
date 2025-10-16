'use client';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface DropdownProps {
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  layout_gap?: string;
  padding?: string;
  rightImage?: {
    src: string;
    width: number;
    height: number;
  };
  className?: string;
}

const Dropdown = ({
  placeholder = "UA",
  text_font_size = "text-base",
  text_font_family = "Raleway",
  text_font_weight = "font-bold",
  text_line_height = "leading-base",
  text_text_align = "left",
  text_color = "text-text-white",
  layout_gap = "8px",
  padding = "t=2px,b=2px,l=12px",
  rightImage,
  className = ""
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(placeholder)

  const options = ['UA', 'EN', 'RU']

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  // Parse padding
  const parsePadding = (paddingStr: string) => {
    const parts = paddingStr.split(',')
    let classes = ''
    parts.forEach(part => {
      const [side, value] = part.split('=')
      const numValue = value.replace('px', '')
      switch(side) {
        case 't': classes += ` pt-[${numValue}px]`; break
        case 'b': classes += ` pb-[${numValue}px]`; break
        case 'l': classes += ` pl-[${numValue}px]`; break
        case 'r': classes += ` pr-[${numValue}px]`; break
      }
    })
    return classes
  }

  const paddingClasses = parsePadding(padding)
  const gapValue = layout_gap.replace('px', '')

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center ${paddingClasses} ${text_font_size} ${text_font_weight} ${text_line_height} ${text_color} hover:opacity-80 transition-opacity duration-200`}
        style={{ 
          fontFamily: text_font_family,
          gap: gapValue
        }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left'}>
          {selectedValue}
        </span>
        {rightImage ? (
          <img
            src={rightImage.src}
            alt="dropdown arrow"
            width={rightImage.width}
            height={rightImage.height}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        ) : (
          <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[60px]">
          <ul role="listbox" className="py-1">
            {options.map((option) => (
              <li key={option} role="option">
                <button
                  onClick={() => handleSelect(option)}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors duration-200 ${
                    selectedValue === option ? 'bg-gray-50 font-semibold' : ''
                  }`}
                  style={{ fontFamily: text_font_family }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown