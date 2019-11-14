import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        // return (
        //     <div className="ui container">
        //         <h1 className="ui center aligned header">Kaitlyn Flynn Photography</h1>
        //         <div className="ui three item menu">
        //             <a className="active item">Portfolio</a>
        //             <a className="item">Contact</a>
        //             <a className="item">FAQ</a>
        //         </div>
        //     </div>
        // );
        return (
          <div className="ui left fixed vertical menu" style={{marginTop:'10px'}}>
              <h1 className="ui center aligned header">Kaitlyn Flynn Photography</h1>
              <a className="active item">Portfolio</a>
              <a className="item">FAQ</a>
              <a className="item">Contact</a>
              <div className="icons">
                  {/*<a href="https://www.facebook.com/kflynn.photos/"><i className="big facebook link icon"/></a>*/}
                  {/*<a href="https://www.instagram.com/kflynn.photos/"><i className="big instagram link icon"/></a>*/}
                  {/*<a href="https://www.flickr.com/photos/160810395@N08"><i className="big flickr link icon"/></a>*/}
                  <i className="big facebook link icon" href="https://www.facebook.com/kflynn.photos/"/>
                  <i className="big instagram link icon" />
                  <i className="big flickr link icon" />
              </div>

          </div>
        );
    }
}

export default Header;