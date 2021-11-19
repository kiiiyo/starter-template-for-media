import { FC } from 'react'
//
import { Templates, Atoms } from '../..'

export const HomeScreen: FC = () => {
  return (
    <Templates.GenericTemplate
      headerBar={
        <nav className="bg-white shadow dark:bg-gray-800">
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div>
                <a
                  className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Brand
                </a>
              </div>
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <Atoms.Icon size="2x" prefix="fas" name="bars" />
                </button>
              </div>
              {/* --- */}
            </div>
          </div>
        </nav>
      }
    />
  )
}
