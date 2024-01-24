import './App.css';
import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SearchComponents from './SearchComponents.js'
import StudentCards from './StudentCards'
import Box from '@mui/material/Box';
class App extends React.Component{
  
    
  render(){
    return <div className="App">
      <SearchComponents/>
      
    </div>
}
}

export default App;