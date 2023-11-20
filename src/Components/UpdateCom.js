import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './UpdateCom.css'

function AddUpdateButton(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [formdata, setFormdata] = useState({
    Id: props.data.Id,
    userName: props.data.userName,
    emailId: props.data.emailId,
    password: props.data.password,
    address: props.data.address,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'Id' ? parseInt(value, 10) : value;
    setFormdata({
      ...formdata,
      [name]: newValue,
    });
  };

  const addData = async () => {
    try {
      await axios.put('http://localhost:4000/update', formdata);
      props.fetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    addData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    addData();
    toggle();
    props.fetch();
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered">
        <ModalHeader toggle={toggle}>Update Page</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="id" hidden>
                Id
              </Label>
              <Input
                id="id"
                name="Id"
                placeholder="Id"
                type="number"
                value={formdata.Id}
                onChange={handleInput}
                required
              />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="userName" hidden>
                Username
              </Label>
              <Input
                id="userName"
                name="userName"
                placeholder="UserName"
                type="text"
                value={formdata.userName}
                onChange={handleInput}
                required
              />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label
                for="exampleEmail"
                hidden
              >
                Email
              </Label>
              <Input
                id="emailId"
                name="emailId"
                placeholder="emailId"
                type="emailId"
                value={formdata.emailId}
                onChange={handleInput}
                required
              />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label
                for="examplePassword"
                hidden
              >
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
            {' '}



            <FormGroup>
              <Label
                for="exampleEmail"
                hidden
              >
                address
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
            </FormGroup>            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddUpdateButton;
