
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom'

export default function Content() {
  return (
    <div>
    <h1 className="topPicks">Top Picks</h1>
    <Container>
    <div className="content-images"> 
         <Link to="womens"> <Image className="woman-image"
            src="https://images.pexels.com/photos/2906663/pexels-photo-2906663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          /></Link>
          
          
         
         <Link to="jewelery"> <Image className="jewelery-image"
            src="https://images.pexels.com/photos/16567155/pexels-photo-16567155/free-photo-of-close-up-of-woman-wearing-a-white-top-and-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          /></Link>
         

         
         <Link to="mens"><Image className="man-image"
            src="https://images.pexels.com/photos/1194414/pexels-photo-1194414.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          /></Link>
         </div>
    
    </Container>
    </div>
  );
}
