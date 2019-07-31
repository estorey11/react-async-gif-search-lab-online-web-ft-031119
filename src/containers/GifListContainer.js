import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
     gifs: []
   }

  handleSearch= (search) => {
    const url= `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
      debugger;
  }



  render(){
    return(
      <div id="container">
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
