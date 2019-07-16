import React from 'react'

class GoogleAuth extends React.Component {

	state = { isSignedIn: null };

	  componentDidMount() {
	    window.gapi.load('client:auth2', () => {
	      window.gapi.client
	        .init({
	          clientId:
	            '453013470845-v7qjqb8r5b138jjic3v05i5brvujcqu0.apps.googleusercontent.com',
	          scope: 'email'
	        })
	        .then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
			    this.auth.isSignedIn.listen(this.onAuthChange);
			  	this.setState({isSignedIn:this.auth.isSignedIn.get()})
	        });
	    });
	  }
	  onAuthChange = isSignedIn => {
		this.setState({isSignedIn:this.auth.isSignedIn.get()})
	  };

	  onSignInClick = () => {
		this.auth.signIn();
	  };

	  onSignOutClick = () => {
		this.auth.signOut();
	  };
	renderAuthButton(){
		if (this.state.isSignedIn == null){
			return <div>I dont know if we are signed in</div>
		}else if(this.state.isSignedIn){
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
				  <i className="google icon" />
				  Sign Out
				</button>
			  );
		}else{
			return (
				<button onClick={this.onSignInClick} className="ui red google button">
				  <i className="google icon" />
				  Sign In with Google
				</button>
			  );
		}
	}
	render() {
	return <div>{this.renderAuthButton()}</div>
	}
}

export default GoogleAuth;


