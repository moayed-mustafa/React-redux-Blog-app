import React, {useState} from 'react';
import './App.css';
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import BlogsContext from './BlogsContext'

function App() {

  const [blogs, setBlogs] = useState([])
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Router>
        <BlogsContext.Provider
            value={{blogs, setBlogs}}>
              <Routes />
          </BlogsContext.Provider>
      </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
