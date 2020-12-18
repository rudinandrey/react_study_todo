import React from 'react';

const SearchPanel = () => {
    const searchPlaceholder = "Type here to search";
    const searchStyle = {
        fontSize: '25px'
    };
    return (<input placeholder={searchPlaceholder}
        style={searchStyle}
        className="form-control" />
    );
}

export default SearchPanel;