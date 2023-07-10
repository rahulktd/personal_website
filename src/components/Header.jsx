import React from 'react'

function Header() {
  return (
    <header className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold"><a rel="noopener noreferrer"  target="_blank" href="https://drive.google.com/file/d/1dUA-D4twt8VLJz3U9wVBaQ2n2Yd9W9XD/view?usp=sharing">Resume</a></h1>
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