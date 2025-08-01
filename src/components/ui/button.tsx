import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  [
    'group flex select-none items-center gap-1.5 rounded-md w-fit',
    'font-body font-medium outline-none transition disabled:cursor-not-allowed',
    'text-center active:translate-y-[0.5px]',
    'focus:ring',
  ],
  {
    variants: {
      variant: {
        'default-outline': [
          'bg-bg-white border border-otl-gray-200 text-txt-black-700 shadow-button',
          'hover:bg-bg-white-hover hover:border-otl-gray-300 hover:text-txt-black-900',
          'disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent',
          'focus:ring-fr-primary',
        ],
        ghost: [
          'bg-transparent border border-transparent text-txt-black-700',
          'hover:bg-bg-white-hover',
          'disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent',
          'focus:ring-fr-primary',
        ],
        'danger-fill': [
          'bg-danger-600 border border-danger-600 text-white shadow-button',
          'hover:bg-danger-700',
          'disabled:bg-bg-danger-disabled disabled:text-white-disabled disabled:border-bg-danger-disabled',
          'focus:ring-fr-primary',
        ],
        'danger-outline': [
          'bg-bg-white border border-otl-danger-200 text-txt-danger shadow-button',
          'hover:bg-bg-danger-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent',
          'focus:ring-fr-primary',
        ],
        'danger-ghost': [
          'bg-transparent border border-transparent text-txt-danger',
          'hover:bg-bg-danger-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent',
          'focus:ring-fr-primary',
        ],
        'primary-fill': [
          'bg-primary-600 border border-primary-600 text-white shadow-button',
          'hover:bg-primary-700',
          'disabled:bg-bg-primary-disabled disabled:text-white-disabled disabled:border-bg-primary-disabled',
          'focus:ring-fr-primary',
        ],
        'primary-outline': [
          'bg-bg-white border border-otl-primary-200 text-txt-primary shadow-button',
          'hover:bg-bg-primary-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent',
          'focus:ring-fr-primary',
        ],
        'primary-ghost': [
          'bg-transparent border border-transparent text-txt-primary',
          'hover:bg-bg-primary-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent',
          'focus:ring-fr-primary',
        ],
        'secondary-fill': [
          'bg-secondary-600 border border-secondary-600 text-white shadow-button',
          'hover:bg-secondary-700',
          'disabled:bg-bg-secondary-disabled disabled:text-white-disabled disabled:border-bg-secondary-disabled',
          'focus:ring-fr-secondary',
        ],
        'secondary-outline': [
          'bg-bg-white border border-otl-secondary-200 text-txt-secondary shadow-button',
          'hover:bg-bg-secondary-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-secondary-disabled disabled:border-transparent',
          'focus:ring-fr-secondary',
        ],
        'secondary-ghost': [
          'bg-transparent border border-transparent text-txt-secondary',
          'hover:bg-bg-secondary-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-secondary-disabled disabled:border-transparent',
          'focus:ring-fr-secondary',
        ],
        link: 'text-txt-primary hover:underline',
        default: [
          'bg-secondary-600 border border-secondary-600 text-white shadow-button',
          'hover:bg-secondary-700',
          'disabled:bg-bg-secondary-disabled disabled:text-white-disabled disabled:border-bg-secondary-disabled',
          'focus:ring-fr-secondary',
        ],
        outline: [
          'bg-bg-white border border-otl-secondary-200 text-txt-secondary shadow-button',
          'hover:bg-bg-secondary-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-secondary-disabled disabled:border-transparent',
          'focus:ring-fr-secondary',
        ],
        unset: null,
      },

      size: {
        unset: 'text-body-sm',
        sm: 'py-1.5 px-2.5 text-body-sm',
        md: 'py-2 px-3 text-body-md',
        lg: 'py-2.5 px-4 text-body-lg',
      },

      iconOnly: {
        true: 'aspect-square rounded-md',
        false: '',
      },
    },
    compoundVariants: [
      {
        iconOnly: true,
        size: 'sm',
        className: 'p-2',
      },
      {
        iconOnly: true,
        size: 'md',
        className: 'p-2.5',
      },
      {
        iconOnly: true,
        size: 'lg',
        className: 'p-3',
      },
    ],
    defaultVariants: {
      variant: 'primary-fill',
      size: 'sm',
      iconOnly: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
}

export { Button, buttonVariants }
