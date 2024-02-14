import React, { useState } from 'react';
import './App.css';
const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (technology) => {
    const updatedTechnologies = [...selectedTechnologies];

    if (updatedTechnologies.includes(technology)) {
      updatedTechnologies.splice(updatedTechnologies.indexOf(technology), 1);
    } else {
      updatedTechnologies.push(technology);
    }

    setSelectedTechnologies(updatedTechnologies);
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

  if (!name.trim()) {
    newErrors.name = 'Name is required';
  }

  if (!email.trim()) {
    newErrors.email = 'Email is required';
  }

  if (!password.trim()) {
    newErrors.password = 'Password is required';
  }

  if (selectedTechnologies.length === 0) {
    newErrors.technologies = 'Select at least one course';
  }

  if (!selectedRadio) {
    newErrors.gender = 'Select a gender';
  }

  if (!selectedOption) {
    newErrors.city = 'Select a city';
  }

  if (!selectedDate) {
    newErrors.date = 'Select a date of birth';
  }

  if (!selectedNumber) {
    newErrors.number = 'Enter the number of courses';
  }
  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) {
    alert('Please fill in all required fields.');
    return; 
  }
   alert("thank you for submitting ");
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Set Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Courses: <br />
        <input
          type="checkbox"
          name="technology1"
          value="HTML"
          class="small-checkbox"
          checked={selectedTechnologies.includes('HTML')}
          onChange={() => handleCheckboxChange('HTML')}
        /> HTML<br />
        <input
          type="checkbox"
          name="technology2"
          value="CSS"
          class="small-checkbox"
          checked={selectedTechnologies.includes('CSS')}
          onChange={() => handleCheckboxChange('CSS')}
        /> CSS<br />
        <input
          type="checkbox"
          name="technology3"
          value="Javascript"
          class="small-checkbox"
          checked={selectedTechnologies.includes('Javascript')}
          onChange={() => handleCheckboxChange('Javascript')}
        /> Javascript<br />
        <input
          type="checkbox"
          name="technology4"
          value="JQuery"
          class="small-checkbox"
          checked={selectedTechnologies.includes('JQuery')}
          onChange={() => handleCheckboxChange('JQuery')}
        /> JQuery <br />
      </label>
      <label>
        Gender: <br />
        <label>
          Male
          <input
            type="radio"
            value="option1"
            class="small-radio"
            checked={selectedRadio === 'option1'}
            onChange={() => setSelectedRadio('option1')}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            value="option2"
            class="small-radio"
            checked={selectedRadio === 'option2'}
            onChange={() => setSelectedRadio('option2')}
          />
        </label>
      </label>

      <label>
        Select City:
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Select an option</option>
          <option value="option1">Karachi</option>
          <option value="option2">Lahore</option>
        </select>
      </label>

      <label>
        Date of Birth:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </label>

      <label>
        Number of Courses you Select:
        <input
          type="number"
          value={selectedNumber}
          onChange={(e) => setSelectedNumber(e.target.value)}
        />
      </label>

      <label>
        Color Picker:
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;