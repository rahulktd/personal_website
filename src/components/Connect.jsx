import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Connect() {
  return (
    <div className="mx-auto max-w-7xl">

<section>
      <h1 className="text-4xl font-bold mt-5">Let's Talk</h1>
      <h1 className="font-bold bg-text">Contact</h1>
      <div className="text-left">
        <div className="pt-5">
          <h2 className="mb-5">Want to connect?</h2>
          <ul className="flex items-center space-x-4">
            <li>
              <a target="_blank" className="hover:text-blue-500" rel="noopener noreferrer" href="mailto:rahulkpktd@gmail.com">
              <HiOutlineMail className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" href="https://github.com/rahulktd">
              <FaGithub className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" href="https://www.linkedin.com/in/rahul-k-p-9aaa32236/">
              <FaLinkedin className="w-6 h-6" /> 
              </a>
            </li>
            
            <li>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" href="https://twitter.com/rahul_1_8">
              <FaTwitter className="w-6 h-6" /> 
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </section>
    </div>
    
  )
}

export default Connect