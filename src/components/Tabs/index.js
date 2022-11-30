import {NavLink} from 'react-router-dom'

import './index.css'

const Tab = () => (
  <div className="tab-container">
    <ul className="tab-items">
      <li className="link-item">
        <NavLink
          className="links"
          to="/resources"
          activeStyle={{color: '#D7DFE9', backgroundColor: '#0B69FF'}}
        >
          Resources
        </NavLink>
      </li>
      <li className="link-item">
        <NavLink
          className="links"
          to="/requests"
          activeStyle={{color: '#D7DFE9', backgroundColor: '#0B69FF'}}
        >
          Requests
        </NavLink>
      </li>
      <li className="link-item">
        <NavLink
          className="links"
          to="/users"
          activeStyle={{color: '#D7DFE9', backgroundColor: '#0B69FF'}}
        >
          Users
        </NavLink>
      </li>
    </ul>
  </div>
)

export default Tab
