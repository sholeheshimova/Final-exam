import React from 'react'
import { Col, Row } from 'antd';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styles from './index.module.scss'

const Footer = () => {
  return (
   <>
   <footer>
   <Row style={{paddingTop: "2rem"}}>
      <Col span={6}>
      <h3>About Us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam, amet excepturi animi quasi architecto incidunt ducimus minima maxime temporibus?</p>
      </Col>
      <Col span={6} >
      <h3>Quick Link</h3>
      <p>Sell Online</p>
      <p>Features</p>
      <p>Shopping cart</p>
      <p>Store builder</p>
      <p>Mobile commerce</p>
      </Col>
      <Col span={6}>
      <h3>Contact Info</h3>
      <div className={styles.icons}>
      <FaLocationDot /><span>203 Fake St. Mountain View, San Francisco, California, USA</span>
      <FaPhoneAlt /><span>+2 392 3929 210</span>
      <IoIosMail /><span>emailaddress@domain.com</span>

      </div>
      </Col>
      <Col span={6}>
      <h3>Subscribe</h3>
      <div className={styles.inputs}>
        <input type="email"  placeholder='Email'/>
        <button>Send</button>
      </div>
      </Col>
    </Row>
   </footer>
   </>
  )
}

export default Footer
