import React from 'react'
import { CallButton } from '../../../Components/ButtonComponent/RiderButton'
const ReachedDropLocation = () => {
  return (
    <>
        <div className=" w-10/12 mx-auto p-4 flex flex-col  bg-white rounded-3xl gap-4 h-screen">
        <h2 className="  md:text-4xl text-2xl  w-52">Nneeh Daniel</h2>
        <p className="my-auto text-sm">
          Curabitur quisque suscipit sodales adipiscing. Orci enim ultrices et
          nulla diam tempus neque pharetra. Volutpat fringilla scelerisque
          pretium parturient. Risus lectus aliquet nullam adipiscing sed vita
        </p>
        <CallButton/>   
      </div>
    </>
  )
}

export default ReachedDropLocation
