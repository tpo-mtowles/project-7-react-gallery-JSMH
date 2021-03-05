import React, {Component} from 'react';
import apiKey from '../config';
import axios from 'axios';
import NotFound from './NotFound'

//searches for photos on Flickr API and renders to page 

export default class PhotoData extends Component {

    state = {
        results: [],
        notFound: false,
        loading: true
    }

    componentDidMount() {
        this.fetchPhotos()
    }

    fetchPhotos() {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.tag}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => {
                const results = res.data.photos.photo;
                const notFound = results.length === 0;
                this.setState({ results, notFound, loading: false });
            })
            .catch(error => {
                console.log('There was an error retrieving data', error);
            })
    
    }

// Builds URL for Flickr images   
    buildImageURL(photoData){
        let serverId = photoData.server;
        let id = photoData.id;
        let secret = photoData.secret;
        return `https://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`
    }

    render () { 
        return (
              <div className="photo-container">
                  <h2>{this.props.title}</h2>
                  {(this.state.loading)?<p>Loading...</p>: this.setState.loading=false}
                  {this.state.notFound && <NotFound title={this.props.title}/>}
                  <ul>
                      {this.state.results.map(img => {
                          return ( 
                              <li key={img.id}><img src={this.buildImageURL(img)} alt=""/></li>
                          )
                      })}
                  </ul>
              </div>
        ) 
    }
}
