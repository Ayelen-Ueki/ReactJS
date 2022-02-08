import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
// import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

// img, cardTitle, cardDescription, CardImg
const ItemListContainer = ({greetings, data }) => {
  return (
    <div className='CardContainer'>
      <h4> {greetings} </h4>
      <Card className='ItemListContainer'>
        <CardImg
          alt="Card image cap"
          src={data.avatar_url}
          top
        />
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