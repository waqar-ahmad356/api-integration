import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/Context';

const Login = () => {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
   role:'',
  });
  const [message, setMessage] = useState('');
  const navigate=useNavigate();
  const {setIsAuthenticated} =useContext(userContext)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request with formData
      const response = await axios.post('http://localhost:4000/api/user/login', formData);
      localStorage.setItem("token",response.data.token);
      setIsAuthenticated(true)
      setMessage('Login successful!');
      console.log('Response:', response.data);

      if(formData.role==="admin"){
        navigate('/admin')
      }
      else{
        navigate('/user')
      }
    } catch (error) {
      if (error.response) {
        setMessage(`Error: ${error.response.data.message}`);
        console.error('Server Error:', error.response.data.message);
      } else {
        setMessage('Error: Unable to connect to the server');
        console.error('Request Error:', error.message);
      }
    }
  };

  return (
    <form className="" style={{ margin: '100px 500px' }} onSubmit={handleSubmit}>
     
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
        
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="form-select"
          
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
     
      <button type="submit" className="btn btn-primary">
       Login
      </button>
      {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
      
    </form>
  );
};

export default Login;
