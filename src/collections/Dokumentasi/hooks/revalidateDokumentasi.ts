import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Dokumentasi } from '../../../payload-types'
import { collectionPrefixMap } from '@/utilities/generatePreviewPath'

export const revalidateDokumentasi: CollectionAfterChangeHook<Dokumentasi> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = collectionPrefixMap.dokumentasi!

      payload.logger.info(`Revalidating dokumentasi at path: ${path}`)

      revalidatePath(path)
      revalidatePath('/')
      revalidateTag('dokumentasi-sitemap')
    }
  }
  return doc
}
