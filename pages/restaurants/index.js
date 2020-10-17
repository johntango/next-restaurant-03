
import {useQuery,ApolloProvider,InMemoryCache} from '@apollo/client';
import RestaurantList from './restaurantList';
import client from './client';
import Dishes from './dishes';
import {useState} from 'react'

import {
    Button,
    Card,
    CardBody,
    Input,
    InputGroupAddon,
    InputGroup,
    Container,
    Col,
    Row,
  } from "reactstrap";
function Home(){
    const [query,setQuery] = useState("");
    return (
        <ApolloProvider client={client}>
          <div className="search">
              <h2> Local Restaurants</h2>
                <InputGroup>
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                />
                </InputGroup>
            </div>
            <br></br>
            <RestaurantList search={query} />
        </ApolloProvider>
    )
}
export default Home
