// index.js
import {useQuery,ApolloProvider,InMemoryCache} 
from '@apollo/client';
import RestaurantList from './restaurantList';
import client from './client';
import {useState} from 'react'
import {
  InputGroup, InputGroupAddon,Input} from "reactstrap";
function Home(){
  const [query, setQuery] = useState("");
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
            <RestaurantList search={query} />
        </ApolloProvider>
    )
}
export default Home
