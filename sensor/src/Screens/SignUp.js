import React,{useState} from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom';

function SignUp() {

    const history = useHistory();
    const url = 'http://localhost:8080/user/register';
    const [userData , setUserData] = useState({

        
        userName : "",
        contactNo : "", 
        email : "",
        password : "",

    })

    function handleChange(e) {
        const newUserData = {...userData};
        newUserData[e.target.id] = e.target.value;
        setUserData(newUserData);
        console.log(newUserData);
    }

    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            
            userName : userData.userName,
            password : userData.password,
            email : userData.email,
            contactNo : userData.contactNo
            
            
        })
        .then((res)=>{
            if(res.data === "OK"){
                Swal.fire({
                  icon: 'success',
                  title: 'Registered In Successfully!',
                })
                history.push('/sensorchart');       
        
            }

            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
            
                  })
            }

        })
        .catch((e) => {
            console.log(e);
            Swal.fire({
                icon: 'info',
                title: 'Already Registered',
                text: 'Use different email for create new account',
              })
          });

    }

    return (
        <>
            <div className='container'>
            
                <div className="app-wrapper">
                <h1 style={{textAlign: 'center'}}>Temperature Sensor</h1>


                    <div>
                    <h2 className="title">Create Account</h2>

                    </div>

                <form className='from-wrapper' onSubmit={(e) => handleSubmit(e)}>

                    
                  
                   <div className="name">
                            <label className="label">User Name</label>
                            <input className="input"
                            id="userName"  
                            onChange={(e) => handleChange(e)}  
                            value={userData.userName} 
                            type="text" 
                            placeholder="User Name"/>
                        
                        </div>
                        

                    <div className="email">
                            <label className="label">Email Address</label>
                            <input className="input"
                            id="email"  
                            onChange={(e) => handleChange(e)}  
                            value={userData.email} 
                            type="Email" 
                            placeholder="Email Address"/>  
                            
                            </div>    

                        <div className="phone">
                            <label className="label">Mobile Number</label>
                            <input className="input"  
                            id="contactNo"
                            onChange={(e) => handleChange(e)}  
                            value={userData.contactNo} 
                            type="text" 
                            placeholder="Mobile Number"/> 
                            </div>

                   <div className="password">
                            <label className="label">Password</label>
                            <input className="input" 
                            id="password" 
                            onChange={(e) => handleChange(e)}  
                            value={userData.password} 
                            type="password" 
                            placeholder="Password"/>  
                            </div>

                        <div className="password">
                            <label className="label">Confirm Password</label>
                            <input className="input"  
                            type="password" 
                            placeholder="Confirm Password" />
                            </div>


                    <div>             
                    <button className="submit" onClick={handleSubmit}>Sign Up</button>
                    </div>

                    <div>
                         <p>Already Have An Account? <a href='/login'>Login</a></p>
                    </div>

                </form>
                </div>
        </div>



            
        </>
    )
}

export default SignUp;
