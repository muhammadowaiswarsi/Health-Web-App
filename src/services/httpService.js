import axios from 'axios';

function filterDoctors(price, callback) {
	return axios.post(`https://api.kanonhealth.com/api/doctors/search?price=${price}&rating&city`)
}


export default filterDoctors;