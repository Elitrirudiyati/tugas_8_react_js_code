import React, {Component} from 'react';
import './css/bootstrap.min.css';
import PageHeader from './Component/PageHeader';
 import './App.css'
import PageFooter from './Component/PageFooter';
import PageBody from './Component/PageBody'



class App extends Component {
  render(){
      return (
        <div className="App">
        <PageHeader/>
        <br/>
        <PageBody/>
        <br/>
        <PageFooter/>
    </div>
  );
}
}

export default App;
