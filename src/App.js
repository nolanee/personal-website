import "semantic-ui-css/semantic.min.css";
import Home from './Home'
import Page from './Page';
import TopMenu from './TopMenu';
import Front from './Front'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content : <Front/>
    }
  }

  handleClick (type) {
    if (type === "Home") {
      this.setState({content : <Home/>});
    } else {
      this.setState({content : <Front/>});
    }
  }

  render () {
    return (
      <div>
      <TopMenu onClickFront={() => {this.handleClick("Front")}} 
      onClickHome={() => {this.handleClick("Home")}}/>
      <Page>
        {this.state.content}
      </Page>
      </div>
    )
  };
}

export default App;
