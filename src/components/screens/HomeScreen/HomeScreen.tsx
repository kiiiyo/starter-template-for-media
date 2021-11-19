import { FC } from 'react'
//
import { Templates, Atoms } from '../..'

export const HomeScreen: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={
        <nav className="bg-white shadow dark:bg-gray-800">
          <div className="container px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
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
      globalFooter={
        <div className="bg-white">
          <div className="container px-4 py-6 mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-6">
              <div className="mb-6 md:col-span-3 lg:col-span-1">
                <a
                  className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Brand
                </a>
                <p className="text-sm my-1">Brand description</p>
              </div>
              <nav>
                <h4 className="font-semibold text-lg mb-2">Footer Title</h4>
                <hr className="sm:hidden md:mt-1"></hr>
                <ul>
                  <li className="my-2">
                    <a
                      className="text-sm text-gray-600 hover:text-gray-500"
                      href="#"
                    >
                      List text
                    </a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm" href="#">
                      List text
                    </a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm" href="#">
                      List text
                    </a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm" href="#">
                      List text
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>
                <h4 className="font-semibold text-lg mb-2">Footer Title</h4>
                <hr className="sm:hidden md:mt-1"></hr>
                <ul>
                  <li className="my-2">
                    <a
                      className="text-sm text-gray-600 hover:text-gray-500"
                      href="#"
                    >
                      List text
                    </a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm" href="#">
                      List text
                    </a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm" href="#">
                      List text
                    </a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm" href="#">
                      List text
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>
                <h4 className="font-semibold text-lg mb-2">Footer Title</h4>
                <hr className="sm:hidden md:mt-1"></hr>
                <ul>
                  <li className="my-2">
                    <a
                      className="text-sm text-gray-600 hover:text-gray-500"
                      href="#"
                    >
                      List text
                    </a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm" href="#">
                      List text
                    </a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm" href="#">
                      List text
                    </a>
                  </li>
                  <li className="my-2">
                    <a className="text-sm" href="#">
                      List text
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      }
    >
      aaaaaaa
    </Templates.GenericTemplate>
  )
}
