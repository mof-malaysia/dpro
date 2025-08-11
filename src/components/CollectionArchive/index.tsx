import { CardFileData, FileCard } from '@/components/FileCard'
import { CardNewsData, NewsCard } from '@/components/NewsCard'
import React from 'react'

export type Props = {
  posts: (CardNewsData | CardFileData)[]
}

function isBerita(post: CardNewsData | CardFileData): post is CardNewsData {
  return (post as CardNewsData).slug !== undefined
}

function isPenerbitan(post: CardNewsData | CardFileData): post is CardFileData {
  return (post as CardFileData).fileUpload !== undefined
}

export const CollectionArchive: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {posts?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return isBerita(result) ? (
            <NewsCard className="h-full" doc={result as CardNewsData} key={index} />
          ) : isPenerbitan(result) ? (
            <FileCard className="h-full" doc={result as CardFileData} key={index} />
          ) : null
        }

        return null
      })}
    </div>
  )
}
