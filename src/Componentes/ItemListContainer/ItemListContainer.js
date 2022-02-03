import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
// import ItemCount from '../ItemCount/ItemCount';

// img, cardTitle, cardDescription, CardImg
const ItemListContainer = ({greetings, data }) => {
  return (
    <div>
      <h4> {greetings} </h4>
      <Card>
        {/* <CardImg
          alt="Card image cap"
          src={img}
          top
          width="100%"
        /> */}
        <CardBody>
          <CardTitle tag="h5">
            {/* {cardTitle} */}
            {data.login}
          </CardTitle>
          <CardText>
            {/* {cardDescription} */}
            {data.url}
          </CardText>
          {/* <ItemCount/> */}
        </CardBody>
      </Card>
    </div>
  )
}

export default ItemListContainer;