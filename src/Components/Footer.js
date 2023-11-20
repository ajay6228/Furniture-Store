import React from 'react';
import { Container, Row, Col } from 'reactstrap'

import './Footer.css'; // Import your CSS file if needed
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import returns from "../Assests/Images/product-return.png"
import Guarantee from "../Assests/Images/guarantee-certificate.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div> <div className='down'>
    <Container>
        <Row>
            <Col lg="3" md="4">
                <div className='down-box'>
                    <LocalShippingIcon style={{ width: '75px', height: '75px' }} />
                    <div >
                        <p style={{fontSize:'10px',fontWeight:'bold'}}>Free Shiping</p>
                    </div>
                </div>
            </Col>
            <Col lg="3" md="4">
                <div className='down-box'>
                    <PaymentIcon style={{ width: '75px', height: '75px' }} />
                    <div ><p style={{fontSize:'10px',fontWeight:'bold'}}>Secure Payment</p></div>
                </div>
            </Col>
            <Col lg="3" md="4">
                <div className='down-box'>
                    <img
                        src={returns} style={{ width: '75px', height: '75px' }}

                    />
                    <div > <p style={{fontSize:'10px',fontWeight:'bold'}}>Easy Returns</p>
                    </div>
                </div>
            </Col>
            <Col lg="3" md="4">
                <div className='down-box'>
                    <img
                        src={Guarantee} style={{ width: '75px', height: '75px' }}

                    />                              <div > <p style={{fontSize:'10px',fontWeight:'bold'}}>1 Year Guarantee</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</div>
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod urna sed erat lacinia, a suscipit augue condimentum.</p>
          </div>
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <p><MailIcon/> &nbsp;info@ajayfurniture.com</p>
            <p><LocalPhoneIcon/>&nbsp; +91 9898989898</p>
            <p><LocationOnIcon/> &nbsp;123 DLF, Gachibowli, Hyderabad, 500032</p>
          </div>
          <div className="footer-social-media">
            <h2>Follow Us</h2>
            <center>            &nbsp;&nbsp; <a href="https://www.facebook.com/yourfacebookpage" target="_blank" ><FacebookIcon style={{color:'black'}}/></a> &nbsp;&nbsp;
            <a href="https://twitter.com/yourtwitterpage" target="_blank" ><TwitterIcon style={{color:'black'}}/></a> &nbsp;&nbsp;
            <a href="https://www.instagram.com/yourinstagrampage" target="_blank" ><InstagramIcon style={{color:'black'}}/></a> &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank"><LinkedInIcon style={{color:'black'}}/></a>
            </center>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="footer-bottom">
         <center> <p>&copy; {currentYear} All rights reserved.</p></center>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;


// import React from 'react';
// import './Footer.css'; // Import your CSS file if needed
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import MailIcon from '@mui/icons-material/Mail';

// const Footer = () => {
//   // Get the current year
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-about">
//             <h2>About Us</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod urna sed erat lacinia, a suscipit augue condimentum.</p>
//           </div>
//           <div className="footer-contact">
//             <h2>Contact Us</h2>
//             <p><MailIcon/> &nbsp;info@ajayfurniture.com</p>
//             <p><LocalPhoneIcon/>&nbsp; +91 9999999999</p>
//             <p><LocationOnIcon/> &nbsp;123 DLF, Gachibowli, Hyderabad, 500032</p>
            
//           </div>
//         </div>
//         <br/>
//         <div className="footer-bottom">
//          <center> <p>&copy; {currentYear} All rights reserved.</p></center>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
