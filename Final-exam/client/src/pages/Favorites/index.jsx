import { Col, Row } from 'antd'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from '../../context/FavoritesContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Favorites= () => {


  const {bag, toggleFavorites} = useContext(FavoritesContext)
  
  

  return (
    <>
    <Helmet>
            <title>Favorites Page</title>
            <meta name='description' content='favorites'/>
          </Helmet>
     <div>
    <Row style={{display :"flex", justifyContent : "space-around",marginTop :"8rem"}}>
      {bag.length > 0 && bag.map((b) => {
        return (
         <div>
          <Col>
          <img src={b.image} alt="" width={200} />
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
    </>
  )
}

export default Favorites
