import React from 'react';
import ImageList from "./ImageList";
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter, Route} from 'react-router-dom';

function Home() {
    return <ImageList />
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

export default App;