import React from 'react';
import axios from 'axios';

const baseURL = 'https://www.flickr.com/services/rest/';
const flickrMethod = '?method=flickr.photos.getSizes';
const api_key = `api_key=${process.env.REACT_APP_FLICKR_API_KEY}`;
let photo_id = '';
const urlEnd = 'format=json&nojsoncallback=1';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    };

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
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

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        console.log(height);
        const spans = Math.ceil(height / 10 + 1);
        this.setState({spans});
    }

    render() {
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    src={this.getPhotoURL()}
                    alt={this.props.image.title}
                />
            </div>
        );

    }

}

export default ImageCard;