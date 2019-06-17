import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
	  Authorization: "Client-ID d2783c26d14b6672319014afdefe5e24d328b73a0520cad664acf698e1d9771d" //YOUR_ACCESS_KEYは登録時に取得できる
	}

});