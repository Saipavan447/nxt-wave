import './index.css'

const ResourcesItem = props => {
  const {cloudResourcesDetails} = props
  const {name, link, description, resourceName} = cloudResourcesDetails

  return (
    <div className="resources-item">
      <div className="top-container">
        <img
          src="https://img.icons8.com/color/512/dropbox.png"
          alt={name}
          className="images"
        />
        <div>
          <h1 className="title">{name}</h1>
          <p className="category">{resourceName}</p>
        </div>
      </div>
      <div className="bottom-container">
        <a href={link} className="link">
          {link}
        </a>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}
export default ResourcesItem
