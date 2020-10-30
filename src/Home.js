import {
    Image,
    Header
  } from 'semantic-ui-react';
  import React from 'react';
  import background from "./images/IMG_0710.jpg"
  import logo from './images/android-chrome-512x512.png';
  import WebPage from './WebPage'
  
  function Front() {
    return (
        <div>
        <WebPage>
          <Image src={background} size="small" inline style={{ marginTop: '0em'}}/>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>
            A text container is used for the main container, which is useful for single column layouts.
          </p>
        
          <Image src={logo} style={{ marginTop: '2em', width: '2rem'}} />
          <Image src={background} style={{ marginTop: '2em' }} />
          <p>You are silly.</p>
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        </WebPage>
        </div>
    )
  }

  export default Front;