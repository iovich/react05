import React from 'react';
import StopWatch from './components/StopWatch';

class App extends React.Component {

  // state = { isVisible: true, theme: 'light' }

  // setVisible = () => {
  //   this.setState({ isVisible: !this.state.isVisible })
  // }
  // changeTheme = () => {
  //   this.setState(
  //     { theme: this.state.theme === 'light' ? 'dark' : 'light' }
  //   )
  // }
  render() {
    return (
      <div>
        {/* <button onClick={this.setVisible}>visible</button>
        <button onClick={this.changeTheme}>change theme</button>
        {this.state.isVisible && <Counter theme={this.state.theme} />}
        {this.state.isVisible && <Counter2 theme={this.state.theme} />} */}

        <StopWatch/>
      </div >
    );
  }
}

export default App;
