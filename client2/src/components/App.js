import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import StreamCreate from './stream/streamCreate';
import streamList from './stream/streamList';
import streamEdit from './stream/streamEdit';
import streamDelete from './stream/streamDelete';
import streamShow from './stream/streamShow';
import Header from './Header';
import history from '../history';

const App = () =>{
	return (
		<div className="ui container">
			<BrowserRouter hisotry={history}>
				<div>
					<Header />
		            <Route path="/" exact component={streamList} />
		            <Route path="/streams/new" exact component={StreamCreate} />
		            <Route path="/streams/edit/" exact component={streamEdit} />
		            <Route path="/streams/delete/" exact component={streamDelete} />
		            <Route path="/streams/show" exact component={streamShow} />
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App