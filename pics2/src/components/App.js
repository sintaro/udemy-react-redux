import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App  extends React.Component{
	onSearchSubmit(term){
		console.log(term)
		axios.get('https://api.unsplash.com/search/photos',{
			params:{ query:term },
			headers:{
				Authorization:
				'Client-ID d2783c26d14b6672319014afdefe5e24d328b73a0520cad664acf698e1d9771d'
			}
		});
	}


	render(){
	return(
	 	<div className="ui container"  style={{ marginTop: '120px' }}>
	 		<SearchBar onSubmit = {this.onSearchSubmit}/>
		</div>
	);
	}
}

export default App;
