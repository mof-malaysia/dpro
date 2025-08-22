import React from 'react'

import type { Page } from '@/payload-types'

import { HomeHero } from '@/heros/HomeHero'
import { Hero } from '@/heros/Hero'

const heroes = {
  home: HomeHero,
  default: Hero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
