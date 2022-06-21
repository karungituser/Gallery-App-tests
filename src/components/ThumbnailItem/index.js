// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const thumbnailClassName = isActive
    ? `thumbnail-image active`
    : `thumbnail-image`

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li>
      <button type="button" className="image-btn" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
