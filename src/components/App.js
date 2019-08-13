import React from 'react';
import axios from 'axios';

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
        //console.log(response);
        this.setState( {images: response.data.photoset.photo});
        this.setState({photoUrls: this.getPhotoURL()});
        //console.log(this.state.photoUrls);
    };

    getPhotoURL = () => {
        let urlString = `https://farm${this.state.images[0].farm}.staticflickr.com/`;
        urlString += `${this.state.images[0].server}/${this.state.images[0].id}_${this.state.images[0].secret}.jpg`;
        //console.log(urlString);
        return urlString;
    };

    render() {
        return (
            //<div>Here there will be images!</div>
            <img alt="first" src={this.state.photoUrls}/>
        );
    }

}

export default App;