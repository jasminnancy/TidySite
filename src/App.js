import React, {Component} from 'react';
import './App.css';
import Homepage from './containers/Homepage'
import Calendar from './containers/Calendar'
import Projects from './containers/Projects'
import Navigation from './containers/Navigation'
import { Card } from 'react-bootstrap'

class App extends Component {
  state = {
    activePage: 'home'
  }

  handleChangePageClick = (e) => {
    this.setState({
      activePage: e.target.name
    })
  }

  render () {
    return (
      <div className="App">
        <Navigation handleChangePageClick={this.handleChangePageClick} activePage={this.state.activePage}/>
        <Card style={{ width: '95%', margin: 'auto', minHeight: '625px' }}>
          {this.state.activePage === 'home' ? <Homepage /> : ""}
          {this.state.activePage === 'calendar' ? <Calendar /> : ""}
          {this.state.activePage === 'projects' ? <Projects /> : ""}
        </Card>        
      </div>
    )
  }
}

export default App;
