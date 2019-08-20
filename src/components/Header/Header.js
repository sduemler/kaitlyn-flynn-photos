import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="ui attached stackable secondary vertical menu">
                <div className="ui segment">
                    <h1>Kaitlyn Flynn Photography</h1>
                </div>
                <div className="right menu">
                    <a className="item">
                        Portfolio
                    </a>
                    <a className="item">
                        Contact
                    </a>
                    <a className="item">
                        FAQ
                    </a>
                    <div className="icons">
                        <i className="facebook icon" />
                        <i className="instagram icon" />
                        <i className="flickr icon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;