import React, { Component } from "react";
import loader from './../../assets/images/ripple-loader.svg';

export class LoadContent extends Component {
  render() {
    return (
      <img
        src={loader}
        className={`load-content`}
        alt='ripple-loader'
      />
    );
  }
}

export default LoadContent;
