import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Citys from './components/Citys'
import Map from './components/Map'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          APP组件
          <ul>
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/citys">首页</Link>
            </li>
            <li>
              <Link to="/map">首页</Link>
            </li>
          </ul>
          <Route path="/home" component={Home} />
          <Route path="/citys" component={Citys} />
          <Route path="/map" component={Map} />
        </div>
      </Router>
    )
  }
}

export default App
