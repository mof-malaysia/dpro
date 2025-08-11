'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@govtechmy/myds-react/hooks'
import { CopyIcon } from '@govtechmy/myds-react/icon'

import React from 'react'

export const CopyDialog: React.FC<{
  url: string
}> = ({ url }) => {
  const { toast } = useToast()

  function copyTextToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          variant: 'success',
          title: 'Syabas!',
          description: `Pautan '${url}' telah disalin`,
        })
      })
      .catch((err) => {
        toast({
          variant: 'error',
          title: 'Ralat',
          description: 'Pautan tidak disalin. Sila cuba sebentar lagi.',
        })
        console.error('Failed to copy text: ', err)
      })
  }

  return (
    <Button variant="default-outline" iconOnly onClick={() => copyTextToClipboard(url)}>
      <CopyIcon />
    </Button>
  )
}
