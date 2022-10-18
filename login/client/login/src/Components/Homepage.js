import React from 'react'
import '../Styles/Homepage.css'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();

  function dataRecieved() {
    navigate('/login')
  }
  return (
    <div className='mainhead'>

      <navbar className='test'>
    
        
        <ul>
        <h1>Welcome to the Homepage </h1> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a href="/login">Login</a>
          </li>

          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </navbar>
      <br /><br /> <br />

      <div className="mainbody">
        <h4>Please, Fill this form</h4>

        <br /><br />
        <form onSubmit={dataRecieved}>
          <label>
            Name: &nbsp;
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email: &nbsp;
            <input type="text" name="email" />
          </label>
          <br />
          <label>
            Address: &nbsp;
            <input type="text" name="address" />
          </label>
          <br />
          <label>
            Phone: &nbsp;
            <input type="text" name="phone" />
          </label>
          <br />
          <label>
            Age: &nbsp;
            <input type="number" name="age" />
          </label>
          <br />
          <label>
            Remarks: &nbsp;
            <input type="textarea" name='remarks' />
          </label>

          <button id="button">submit</button>



        </form>

      </div>

    </div>
  )
}

export default Homepage