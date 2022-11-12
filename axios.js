const axios = require('axios') //default not required

axios.get('https://reqres.in/api/users')//?page=1
  .then(function (response) {
    // handle success
    console.log(response.data); //data - all data in the page is stored in here, gets full page to get jst the user data then give another .data
   
  })
  console.log()