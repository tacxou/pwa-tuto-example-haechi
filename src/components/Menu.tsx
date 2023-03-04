import React from 'react'
import { Link } from 'react-router-dom'

export default function render() {
  return (
    <nav className="w-full">
      <div className="pl-4 w-full flex flex-grow flex-wrap items-center justify-between">
        <div className='flex items-center'>
          <img
            src="https://cdn.discordapp.com/attachments/817920175860219926/1081368935489876079/heart_1.png"
            className="h-12 py-1"
          />
          <h1 className="text-bold text-xl ml-4 text-white">Haechi & Co</h1>
        </div>
        <ul className="list-reset flex justify-end flex-1 items-center">
          <li className="mr-3">
            <Link
              to="/"
              className="inline-block text-white no-underline hover:underline py-2 px-4"
            >
              Accueil
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="/planning"
              className="inline-block text-white no-underline hover:underline py-2 px-4"
            >
              Planning
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="/contact"
              className="inline-block text-white no-underline hover:underline py-2 px-4"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="border-b border-gray-200 opacity-75 my-0 py-0" />
    </nav>
  )
}
