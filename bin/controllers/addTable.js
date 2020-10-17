const axios = require("axios");

const url = "https://icanhazdadjoke.com/";



function addTable(name) {

  console.log('Your table name is ', name)
axios.get(url, { headers: { Accept: "application/json" } })
.then(res => {
 
    console.log(res.data.joke);
  
});

}

module.exports = {
  addTable
}