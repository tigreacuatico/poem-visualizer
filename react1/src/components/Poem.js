const Poem = (props) => {
    <div className='poem'>
      
        <h3 className='poem-title'>{props.title}</h3>
        <p className='poem-text'>{props.text}</p>
        <img src={process.env.PUBLIC_URL + props.decoURL} alt="poem-deco" /> 
    </div>
}
  
export default Poem

//process.env.PUBLIC_URL + 