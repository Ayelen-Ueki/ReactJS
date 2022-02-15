import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({greetings,img, cardTitle, cardDescription}) => {
  return (
    <div>
      <h4> {greetings} </h4>
      <Card className='ItemListContainer'>
        <CardImg
          alt="Card image cap"
          src={img}
          top
        />
        <CardBody>
          <CardTitle tag="h5">
            {cardTitle}
          </CardTitle>
          <CardText>
            {cardDescription}
          </CardText>
          <ItemCount/>
        </CardBody>
      </Card>
    </div>
  );
}

export default ItemDetail;