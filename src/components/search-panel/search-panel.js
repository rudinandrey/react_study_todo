import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const searchPlaceholder = "Type here to search";

    return (
        <div className="search-panel">
            <input placeholder={searchPlaceholder}
                className="form-control" />
        </div>
    );
}

export default SearchPanel;