import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Nestable } from '../../src/react-dnd-nestable';

class Demo extends Component {
  state = {
    items: [
      { id: 1, text: 'Item #1', children: [] },
      { id: 2, text: 'Item #2', children: [] },
      { id: 3, text: 'Item #3', children: [] },
      { id: 4, text: 'Item #4', children: [{ id: 5, text: 'Item #5', children: [] }] }
    ]
  };

  renderItem = ({ item, depth }) => {
    return (
      <div style={ depth > 1 ? styles.nested : {} }>
        <div style={ styles.item }>
          { item.id }
        </div>
      </div>
    );
  };

  updateItems = (newItems) => {
    this.setState({ items: newItems });
  };

  render() {
    return (
      <Nestable
        items={ this.state.items }
        renderItem={ this.renderItem }
        onUpdate={ this.updateItems }
        maxDepth={ 3 }
      />
    );
  }
}

var styles = {
  item: {
    margin: '5px 0',
    padding: 10,
    border: '1px solid #000',
    background: '#fff'
  },
  nested: {
    marginLeft: 30
  }
};

export default DragDropContext(HTML5Backend)(Demo);
