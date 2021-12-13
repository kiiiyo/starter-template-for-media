import { FC } from 'react'
import ReactPaginate from 'react-paginate'
//
import { COLLECTION_LIMIT } from '@/constants'

export type State = {
  totalCount: number
}

export type Action = {
  handleChangePage: (selectedItem: { selected: number }) => void
}

export type PaginationPresenterProps = {
  state: State
  action: Action
}

export type PaginationProps = {
  state: State
  action: Action
}

export const PaginationPresenter: FC<PaginationPresenterProps> = (props) => {
  const {
    state: { totalCount },
    action: { handleChangePage },
  } = props

  const limit = COLLECTION_LIMIT as number

  return (
    <div className="flex">
      <ReactPaginate
        pageCount={Math.ceil(totalCount / limit)}
        marginPagesDisplayed={5}
        pageRangeDisplayed={5}
        onPageChange={handleChangePage}
        nextLabel=">"
        breakLabel="..."
        previousLabel="<"
        containerClassName="flex mx-auto"
        activeClassName=""
        activeLinkClassName="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 bg-blue-600 dark:hover:bg-blue-500 text-white dark:hover:text-gray-200"
        pageClassName=""
        pageLinkClassName="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        previousClassName=""
        previousLinkClassName="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        nextClassName=""
        nextLinkClassName="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        disabledClassName=""
        disabledLinkClassName="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
        breakClassName="transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        breakLinkClassName=""
      />
    </div>
  )
}

export const Pagination: FC<PaginationProps> = (props) => {
  const {
    state: { totalCount },
    action: { handleChangePage },
  } = props

  return (
    <PaginationPresenter state={{ totalCount }} action={{ handleChangePage }} />
  )
}

export default Pagination
