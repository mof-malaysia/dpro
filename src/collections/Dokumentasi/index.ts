import type { CollectionConfig } from 'payload'
import { revalidateDokumentasi } from './hooks/revalidateDokumentasi'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

export const Dokumentasi: CollectionConfig = {
  slug: 'dokumentasi',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  labels: {
    singular: 'Dokumentasi',
    plural: 'Dokumentasi',
  },
  defaultPopulate: {
    name: true,
    fileUpload: true,
  },
  defaultSort: 'publishedAt',
  timestamps: true,
  versions: {
    drafts: true,
  },
  admin: {
    defaultColumns: ['name', 'publishedAt', '_status'],
    listSearchableFields: ['name'],
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [revalidateDokumentasi],
  },
  fields: [
    {
      name: 'image',
      label: 'Gambar',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'name',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Keterangan',
      type: 'text',
    },
    {
      name: 'publishedAt',
      label: 'Tarikh Diterbit',
      type: 'date',
      required: true,
    },
    {
      name: 'fileUpload',
      label: 'Fail',
      type: 'upload',
      relationTo: 'file',
      required: true,
    },
  ],
}
