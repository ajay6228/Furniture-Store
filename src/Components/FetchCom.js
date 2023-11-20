import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setdata } from '../actions';
import axios from 'axios';
import { Table } from 'reactstrap';
import LoginComponent from './LoginPage';
import AddDataButton from './RegisterPage';
import UpdateComponent from './UpdateCom';
import NavbarComponent from './Navbar2';
import './FetchCom.css';

function CardComponent() {
  const handleRegister = () => {
    window.location.href = 'http://localhost:3000/adminreg';
  };

  const dispatch = useDispatch();
  let [data, setdata] = useState([]);
  console.log(data);

  let fetch = async () => {
    try {
      let response = await axios.get('http://localhost:4000/fetch');
      dispatch(setdata(response.data));
      setdata(response.data);
      console.log("hii");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleDelete = async (Id) => {
    try {
      let response = await axios.delete(`http://localhost:4000/delete/${Id}`);
      console.log('user record is deleted');
      alert('Data Deleted');
      fetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavbarComponent />
      <br />
      <br />
      <center>
        <div className="table-container">
          <h2>Admin Page</h2>
          <Table style={{ border: '1px solid black', width: '100%' }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>userName</th>
                <th>email</th>
                <th>password</th>
                <th>address</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.Id}>
                  <th scope="row">{item.Id}</th>
                  <td>{item.userName}</td>
                  <td>{item.emailId}</td>
                  <td>{item.password}</td>
                  <td>{item.address}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        handleDelete(item.Id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <UpdateComponent data={item} fetch={fetch} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="btn-container">
            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={handleRegister}
            >
              Add Details
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default CardComponent;


// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { setdata } from '../actions';
// import axios from 'axios'
// import { Table } from 'reactstrap'
// import LoginComponent from './LoginPage';
// import AddDataButton from './RegisterPage';
// import UpdateComponent from './UpdateCom'
// import NavbarComponent from './Navbar2';
// import './FetchCom.css'

// function CardComponent() {
//   const handleRegister = () => {
//     window.location.href = 'http://localhost:3000/adminreg';
//   };
//   // const data = useSelector((state) => state.cardReducer.data);
//   const dispatch = useDispatch()
//   let [data, setdata] = useState([]);
//   console.log(data)
//   let fetch = async () => {

//     try {
//       let response = await axios.get('http://localhost:4000/fetch');
     
//       dispatch(setdata(response.data))
//       setdata(response.data)
//       console.log("hii");
//       console.log(response.data)

//     } catch (error) {
//       console.log(error);
//     }

//   }

//   useEffect(() => {
//     fetch()

//   }, [])


//   const handleDelete = async (Id) => {
//     try {
//       let response = await axios.delete(`http://localhost:4000/delete/${Id}`);
//       console.log('user record is deleted');
//       alert('Data Deleted')
//       fetch()
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <div>
// <NavbarComponent/>
//       <br /><br />
//       <center>
//         <div style={{paddingTop:'30px'}}>   
//              <h2>Admin Page</h2>

//         <Table style={{ border: '1px solid black', width: '75%' }}>
//           <thead>
//             <tr>
//               <th>
//                 id
//               </th>
//               <th>
//                 userName
//               </th>
//               <th>
//                 email
//               </th>
//               <th>
//                 password
//               </th>
//               <th>
//                 address
//               </th>
//               <th>
//               </th>
//               <th>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr>
//                 <th scope="row">
//                   {item.Id}
//                 </th>
//                 <td>
//                   {item.userName}
//                 </td>
//                 <td>
//                   {item.emailId}
//                 </td>
//                 <td>
//                   {item.password}
//                 </td>
//                 <td>
//                   {item.address}
//                 </td>
//                 <td>
//                   <button type='button' className='btn btn-primary' onClick={() => { handleDelete(item.Id) }}>Delete</button>
//                 </td>
//                 <td>
//                   <UpdateComponent data={item} fetch={fetch} />
//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </Table>

//       <button className='btn btn-primary' style={{ width: '15%' }} onClick={handleRegister}>Add Details</button>
//       </div>

//       </center>
      

//       {/* <AddDataButton fetch={fetch} /> */}



//     </div>

//   )
// }


// export default CardComponent