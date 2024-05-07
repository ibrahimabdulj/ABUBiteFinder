import React, { useState } from 'react';
import './Tablereserve.css';

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    restaurantName: '',
    date: '',
    time: '',
    numberOfPersons: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or perform any other action
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      restaurantName: '',
      date: '',
      time: '',
      numberOfPersons: '',
      message: ''
    });
  };

  return (
    <div className='reserve__page' id='reservation'>
      <div className="reserve_heading">
        <h1 className='title'>Reservation Form</h1>
        <hr />
        <p>Fill In Below To Register with us and make Your Order base on your like and satisfaction.</p>
      </div>
      <form className='form__container' onSubmit={handleSubmit}>
        <div className="part1">
          <label className='label1'>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name"/>
          </label>
          <label className='label1'>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          </label>
        </div>
        <div className="part2">
          <label className='label2'>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='+234' />
          </label>
          <label className='label2'>
            <select name="restaurantName" value={formData.restaurantName} onChange={handleChange} >
              <option value="">Select Restaurant</option>
              <option value="1">Teemah Restaurant And Fast Food</option>
              <option value="2">DKD Restaurant & Catering Service</option>
              <option value="3">Bigmay Catering</option>
              <option value="4">ELMAXIO Restaurant</option>
              <option value="5">Blue Delight</option>
              <option value="6">NIHARI</option>
              <option value="7">AMSTERDAM</option>
              <option value="8">HOTSPOT</option>
              <option value="9">Chips Republic</option>
              <option value="10">SHINKAFI</option>
            </select>        
          </label>
        </div>
        <div className="part2">
          <label className='label2'>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </label>
          <br />
          <label className='label2'>
            <input type="time" name="time" value={formData.time} onChange={handleChange} />
          </label>
        </div>
        <div className='part2'>
          <div className='part5'>
            <label className='label4'>
              <select name="numberOfPersons" value={formData.numberOfPersons} onChange={handleChange} >
                  <option value="">Select number of persons</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
            </label>
            <button className='button' type="submit">Submit</button>
          </div>
          <label className='label3'>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Write Your message here...' />
          </label>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
