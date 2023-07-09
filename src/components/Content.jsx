import React from 'react'
import pro1 from '../Assets/pro1.JPG'

function Content() {
  return (<div className="mx-auto max-w-7xl">
    <section className="landing">
      <div className="flex items-center">
        <div className="lg:w-8/12 text-left pb-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">RAHUL K P</h1>
          <p className="text-xl md:text-2xl lg:text-3xl pl-2">Python-Django Developer</p>
        </div>
        <div className="lg:w-4/12 text-center my-auto pb-5 rounded-full">
          <img className="w-3/4 md:w-2/3 lg:w-full rounded-full mx-auto"
               src={pro1}
               alt="Rahul" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Content