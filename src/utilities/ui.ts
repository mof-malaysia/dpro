/**
 * Utility functions for UI components automatically added by ShadCN and used in a few of our frontend components and blocks.
 *
 * Other functions may be exported from here in the future or by installing other shadcn components.
 */

import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMergeConfig(clsx(inputs))
}

const twMergeConfig = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-heading-xl',
        'text-heading-lg',
        'text-heading-md',
        'text-heading-sm',
        'text-heading-xs',
        'text-heading-2xs',
        'text-body-xl',
        'text-body-lg',
        'text-body-md',
        'text-body-sm',
        'text-body-xs',
      ],
    },
  },
})
