import React from 'react';
import PropTypes from 'prop-types';
import './ImageList.css';
import Gallery from "react-photo-gallery";
import ImageCard from "./ImageCard";
import axios from "axios";
import qs from 'query-string';
import {Loader, Message} from 'semantic-ui-react';

const baseURL = 'https://www.flickr.com/services/rest/';
const user_id = '160810395@N08';
const photoset_id = '72157710272039597';
const api_key = process.env.REACT_APP_FLICKR_API_KEY;


const baseQueryParams = {
    format: "json",
    nojsoncallback: 1,
    api_key,
    user_id,
    photoset_id,
}

async function getSize({id}) {
    const params = {
        ...baseQueryParams,
        method: "flickr.photos.getSizes",
        photo_id: id
    }

    const response = await axios.get(`${baseURL}?${qs.stringify(params)}`);

    return {id, sizes: response.data.sizes.size};
}

function ImageList() {
    const [photos, setPhotos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function getImages() {
            const params = {
                ...baseQueryParams,
                method: "flickr.photosets.getPhotos"
            };

            try {
                const response = await axios.get(`${baseURL}?${qs.stringify(params)}`);
                const _photos = await Promise.all(response.data.photoset.photo.map(getSize));

                setPhotos(_photos);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getImages();
    }, [])

    if (loading) {
        return <Loader active/>
    }

    if (error) {
        return <Message error header="An error occurred" content={error.message}/>
    }

    console.log(photos);

    const galleryPhotos = photos.map(photo => {
        //const [size] = photo.sizes;
        const size = photo.sizes[12];

        return {
            src: size.source,
            width: size.width,
            height: size.height
        }
    })

    return <Gallery photos={galleryPhotos} direction={"column"}/>
}

// const ImageList = (props) => {
//   const images = props.images.map((image) => {
//       return <ImageCard key={image.id} image={image} />
//   });
//
//   return <div className="image-list">{images}</div>
// };
// class ImageList extends React.Component {
//     state = {images: []};
//
//     constructor(props){
//         super(props);
//         this.state = {images: props.images}
//     }
//
//     getPhotoURLList = () => {
//         let photosInfo = [];
//         for(let i = 0; i < this.state.images.length; i++){
//             let photoInfo = [];
//             let urlString = `https://farm${this.state.images[i].farm}.staticflickr.com/`;
//             urlString += `${this.state.images[i].server}/${this.state.images[i].id}_${this.state.images[i].secret}.jpg`;
//             photoInfo.push(urlString);
//             this.getPhotoSize(this.state.images[i].id).then((photoSize) => {
//                 console.log(photoSize);
//                 photoInfo.push(photoSize['width']);
//                 photoInfo.push(photoSize['height']);
//                 photosInfo.push(photoInfo);
//             });
//         }
//         return photosInfo;
//     };
//
//     getPhotoSize = async (photoId) => {
//         const url = `${baseURL}${flickrMethodGetSize}&${api_key}&photo_id=${photoId}&${urlEnd}`;
//         const response = await axios.get(url);
//         return response.data.sizes.size[12];
//     };
//
//     getPhotoList = () => {
//         let photos = [];
//         const photoInfo = this.getPhotoURLList();
//         for(let i = 0; i < photoInfo.length; i++){
//             console.log(photoInfo[i][1]);
//             let photo = {
//                 src: photoInfo[i][0],
//                 width: photoInfo[i][1],
//                 height: photoInfo[i][2]
//             };
//             photos.push(photo);
//         }
//         return photos;
//     };
//
//     render() {
//         return (
//             <Gallery photos={this.getPhotoList()} />
//         )
//     }
// }

export default ImageList;
