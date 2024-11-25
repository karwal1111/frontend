import {Card,Button,Row,Col,CardGroup} from 'react-bootstrap';
const Item=()=>{
  const category=["Rings","Necklace","Bracelets","Silver","Gold","Diamonds"];
    return(<>
       <Row xs={2} md={3} lg={4} className="g-4"> {/* Adjust grid as needed */}
      {category.map((item, index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={`images/product/${item.toLowerCase()}.jpg`} alt={item} /> {/* Replace path */}
            <Card.Body>
              <Card.Title>{item}</Card.Title>
              <Card.Text>
                Discover our exclusive collection of {item.toLowerCase()}s.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>)
}
export default Item