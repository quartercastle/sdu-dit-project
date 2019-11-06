//  /client/src/services/postServices.js

import axios from 'axios';

export default {
  //TODO add the rest of the services
  create: async () => {
    let res = await axios.post(`/api/post`, {
      author: 'Fred',
      content: 'Flintstone'
    });
    return res.data || [];
  }
  
}