import React, {Component} from 'react';
import './form.css';

export default class Form extends Component {

    state = {
        term: ''
    }
    
    onSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
    }

    sendResponce = (e) => {
        e.preventDefault();
        this.props.updateTerm(this.state.term);
    }

    clearInput() {
        const input = document.querySelector('.input-country');
        input.value = '';
        this.setState({
            term: ''
        });
    }

    render() {

        const { term, onDelete } = this.props;
        return (
            <form>
                <input type="text" 
                    className="input-country"
                    placeholder="Введите название страны на латинице"
                    value={term}
                    onChange={this.onSearch}/>

                <div className="btn-group">
                    <button className="btn btn-search"
                        onClick={this.sendResponce}>Отправить</button>
                    <button className="btn btn-reset"
                        onClick={(e) => {onDelete(e); this.clearInput()}}>Сброс</button>
                </div>
            </form> 
        )
    }
}