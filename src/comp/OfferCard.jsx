import { Card, Button, Badge } from "react-bootstrap";
import Sauna from '../assets/sauna.jpg'


const OfferCard =({title,description,duration,price}) => {

return (
 <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Sauna} alt="Sauna" />
      <Card.Body style={{backgroundColor: '#ecfefa' }}>
        <Card.Title style={{ textAlign:'center',fontSize: '25px', backgroundColor: '#ecfefa' }}>Sauna 60 min</Card.Title>
        <Card.Text style={{ textAlign:'center'}}>
        Oczyść ciało, uspokój umysł
        </Card.Text>
      </Card.Body>
      <Card.Footer className="light"  style={{backgroundColor : '#ddfcf7', textAlign : 'center', fontSize : '20px', }}>180zł</Card.Footer>

    </Card>
);
}
export default OfferCard;