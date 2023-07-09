import React from 'react'

function Education() {
  return (
    <div className="mx-auto max-w-7xl">

<section>
      <h1 className="text-4xl font-bold mt-5">Education</h1>
      <h1 className="font-bold bg-text">Academics</h1>
      <div className="py-4">
      <div className="desc">
          <h4>Masters's Degree in Physics</h4>
          <p>University of Calicut</p>
        </div>
        <div>
          <p>2019 - 2021</p>
        </div>
<br />
        <div className="desc">
          <h4>Bachelor's Degree in Physics</h4>
          <p>University of Calicut</p>
        </div>
        <div>
          <p>2015 - 2018</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-5">Experience</h1>
      <h1 className="font-bold bg-text">Python-Django Intern</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-10/12">
          <div className="mt-3">
            <div >
              
                <p>January 2023 - June 2023</p>
              
              <ul className="list-disc">
                <li>Worked as an intern at Futura Labs, specializing in Python Django development.</li>
                <li>Collaborated with a team of developers to design and implement web applications using the Django framework.</li>
                <li>Participated in team meetings and actively contributed to discussions on project progress and improvements.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Education