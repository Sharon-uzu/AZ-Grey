import React from 'react'

const FooterC = () => {
  return (
    <div className='w-full py-8 bg-black '>
      <footer className='w-11/12 mx-auto grid grid-cols-2 gap-8 md:grid-cols-5 text-white text-center'>
        <div className='text-start w-11/12  md:col-span-2 flex flex-col gap-4'>
            <h2 className='font-bold text-2xl mb-2 '>Let's do this together</h2>
            <h3 className='font-semi-bold'>For restaurants</h3>
            <h3 >For couriers</h3>
            <h3>For stores</h3>
            <h3>For companies</h3>

        </div>
         
        <div className='text-start w-11/12 flex flex-col gap-4'>
            <h2 className='font-bold text-2xl mb-2'>company</h2>
            <h3>About us</h3>
            <h3>Investors</h3>
            <h3>security</h3>
        
        </div>

        <div className='text-start w-11/12 flex flex-col gap-4'>
            <h2 className='font-bold text-2xl mb-2'>Links</h2>
            <h3>Support</h3>
            <h3>Media</h3>
            <h3>Contact</h3>
        </div>

        <div className='text-start w-11/12  flex flex-col gap-4'>
            <h2 className='font-bold text-2xl mb-2'>Follow Us</h2>
            <h3>Linkedin</h3>
            <h3>Instagram</h3>
            <h3>Twitter</h3>
            <h3>Facebook</h3>
        </div>

      </footer>
    </div>
  )
}

export default FooterC
