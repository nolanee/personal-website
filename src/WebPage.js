import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';
import logo from './images/android-chrome-512x512.png'

function WebPage(props) {
    return (
      <div>
      <Container text style={{ marginTop: '15vh'}}>
        {props.children}
      </Container>
      <Segment inverted vertical style={{ margin: '15vh 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
  
          <Image centered size='mini' src={logo} />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
    );
  }
  
  export default WebPage;