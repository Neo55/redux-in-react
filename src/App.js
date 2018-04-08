import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>Данные по пользователю
            <li>Имя: {this.props.userInfo.name}</li>
            <li>Фамилия: {this.props.userInfo.surname}</li>
            <li>Возраст: {this.props.userInfo.age}</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps)(App);