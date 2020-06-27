import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.scss';
import Tollbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    })
  }

  render() {
    return  (
      <Aux>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} isAuth={this.props.isAuth}/>
        <Tollbar sideDrawerToggleClicked={this.sideDrawerToggleHandler} isAuth={this.props.isAuth}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token != null
  }
}


export default connect(mapStateToProps)(Layout);