import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searcher from './components/Searcher'
import Hero from './components/Hero'
import Explanation from './components/Explanation'
import SendMeAPoem from './components/SendMeAPoem'
import poems from './data/poems'
import PoemDisplay from './components/PoemsDisplay'

const App = () => (
  <div>
    <Hero />
    <PoemDisplay poems={poems}/>
    <Searcher poems={poems}/>
    <Navbar />
    <Explanation />
    <SendMeAPoem />
    <Footer />
  </div>
)

export default App