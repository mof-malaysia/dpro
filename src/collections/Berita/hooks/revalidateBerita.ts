import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Berita } from '../../../payload-types'

export const revalidateBerita: CollectionAfterChangeHook<Berita> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/berita/${doc.slug}`

      payload.logger.info(`Revalidating news at path: ${path}`)

      revalidatePath('/berita')
      revalidatePath(path)
      revalidateTag('berita-sitemap')
    }

    // If the news was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/berita/${previousDoc.slug}`

      payload.logger.info(`Revalidating old news at path: ${oldPath}`)

      revalidatePath('/berita')
      revalidatePath(oldPath)
      revalidateTag('berita-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Berita> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    revalidatePath('/berita')
    revalidatePath(`/berita/${doc?.slug}`)
    revalidateTag('berita-sitemap')
  }

  return doc
}
