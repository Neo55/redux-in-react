import React from 'react';

export default class User extends React.Component {
    render () {
       return (
            <div>
                <ul>Данные по пользователю
                    <li>Имя: {this.props.userInfo.name}</li>
                    <li>Фамилия: {this.props.userInfo.surname}</li>
                    <li>Возраст: {this.props.userInfo.age}</li>
                </ul>
            </div>
        )
    }
}