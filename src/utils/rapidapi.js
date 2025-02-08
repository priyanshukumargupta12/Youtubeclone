import axios from "axios";

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL="https://youtube138.p.rapidapi.com"

const options = {
	headers: {
		'x-rapidapi-key': 'c46f03903emshea189ca5c4cd690p168c19jsn89e14636eff6',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchData=async(url)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    }catch(error){
        console.error("error fetching api data: ",error);
        throw error;
    }
}