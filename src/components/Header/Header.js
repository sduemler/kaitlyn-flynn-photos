import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="ui stackable secondary pointing menu">
                <div className="ui segment">
                    <h1>Kaitlyn Flynn Photography</h1>
                </div>
                <div className="profile">
                    <img className="ui tiny circular image" src="" />
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