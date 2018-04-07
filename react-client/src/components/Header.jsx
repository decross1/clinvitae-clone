import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Container,
  Menu,
  Dropdown
} from 'semantic-ui-react';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      archiveItem: ''
    }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  } 

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed='top' fitted size='large' inverted>
        <Container>
          <Menu.Item
            as={NavLink}
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
            to='/home'>
            Home
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
            to='/about'>
            About
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              as={NavLink}
              active={activeItem === 'Genes'}
              onClick={this.handleItemClick}
              to='/Genes'>
              Genes
            </Menu.Item>
          </Menu.Menu>

        </Container>
      </Menu>
    )
  }
}


export default withRouter(Header);