// index.js
import {useQuery,ApolloProvider, ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from './restaurantList';
import {useState} from 'react'
import { InputGroup, InputGroupAddon,Input} from "reactstrap";
const link = new HttpLink({ uri: 'http://localhost:1337/graphql' })
const cache = new InMemoryCache()
const client = new ApolloClient({
  link,
  cache
})
function Home(){
  const [query, setQuery] = useState("");
    return (
        <ApolloProvider client={client}>
          <div className="search">
              <h2> Local Restaurants</h2>
                <InputGroup >
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                />
                </InputGroup><br></br>
            </div>
            <RestaurantList search={query} />
        </ApolloProvider>
    )
}
export default Home
