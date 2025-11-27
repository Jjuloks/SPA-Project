import { Card, Button, Badge } from "react-bootstrap";
import Sauna from '../assets/sauna.jpg'
import Masaz from '../assets/masaz1.jpg'
import PakietSpa from '../assets/masaz.jpg'
import '../comp/OfferCard.css'


const OfferCard =({title,description,duration,price}) => {

return (
  <div className="ofertyUslug"> 
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



 <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Masaz} alt="Masaz" />
      <Card.Body style={{backgroundColor: '#ecfefa' }}>
        <Card.Title style={{ textAlign:'center',fontSize: '25px', backgroundColor: '#ecfefa' }}>Masaż relaksacyjny 40 min</Card.Title>
        <Card.Text style={{ textAlign:'center'}}>
       Pełne odprężenie mięśni i umysłu z wykorzystaniem aromaterapii
        </Card.Text>
      </Card.Body>
      <Card.Footer className="light"  style={{backgroundColor : '#ddfcf7', textAlign : 'center', fontSize : '20px', }}>220zł</Card.Footer>

    </Card>


  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={PakietSpa} alt="Pakiet Spa" />
      <Card.Body style={{backgroundColor: '#ecfefa' }}>
        <Card.Title style={{ textAlign:'center',fontSize: '25px', backgroundColor: '#ecfefa' }}>Pakiet SPA 120 min</Card.Title>
        <Card.Text style={{ textAlign:'center'}}>
       Rytuał obejmujący masaż, peeling i aromaterapeutyczne olejki
        </Card.Text>
      </Card.Body>
      <Card.Footer className="light"  style={{backgroundColor : '#ddfcf7', textAlign : 'center', fontSize : '20px', }}>500zł</Card.Footer>

    </Card>


</div>



);
}
export default OfferCard;