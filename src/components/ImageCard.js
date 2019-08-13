import React from 'react';
import axios from 'axios';

const baseURL = 'https://www.flickr.com/services/rest/';
const flickrMethod = '?method=flickr.photos.getSizes';
const api_key = `api_key=${process.env.REACT_APP_FLICKR_API_KEY}`;
let photo_id = '';
const urlEnd = 'format=json&nojsoncallback=1';
//const url = baseURL + flickrMethod + '&' + api_key + '&' + user_id + '&' + photoset_id + '&' + urlEnd;

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    };

    componentDidMount() {
        this.getPhotoSize();
        //this.imageRef.current.addEventListener('load', this.setSpans);
    }

    getPhotoURL = () => {
        let urlString = `https://farm${this.props.image.farm}.staticflickr.com/`;
        urlString += `${this.props.image.server}/${this.props.image.id}_${this.props.image.secret}.jpg`;
        //console.log(urlString);
        return urlString;
    };

    getPhotoSize = async () => {
        const url = `${baseURL}${flickrMethod}&${api_key}&photo_id${this.props.image.id}&${urlEnd}`;
        const response = await axios.get(url);
        console.log('Photo size below!');
        console.log(response);
    };

    setSpans = () => {

    }

    render() {
        return(
            <div>
                <img src={this.getPhotoURL()} />
            </div>
        );

    }

}

export default ImageCard;