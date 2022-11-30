import './index.css'

const RequestItem = props => {
  const {cloudResourcesDetails} = props
  const {
    title,
    iconUrl,
    link,
    description,
    category,
    tag,
  } = cloudResourcesDetails
  const requestContainer =
    tag === 'request'
      ? 'request-card-container-block'
      : 'request-card-container-none'
  return (
    <div className={requestContainer}>
      <div className="request-top-container">
        <img src={iconUrl} alt={title} className="request-images" />
        <div>
          <h1 className="request-title">{title}</h1>
          <p className="request-category">{category}</p>
        </div>
      </div>
      <div className="request-bottom-container">
        <a href={link} className="request-link">
          {link}
        </a>
        <p className="request-description">{description}</p>
      </div>
    </div>
  )
}
export default RequestItem
