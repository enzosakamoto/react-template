import { ComponentProps } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md',
  variants: {
    color: {
      default: 'bg-blue-600 hover:bg-blue-700',
      primary: 'bg-green-600 hover:bg-green-700',
      secondary: 'bg-red-600 hover:bg-red-700'
    }
  },
  defaultVariants: {
    color: 'default'
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ color, className, ...props }: ButtonProps) {
  return (
    <button className={button({ color, className })} {...props}>
      {props.children}
    </button>
  )
}
