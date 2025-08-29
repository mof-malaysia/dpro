import type { CollectionSlug, Payload, PayloadRequest, File } from 'payload'

import { home } from './home'

const collections: CollectionSlug[] = ['media', 'pages', 'forms', 'form-submissions']
const globals = ['header', 'footer'] as const

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'dev@dpro.gov.my',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [hero1Buffer] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/mof-malaysia/dpro/refs/heads/main/public/hero-image.png',
    ),
  ])

  const [demoAuthor, imageHomeDoc] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Dev',
        email: 'dev@dpro.gov.my',
        password: 'Passw0rd321',
      },
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Hero image',
      },
      file: hero1Buffer,
    }),
  ])

  payload.logger.info(`— Seeding pages...`)

  payload.create({
    collection: 'pages',
    depth: 0,
    data: home({ heroImage: imageHomeDoc, metaImage: imageHomeDoc }),
  })

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Utama',
              url: '/',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Tender',
              url: '/tender',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Dokumentasi',
              url: '/dokumentasi',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Berita',
              url: '/berita',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Hubungi Kami',
              url: '/hubungi-kami',
            },
          },
        ],
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
