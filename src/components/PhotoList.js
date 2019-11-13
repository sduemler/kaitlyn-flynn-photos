import React from 'react';
import axios from 'axios';

const baseURL = 'https://www.flickr.com/services/rest/';
const flickrMethod = '?method=flickr.photos.getSizes';
const api_key = `api_key=${process.env.REACT_APP_FLICKR_API_KEY}`;
let photo_id = '';
const urlEnd = 'format=json&nojsoncallback=1';

class PhotoList extends React.Component {
    constructor(props){
        super(props);
    }

    getPhotoURL = () => {
        let urlString = `https://farm${this.props.image.farm}.staticflickr.com/`;
        urlString += `${this.props.image.server}/${this.props.image.id}_${this.props.image.secret}.jpg`;
        return urlString;
    };

    getPhotoSize = async () => {
        const url = `${baseURL}${flickrMethod}&${api_key}&photo_id=${this.props.image.id}&${urlEnd}`;
        const response = await axios.get(url);
    };

    addPhotos = () => {

    };

    render() {return null}
}
let photos = [];

let photo = {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 4,
    height: 3
};

photos.push(photo);

export { photos };

export default PhotoList;