import React,{useState} from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom';

function LogIn() {

    const history = useHistory();
    const url = 'http://localhost:5000/users/login';
    const [loginData, setloginData] = useState({
        user_Email: "",
        user_Password: "",
      });

    function handleChange(e) {
        const newLoginData = {...loginData};
        newLoginData[e.target.id] = e.target.value;
        setloginData(newLoginData);
        console.log(newLoginData)
    }

    //Login User
  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios
      .post(url, loginData)
      .then((res) => {
       if(res.data === "OK"){
        Swal.fire({
            icon: 'success',
            title: "Loged In Successfully",
          })
          history.push('/SensorChart')
      }
      else {
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
                    onChange={(e) => handleChange(e)}  
                    value={loginData.user_Email} 
                    type="Email" 
                    placeholder="Email Address"  />
                    </div>

            <div className="email">
                    <label className="label">Password</label>
                    <input className="input"  
                    onChange={(e) => handleChange(e)}  
                    value={loginData.user_Password} 
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