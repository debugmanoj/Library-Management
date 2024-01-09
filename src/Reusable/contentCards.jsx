import React from 'react'
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Children from './children';
import Button from 'react-bootstrap/Button';

function Cards({value}) {
  console.log(value);
    return <Col>
        <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title className='text-center mb-4'>{value.bookTitle}</Card.Title>
         
        <div className='container-fluid '>

        <div  className='mb-3 d-flex justify-content-between'>
            <div>Author</div>  
            <div className='fw-bold'>{value.author?value.author.authorName:"Update"}</div>
        </div>
        <div  className='mb-3 d-flex justify-content-between'>
            <div>Born Year</div>  
            <div> {value.author?value.author.authorBornYear:"Update"}</div>
        </div>
        <div  className='mb-3 d-flex justify-content-between'>
            <div>Short Bio</div>  
            <div> {value.author?value.author.shortBio:"Update"}</div>
        </div>
        <div  className='mb-3 d-flex justify-content-between'>
            <div className=''>Published</div>  
            <div>{value.publication}</div>
        </div>
        <div  className='mb-3 d-flex justify-content-between'>
            <div className=''>Published Date</div>  
            <div >{value.publicationDate}</div>
        </div>
            <div  className='mb-3 d-flex justify-content-between'>
            <div className=''>ISBN</div>  
            <div className='fw-bold'>{value.ISBN}</div>
            </div>
        </div>
        <div className='d-flex justify-content-around '> 
        <div className='btn btn-primary '>Update</div>
        <div className='btn btn-danger'>Delete</div>
        </div>
        </Card.Body>
    
      </Card>
      
      </CardGroup>
      
      </Col>
    
}

export default Cards