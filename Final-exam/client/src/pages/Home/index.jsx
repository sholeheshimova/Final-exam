import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from '../../context/FavoritesContext';
import styles from './index.module.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const BASE_URL = "http://localhost:4000/bags"
const Home = () => {
const [bags, setBags] = useState([]) 
const [bagsCopy, setBagsCopy] = useState() 
const [searchQuery, setSearchQuery] = useState("")

const {bag, toggleFavorites} = useContext(FavoritesContext)

const getAllBags = async() => {
  try {
    const response = await axios.get(`${BASE_URL}`)
    setBags(response.data)
    console.log(response.data);
    
  } catch (error) {
    console.log(error);
  }
}

const filteredBags = bags.filter((bg) => bg.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))

const handleChange = (e) =>{
  let sortedBags = null;
  if (e.target.value === "asc") {
    sortedBags = [...bags].toSorted((a,b) => a.price - b.price)
  }else if (e.target.value === "desc") {
    sortedBags = [...bags].toSorted((a,b) => b.price - a.price)
  }else{
     sortedBags = ([...bagsCopy])
  }
  setBags([...sortedBags])
}

useEffect(() => {
  getAllBags()
}, [])
  return (
    
    <>

<Helmet>
        <title>Home Page</title>
        <meta name='description' content='Home'/>
      </Helmet>
    <div className={styles.sec1}>
       <div className={styles.text}>
       <h1>MADEWELL</h1>
       <h4>Summer Collection</h4>
       <div className={styles.btns}>
        <button className={styles.btn1}>Shop Now</button>
        <button className={styles.btn2}>Shop Now</button>
       </div>
       </div>
    </div>
    <div className={styles.sec2}>
      <input type="search"  onChange={(e) => {setSearchQuery(e.target.value)} }/>
      <select name="" id="" onChange={handleChange}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
        <option value="default">Default</option>
      </select>
    <Row style={{display :"flex", justifyContent : "space-around",marginTop :"8rem"}}>
      {bags.length > 0 && filteredBags.map((b) => {
        return (
         <div>
          <Col>
          <img src={b.image} alt="" width={300} />
           <h2>{b.title}</h2>
           <h4>{b.description}</h4>
           <p style={{fontSize : "20px", color : "red"}}>Price: ${b.price}</p>
           <div className="btns" style={{display : "flex", justifyContent : "space-between", marginTop : "1rem"}}>
           <Link to={`/bags/${b._id}`}><button style={{border : "none", backgroundColor : "lightgrey" , width : '100px', height : '30px', fontSize : "18px", cursor: "pointer"}}>Details</button></Link>
           <button style={{width: "40px", backgroundColor: "white", border : "none", fontSize : "20px"}}><FaRegHeart onClick={() => {toggleFavorites(b)}} /></button>
           </div>

          </Col>
         </div>
          
        )
      })}
    </Row>
    </div>
    <div className={styles.sec3}>
      <div className={styles.text}>
        <p>#New Summer Collection 2019</p>
        <h1>Jacket</h1>
        <button>Shop Now</button>
      </div>
    </div>
    <div className={styles.sec4}>
      <h1>Collections</h1>
      <div>
      <Row  style={{display  : "flex", justifyContent :"center"}}>
      <div style={{display  : "flex", justifyContent :"center", gap: "5rem"}}>
      <Col span={8} style={{border: "0.2px solid lightgrey", borderRadius: "10px"}} className={styles.cols}>
      <img src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg" alt="" width={300} style={{display: "flex", margin: "0 auto"}} />
      <h2 style={{textAlign: "center", fontSize: "30px"}}>Marc Jacobs  Bag</h2>
      <h4  style={{textAlign: "center"}}>Summer Collection</h4>
      <p style={{textAlign: "center"}}><span>$467</span></p>
      </Col>
      <Col span={8} style={{border: "0.2px solid lightgrey", borderRadius: "10px"}}>
      <img src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" alt="" width={300} style={{display: "flex", margin: "0 auto"}} />
      <h2 style={{textAlign: "center", fontSize: "30px"}}>Marc Jacobs  Bag</h2>
      <h4  style={{textAlign: "center"}}>Summer Collection</h4>
      <p style={{textAlign: "center"}}><span>$467</span></p>
      </Col>
      <Col span={8} style={{border: "0.2px solid lightgrey", borderRadius: "10px"}}>
      <img src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" alt="" width={300} style={{display: "flex", margin: "0 auto"}} />
      <h2 style={{textAlign: "center", fontSize: "30px"}}>Marc Jacobs  Bag</h2>
      <h4  style={{textAlign: "center"}}>Summer Collection</h4>
      <p style={{textAlign: "center"}}><span>$467</span></p>
      </Col>
     
      
      </div>
     
      
      </Row>
      </div>
    </div>
    <div className={styles.sec5}>
      <div className={styles.text}>
        <p>#New Summer Colletcion</p>
        <h1>New Denim Coat</h1>
        <button>Shop Now</button>
      </div>
    </div>
    </>
  )
}

export default Home
