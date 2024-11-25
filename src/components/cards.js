import React from 'react';
import '../styles/cards.css'
import { Card, Button, Row, Col } from 'react-bootstrap';
const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
  return (
      <Card >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        <p>{title}</p>
         <p>{author}</p>
         <p>Price - {price}Rs</p>
       <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default Cards

