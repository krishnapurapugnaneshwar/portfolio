import React from 'react'
import { Download } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from '../assets/profile.jpg'
import { motion } from 'framer-motion';
import "../Css/Hero.css"


const Hero = () => {
  return (
    <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
        {/* stars */}
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>
        <div className='md:space-y-6 px-4'>
            <motion.h1 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:0.2}}
            className='md:text-6xl text-4xl font-bold mb-4'>Hi👋, I'm <p className='text-blue-400'>Gnaneshwar</p></motion.h1>
            <motion.p 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.2, delay:0.4}}
            className='md:text-2xl text-lg mb-3'>Full-Stack Developer</motion.p>
            <motion.p 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.4, delay:0.5}}
            className='lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300'>I am a Java Full Stack Developer with expertise in building end-to-end web applications. I specialize in Java frameworks like Spring Boot for backend development and use modern front-end technologies like React to create seamless, user-friendly interfaces. My focus is on delivering scalable and efficient solutions tailored to client needs.</motion.p><br/>           
            <a href='https://amber-laverne-29.tiiny.site/' target='blank'>
            <motion.button 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.4, delay:0.5}}
            className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-white border-2 border-gray-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] '>
              <Download className='w-5 h-5'/> Download CV
            </motion.button></a>
            <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
                &nbsp;&nbsp;
                <a href="https://www.facebook.com/gnaneshwar.krishnapurapu.9"><FaFacebook className='hover:text-blue-400' /></a>
                <a href='https://www.instagram.com/_g_n_a_n_e_s_h_w_a_r_/'><FaInstagram className='hover:text-blue-400' /></a>
                <a href='https://www.linkedin.com/in/gnaneshwar-krishnapurapu-15bb3022a/'><FaLinkedin className='hover:text-blue-400' /></a>
                
            </div>
        </div>
        <div className='relative group'>
            <motion.img 
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.4, delay:0}}
            src={Profile} alt="" className='rounded-full border border-gray-300 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(255,255,255,0.3)] shadow-white'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
