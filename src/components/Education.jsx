import React from 'react'
const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Sri Vasavi Engineering College, Tadepalligudem",
      year: "2020 - 2024",
      branch: "Computer Science and Technology",
      description: "Graduated with a strong foundation in critical thinking and problem-solving.",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary (XII) ",
      institution: "Sasi Junior College, Nallajerla",
      year: "2018 - 2020",
      description: "Completed higher secondary education with a specialization in science, building a strong foundation for technical and analytical skills.",
      icon: "🎓",
    },
    {
      degree: "Secondary (X)",
      institution: "A.P.S.W.R.E.I.S, Chintalapudi",
      year: "2017-2018",
      description: "Completed secondary education with a strong focus on foundational academics and skill development.",
      icon: "🎓",
    },
  ];

const Education = () => {
  return (
    <section id='education' className='min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 px-6' >
      <div className='max-w-6xl mx-auto w-full' >
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-6'>Education</h2><br/><br/>
        <div className='grid md:grid-cols-1 gap-12'>
            {/* Education section */}
            <div height="100%">
                
                {education.map((edu, index) => (
                    <div 
                      key={index} 
                      className='flex items-start bg-gray-900 p-6 rounded-xl shadow-[0px_0px_15px_5px_rgba(255,255,255,0.3)] hover:shadow-[0px_0px_20px_10px_rgba(255,255,255,0.5)] transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Experience Section */}
            
        </div>
      </div>
    </section>
  )
}

export default Education
