import type { CollectionConfig } from 'payload'
import { Berita } from './Berita'
import { Pages } from './Pages'
import { Users } from './Users'
import { File } from './File'
import { Media } from './Media'
import { Penerbitan } from './Penerbitan'

export const Collections: CollectionConfig[] = [Berita, File, Media, Pages, Penerbitan, Users]

export default Collections
