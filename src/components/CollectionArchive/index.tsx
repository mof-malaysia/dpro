import { CardFileData, FileCard } from '@/components/FileCard'
import { CardNewsData, NewsCard } from '@/components/NewsCard'
import React from 'react'

export type Props = {
  posts: (CardNewsData | CardFileData)[]
}

function isCardNewsData(post: CardNewsData | CardFileData): post is CardNewsData {
  return (post as CardNewsData).slug !== undefined
}

function isCardFileData(post: CardNewsData | CardFileData): post is CardFileData {
  return (post as CardFileData).fileUpload !== undefined
}

export const CollectionArchive: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {posts?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return isCardNewsData(result) ? (
            <NewsCard doc={result} key={index} />
          ) : isCardFileData(result) ? (
            <FileCard doc={result} key={index} />
          ) : null
        }

        return null
      })}
    </div>
  )
}
