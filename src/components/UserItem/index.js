import './index.css'

const UserItem = props => {
  const {cloudResourcesDetails} = props
  const {
    title,
    iconUrl,
    link,
    description,
    category,
    tag,
  } = cloudResourcesDetails

  const userContainer =
    tag === 'user' ? 'user-card-container-block' : 'user-card-container-none'

  return (
    <div className={userContainer}>
      <div className="user-top-container">
        <img src={iconUrl} alt={title} className="user-images" />
        <div>
          <h1 className="user-title">{title}</h1>
          <p className="user-category">{category}</p>
        </div>
      </div>
      <div className="user-bottom-container">
        <a href={link} className="user-link">
          {link}
        </a>
        <p className="user-description">{description}</p>
      </div>
    </div>
  )
}
export default UserItem
