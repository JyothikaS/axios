const axios = require('axios');
const fs = require('fs')

function getData(page) {
    return promise = new Promise((res, rej)=>{
        axios.get('https://reqres.in/api/users?page='+page)
    .then(function(response){
        res(response.data.total_pages);
    });
});
}
    getData(1).then(function(response){
    console.log(response)
})