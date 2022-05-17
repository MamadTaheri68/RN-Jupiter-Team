import axios from 'axios';

const BaseUrl = 'https://api.malltina.net';


const SearchProductsByTitleService = async (queryString) => {
  try {
    let response;
    do {
      response = await axios.get(`${BaseUrl}/search/v2?q=${queryString}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setTimeout({}, response?.data?.after || 2000);
    } while (response.status !== 200);

    return response.data.products;
  } catch (e) {
    return 'error on Fetching data';
  }
}



//   return new Promise((resolve, reject) => {
//     axios
//       .get(`https://api.malltina.net/search/v2?q=${queryString}`)
//       .then(response => {
//         if(response && response.data && response.data.products){
//           resolve(response.data.products);
//         } else {
//           resolve([])
//         }

//       })
//       .catch(error => reject('error on Fetching data'));
//   });
// };

export default SearchProductsByTitleService;
