import React from 'react';
import './App.css';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["schema1", "schema2", "schema3"],
            activatedItem: ""
        };
    }

    toggleCountersMenu = (name) => {
        var name1 = name;
        this.setState((prevState) => {
            return {
                activatedItem: name1
            }
        });
    }

    render() {
        const products = this.state.items.map((item, index) => {
            return <a class="dropdown-item" href="#">
                {item}
            </a>;

        });

        return (
                <div className="float-right">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Список схем
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {products}
                    </div>
                </div>
        );
    }
}

