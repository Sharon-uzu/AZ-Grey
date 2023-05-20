import React from 'react'

const SignUpButton = (props) => {
  return (
    <>
     <button  className={`w-fit px-5 py-1 lg:2/5 lg:h-12  md:h-12 rounded-2xl font-semibold  ${props.className}`}  >{props.text}</button> 
    </>
  )
}

export default SignUpButton
