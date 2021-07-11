import React,{useState} from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom';

function LogIn() {

    const history = useHistory();
    const url = 'http://localhost:8080/user/login';
    const [loginData, setloginData] = useState({
        email: "",
        password: "",
      });

    function handleChange(e) {
        const newLoginData = {...loginData};
        newLoginData[e.target.id] = e.target.value;
        setloginData(newLoginData);
        // console.log(newLoginData)
    }

    //Login User
  const handleSubmit = async (e) => {
      console.log(loginData);
    e.preventDefault();

    await Axios.post(url, {
          email : loginData.email,
          password : loginData.password,
      })
      .then((res) => {
       if(res.data === "OK"){
           console.log("succes");
        Swal.fire({
            icon: 'success',
            title: "Loged In Successfully",
          })
          history.push('/sensorchart')
      }
      else {
        console.log("su");
        Swal.fire({
            icon: 'info',
            title: 'Invalid Login',
            text: 'Check Your Email and Password',
          })
      };
  })
};


    return (

        <>
        
        <div className='container'>
            <div className="app-wrapper">
            <h1 style={{textAlign: 'center'}}>Temperature Sensor</h1>

            <div>
                    <h2 className="title">User Login</h2>

                    </div>

        <form className='from-wrapper' onSubmit={(e) => handleSubmit(e)}>

            <div className="email">
                    <label className="label">Email Address</label>
                    <input className="input" 
                    id="email" 
                    onChange={(e) => handleChange(e)}  
                    value={loginData.email} 
                    type="Email" 
                    placeholder="Email Address"  />
                    </div>

            <div className="email">
                    <label className="label">Password</label>
                    <input className="input"  
                    id="password"
                    onChange={(e) => handleChange(e)}  
                    value={loginData.password} 
                    type="password" 
                    placeholder="Password"/>
                    </div>

            <div>             
                <button className='submit' type="submit">Login</button>
            </div>

            <div>
                <p>Don't Have An Account? <a href='/'>Register Now</a></p>
            </div>

        </form>
        </div>
        </div>
 
        </>


 
        
    )
}

export default LogIn;