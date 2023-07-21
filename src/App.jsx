// Import data

// Import components
import './App.css';
import SearchBar from './SearchBar'
import Directory from './Directory'
import Gallery from './Gallery'
import Sidebar from './Sidebar'

function App(){
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <div>
        <Sidebar />
      </div>
      <div>
        <SearchBar />
        <Directory />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
