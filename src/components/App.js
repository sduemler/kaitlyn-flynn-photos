import React from 'react';
import ImageList from "./ImageList";
import Navigation from "./Navigation";
import {withRouter, NavLink, BrowserRouter, Route} from 'react-router-dom';

function Home() {
    return <ImageList />
}

function About() {
    return "About";
}

function Contact() {
    return "Contact";
}

function App() {
    return (
        <div style={{width: "100vw", height: "vw"}}>
            <BrowserRouter>
                <Navigation/>
                <div style={{width: "100vw", height: "calc(100vh - 60px)", marginTop: 60}}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

// class App extends React.Component {
//     state = { images: []};
//
//
//     componentDidMount() {
//         this.getPhotos();
//     }
//
//
//     getPhotos = async () => {
//         const response = await axios.get(url);
//         this.setState( {images: response.data.photoset.photo});
//         console.log(this.state.images);
//     };
//
//     getPhotoURLList = () => {
//         let photosInfo = [];
//         for(let i = 0; i < this.state.images.length; i++){
//             let photoInfo = [];
//             let urlString = `https://farm${this.state.images[i].farm}.staticflickr.com/`;
//             urlString += `${this.state.images[i].server}/${this.state.images[i].id}_${this.state.images[i].secret}.jpg`;
//             photoInfo.push(urlString);
//             this.getPhotoSize(this.state.images[i].id).then((photoSize) => {
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
//         console.log(photoInfo);
//         for(let i = 0; i < photoInfo.length; i++){
//             console.log(photoInfo[i][1]);
//             let photo = {
//                 src: photoInfo[i][0],
//                 width: photoInfo[i][1],
//                 height: photoInfo[i][2]
//             };
//             photos.push(photo);
//         }
//         console.log(photos);
//         return photos;
//     };
//
//     render() {
//         return (
//             <div className="ui fluid container" style={{marginTop:'10px'}}>
//                 <div className="column">
//                     <Header />
//                 </div>
//                 <div className="column">
//                     <Gallery photos={this.getPhotoList()} />
//                     <ImageList images={this.state.images} />
//                 </div>
//             </div>
//         );
//     }
//
// }

export default App;