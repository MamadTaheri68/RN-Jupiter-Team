import axios from 'axios';

import { BaseUrl } from '.';


const PageingProductsByTitleService = async (queryString,link) => {
  try {
    let response;
    let falg=false;
    do {
      response = await axios.get(`${BaseUrl}/search/v2?q=${queryString}&l=${link}`, {
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

    return response.data.products
  } catch (e) {
    return 'error on Fetching data';
  }
}


export default PageingProductsByTitleService;
