import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions'

let styles = {
  backgroundColor: 'lightBlue ',
  width: '250px',
  height: '100px',
  // borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'Blue ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getData}
      >User List</button>
    );
  }

};

const mapDispatchToProps = {
  getData: getData,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
