import type { CollectionConfig } from 'payload'
import { revalidatePenerbitan } from './hooks/revalidatePenerbitan'

export const Penerbitan: CollectionConfig = {
  slug: 'penerbitan',
  labels: {
    singular: 'Penerbitan',
    plural: 'Penerbitan',
  },
  defaultSort: 'publishedAt',
  timestamps: true,
  versions: {
    drafts: true,
  },
  admin: {
    defaultColumns: ['name', 'publishedAt', '_status'],
    listSearchableFields: ['name'],
  },
  hooks: {
    afterChange: [revalidatePenerbitan],
  },
  fields: [
    {
      name: 'name',
      label: 'Nama',
      type: 'text',
      required: true,
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
