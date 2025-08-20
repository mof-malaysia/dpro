import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  [
    'group flex select-none items-center gap-1.5 rounded-md w-fit',
    'font-body font-medium outline-none transition disabled:cursor-not-allowed',
    'text-center active:translate-y-[0.5px]',
    'focus:ring focus:ring-fr-primary',
  ],
  {
    variants: {
      variant: {
        'default-outline': [
          'bg-bg-white border border-otl-gray-200 text-txt-black-700 shadow-button',
          'hover:bg-bg-white-hover hover:border-otl-gray-300 hover:text-txt-black-900',
          'disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent',
        ],
        'default-ghost': [
          'bg-transparent border border-transparent text-txt-black-700',
          'hover:bg-bg-white-hover',
          'disabled:bg-bg-white-disabled disabled:text-txt-black-disabled disabled:border-transparent',
        ],
        'danger-fill': [
          'bg-danger-600 border border-danger-600 text-white shadow-button',
          'hover:bg-danger-700',
          'disabled:bg-bg-danger-disabled disabled:text-white-disabled disabled:border-bg-danger-disabled',
        ],
        'danger-outline': [
          'bg-bg-white border border-otl-danger-200 text-txt-danger shadow-button',
          'hover:bg-bg-danger-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent',
        ],
        'danger-ghost': [
          'bg-transparent border border-transparent text-txt-danger',
          'hover:bg-bg-danger-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-danger-disabled disabled:border-transparent',
        ],
        'primary-ghost': [
          'bg-transparent border border-transparent text-txt-primary',
          'hover:bg-bg-primary-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent',
        ],
        link: 'text-txt-primary hover:underline',
        'primary-fill': [
          'bg-primary-600 border border-primary-600 text-white shadow-button',
          'hover:bg-primary-700',
          'disabled:bg-bg-primary-disabled disabled:text-white-disabled disabled:border-bg-primary-disabled',
        ],
        'primary-outline': [
          'bg-bg-white border border-otl-primary-200 text-txt-primary shadow-button',
          'hover:bg-bg-primary-50',
          'disabled:bg-bg-white-disabled disabled:text-txt-primary-disabled disabled:border-transparent',
        ],
        unset: null,
      },

      size: {
        unset: 'text-body-sm',
        sm: 'text-body-sm',
        md: 'text-body-md',
        lg: 'text-body-lg',
      },

      iconOnly: {
        true: 'aspect-square',
        false: null,
      },
    },
    compoundVariants: [
      {
        iconOnly: true,
        size: 'sm',
        className: 'p-2 [&>svg]:size-4',
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
      {
        iconOnly: false,
        size: 'sm',
        className: 'py-1.5 px-2.5',
      },
      {
        iconOnly: false,
        size: 'md',
        className: 'py-2 px-3',
      },
      {
        iconOnly: false,
        size: 'lg',
        className: 'py-2.5 px-4',
      },
    ],
    defaultVariants: {
      variant: 'default-outline',
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
  iconOnly,
  size,
  variant,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ className, iconOnly, size, variant }))}
      data-size={size}
      data-variant={variant}
      {...props}
    />
  )
}

interface ButtonCounterProps {
  children: React.ReactNode
  ref?: React.RefObject<HTMLSpanElement | null>
}

const ButtonCounter: React.ForwardRefExoticComponent<ButtonCounterProps> = React.forwardRef(
  ({ children }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'flex shrink-0 items-center justify-center',
          'rounded-full bg-bg-primary-600 text-txt-white',
          'group-disabled:bg-bg-white-disabled group-disabled:text-inherit',
          '[[data-variant=primary-fill]_&]:bg-white [[data-variant=primary-fill]_&]:text-primary-600',
          '[[data-variant=danger-fill]_&]:bg-white [[data-variant=danger-fill]_&]:text-danger-600',
          '[[data-size=sm]_&]:size-4.5 [[data-size=sm]_&]:text-body-sm',
          '[[data-size=md]_&]:size-5 [[data-size=md]_&]:text-body-sm',
          '[[data-size=lg]_&]:size-6 [[data-size=lg]_&]:text-base',
        )}
      >
        {children}
      </span>
    )
  },
)

ButtonCounter.displayName = 'ButtonCounter'

export { Button, ButtonCounter, buttonVariants }
