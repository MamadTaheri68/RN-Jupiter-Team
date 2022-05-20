import axios from 'axios';

import { BaseUrl } from '.';


const SearchProductsByTitleService = async (queryString) => {
  try {
    let response;
    let falg=false;
    do {
      response = await axios.get(`${BaseUrl}/search/v2?q=${queryString}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if(falg===false ){
        if(response.status !== 200){
          setTimeout(()=>{}, response?.data?.after );
          falg=true;
        }     
      }else{
        if(response.status !== 200){
          setTimeout(()=>{}, response?.data?.each );
         
        }   
      }
     
    } while (response.status !== 200);

    return {products:response.data.products,pages:response.data.pages};
  } catch (e) {
    return 'error on Fetching data';
  }
}


export default SearchProductsByTitleService;
