import React from 'react'

import { Card, CardNewsData } from '@/components/Card'
import { Container, Section } from '../ui/container'

export type Props = {
  posts: CardNewsData[]
}

export const NewsArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <Container className="my-16">
      <Section>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card className="h-full" doc={result} relationTo="berita" />
                </div>
              )
            }

            return null
          })}
        </div>
      </Section>
    </Container>
  )
}
