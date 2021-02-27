import React, {Component} from 'react';
import UniService from '../../service/uni-service';
import Table from '../table';
import Form from '../form';
import Counter from '../counter';

import './app.css';

export default class App extends Component {

    state = {
        term: '',
        counter: 0
    }

    uniService = new UniService();

    updateTerm = (term) => {
        this.setState({term});
    }

    onDelete = (e) => {
        e.preventDefault();
        this.setState({
            term: '',
            counter: 0
        })
    }

    updateCounter = (counter) => {
        this.setState({counter})
    }

    render() {  
        const table = this.state.term ? <Table term={this.state.term} counter={this.updateCounter}/> : null;
        return (
            <>
                <div className="container">
                    <div className="form-wrapper">
                        <Form 
                            updateTerm={this.updateTerm}
                            onDelete={this.onDelete}/>
                        <Counter counter={this.state.counter}/>
                    </div>
                    {table}
                </div>
            </>
        )
    }   
}