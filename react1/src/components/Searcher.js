import Scroll from './Scroll'
import SearchList from './SearchList'
import {useState} from 'react'


function Searcher({poems}) {

  const [searchField, setSearchField] = useState("") // initialise the value of the searchField state with useState("") (an empty string)
  const [searchShow, setSearchShow] = useState(false)

  //TODO en plan fer que busqui si ANY word of the array is == to the keyword searched
  // if troba una, stop--> show it
  const filteredPoems = poems.filter(
    poem => {
      return (
        poem
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
          <Scroll>
          <SearchList filteredPoems={filteredPoems} />
        </Scroll>
      );
    }
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">poem searcher</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "search poem" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Searcher;