import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {

    
        const [action, setAction] = useState("Sign Up");
            const [loginform, setloginform] = useState({
        email:"",
        password:"",
    })

    function handleChange(event) {
        const {value, name} = event.target
        setloginform(prevNote => ({
            ...prevNote, [name]:value})
        )}

    const navigate = useNavigate();
    function btnlogin(event) {
      setAction("Login");
      axios({
          method: "POST",
          url: "https://check-e107.onrender.com/logintoken",
          data: {
              email: loginform.email,
              password: loginform.password,
          },
      })
      .then((response) => {
          console.log(response);
          console.log("w");
          
          props.setToken(response.data.access_token);
          alert("Successfully Login");
          
          // Set localStorage items with the data returned from the server
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('number', response.data.number);
          localStorage.setItem('name', response.data.name);
          localStorage.setItem('age', response.data.age);
          
          navigate('*');
      })
      .catch((error) => {
          if (error.response) {
              console.log(error.response);
              console.log(error.response.status);
              console.log(error.response.headers);
              if (error.response.status === 401) {
                  alert("Invalid credentials");
              }
          }
      });
  
      setloginform({
        email: "",
        password: ""
      });
      event.preventDefault();
  }
  
    function btncreate(event){
      setAction("Sign Up")
      console.log(loginform)
      axios({
        method: "POST",
        url: "https://check-e107.onrender.com/signup",
        data: {
            email: loginform.email,
            password: loginform.password,
            name: loginform.name,
            number: loginform.number,
            age: loginform.age
        },
    })
      .then((response) => {
              console.log(response)
              console.log("w")
              
              alert("Successfully created");
              localStorage.setItem('email',loginform.email)
              localStorage.setItem('number',loginform.number)
              localStorage.setItem('name',loginform.name)
              localStorage.setItem('age',loginform.age)
              
      }).catch((error) => {
          if (error.response){
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              if (error.response.status === 401){
                      alert("Invalid credentials");
              }
          }
      })

      setloginform(({
        email:"",
        password:"",
        name:"",
        number:"",
        age:"",

      }))
      event.preventDefault()
  }

    
  return (

<div className="min-h-screen py-40" style={{backgroundImage: 'linear-gradient(115deg, #9F7AEA, #81D4FA)'}}>
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{backgroundImage: 'url("images/cover.png")'}}>
        <h1 className="text-white text-3xl mb-3">Welcome</h1>
        <div>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 py-16 px-12">
        <h2 className="text-3xl mb-4">{action}</h2>
        
        <p className="mb-4">
          Create your account. It’s free and only take a minute
        </p>
        <form action="Login">
            {action==="Login"?<div></div>:
          
            <input 
            name="name"
            onChange={handleChange}
            value={loginform.name}
            type="text" 
            placeholder="name" 
            className="border border-gray-400 py-1 px-2 w-full" />

           
         
        }
          <div className="mt-5">
            <input 
            name="email"
            type="email"
            value={loginform.email}
            
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-400 py-1 px-2 w-full" />
          </div>
          <div className="mt-5">
            <input 
            name="password"
            type="password" 
            value={loginform.password}
            
            onChange={handleChange}
            placeholder="Password" 
            className="border border-gray-400 py-1 px-2 w-full" />
          </div>
         
          {action==="Login"?<div></div>:
          <div className=" mt-5 grid grid-cols-2 gap-5">
            <input 
            name="age"
            type="text" 
            onChange={handleChange}
            value={loginform.age}
            placeholder="Age" 
            className="border border-gray-400 py-1 px-2" />
            <input 
            name="number"
            type="text" 
            onChange={handleChange}
            value={loginform.number}
            placeholder="Phone Number" 
            className="border border-gray-400 py-1 px-2" />
          </div>
        }
         
          <div className="submit">
    <button 
        className={
            action==="Login" 
            ?"mt-5 w-full bg-purple-500 py-3 text-center text-white hover:bg-purple-600"
        : "mt-5 w-full bg-blue-500 py-3 text-center text-white hover:bg-blue-600"
        }
        onClick={btncreate}
        >
        Create
    </button>
</div>

<div className="submit">
    <button 
        className={
            action==="Sign Up" 
            ? "mt-5 w-full bg-purple-500 py-3 text-center text-white hover:bg-purple-600" 
        : "mt-5 w-full bg-blue-500 py-3 text-center text-white hover:bg-blue-600"
        }
        onClick={btnlogin}

        >
        Login
    </button>
</div>

        
        </form>
      </div>
    </div>
  </div>
</div>


  )
}
