import React,{useState,useEffect} from 'react';
// import Select from "react-select";
import baseUrl from '../Components/baseUrl';
import axios from 'axios';
const UserSignUpForm = () => {
      
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [ setSelectedOption] = useState(null);

      const [formData, setFormData] = useState({
        address : "",
        email: "",
        fullname : "",
        id : 1,
        phone: "",
        
    });
   

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${baseUrl}users/login`, {
            headers: {
              Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDIwZDBlNWI2MmJkYjVkODY3NTM4ZDIiLCJyb2xlIjoiU3RhZmYiLCJpYXQiOjE2ODEyMjUxMTIsImV4cCI6MTY4MTMxMTUxMn0.1xlcrM0iqzQqEmALEqIPiK2M1xcFDAi8wjJhJGCIXjw',
              'Content-Type': 'application/json',
            },
          });
          setUsers(response.data);
          // setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    },[]);
    
    console.log(formData)
    console.log(users)
    // if (loading) {
    //   return <div>Loading...</div>;
    // }

          const handleInputChange = (event) => {
            setFormData((prev)=> {
             return {
                ...prev,
                id: Number(prev.id) + 1,
                [event.target.name]: event.target.value
              }

            } )
          };
          

          // const handleChange = (selectedOption) => {
            
          //   setSelectedOption(selectedOption);
          //   console.log(selectedOption.type)
          // };


    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: "https://greyfoodexpress.onrender.com/api/v1/users/register",
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDIwZDBlNWI2MmJkYjVkODY3NTM4ZDIiLCJyb2xlIjoiU3RhZmYiLCJpYXQiOjE2ODEyMjUxMTIsImV4cCI6MTY4MTMxMTUxMn0.1xlcrM0iqzQqEmALEqIPiK2M1xcFDAi8wjJhJGCIXjw'
      },
      data : JSON.stringify(formData)
    };



      const handleSubmit = async (event = {}) => {
      event.preventDefault();
      try {
      
        const response = await axios.request(config);
        console.log(response)
        // Handle success response
 
      } catch (error) {
        console.log(error)
        // Handle error response
      }
    };
  

    // const options = [
    //     { value: "Admin", label: "Admin" },
    //     { value: "Vendor", label: "Vendor" },
    //     { value: "Rider", label: "Rider" },
    //   ];
     
    
  return (
    <div>


        <form method='POST' onSubmit={handleSubmit} className="flex flex-col gap-2">
          

          <input
            type="text"
            placeholder="Full Name"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            name="fullname"
            onChange={handleInputChange}
            value={formData.fullname}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            onChange={handleInputChange}
            name="phone"
            value={formData.phone}
          />
        
          <input
            type="address"
            placeholder="Address"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            onChange={handleInputChange}
            name="address"
            value={formData.address}
          />
        
          <input
            type="submit"
            value="SignUp"
            className="border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
          />

          
        </form>


      {/* <form method='POST' onSubmit={handleSubmit} className="flex flex-col gap-2">
          

          <input
            type="text"
            placeholder="Full Name"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            name="fullname"
            onChange={handleInputChange}
            value={formData.fullname}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            onChange={handleInputChange}
            name="phone"
            value={formData.phone}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            onChange={handleInputChange}
            name="password"
            value={formData.password}
          />
          <input
            type="address"
            placeholder="Address"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            onChange={handleInputChange}
            name="address"
            value={formData.address}
          />
          <Select
            placeholder="Select roles"
            options={options}
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none"
            value={selectedOption.type}
            onChange={handleChange}
            name="role"
          />
           <input type="file" name="" id="" className="w-11/12 m-auto" /> 
          <input
            type="submit"
            value="SignUp"
            className="border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
          />

          
        </form> */}
    </div>
  )
}

export default UserSignUpForm
