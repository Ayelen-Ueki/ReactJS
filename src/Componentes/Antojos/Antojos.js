import React from 'react';
import'./Antojos.css';
import {Card, CardImg, CardBody, CardTitle, CardText, Button} from 'reactstrap';

const Antojos = ({img, cardTitle, cardDescription}) => {
    return(
  <Card>
    <CardImg
      alt="Card image cap"
      src={img}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {cardTitle}
      </CardTitle>
      <CardText>
        {cardDescription}
      </CardText>
      <Button>
        Comprar
      </Button>
    </CardBody>
  </Card>
    )
}

export default Antojos;