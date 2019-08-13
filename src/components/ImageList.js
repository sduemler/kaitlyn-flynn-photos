import React from 'react';
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
      console.log(image.id);
      return <ImageCard key={image.id} image={image} />
  });
  return <div className="image-list">{images}</div>
    //return <div>This is the image list!</div>
};

export default ImageList;
