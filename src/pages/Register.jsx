import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import axios, * as others from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName , SetFirstName] = useState(''); 
  const [lastName , SetLastName] = useState(''); 
  const [username , SetUsername] = useState(''); 
  const [email , SetEmail] = useState(''); 
  const [password , setPassword] = useState(''); 
  const navigate = useNavigate() ; 

  const signUp = (e) =>{ 
    e.preventDefault();
    console.log({
      first_name: firstName,
      last_name: lastName , 
      username : username, 
      email : email , 
      password : password
    })
    axios.post(process.env.REACT_APP_URL +'/users/signup', {
      first_name: firstName,
      last_name: lastName , 
      username : username, 
      email : email , 
      password : password , 
    })
    .then(function (response) {
      if (response.status === 200){
        localStorage.setItem('token', response.data.auth_token);
        console.log(localStorage.getItem('token'));
        navigate("/");
      }
    })
    .catch((e)=>{
      console.log(e)
    })
      }


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first_name" 
          type = "text"
          required 
          onChange={(e)=>SetFirstName(e.target.value)}
          />
          <Input placeholder="last name"
          type = "text"
          required 
          onChange={(e)=>SetLastName(e.target.value)} 
          />
          <Input placeholder="username" 
          type = "text"
          required 
          onChange={(e)=>SetUsername(e.target.value)}          />
          <Input placeholder="email" 
          type = "email"
          required 
          onChange={(e)=>SetEmail(e.target.value)}  
          />
          <Input placeholder="password" 
          type = "password"
          required 
          onChange={(e)=>setPassword(e.target.value)}               />
          <Input placeholder="confirm password"
          type = "password"
          required 
           />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={(e)=> signUp(e)} >CREATE</Button>
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/toys.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;