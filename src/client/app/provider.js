import React from 'react';
import Context from './context';
import PropType from 'prop-types';

export default class Provider extends React.Component {
  static propTypes = {
    initialData: PropType.object,
    children: PropType.children,
  };
  render() {
    return (
      <Context.Provider value={this.props.initialData || {}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
