import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


import TopBar from '../Common/TopBar'
import axioss from '../utils/ApiService';
import Cards from '../Reusable/contentCards';
function Home() {
    let [result,setResult]=useState([]);
    let ApiData=async()=>{
        try {
            let result=await axioss.get('/Book')
            if(result.status===200){
              setResult(result.data)
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        ApiData()
    },[])
  return <>
  <TopBar/>
  <Container className='mt-5'>
      <Row md={4}>  
      {
        result.map((e,i)=>{
            return <Cards value={e} key={e.id}/>
        })
      }
        {/* <Col>
        <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title className='text-center'>  Pikachu Book</Card.Title>
        <div className='container-fluid '>
        <div  className='mb-3 d-flex justify-content-between'>
            <div>Author</div>  
            <div>MAno j   Kumar</div>
            </div>
        <div  className='mb-3 d-flex justify-content-between'>
            <div>Born Year</div>  
            <div> M  Anoj Kumar</div>
        </div>
        <div  className='mb-3 d-flex justify-content-between'>
            <div className=''>Published</div>  
            <div>1985</div>
        </div>
            <div  className='mb-3 d-flex justify-content-between'>
            <div className=''>ISBN</div>  
            <div>1985</div>
            </div>
        </div>
          
        </Card.Body>
    
      </Card>
      
      </CardGroup>
      </Col> */}
      
      </Row>
    </Container>
  </> 
  
}

export default Home