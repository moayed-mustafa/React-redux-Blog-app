import React, {useState} from 'react';
import './App.css';
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import BlogsContext from './BlogsContext'


//  * I don't need the context here anymore
//  * I also don't need to set a state or pass it down using a context
//  todo: for this component, only remove the state and context
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
