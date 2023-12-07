import React, {useState} from 'react'
import Grid from '../table/Grid';

const Search = () => {
    const [query,setQuery] = useState('');
    const [searchResults, setSearchResults] = useState();

    const searchURL = ' https://swapi.dev/api/people/?search=';

    const getInfo = () => {
        console.log('Getting info from API...')
        fetch(searchURL+query)
          .then(res => res.json())
          .then(data => setSearchResults(data.results))
          .catch(e => {
            console.log({error: e});
        });
    }

    const handleInputChange = (e) => {
        setQuery(e.target.value)
        if (query && query.length > 0) {
          getInfo();
        }
    }

  return (
    <>
        <form>
        <input 
            placeholder='Search for...'
            onChange={handleInputChange}
            value={query}
        />
        </form>
        <Grid searchResults={searchResults} />
    </>
  )
}

export default Search