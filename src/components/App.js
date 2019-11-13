import React from 'react';
import axios from 'axios';
import ImageList from "./ImageList";
import Header from './Header/Header';
import Gallery from "react-photo-gallery";
import PhotoList from "./PhotoList";

const baseURL = 'https://www.flickr.com/services/rest/';
const flickrMethod = '?method=flickr.photosets.getPhotos';
const api_key = `api_key=${process.env.REACT_APP_FLICKR_API_KEY}`;
const user_id = 'user_id=160810395@N08&';
const photoset_id = 'photoset_id=72157710272039597';
const urlEnd = 'format=json&nojsoncallback=1';
const url = baseURL + flickrMethod + '&' + api_key + '&' + user_id + '&' + photoset_id + '&' + urlEnd;

class App extends React.Component {
    state = { images: [], photoUrls: []};


    componentDidMount() {
        this.getPhotos();
    }


    getPhotos = async () => {
        const response = await axios.get(url);
        this.setState( {images: response.data.photoset.photo});
    };

    getPhotoURLList = () => {
        console.log(this.state.images);
        let photoURLs = [];
        for(let i = 0; i < this.state.images.length; i++){
            let urlString = `https://farm${this.state.images[i].farm}.staticflickr.com/`;
            urlString += `${this.state.images[i].server}/${this.state.images[i].id}_${this.state.images[i].secret}.jpg`;
            photoURLs.push(urlString);
        }
        return photoURLs;
    };

    getPhotoList = () => {
        let photos = [];
        const photoURLs = this.getPhotoURLList();
        for(let i = 0; i < this.state.images.length; i++){
            let photo = {
                src: photoURLs[i],
                width: 4,
                height: 3
            };
            photos.push(photo);
        }
        return photos;
    };

    render() {
        return (
            <div className="ui fluid container" style={{marginTop:'10px'}}>
                <div className="column">
                    <Header />
                </div>
                <div className="column">
                    <Gallery photos={this.getPhotoList()} />
                </div>
            </div>
        );
    }

}

export default App;