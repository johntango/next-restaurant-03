import {gql,useQuery} from '@apollo/client';
import Link from "next/Link"
import Dishes from "./dishes"
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col} from "reactstrap";

function RestaurantList(props){
  const[restaurantID, setRestaurantID] = useState(0)
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(data.restaurants)

  const searchQuery = data.restaurants.filter((res) =>
  res.name.toLowerCase().includes(props.search)
);
  // set id for first restaurant
  let restId = searchQuery[0].id;
// definet renderer for Dishes
  const renderDishes = (restaurant_Id) => {
    return (<Dishes restId={restaurant_Id}> </Dishes>)
  };
if(searchQuery.length > 0){
  const restList = searchQuery.map((res) => (
    <Col xs="6" sm="4" key={res.id}>
      <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
        <CardImg
          top={true}
          style={{ height: 200 }}
          src={
          `http://localhost:1337`+ res.image.url
          }
        />
        <CardBody>
          <CardText>{res.description}</CardText>
        </CardBody>
        <div className="card-footer">
        <Link key = {res.name} as={"/restaurants/"+res.id} href={`restaurants/${res.id}`}>
        <Button color="info" onClick={()=> setRestaurantID(res.id)}>{res.name}</Button>
          </Link>
        </div>
      </Card>
    </Col>
  ))

  return(

    <Container>
    <Row xs='3'>
      {restList}
    </Row>
  
    <Row xs='3'>
    {renderDishes(restId)}
    </Row>
    </Container>
 
  )
} else {
  return <h1> No Restaurants Found</h1>
}
}
   export default RestaurantList