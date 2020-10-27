import {
  Image,
} from 'semantic-ui-react';
import React from 'react';
import images from "./images/cv/index.js"

function Home() {
  let page_images = []
  for (let i = 0; i <= 3; i++){
    let image = images[i]
    page_images.push(<Image src={image.default}></Image>)
  }
  return page_images;
}

export default Home;