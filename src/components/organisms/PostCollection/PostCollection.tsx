import { FC } from 'react'
import Link from 'next/link'
//
import { Domain } from '@/features'

export type State = {
  postCollection: Domain.Post.Collection
}

//export type Action = {}

export type PostCollectionPresenterProps = {
  state: State
  //action: Action
}

export type PostCollectionProps = {
  state: State
  //action: Action
}

export const PostCollectionPresenter: FC<PostCollectionPresenterProps> = (
  props
) => {
  const {
    state: { postCollection },
    //action,
  } = props
  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:gap-4">
      {postCollection.items.map((post: Domain.Post.Entity, index: number) => {
        const { title, slug, category, image, author, updatedAt } = post
        return (
          <article
            key={index}
            className="lg:w-1/3 md:w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-6"
          >
            {/*TODO: unit test */}
            <Link href={`/posts/${slug}`}>
              <a>
                {image ? (
                  <img
                    className="object-cover w-full h-48"
                    alt={image.title}
                    src={image.url}
                  />
                ) : (
                  <div className="object-cover w-full h-48 bg-gray-400 flex justify-center items-center">
                    <span className="text-2xl font-bold text-white">
                      No Image
                    </span>
                  </div>
                )}
              </a>
            </Link>
            <div className="p-4">
              {/*TODO: unit test */}
              {category && (
                <Link href={`/categories/${category.slug}`}>
                  <a className="px-3 py-1 text-xs font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded">
                    {category.displayName}
                  </a>
                </Link>
              )}

              <h1 className="mt-2">
                <Link href={`/posts/${slug}`}>
                  <a className="text-xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">
                    {title}
                  </a>
                </Link>
              </h1>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {author.avatarImage ? (
                      <img
                        className="object-cover h-10 w-10 rounded-full"
                        src={author.avatarImage?.url}
                        alt={author.avatarImage?.name}
                      />
                    ) : (
                      <div className="object-cover h-10 w-10 bg-gray-400 rounded-full flex justify-center items-center">
                        <span className="text-lg font-bold text-white">
                          {author.displayName.slice(0, 1)}
                        </span>
                      </div>
                    )}

                    <span className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
                      {author?.displayName}
                    </span>
                  </div>
                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    {updatedAt}
                  </span>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export const PostCollection: FC<PostCollectionProps> = (props) => {
  const {
    state: { postCollection },
    //action,
  } = props

  return <PostCollectionPresenter state={{ postCollection }} />
}

export default PostCollection
