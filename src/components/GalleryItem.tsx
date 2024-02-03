import '../App.css'

type GalleryItemProps = {
    imageString: string
}

const GalleryItem = ({imageString}: GalleryItemProps) => {
  return (
    <div className='gallery-item'>
        <img src={imageString} alt="Random image" />
        {/* <button className='edit-btn'>Modifier</button> */}
    </div>
  )
}

export default GalleryItem