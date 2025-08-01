import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Penerbitan } from '../../../payload-types'

export const revalidatePenerbitan: CollectionAfterChangeHook<Penerbitan> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = '/penerbitan'

      payload.logger.info(`Revalidating penerbitan at path: ${path}`)

      revalidatePath(path)
      revalidateTag('penerbitan-sitemap')
    }
  }
  return doc
}
