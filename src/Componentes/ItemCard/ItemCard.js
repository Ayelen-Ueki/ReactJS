import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const ItemCard = ({ greetings, img, cardDescription, data}) => {
    return (
      <div>
        <h4> {greetings} </h4>
        <Card className="ItemListContainer">
          <CardImg alt="Card image cap" src={img} top />
          <CardBody>
            <CardTitle tag="h5">{data.producto}</CardTitle>
            <CardText> ${data.precio}</CardText>
            <CardText> {cardDescription}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default ItemCard;
  