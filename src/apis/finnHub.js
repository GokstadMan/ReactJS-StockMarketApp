import axios from 'axios';

const TOKEN ="cfllnepr01qqm9m4i0v0cfllnepr01qqm9m4i0vg";

export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params:{
        token: TOKEN
    }
    
})