import React from 'react';
import axios from 'axios';

const url = 'https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=d9bcbdfdbee02fb2af1f8e5dbb2bc321&user_id=160810395@N08&format=json&nojsoncallback=1';

class App extends React.Component {
    state = { images: [], photoUrls: []};


    componentDidMount() {
        this.getPhotos();
    }


    getPhotos = async () => {
        const response = await axios.get(url);
        this.setState( {images: response.data.photos.photo});
        let urlString = `https://farm${this.state.images[0].farm}.staticflickr.com/`;
        urlString += `${this.state.images[0].server}/${this.state.images[0].id}_${this.state.images[0].secret}.jpg`;
        this.setState({photoUrls: urlString});
        console.log(this.state.photoUrls);
    };

    getPhotoURL = () => {
        let urlString = `https://farm${this.state.images[0].farm}.staticflickr.com/`;
        urlString += `${this.state.images[0].server}/${this.state.images[0].id}_${this.state.images[0].secret}.jpg`;
        console.log(urlString);
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