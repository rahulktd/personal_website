import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function About() {
  return (
    <div className="mx-auto max-w-7xl">
    <section className="mt-4 mb-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex-wrap text-left">
          <div className="about-desc">
            <h1 className="font-bold text-4xl">About</h1>
            <div className="pt-5 text-justify">
              <h2 className="text-2xl mb-5">Hello!</h2>
              <p className="text-justify text-justify-inter-word">
                My name is Rahul. Recent graduate with a passion for web development, specializing in Python and Django.  have hands-on experience in building web applications using Python and Django framework.
                 Currently exploring various frontend technologies to enhance my skills. 
                Always eager to expand my knowledge and open to new challenges.
              </p>
              <ul className="flex items-center space-x-4 mt-4">
                <li>
                  <a target="_blank" className="hover:text-blue-500" rel="noopener noreferrer" href="mailto:tahulkpktd@gmail.com">
                  <HiOutlineMail className="w-6 h-6" />                 </a>
                </li>
                <li>
                  <a target="_blank" className="hover:text-blue-500" rel="noopener noreferrer" href="https://github.com/rahulktd">
                  <FaGithub className="w-6 h-6" />
                                    </a>
                </li>
                <li>
                  <a target="_blank" className="hover:text-blue-500" rel="noopener noreferrer" href="https://www.linkedin.com/in/rahul-k-p-9aaa32236/">
                  <FaLinkedin className="w-6 h-6" />                  </a>
                </li>
                <li>
                  <a target="_blank" className="hover:text-blue-500" rel="noopener noreferrer" href="https://twitter.com/rahul_1_8">
                  <FaTwitter className="w-6 h-6" />                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About