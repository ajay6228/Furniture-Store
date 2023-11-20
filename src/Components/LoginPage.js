import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, Label, Input, FormGroup } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"
import { Link } from 'react-router-dom';
import returns from '../Assests/Images/login-1.jpg'
import NavbarComponent from './Navbar2';
import Footer from './Footer';

function LoginComponent(props) {

    const navigate = useNavigate();


    const handleRegister = () => {
        navigate("/register");

        // window.location.href = 'http://localhost:3000/register';
    };

    let fetchdata = props.fetch;


    const [modal, setModal] = useState(false);
    const [formdata, setFormdata] = useState({
        emailId: '',
        password: ""
    });


    const toggle = () => setModal(!modal);

    const handleLogin = async () => {
        console.log(formdata.emailId);
        console.log(formdata.password);
        // ... rest of the code
        try {
            const response = await axios.get(`http://localhost:4000/login/${formdata.emailId}/${formdata.password}`);

            console.log(response.data);
            if (response.data) {
                if (formdata.emailId === "admin@gmail.com" && formdata.password === 'Admin@1234') {
                    // alert("Admin")
                    window.location.href = 'http://localhost:3000/admin'
                }
                else {
                    // alert(" Valid Details.....Login Successful!!");
                    // navigate("/Shop");

                    window.location.href = 'http://localhost:3000/Shop';
                }



            } else {
                alert("Invalid Details....Login Unsuccessful");
            }
        } catch (error) {
            console.error(error);
            alert("Error occured");
        }
    };


    const handleInput = (e) => {
        const { name, value } = e.target;


        setFormdata({
            ...formdata,
            [name]: value
        });


        console.log(formdata);
    }

    return (

        <div>
            <NavbarComponent />

            <div className="container-login">

                {/* <Form onSubmit={handleSubmit}> */}
                <Form className="registration-form">
                    <FormGroup>
                        <Label for="emailId">Email ID</Label>
                        <div >
                            {/* <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span> */}

                            <Input
                                id="emailId"
                                name="emailId"
                                placeholder="Enter Email"
                                type="text"
                                value={formdata.emailId}
                                onChange={handleInput}
                                required
                            /></div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            type="password"
                            value={formdata.password}
                            onChange={handleInput}
                            required
                        />
                        {/* <a href=''><b>Forgot Password?</b></a> */}

                    </FormGroup>
                    <center><Button  type='submit' className='btn btn-warning'  onClick={handleLogin}>
                        Login
                    </Button></center>

                    New User? <button className='btn btn-primary' onClick={handleRegister}>Register</button>
                </Form>



            </div>
            {/* <Footer/> */}
        </div>
    );

}
export default LoginComponent;