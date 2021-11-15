import { Icon } from '../components/atoms'

function HomePage() {
  return (
    <>
      <header className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40">
        <div className="container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
          <div className="flex justify-between">
            <a className="text-gray-800 dark:text-gray-200">
              <span className="text-xl ml-2">Starter Template for Media</span>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default HomePage
