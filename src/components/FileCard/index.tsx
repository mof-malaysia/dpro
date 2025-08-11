'use client'
import type { Penerbitan } from '@/payload-types'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import { ArrowOutgoingIcon } from '@govtechmy/myds-react/icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export type CardFileData = Pick<Penerbitan, 'name' | 'fileUpload'>

export const FileCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardFileData
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({ external: true, newTab: true })
  const { className, doc } = props
  const { name, fileUpload } = doc || {}

  return (
    <article
      className={cn(
        'group relative border max-h-[300px] w-full rounded-lg overflow-hidden select-none',
        'hover:cursor-pointer hover:border-otl-primary-300 hover:ring ring-fr-primary',
        className,
      )}
      ref={card.ref}
    >
      {fileUpload ? (
        <>
          <Image
            className="object-fill"
            src="/penerbitan-bg.png"
            width={338}
            height={300}
            alt="Background"
            style={{
              width: '100%',
            }}
          />
          <Image
            className="absolute top-6 left-6"
            src="/jata-negara.png"
            width={50}
            height={50}
            alt="Jata Negara"
          />
          {typeof fileUpload !== 'string' && fileUpload.url && (
            <Link
              ref={link.ref}
              className="absolute flex flex-col gap-6 inset-x-6 bottom-6"
              href={fileUpload.url}
              target="_blank"
            >
              <p className="text-body-xl font-semibold line-clamp-4 group-hover:text-txt-primary">
                {name}
              </p>
              <Button
                variant="outline"
                className="group-hover:bg-bg-primary-600 group-hover:border group-hover:border-otl-primary-600 group-hover:text-white"
              >
                Lihat
                <ArrowOutgoingIcon />
              </Button>
            </Link>
          )}
        </>
      ) : (
        <></>
      )}
    </article>
  )
}
