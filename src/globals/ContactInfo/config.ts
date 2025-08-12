import { GlobalConfig } from 'payload'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  TwitterXIcon,
  YoutubeIcon,
} from '@govtechmy/myds-react/icon'
import { revalidateContactInfo } from './hooks/revalidateContactInfo'
import { FC, SVGProps } from 'react'

const social_media = [
  'Facebook',
  'Instagram',
  'Linkedin',
  'Tiktok',
  'Twitter/X',
  'Youtube',
] as const

type SocialMedia = (typeof social_media)[number]

type SMContent = {
  icon: FC<SVGProps<SVGSVGElement>>
}

export const social_media_icons: Record<SocialMedia, SMContent> = {
  Facebook: {
    icon: FacebookIcon,
  },
  Instagram: {
    icon: InstagramIcon,
  },
  Linkedin: {
    icon: LinkedinIcon,
  },
  Tiktok: {
    icon: TiktokIcon,
  },
  'Twitter/X': {
    icon: TwitterXIcon,
  },
  Youtube: {
    icon: YoutubeIcon,
  },
}

const socialMediaOptions = social_media.map((key) => ({
  label: key,
  value: key,
}))

const map = ['Google Maps', 'Waze'] as const

const mapOptions = map.map((key) => ({
  label: key,
  value: key,
}))

export const ContactInfo: GlobalConfig = {
  slug: 'contact-info',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'website_name',
      label: 'Nama Laman Web',
      type: 'text',
      required: true,
      defaultValue: 'd.Pro',
    },
    {
      name: 'address',
      label: 'Alamat Penuh',
      type: 'textarea',
      required: true,
      defaultValue:
        'Kementerian Kewangan\nNo. 5 Persiaran Perdana, Presint 2,\nPusat Pentadbiran Kerajaan Persekutuan,\n62592, W.P. Putrajaya',
      admin: {
        rows: 5,
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'no_tel',
          label: 'Phone Number',
          type: 'text',
          required: true,
          defaultValue: '03-8000 8000',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'email',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'pautan',
      type: 'array',
      label: 'Pautan Media Sosial',
      required: true,
      fields: [
        {
          name: 'site',
          label: 'Laman Media Sosial',
          type: 'select',
          required: true,
          options: socialMediaOptions,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL Penuh',
          required: true,
        },
      ],
      defaultValue: [
        {
          site: 'Facebook',
          url: 'http://facebook.com/KemKewangan/',
        },
        {
          site: 'Instagram',
          url: 'https://instagram.com/mof_malaysia/',
        },
        { site: 'Linkedin', url: 'https://linkedin.com/company/mofmalaysia' },
        { site: 'Tiktok', url: 'https://tiktok.com/@mof_malaysia' },
        { site: 'Twitter/X', url: 'https://x.com/mofmalaysia' },
        {
          site: 'Youtube',
          url: 'https://youtube.com/MOFMalaysia19',
        },
      ],
      maxRows: 6,
    },
    {
      name: 'directions',
      type: 'array',
      label: 'Navigasi',
      required: true,
      fields: [
        {
          name: 'site',
          label: 'Aplikasi Peta',
          type: 'select',
          required: true,
          options: mapOptions,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL Penuh',
          required: true,
        },
      ],
      defaultValue: [
        {
          site: 'Google Maps',
          url: 'https://www.google.com/maps/dir//KEMENTERIAN+KEWANGAN,+Persiaran+Perdana,+Presint+2,+Putrajaya/@2.9260909,101.6477507,13z/',
        },
        {
          site: 'Waze',
          url: 'https://www.waze.com/live-map/directions/my/wilayah-persekutuan-putrajaya/putrajaya/kementerian-kewangan?to=place.ChIJfdFj5jm2zTERafbuqV-J0Zs',
        },
      ],
      maxRows: 2,
    },
    {
      name: 'embed_query',
      label: 'Google Maps Embed Query',
      type: 'text',
      required: true,
      defaultValue: 'place_id:ChIJR5p96zm2zTEROuWvj2j_aoY',
      admin: {
        description: 'Fill in the query (Place ID/place name/lat,lng) for Google Maps Embed',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateContactInfo],
  },
}
