import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

export default class Index extends Component {
  static propTypes = {
    children: Proptypes.any,
  };
  render() {
    return (
      <div>
        <Link to="/index">首页</Link>
        <Link to="/list">列表页</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
