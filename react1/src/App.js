import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searcher from './components/Searcher'
import poems from './data/poems'

const App = () => (
  <div>
    <Searcher poems={poems}/>
    <Navbar />
    <Footer />
  </div>
)

export default App