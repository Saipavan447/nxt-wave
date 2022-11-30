import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import RequestItem from '../RequestItem'
import Container from '../Container'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Requests extends Component {
  state = {
    cloudResources: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getCloudResources()
  }

  getCloudResources = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const response = await fetch(
      `https://media-content.ccbp.in/website/react-assignment/resources.json?`,
    )
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        iconUrl: eachItem.icon_url,
        link: eachItem.link,
        description: eachItem.description,
        category: eachItem.category,
        tag: eachItem.tag,
      }))
      this.setState({
        cloudResources: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  handleChange = e => {
    this.setState({searchInput: e.target.value})
  }

  renderFailureView = () => (
    <div className="failure-users-list">
      <h1 className="heading">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  render = () => {
    const {cloudResources, searchInput} = this.state
    const filter = cloudResources.filter(eachData =>
      eachData.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const shouldShowUsersList = cloudResources.length > 0

    return shouldShowUsersList ? (
      <div className="all-users-container">
        <Container handleChange={this.handleChange} />
        <ul className="data-container">
          {filter.map(eachData => (
            <RequestItem key={eachData.id} cloudResourcesDetails={eachData} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-user-view">
        <h1 className="no-users-heading">No data Found</h1>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="Grid" color="#252525" height="50" width="50" />
    </div>
  )

  renderAllUserList = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.render()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}
export default Requests
