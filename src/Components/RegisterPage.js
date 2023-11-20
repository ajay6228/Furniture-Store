import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import './LoginPage.css';
import NavbarComponent from './Navbar2';

function AddDataButton(props) {
  const fetchdata = props.fetch;

  const [modal, setModal] = useState(false);
  const [formdata, setFormdata] = useState({
    Id: null,
    userName: '',
    emailId: '',
    password: '',
    address: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'Id' ? parseInt(value, 10) : value;
    setFormdata({
      ...formdata,
      [name]: newValue
    });
  };

  const isPasswordValid = (password) => {
    // Add your password validation criteria here
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };

  const addData = async () => {
    try {
      let response = await axios.post('http://localhost:4000/register', formdata);
      fetchdata();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isPasswordValid(formdata.password)) {
      alert('Password must contain at least one uppercase letter, one lowercase letter, and one digit, and be at least 8 characters long.');
      return;
    }
    addData();
    toggle();
    // Show submitted alert
    alert('Details are submitted!');
    // Redirect to login page
    // window.location.href = 'http://localhost:3000/Login';
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <NavbarComponent/>
      <div className="container-login">
        <Form onSubmit={handleSubmit} className="registration-form">
          <FormGroup>
            <Label for="Id">
              Id
            </Label>
            <Input
              id="Id"
              name="Id"
              placeholder="Id"
              type="number"
              value={formdata.Id}
              onChange={handleInput}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="userName">
              UserName
            </Label>
            <Input
              id="userName"
              name="userName"
              placeholder="userName"
              type="text"
              value={formdata.userName}
              onChange={handleInput}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="emailId">
              Email Id
            </Label>
            <Input
              id="emailId"
              name="emailId"
              placeholder="emailId"
              type="email"
              value={formdata.emailId}
              onChange={handleInput}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={formdata.password}
              onChange={handleInput}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="address">
              Address
            </Label>
            <Input
              id="address"
              name="address"
              placeholder="address"
              type="text"
              value={formdata.address}
              onChange={handleInput}
              required
            />
          </FormGroup>
          
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddDataButton;


// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
// import axios from 'axios';
// import './LoginPage.css';
// import NavbarComponent from './Navbar2';

// function AddDataButton(props) {
//   const fetchdata = props.fetch;

//   const [modal, setModal] = useState(false);
//   const [formdata, setFormdata] = useState({
//     Id: null,
//     userName: '',
//     emailId: '',
//     password: '',
//     address: ''
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     const newValue = name === 'Id' ? parseInt(value, 10) : value;
//     setFormdata({
//       ...formdata,
//       [name]: newValue
//     });
//   };

//   const addData = async () => {
//     try {
//       let response = await axios.post('http://localhost:4000/register', formdata);
//       fetchdata();
//       console.log(response.data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addData();
//     toggle();
//     // Show submitted alert
//     alert('Details are submitted!');
//     // Redirect to login page
//     // window.location.href = 'http://localhost:3000/Login';
//   };

//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <NavbarComponent/>
//       <div className="container-login">


//         <Form onSubmit={handleSubmit} className="registration-form">
//           <FormGroup>
//             <Label
//               for="Id"

//             >
//               Id
//             </Label>
//             <Input
//               id="Id"
//               name="Id"
//               placeholder="Id"
//               type="number"
//               value={formdata.Id}
//               onChange={handleInput}
//               required
//             />
//           </FormGroup>


//           <FormGroup>
//             <Label
//               for="userName"

//             >
//               UserName
//             </Label>
//             <Input
//               id="userName"
//               name="userName"
//               placeholder="userName"
//               type="text"
//               value={formdata.userName}
//               onChange={handleInput}
//               required
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label
//               for="emailId"
//             >
//               Email Id
//             </Label>
//             <Input
//               id="emailId"
//               name="emailId"
//               placeholder="emailId"
//               type="email"
//               value={formdata.emailId}
//               onChange={handleInput}
//               required
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label
//               for="password"

//             >
//               Password
//             </Label>
//             <Input
//               id="password"
//               name="password"
//               placeholder="Password"
//               type="password"
//               value={formdata.password}
//               onChange={handleInput}
//               required
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label
//               for="address"

//             >
//               Address
//             </Label>
//             <Input
//               id="address"
//               name="address"
//               placeholder="address"
//               type="text"
//               value={formdata.address}
//               onChange={handleInput}
//               required
//             />
//           </FormGroup>
//           <Button color="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//       </div>

//   );
// }

// export default AddDataButton;



