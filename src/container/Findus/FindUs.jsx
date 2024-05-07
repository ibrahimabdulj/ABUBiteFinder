import { useState } from 'react';
import React from 'react';
import './FindUs.css';


const FindUs = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can submit the form data to your backend or perform any other action
      console.log(formData);
      // Reset form after submission
      setFormData({
        email: '',
        password: ''
      });
    };
    return(
      <div className='main' id='contact'>
        <div className="sub__main1">
          <h1 className='titl'>Contact Us</h1>
          <p>+231 4235616756768</p>
          <h3>Opening Hours</h3>
          <p>Timing everyday from 10am-10pm And All other our social media pages are available. </p>
          <h3>Address</h3>
          <p>Ahmadu Bello University,<br /> Zaria Kaduna State Nigeria</p>

        </div>
        <div className="sub__main2" id='login'>
          <h1 className='titl'> LogIN/SignUP</h1>
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className='form' >
                <div className="input">
                  <input type="text" name="mail" value={formData.name} onChange={handleChange} placeholder="Email"/>
                  <input type="password" name="password" value={formData.name} onChange={handleChange} placeholder="Password"/>
                </div>
                <button className='buttonh'>Submit</button>

              </div>

            </form>
          </div>
        </div>
      </div>

    );
}
export default FindUs;