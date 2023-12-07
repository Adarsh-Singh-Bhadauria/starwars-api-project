import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Grid = (props) => {
    const[tableData, setTableData] = useState([]);
    const [url, setUrl] = useState(
      "https://swapi.dev/api/people/?page=1"
    );

    useEffect(() => {
        fetch(url)
          .then((data) => data.json())
          .then((data) => setTableData(data))
      }, [url])
       console.log(tableData);

       const columns = [
        { field: 'name', headerName: 'NAME' },
        { field: 'height', headerName: 'HEIGHT' },
        { field: 'mass', headerName: 'MASS'},
        { field: 'birth_year', headerName: 'BIRTH YEAR' },
        { field: 'created', headerName: 'CREATED' },
        { field: 'edited', headerName: 'EDITED'},
        { field: 'eye_color', headerName: 'EYE COLOR' },
        { field: 'films', headerName: 'FILMS' },
        { field: 'gender', headerName: 'GENDER'},
        { field: 'hair_color', headerName: 'HAIR COLOR' },
        { field: 'homeworld', headerName: 'HOMEWORLD' },
        { field: 'skin_color', headerName: 'SKIN COLOR'},
        { field: 'species', headerName: 'SPECIES' },
        { field: 'starships', headerName: 'STARSHIPS' },
        { field: 'url', headerName: 'URL'},
        { field: 'vehicles', headerName: 'VEHICLES' }
      ]

      function nextPage() {
        setUrl(tableData.next);
      }
    
      function previousPage() {
        setUrl(tableData.previous);
      }

  return (
    <div>
        <DataGrid
        getRowId={(x) => x.name}
        rows={props.searchResults || tableData.results || [] }
        columns={columns}
      />
      <button
				onClick={previousPage}
				disabled={tableData.previous ? false : true}
			>
				 Previous Page
			</button>
			<button
				onClick={nextPage}
				disabled={tableData.next ? false : true}
			>
				Next Page
			</button>
    </div>
  )
}

export default Grid