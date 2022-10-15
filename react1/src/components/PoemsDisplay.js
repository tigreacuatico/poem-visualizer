//import poemsData from "../data/poems"
import Poem from "./Poem"

function PoemsDisplay ({poems}) {
    const poems_display = poems.map(poem => {
        return <Poem title={poem.title} text={poem.text} decoURL={poem.decoURL}/>
    })
    console.log(poems_display)

    return (
      <div className='poem-display'>
        {poems_display}
      </div>
    );
}

export default PoemsDisplay