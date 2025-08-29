import type { CollectionConfig } from 'payload'
import { Berita } from './Berita'
import { Dokumentasi } from './Dokumentasi'
import { File } from './File'
import { Media } from './Media'
import { Pages } from './Pages'
import { Users } from './Users'

export const Collections: CollectionConfig[] = [Berita, Dokumentasi, File, Media, Pages, Users]

export default Collections
