import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      title: 'SISTEM PEROLEHAN DIGITAL (d.Pro)',
      type: 'home',
      links: [
        {
          link: {
            type: 'custom',
            url: '/',
            label: 'perolehandigital.gov.my',
            appearance: 'outline',
          },
        },
      ],
      media: heroImage.id,
      richText: {
        root: {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Transformasi digital merentasi keseluruhan rantaian nilai merangkumi process ',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Perancangan Projek',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ', ',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Perolehan',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ', ',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Pentadbiran Kontrak',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' sehinga ',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Pengurusan Aset Fizikal Awam',
                  type: 'text',
                  version: 1,
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
        },
      },
    },
    layout: [
      {
        blockType: 'faqBlock',
        blockName: 'FAQ Block',
        title: 'Soalan Lazim',
        columns: [
          {
            title: 'Siapa yang boleh menyertai tender kerajaan?',
          },
          {
            title: 'Apakah itu tender terbuka?',
          },
          {
            title: 'Bagaimana saya boleh mencari tender yang tersedia?',
          },
          {
            title: 'Adakah pendaftaran diperlukan untuk melihat atau memohon tender?',
          },
          {
            title: 'Adakah keputusan tender yang lepas tersedia?',
          },
          {
            title: 'Bagaimana pemenang dipilih?',
          },
          {
            title: 'Bolehkah saya menjejak status pengemasan tender saya?',
          },
        ],
      },
      {
        blockType: 'cta',
        richText: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Dapatkan Sokongan 24/7',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                tag: 'h2',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Tanya soalan, tonton tutorial, baca artikel atau hubungi ejen.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        links: [
          {
            link: {
              type: 'custom',
              url: '/',
              label: 'Pautan Pusat Bantuan',
              appearance: 'default',
            },
          },
        ],
      },
      {
        blockName: 'CTA',
        blockType: 'cta',
        links: [
          {
            link: {
              type: 'custom',
              appearance: 'default',
              label: 'All posts',
              url: '/posts',
            },
          },
        ],
        richText: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'This is a call to action',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h3',
                version: 1,
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'This is a custom layout building block ',
                    version: 1,
                  },
                  {
                    type: 'link',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'configured in the admin dashboard',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    fields: {
                      linkType: 'custom',
                      newTab: false,
                      url: '/admin',
                    },
                    format: '',
                    indent: 0,
                    version: 2,
                  },
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    meta: {
      description: '',
      image: heroImage.id,
      title: 'd.Pro',
    },
    title: 'Home',
  }
}
