import React, {Component} from 'react';
import UniService from '../../service/uni-service';

import './table.css';

export default class Table extends Component {

    state = {
        data: []
    }

    uniService = new UniService();

    componentDidMount() {
        this.getDataTerm();
    }

    componentDidUpdate(prevProps) {
        if (this.props.term !== prevProps.term) {
            this.getDataTerm();
        }
    }

    getDataTerm = () => {
        const { term } = this.props;

        if (!term) {
            return;
        }
        
        this.uniService.getResource(`search?&country=${term}`)
        .then(res => {
            this.setState({
                data: res
            })
        });
    }

    checkboxChecked = () => {
        const checkbox = document.querySelectorAll('.checkbox:checked');
        this.props.counter(checkbox.length);
    }
    
    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <View data={data} isChecked={this.checkboxChecked}/>
        )
    }
}

const View = ({data, isChecked}) => {
    const row = data.map(({name, country, web_pages, domains}, i) => {
        return (
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{name}</td>
                <td>{country}</td>
                <td><a href={web_pages[0]} target="_blank" rel="noreferrer">{domains[0]}</a></td>
                <td>
                    <input type="checkbox"
                        className="checkbox" 
                        onChange={isChecked}/>
                </td>
            </tr>
        )
    })

    return (
        <table>
            <tbody>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Country</th>
                <th>Web page</th>
                <th>Save to wishlist</th>
            </tr>
                {row}
            </tbody>
        </table>
    ) 
}