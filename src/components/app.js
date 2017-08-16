import React, { Component } from 'react';

export default class App extends Component {
	//this.props.children gives the child Route information in routes.js
  render() {
    return (
      <div>
     	{this.props.children}
      </div>
    );
  }
}
