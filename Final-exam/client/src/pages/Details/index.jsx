import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const BASE_URL = "http://localhost:4000/bags"
const Details = () => {
  const { id } = useParams();
  const [bags, setBags] = useState([]);

  const getAllBags = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      setBags(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBags();
  }, []);
  return (
    <>
      <Helmet>
                <title>Details Page</title>
                <meta name='description' content='details'/>
              </Helmet>
      <div>
        <Row>
          {bags && (
            <div style={{display : "flex", alignItems : "center", marginLeft: "400px"}}>
              <Col>
                <img src={bags.image} alt="" />
              </Col>
              <Col>
                <p style={{fontSize : "20px"}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                  Saepe, itaque? Et sapiente aspernatur quia quae, amet cumque
                  expedita dolorum mollitia. <br /> Ex vero quasi tempora rerum et unde
                  atque quaerat recusandae autem,  <br />nesciunt quo numquam amet
                  aspernatur sequi, quia sit deleniti.
                </p>
              </Col>
            </div>
          )}
        </Row>
      </div>
    </>
  );
};

export default Details;
