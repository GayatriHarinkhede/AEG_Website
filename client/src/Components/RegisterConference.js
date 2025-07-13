import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components for the form
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  background-color: #282c34; // Optional: Background color for contrast
`;

const FormWrapper = styled.div`
  text-align: center;
  width: 80%;
  max-width: 600px;
  animation: ${fadeIn} 1.5s ease-out;
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px 0;
  border: 2px solid #61dafb;
  border-radius: 15px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2);
  color: #fff;

  &:focus {
    outline: none;
    border-color: #fff;
  }
`;

const Heading = styled.h2`
  color: #fff; // White heading
  margin-bottom: 20px;
`;

const FormButton = styled.button`
  background-color: white;
  border: none;
  color: Black;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background-color: #444;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
  }
`;

// RegisterForm Component
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    affiliation: '',
    department: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending form data to backend API endpoint
    const response = await fetch('http://localhost:3001/api/send-registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Registration Successful!");
      setFormData({ name: '', email: '', phone: '', affiliation: '', department: '' }); // Reset form
    } else {
      alert("Failed to register!");
    }
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <Heading>Register Now:</Heading>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <FaUser /> */}
            <Input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {/* <FaEnvelope /> */}
            <Input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {/* <FaPhone /> */}
            <Input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {/* <FaBuilding /> */}
            <Input
              type="text"
              name="affiliation"
              placeholder="Enter Your Institute"
              value={formData.affiliation}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="department"
              placeholder="Enter Your Department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <FormButton type="submit">Submit</FormButton>
        </form>
      </FormWrapper>
    </PageWrapper>
  );
};

export default RegisterForm;
