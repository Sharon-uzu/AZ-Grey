import React, { useState } from "react";
import baseUrl from "../Components/baseUrl";
// import { Image, Transformation,cloudinary  } from 'cloudinary-react';
import axios from "axios";
const SignUp = () => {
  // cloudinary.config({
  //   cloud_name: 'dcj65oe46',
  //   api_key: '224796447345479',
  //   api_secret: '27CspxWFySatRsZuqd3qxkO1C4U',
  // });

  const [formData, setFormData] = useState({
    address: "",
    email: "",
    fullname: "",
    phone: "",
    image: {},
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${baseUrl}resturants`, {
  //         headers: {
  //           Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDRkM2YxZjQzZDhjOTg5YmNkNDgxYWEiLCJpYXQiOjE2ODM5NzA4OTAsImV4cCI6MTY4NDA1NzI5MH0.yc7C0whJOaBVadTFSdgiiO0OpMYml0hJXO1XZA6eKe0",
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       setUsers(response.data);
  //       console.log(response.data)
  //       // setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // },[]);

  const [imageUrl, setImageUrl] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const imageData = new FormData();
    imageData.append("file", file);
    imageData.append("upload_preset", "vn3sc6bz");

    const {
      name,
      type,
      size
      // lastModifiedDate,
      // lastModified,
    } = file;
    // Upload the image file to Cloudinary
    fetch("https://api.cloudinary.com/v1_1/dcj65oe46/image/upload", {
      method: "POST",
      body: imageData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.url);
        console.log(data);
        setFormData({ ...formData, image: {
          name,
          type,
          size,
          imageUrl } 
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log("image" + imageUrl);

  const handleInputChange = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  // store form data in local storage with key "formData"

  localStorage.setItem("formData", JSON.stringify(formData));

  // retrieve form data from local storage
  const storedData = localStorage.getItem("formData");
  console.log(JSON.parse(storedData));

  const handleSubmit = (event = {}) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: `${baseUrl}restaurants`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDRkM2YxZjQzZDhjOTg5YmNkNDgxYWEiLCJpYXQiOjE2ODQxNDY2ODAsImV4cCI6MTY4NDIzMzA4MH0.pX3XXmxCTHNZtfKpM9k0TODzd261arhmUUPBaUMghck",
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*",
        // "Content-Type": "multipart/form-data",
      },
      // withCredentials: true,
      body: formData,
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          name="fullname"
          onChange={(e) => handleInputChange(e)}
          value={formData.fullname}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          name="email"
          onChange={(e) => handleInputChange(e)}
          value={formData.email}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          onChange={(e) => handleInputChange(e)}
          name="phone"
          value={formData.phone}
        />

        <input
          type="address"
          placeholder="Address"
          className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          onChange={(e) => handleInputChange(e)}
          name="address"
          value={formData.address}
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-11/12 m-auto"
          onChange={(e) => handleFileInputChange(e)}
        />

        <input
          type="submit"
          value="SignUp"
          className="border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
        />

        {/* <Image publicId={imageUrl} format="jpg">
            <Transformation width="200" height="200" crop="fill" />
          </Image> */}

        <img src={imageUrl} alt="" width={100} height={10} />
      </form>
    </div>
  );
};

export default SignUp;

//Role authenticaltion and how to store token and data

// const SignIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async (event) => {
//     event.preventDefault();

//     const response = await fetch('https://example.com/api/signin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password })
//     });

//     const data = await response.json();

//     if (response.ok) {
//       localStorage.setItem('token', data.token);
//       console.log('Token stored:', data.token);
//     } else {
//       console.error('Sign in failed:', data.message);
//     }
//   }

//   return (
//     <form onSubmit={handleSignIn}>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Sign In</button>
//     </form>
//   );
// }

// export default SignIn;

// const handleSignIn = async () => {
//   try {
//     const response = await fetch('/api/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username, password })
//     });
//     const data = await response.json();

//     // Check if the username and password match the one in the database
//     if (data.username === username && data.password === password) {
//       // Username and password are correct
//       // Save token and role in localStorage
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('role', data.role);

//       // Redirect to dashboard page based on user role
//       if (data.role === 'vendor') {
//         history.push('/dashboard/vendor');
//       } else if (data.role === 'rider') {
//         history.push('/dashboard/rider');
//       }
//     } else {
//       // Username and password are incorrect
//       alert('Invalid username or password');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
