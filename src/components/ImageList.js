import React from 'react';
import Gallery from "react-photo-gallery";
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

export default ImageList;
