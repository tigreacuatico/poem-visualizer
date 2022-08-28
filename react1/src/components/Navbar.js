import "./style.css"
import img from "./GEMELA.png"

const Navbar = () => (
    <div className='navbar'>
        <img className='navbar-img' src={img} alt="navbar" />
        <button className='navbar-item'>index</button>
        <button className='navbar-item'>about</button>
        <button className='navbar-item'>write me a poem</button> 
    </div>
  )
  
export default Navbar



