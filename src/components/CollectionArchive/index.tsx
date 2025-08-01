import { cn } from '@/utilities/ui'
import React from 'react'

import { Card, CardNewsData } from '@/components/Card'

export type Props = {
  posts: CardNewsData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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
      </div>
    </div>
  )
}
