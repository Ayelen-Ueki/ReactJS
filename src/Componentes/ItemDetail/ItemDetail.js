import './ItemDetail.css';
import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const ItemDetail = ({ data }) => {
  return (
    <div className='CardContainer'>
      <Card className='ItemDetail'>
        <CardImg
          alt="Card image cap"
          src={data.avatar_url}
          top
        />
        <CardBody>
          <CardTitle tag="h5">
            {data.login}
          </CardTitle>
          <CardText>
            {data.url}
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default ItemDetail;