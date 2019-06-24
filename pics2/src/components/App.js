import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App  extends React.Component{
	state = { images: []};

	onSearchSubmit = async term => {
	const response = await youtube.get('/search', {
	  params: {
	    q: term
	  }
	});

	render(){
	return(
	 	<div className="ui container"  style={{ marginTop: '120px' }}>
	 		<SearchBar 
	 		onSubmit = {this.onSearchSubmit}
	 		guesswhtItem = "whats' this"/>
	 		Found: {this.state.images.length} images
	 		<ImageList images={this.state.images}/>
		</div>
	);
	}
}

export default App;
