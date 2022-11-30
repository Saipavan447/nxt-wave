import {NavLink} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="nav-content">
      <img
        src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
        alt="logo"
        className="logo"
      />
      <div className="button-container">
        <NavLink to="/">
          <button type="button" className="add-item">
            ADD ITEM
          </button>
        </NavLink>
        <img
          src="https://i.ibb.co/Jj9QYXP/image.png"
          className="user"
          alt="user"
        />
      </div>
    </div>
  </nav>
)

export default Header
