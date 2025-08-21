import { cn } from '@/utilities/ui'
import * as React from 'react'

const Input: React.FC<
  {
    ref?: React.Ref<HTMLInputElement>
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type, className, ref, ...props }) => {
  return (
    <input
      className={cn(
        'flex w-full rounded-md border border-transparent outline-none bg-bg-white',
        'placeholder:text-txt-black-500 text-txt-black-700 transition-colors',
        'focus:ring focus:ring-fr-primary focus:border-otl-primary-300',
        'disabled:bg-bg-washed disabled:cursor-not-allowed disabled:text-txt-black-disabled',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'px-3 py-2 text-sm',
        className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  )
}

export { Input }
