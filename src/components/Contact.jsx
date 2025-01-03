import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Contact = () => {
  return (
    <section id='contact' className='bg-gray-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Contact Me</h2>
        <div className='grid lg:grid-cols-2 gap-10'>
          {/* contact info */}
          <div className='flex flex-col justify-center space-y-8'>
            <div>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-300'>Let's Talk</h1>
              <p className='text-gray-300 my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, ab. Iusto beatae doloribus ut sunt voluptatem fuga mollitia dicta illum!</p>
              <h3 className='text-2xl font-semibold text-gray-300'>Email</h3>
              <p className='text-gray-600 mt-2'>
                <a href="#" className='text-blue-500 hover:underline'>krishnapurapugnaneshwar@gmail.com</a>
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-gray-300'>Phone</h3>
              <p className='text-gray-600 mt-2'>
                <a href="#" className='text-blue-500 hover:underline'>+919392410493</a>
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
              <div className='flex gap-3 text-2xl transition-all mt-5'>
              <a href="https://www.facebook.com/gnaneshwar.krishnapurapu.9"><FaFacebook className='text-blue-400' /></a>
              <a href='https://www.instagram.com/_g_n_a_n_e_s_h_w_a_r_/'>  <FaInstagram className='text-blue-400' /></a>
              <a href='https://www.linkedin.com/in/gnaneshwar-krishnapurapu-15bb3022a/'>  <FaLinkedin className='text-blue-400' /></a>
               
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className='bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(255,255,255,0.3)] shadow-white p-8'>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Get in Touch</h3>
            <form action="" className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Name</label>
                <input 
                  type="email" 
                  id='email' 
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-white focus:border-white'
                  placeholder='Your Email' 
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-300'>Email</label>
                <input 
                  type="text" 
                  id='name' 
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-white focus:border-white'
                  placeholder='Your Name' 
                />
              </div>
              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
                <textarea 
                  id="messsage" 
                  rows={5} 
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-white focus:border-white' 
                  placeholder='Your Message'></textarea>
              </div>
              <button type='submit' className='w-full bg-white text-gray-900 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-colors'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
