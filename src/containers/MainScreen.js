import React, { Component } from 'react';
//import './App.scss';
import { connect } from 'react-redux';
import User from '../components/User';
import Year from '../components/Year';
import setYearAction from '../store/Year/actions';

class MainScreen extends Component {
  render() {
    return (
        <div>
            <User userInfo={this.props.userInfo}/>
            <Year year={this.props.year} setYear={this.props.setYearFunction}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        year: state.year.current
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setYearFunction: year => {
            dispatch(setYearAction(year))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);