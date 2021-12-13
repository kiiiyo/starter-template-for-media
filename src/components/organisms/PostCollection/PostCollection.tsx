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
            className="lg:w-1/3 md:w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            {/*TODO: unit-test */}
            <Link href={`/posts/${slug}`}>
              <a>
                {image ? (
                  <img
                    className="object-cover w-full h-48"
                    alt={image.title}
                    src={image.url}
                  />
                ) : (
                  <div className="object-cover w-full h-48 bg-black"></div>
                )}
              </a>
            </Link>
            <div className="p-4">
              {category && (
                <Link href={`/categories/${category.slug}`}>
                  <a className="px-3 py-1 text-xs font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded">
                    {category.name}
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
                    <img
                      className="object-cover h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                      alt="Avatar"
                    />
                    <span className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
                      {author?.name}
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
