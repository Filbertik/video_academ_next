'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-button-primary-background text-button-primary-text hover:opacity-90 focus:ring-primary-background',
        secondary: 'bg-button-secondary-background text-button-secondary-text border border-button-border hover:bg-gray-50 focus:ring-primary-background',
        outline: 'border-2 border-button-border text-button-border bg-transparent hover:bg-button-border hover:text-white focus:ring-primary-background',
        gradient: 'bg-gradient-to-r from-[#5adafc] via-[#df93ff] to-[#e56f8c] text-white hover:opacity-90 focus:ring-primary-background',
      },
      size: {
        small: 'text-xs px-3 py-1.5',
        medium: 'text-sm px-4 py-2',
        large: 'text-base px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background?: string;
  border_border_radius?: string;
  
  // Optional parameters
  fill_background_color?: string;
  border_border?: string;
  border_border_image?: string;
  effect_box_shadow?: string;
  text_text_transform?: string;
  text_background?: string;
  layout_width?: string;
  padding?: string;
  position?: string;
  layout_gap?: string;
  margin?: string;
  
  // Standard React props
  children?: ReactNode;
}

const Button = ({
  // Required parameters with defaults
  text = "Придбати зі знижкою",
  text_font_size = "text-xs",
  text_font_family = "Raleway",
  text_font_weight = "font-semibold",
  text_line_height = "leading-xs",
  text_text_align = "left",
  text_color = "text-text-white",
  fill_background = "linear-gradient(84deg, #5adafc 0%, #df93ff 50%, #e56f8c 100%)",
  border_border_radius = "rounded-2xl",
  
  // Optional parameters (no defaults)
  fill_background_color,
  border_border,
  border_border_image,
  effect_box_shadow,
  text_text_transform,
  text_background,
  layout_width,
  padding,
  position,
  layout_gap,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''
  const hasValidBoxShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow.trim() !== ''
  const hasValidTextTransform = text_text_transform && typeof text_text_transform === 'string' && text_text_transform.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
    hasValidBoxShadow ? `shadow-[${effect_box_shadow}]` : '',
    hasValidTextTransform ? text_text_transform : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
    ...(fill_background && fill_background.includes('gradient') && { background: fill_background }),
    ...(fill_background_color && { backgroundColor: fill_background_color }),
    ...(text_background && { background: text_background }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_color,
    border_border_radius,
    // Only apply background if not using variant system and no gradient
    !variant && !fill_background?.includes('gradient') ? fill_background_color : '',
  ].filter(Boolean).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant: variant || (fill_background?.includes('gradient') ? 'gradient' : 'primary'), size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button