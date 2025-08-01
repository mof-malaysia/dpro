import React from 'react'

import type { Page } from '@/payload-types'

import { HomeHero } from '@/heros/HomeHero'
import { LowImpactHero } from '@/heros/LowImpact'

const heroes = {
  home: HomeHero,
  default: LowImpactHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
