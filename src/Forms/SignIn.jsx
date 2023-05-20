import React, { useState} from 'react'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  // const navigate = useNavigate();

  // const handleInput = (event) => {
  //   setValues(prev =>({...prev, [event.target.name]: [event.target.name] }))
  // }

  axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   axios.get('https://localhost:8081')
  //   .then(res => {
  //     if(res.data.valid) {
  //       navigate('/');
  //     }else{
  //       navigate('/')
  //     }
  //   })
  // })

  const setInput = (event) =>{
    setValues(prev =>({...prev, [event.target.name]: [event.target.name] }))
  }

  // const [email, setEmail ] = useState('');

  return (
    <div>
          
      <form className=" flex flex-col gap-6">

          <input
            type="email"
            placeholder="Email"
            onChange={(event) =>{
              setInput(event);
            }}
            value={values.email}
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            onChange={(event) =>{
              setInput(event);
            }}
            value={values.password}
          />
          <input
            type="submit"
            value="SignIn"
            className="border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
          />

          
        </form>
    </div>
  )
}

export default SignIn
