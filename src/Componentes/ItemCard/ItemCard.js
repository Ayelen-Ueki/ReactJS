import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const ItemCard = ({ greetings, data}) => {
    return (
      <div>
        <h4> {greetings} </h4>
        <Card className="ItemListContainer">
          <CardImg alt={data.producto} src={data.img} top />
          <CardBody>
            <CardTitle tag="h5">{data.producto}</CardTitle>
            <CardText> ${data.precio}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default ItemCard;
  