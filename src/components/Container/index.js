import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import Tabs from '../Tabs'
import './index.css'

const Container = ({handleChange}) => {
  console.log(handleChange)
  return (
    <>
      <Header />
      <hr className="horizontal-line" />
      <Tabs />
      <div className="input-container">
        <AiOutlineSearch className="search-icon" size={20} />
        <input
          className="search-input"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </>
  )
}
export default Container
