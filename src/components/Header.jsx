import React from 'react'

function Header() {
  return (
    <header className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Resume</h1>
        <nav>
          {/* <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  )
}

export default Header