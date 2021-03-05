import React from 'react';
import PhotoData from './PhotoData'

// Renders image search results

export default class SearchResults extends React.Component {
    render(){
        const searchedWord = this.props.match.params.searchText
        return (
            <div>
            <h3>Your search of</h3>
            <PhotoData title={searchedWord} tag={searchedWord}></PhotoData>
            </div>
        )
    }
}