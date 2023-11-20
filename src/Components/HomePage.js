import React from 'react';
import { FaAtlassian } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Intro from './Intro';
import Footer from './Footer';
import returns from '../Assests/Images/Provide.jpg';

function NavBarComponent() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <img src={returns} style={{ maxWidth: '100%', height: 'auto' }} alt="Responsive Image" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default NavBarComponent;


// import React from 'react'
// import { FaAtlassian } from 'react-icons/fa'
// import { Link } from "react-router-dom"
// import  Nav  from './Nav'
// import Intro from './Intro'
// import Footer from './Footer'
// import returns from '../Assests/Images/Provide.jpg'


// function NavBarComponent() {
//   return (

//     <div>
//       <div>
//     <Nav />
//       </div>
//       <div>
//         <Intro/>
//       </div>
//       <div>
//       <img
//                                 src={returns} style={{ width: '95%', height: '95%' }}

//                             />
//       </div>
      
//       <div>
//         <Footer/>
//       </div>

//     </div>
//   )
// }

// export default NavBarComponent