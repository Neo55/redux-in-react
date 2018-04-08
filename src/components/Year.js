import React from 'react';

export default class Year extends React.Component {
    constructor(props) {
        super(props);

        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(event) {
        return this.props.setYear(event.target.textContent);
    }

    render () {
        return (
            <div>
                <p>You change {this.props.year} year!!!</p>
                <button onClick={this.onBtnClick}>1977</button>
                <button onClick={this.onBtnClick}>1991</button>
                <button onClick={this.onBtnClick}>2005</button>
            </div>
        )
    }
}