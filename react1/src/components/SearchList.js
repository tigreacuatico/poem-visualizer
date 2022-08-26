import Poem from './Poem'

function SearchList({filteredPoems}) {
    const filtered = filteredPoems.map(poem =>  <Poem key={poem.id} poem={poem} />); 
    return (
      <div>
        {filtered}
      </div>
    );
  }
  
export default SearchList;


// https://medium.com/geekculture/create-a-simple-search-component-in-react-js-using-react-hooks-710c1dfe8b58