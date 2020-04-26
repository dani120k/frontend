import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <button onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                        </button>
                    </div>
                    <div className="col-6">
                        <button>fakeButton</button>
                    </div>


                </div>
                <div className="row">
                    <div className="col-md-6 col-xl-3 b1">B1</div>
                    <div className="col-md-6 col-xl-3 b2">B2</div>
                    <div className="col-md-6 col-xl-3 b3">B3</div>
                    <div className="col-md-6 col-xl-3">
                        <List></List>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;