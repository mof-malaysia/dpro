import type { CollectionConfig } from 'payload'
import { revalidatePenerbitan } from './hooks/revalidatePenerbitan'

export const Penerbitan: CollectionConfig = {
  slug: 'penerbitan',
  labels: {
    singular: 'Penerbitan',
    plural: 'Penerbitan',
  },
  defaultSort: 'publish_date',
  timestamps: true,
  versions: {
    drafts: true,
  },
  admin: {
    defaultColumns: ['name', 'date', '_status'],
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
      name: 'publish_date',
      label: 'Tarikh Diterbit',
      type: 'date',
      required: true,
    },
    {
      name: 'file_upload',
      label: 'Fail',
      type: 'upload',
      relationTo: 'file',
      required: true,
    },
  ],
}
