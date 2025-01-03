import React from 'react'
import AboutImg from '../assets/About.jpg'
import { FaChevronRight } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
            {/* img section */}
            <div className='relative border hidden md:block border-white p-1 rounded-full bg-white shadow-[0px_0px_20px_10px_rgba(255,255,255,0.3)] shadow-white'>
                <img src={AboutImg} alt="" className='w-[300px] md:w-[1500px] rounded-full border-white border shadow-white '/>
            </div>
            {/* paragraph section */}
            <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(255,255,255,0.3)] shadow-white'>
                <p className='text-lg leading-7 mb-6'>Hello! I'm Gnaneshwar, a dedicated and passionate Full-Stack Developer with a strong command of cutting-edge technologies such as Java, MySQL, HTML, CSS, and React. I thrive on transforming complex challenges into innovative solutions, creating seamless and efficient digital experiences. </p>
                <p className='text-lg leading-7 mb-6'>My journey in web development is fueled by a genuine curiosity and a drive to stay ahead in an ever-evolving technological landscape. Over the years, I’ve honed my skills to deliver high-quality, scalable, and user-centric applications that make a tangible impact.</p>
                <p className='text-lg leading-7 '>I started my coding journey by exploring various YouTube channels, which played a significant role in shaping my skills and understanding of programming. These platforms provided me with accessible, practical, and hands-on guidance, making complex concepts easier to grasp. Whether it was learning JavaScript, React, or mastering backend frameworks, the engaging tutorials and real-world examples on these channels were invaluable resources during my initial days as a developer.</p>
                <div className='mt-5'>
                    <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
                    <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>React</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>HTML,CSS</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>BootStrap</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Spring</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>SpringBoot</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Github</p>
                    </div>
                    <a href='#contact'><button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact<FaChevronRight/></button></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
