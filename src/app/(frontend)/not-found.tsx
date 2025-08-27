import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { ArrowBackIcon } from '@govtechmy/myds-react/icon'

export default function NotFound() {
  return (
    <div className="container px-4.5 lg:px-6 py-28 space-y-4 flex flex-col items-center text-center">
      <h1 className="font-heading text-bg-black-400 text-[100px]">404</h1>
      <h2 className="font-heading font-semibold text-heading-sm md:text-heading-md">
        Halaman tidak dijumpai
      </h2>
      <div className="space-y-1">
        <p className="text-txt-black-700 text-lg">Page not found</p>
        <p className="text-txt-black-700 text-lg">页面未找到</p>
        <p className="text-txt-black-700 text-lg">பக்கம் காணப்படவில்லை</p>
      </div>
      <Button asChild size="lg">
        <Link href="/">
          <ArrowBackIcon />
          Kembali ke halaman utama
        </Link>
      </Button>
    </div>
  )
}
