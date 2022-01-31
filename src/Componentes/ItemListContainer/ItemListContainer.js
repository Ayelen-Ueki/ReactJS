import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({img, cardTitle, cardDescription}) => {
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
      <ItemCount/>
    </CardBody>
  </Card>
    )
}

export default ItemListContainer;