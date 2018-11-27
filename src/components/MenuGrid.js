import React, { Component } from 'react';
import MenuFilter from './MenuFilter';
import MenuItemCard from './MenuItemCard';

export default class MenuGrid extends Component {
  state = {
    filter: '',
  };

  handleFilterData = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render() {
    const { menu } = this.props;
    const { filter } = this.state;

    return (
      <div>
        <MenuFilter menu={filter} onFilter={this.handleFilterData} />
        <ul className="menu">
          {menu.map(
            item =>
              item.name.toLowerCase().includes(filter.toLowerCase()) && (
                <MenuItemCard key={item.id}>{item}</MenuItemCard>
              ),
          )}
        </ul>
      </div>
    );
  }
}
