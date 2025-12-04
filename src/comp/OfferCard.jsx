import { Card, Button, Badge } from "react-bootstrap";
import Sauna from '../assets/sauna.jpg'
import Masaz from '../assets/masaz1.jpg'
import PakietSpa from '../assets/masaz.jpg'
import '../comp/OfferCard.css'


const OfferCard =({title,description,duration,price}) => {

return (
  <div className="ofertyUslug"> 
 <Card style={{ width: '18rem', opacity : '0.75', backgroundColor : '#d8d8be' }}>
    <Card.Img variant="top" src={Sauna} alt="Sauna" />
      <Card.Body style={{backgroundColor: '#d8d8be', }}>
        <Card.Title style={{ textAlign:'center',fontSize: '25px', color : '#052805 '  }}>Sauna 60 min</Card.Title>
        <Card.Text style={{ textAlign:'center', color : '#33431b'}}>
        Oczyść ciało, uspokój umysł
        </Card.Text>
      </Card.Body>
      <Card.Footer className="light"  style={{backgroundColor : '#6f6c30', textAlign : 'center', fontSize : '20px', color: '#d8d8be' }}>180zł</Card.Footer>

    </Card>



 <Card style={{ width: '18rem',  opacity : '0.75', backgroundColor : '#d8d8be'  }}>
    <Card.Img variant="top" src={Masaz} alt="Masaz" />
      <Card.Body style={{backgroundColor: '#d8d8be' }}>
        <Card.Title style={{ textAlign:'center',fontSize: '25px', color : '#052805 ' }}>Masaż relaksacyjny 40 min</Card.Title>
        <Card.Text style={{ textAlign:'center'}}>
       Pełne odprężenie mięśni i umysłu z wykorzystaniem aromaterapii
        </Card.Text>
      </Card.Body>
      <Card.Footer className="light"  style={{backgroundColor : '#6f6c30', textAlign : 'center', fontSize : '20px', color: '#d8d8be'  }}>220zł</Card.Footer>

    </Card>


  <Card style={{width: '18rem',  opacity : '0.75', backgroundColor : '#d8d8be' }}>
    <Card.Img variant="top" src={PakietSpa} alt="Pakiet Spa" />
      <Card.Body style={{backgroundColor: '#d8d8be' }}>
        <Card.Title style={{ textAlign:'center',fontSize: '25px', color : '#052805 '  }}>Pakiet SPA 120 min</Card.Title>
        <Card.Text style={{ textAlign:'center', fontSize: '15px'}}>
       Rytuał obejmujący masaż, peeling i aromaterapeutyczne olejki
        </Card.Text>
      </Card.Body>
      <Card.Footer className="light"  style={{backgroundColor : '#6f6c30', textAlign : 'center', fontSize : '20px', color: '#d8d8be'  }}>500zł</Card.Footer>

    </Card>


</div>



);
}
export default OfferCard;