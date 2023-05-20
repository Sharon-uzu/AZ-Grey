import React from 'react'

const AdminForm = () => {
  return (
    <div>
      <form method='POST' className="flex flex-col gap-2">
          

          <input
            type="text"
            placeholder="Full Name"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            name="fullname"
            
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            name="email"
            
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            onChange={handleInputChange}
            name="phone"
            
          />
          <input
            type="password"
            placeholder="Password"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            name="password"
           
          />
          <input
            type="address"
            placeholder="Address"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            name="address"
           
          />
          <Select
            placeholder="Select roles"
            options={options}
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none"
            name="role"
          />
           <input type="file" name="" id="" className="w-11/12 m-auto" /> 
          <input
            type="submit"
            value="SignUp"
            className="border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
          />

          
        </form>
    </div>
  )
}

export default AdminForm
