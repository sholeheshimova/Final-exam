import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const bagsSchema = Yup.object().shape({
  image: Yup.string().url().required('Required'),
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  
});



const BASE_URL = "http://localhost:4000/bags"
const Add = () => {

  const [bags, setBags] = useState([])

const getAllBags = async() => {
  try {
    const response = await axios.get(`${BASE_URL}`)
    setBags(response.data)
    console.log(response.data);
    
  } catch (error) {
    console.log(error);
  }
}

const handleDelete = async(id) =>{
  console.log(id)
  try {
    const deleted = await axios.delete(`${BASE_URL}/${id}`)
    console.log(deleted)
    if (deleted.status  === 200) {
      setBags([...bags].filter((q) => q._id !== id))
    }
  } catch (error) {
    console.log(error);
    
  }
}

useEffect(() => {
  getAllBags()
}, [])
  return (

    <>
    <Helmet>
            <title>Add Page</title>
            <meta name='description' content='add'/>
    </Helmet>
     <div style={{ display : "flex", flexDirection : "column", alignItems : "center"}}>
    <h1>Add to Card</h1>
    <div >
    <Formik
      initialValues={{
        image: '',
        title: '',
        description: '',
        price: '',
      }}
      validationSchema={bagsSchema}
      onSubmit={ async (values)  => {
        const posted = await axios.post(`${BASE_URL}` , values);
        setBags(posted)
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{display :"flex", flexDirection : "column", justifyContent : "center", width : "250px" , gap : "1rem"}}>
          <Field name="image" />
          {errors.image && touched.image ? (
            <div>{errors.image}</div>
          ) : null}
          <Field name="title" />
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
          <Field name="description" />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
          <Field name="price" />
          {errors.price && touched.price ? (
            <div>{errors.price}</div>
          ) : null}
          
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    
    </div>
   

    <TableContainer>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bags.length > 0 && bags.map((row) => (
            <TableRow
              key={row._id}
            >
              
              <TableCell align="right"><img src={row.image} alt="" width={140} /></TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">Price: ${row.price}</TableCell>
              <TableCell align="right"><button onClick={() => handleDelete(row._id)}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  </div>
    </>
  )
};

export default Add;