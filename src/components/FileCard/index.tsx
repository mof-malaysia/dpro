'use client'

import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useIsMobile } from '@/hooks/useIsMobile'
import type { Penerbitan } from '@/payload-types'
import { cn } from '@/utilities/ui'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@govtechmy/myds-react/dialog'
import { ArrowOutgoingIcon, CrossIcon, DownloadIcon } from '@govtechmy/myds-react/icon'
import Link from 'next/link'
import React from 'react'

export type CardFileData = Pick<Penerbitan, 'description' | 'image' | 'name' | 'fileUpload'>

export const FileCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardFileData
  title?: string
}> = (props) => {
  const { className, doc } = props
  const { description, image, name, fileUpload } = doc || {}

  const isMobile = useIsMobile()

  if (isMobile)
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <article
            className={cn(
              'group flex flex-col gap-6 p-4.5 border rounded-lg overflow-hidden',
              'hover:cursor-pointer hover:border-otl-primary-300 hover:ring ring-fr-primary',
              className,
            )}
          >
            <div className="relative w-full grow space-y-4">
              {image && typeof image !== 'string' && (
                <Media
                  htmlElement={null}
                  resource={image}
                  imgClassName="border rounded-md object-cover h-[200px]"
                />
              )}
              <div className="space-y-3">
                {name && (
                  <p className="font-semibold line-clamp-2 group-hover:text-txt-primary">{name}</p>
                )}
                {description && (
                  <p className="text-sm text-txt-black-500 line-clamp-2">{description}</p>
                )}
              </div>
            </div>
            <Button
              variant="primary-outline"
              className="group-hover:bg-bg-primary-600 group-hover:border group-hover:border-otl-primary-600 group-hover:text-white"
            >
              Info Lanjut
              <ArrowOutgoingIcon />
            </Button>
          </article>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            {name && <DrawerTitle>{name}</DrawerTitle>}
            <DrawerClose>
              <Button variant="default-outline" iconOnly>
                <CrossIcon />
                <span className="sr-only">Close</span>
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="p-4.5 flex flex-1 flex-col gap-4.5 overflow-y-auto">
            {image && typeof image !== 'string' && (
              <Media
                htmlElement={null}
                resource={image}
                imgClassName="border rounded-md object-cover h-[250px]"
              />
            )}
            {description && <DialogDescription>{description}</DialogDescription>}
          </div>
          <DrawerFooter className="*:w-full">
            <DrawerClose asChild>
              {fileUpload && typeof fileUpload !== 'string' && fileUpload.url && (
                <Link href={fileUpload.url} target="_blank">
                  <Button size="md" variant="primary-fill" className="w-full justify-center">
                    <DownloadIcon />
                    Muat Turun Dokumen
                  </Button>
                </Link>
              )}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <article
          className={cn(
            'group flex flex-col gap-6 p-4.5 border rounded-lg overflow-hidden',
            'hover:cursor-pointer hover:border-otl-primary-300 hover:ring ring-fr-primary',
            className,
          )}
        >
          <div className="relative w-full grow space-y-4">
            {image && typeof image !== 'string' && (
              <Media
                htmlElement={null}
                resource={image}
                imgClassName="border rounded-md object-cover h-[200px]"
              />
            )}
            <div className="space-y-3">
              {name && (
                <p className="font-semibold line-clamp-2 group-hover:text-txt-primary">{name}</p>
              )}
              {description && (
                <p className="text-sm text-txt-black-500 line-clamp-2">{description}</p>
              )}
            </div>
          </div>
          <Button
            variant="primary-outline"
            className="group-hover:bg-bg-primary-600 group-hover:border group-hover:border-otl-primary-600 group-hover:text-white"
          >
            Info Lanjut
            <ArrowOutgoingIcon />
          </Button>
        </article>
      </DialogTrigger>
      <DialogBody className="lg:min-w-[800px]">
        <DialogHeader border>{name && <DialogTitle>{name}</DialogTitle>}</DialogHeader>
        <DialogContent className="space-y-8">
          {image && typeof image !== 'string' && (
            <Media
              htmlElement={null}
              resource={image}
              imgClassName="border rounded-md object-cover h-[350px]"
            />
          )}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogContent>
        <DialogFooter>
          <DialogClose>
            {fileUpload && typeof fileUpload !== 'string' && fileUpload.url && (
              <Link href={fileUpload.url} target="_blank">
                <Button variant="primary-fill">
                  <DownloadIcon />
                  Muat Turun Dokumen
                </Button>
              </Link>
            )}
          </DialogClose>
        </DialogFooter>
      </DialogBody>
    </Dialog>
  )
}
