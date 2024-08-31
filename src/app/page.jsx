import React from 'react'
import Image from 'next/image'
import { FiArrowRight } from "react-icons/fi";

const page = () => {
  return (



    <div>

      < div className='bg-[rgb(37,43,97)] pb-10 pt-0 p-16 h-[450px] w-full rounded-3xl py-10 relative flex flex-col justify-between' >
        <Image src="/images/doc.png" alt="Logo" width={270} height={270} className='absolute bottom-0 left-1/2 transform -translate-x-1/2' />
        <div className='w-fit  mx-auto text-[rgb(219,235,255)] pt-10'>
          <h1 className='font-bold text-center text-[200px] leading-[180px] pb-5'>Mentora</h1>
          <div className='flex justify-between'>
            <h3 className='text-xl'>Your Mental Well being Partner</h3>
            <p className=' text-xl'>No More Struggles, Just Support</p>
          </div>
        </div>

        <div className='flex justify-between items-end'>
          <p className='text-[rgb(231,194,212)] w-[340px] uppercase'>A mental health support platform designed to empower individuals in managing their mental well-being</p>

          <div className='flex gap-1 items-center'>
            <div className='bg-[rgb(231,194,212)] py-3 font-semibold px-4 rounded-full'>Book Appointment</div>

            <div className='bg-[rgb(231,194,212)] rounded-full h-full p-3'>
              <FiArrowRight size={25} />
            </div>
          </div>



        </div>
      </div >

      <div>
        <div>
          <h2>Find Doctors Your Prefer</h2>
        </div>
        <div>
          <h2>Get Video Call Consultations</h2>
        </div>
        <div>
          <h2>Read Various Articles</h2>
        </div>
        <div>
          <h2>Discuss About Your Problems</h2>
        </div>
      </div>
    </div>
  )
}

export default page