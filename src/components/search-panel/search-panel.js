import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component {

    state = {
        search: ''
    };

    changeSearch = (e) => {
        const term = e.target.value;
        this.setState({
            search: term
        });
        console.log(`### in changeSearch ${term}`);
        this.props.onSetTerm(term);
    }

    render() {
        const searchPlaceholder = "Type here to search";

        return (
            <div className="search-panel">
                <input placeholder={searchPlaceholder}
                    className="form-control" 
                    onChange={this.changeSearch}
                    value={this.state.value} />
            </div>
        );
    }
    
}

export default SearchPanel;