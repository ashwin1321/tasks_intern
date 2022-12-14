import React, { useState } from 'react'
import '../Styles/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [formValues, setFormValues] = useState();


    function loginn(e) {
        e.preventDefault();
        const username = document.getElementById('uname').value
        const password = document.getElementById('pass').value
        const data = { username, password }


        console.log(data);

        if (username === '' || password === '') {
            alert('Please fill all the fields')
        } else {
            axios.post('http://localhost:5000/register', data)
                .then(res => {
                    if (res.data.userExists) {
                        // alert('User already exists')
                        setFormValues('Username already exists please try another one')
                        // alert('Username already exists please try another one')
                    }
                    else {
                        alert('Register Success')
                        navigate('/login')
                    }
                })
                .catch(err => {
                    console.log(err)
                })

        }
    }
    return (
        <>
            <div className="main">


                <h1 className='title'>Register </h1>
                <h4>Please Register</h4>

                <form id='form' onSubmit={(e) => loginn(e)}>
                    <input type="email" placeholder="enter your email" className='username' id="uname" required onChange={(e) => {
                    }} /> <br />
                    <p style={{ color: 'red' }}>{formValues}</p>
                    <input type="password" placeholder="enter your password" className='password' id="pass" required />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        </>

    )
}


export default Register