'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, forwardRef, CSSProperties } from 'react';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-input-background text-input-text border border-input-border',
        filled: 'bg-gray-100 text-gray-900 border border-gray-300',
        outlined: 'bg-transparent text-gray-900 border-2 border-gray-300',
      },
      size: {
        small: 'text-sm px-3 py-2',
        medium: 'text-sm px-4 py-3',
        large: 'text-base px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

interface EditTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof editTextClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border_radius?: string;
  effect_box_shadow?: string;
  
  // Optional parameters
  layout_width?: string;
  padding?: string;
  position?: string;
  
  // Additional props
  error?: boolean;
  helperText?: string;
  label?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults
  placeholder = "Ім'я",
  text_font_size = "text-sm",
  text_font_family = "Raleway",
  text_font_weight = "font-normal",
  text_line_height = "leading-sm",
  text_text_align = "left",
  text_color = "text-primary-dark",
  fill_background_color = "bg-background-card",
  border_border_radius = "rounded-lg",
  effect_box_shadow = "0px 10px 78px #7979791e",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Additional props
  error = false,
  helperText,
  label,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  type = 'text',
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
    error ? 'border-red-500 focus:ring-red-500' : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
    ...(effect_box_shadow && { boxShadow: effect_box_shadow }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_color,
    fill_background_color,
    border_border_radius,
    effect_box_shadow ? `shadow-[${effect_box_shadow}]` : '',
  ].filter(Boolean).join(' ')

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        style={customStyles}
        className={twMerge(
          editTextClasses({ variant, size }),
          styleClasses,
          optionalClasses,
          className
        )}
        aria-invalid={error}
        aria-describedby={helperText ? `${props.id}-helper` : undefined}
        {...props}
      />
      {helperText && (
        <p 
          id={`${props.id}-helper`}
          className={`mt-1 text-xs ${error ? 'text-red-500' : 'text-gray-500'}`}
        >
          {helperText}
        </p>
      )}
    </div>
  )
})

EditText.displayName = 'EditText'

export default EditText