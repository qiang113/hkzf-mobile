import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Citys from './components/Citys'
import Map from './components/Map'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/citys" component={Citys} />
          <Route path="/map" component={Map} />
        </div>
      </Router>
    )
  }
}

export default App
