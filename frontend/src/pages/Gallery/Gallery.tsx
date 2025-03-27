import './Gallery.css';
import PhotoGallery from '../../components/Gallery/PhotoGallery';

const Gallery = ()=>{
    return(
        <>
            <div className="gallery-container">
                <h1 className="photo-gallery-text">Photo Gallery</h1>
                <PhotoGallery/>
            </div>
        </>
    )
}

export default Gallery;
