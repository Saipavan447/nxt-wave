import {Route, Switch} from 'react-router-dom'
import Resources from './components/Resources'
import Requests from './components/Requests'
import Users from './components/Users'
import CreateItem from './components/CreateItem'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="app-body">
      <Switch>
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/requests" component={Requests} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/" component={CreateItem} />
      </Switch>
    </div>
  </div>
)
export default App
