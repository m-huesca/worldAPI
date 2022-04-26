//import the dependencies using require
const yargs = require('yargs');
const axios = require('axios').default;

let argv = yargs.argv;
let country = argv.country;

if(country){
    console.log(country);
    let url = `https://restcountries.com/v3.1/name/${country}`
    axios.get(url,{
    })
    .then ((response) => {
        let country = response.data[0];
        console.log('Population: ', country.population, 'Capital: ', country.capital) ;
    })
    .catch(err => {
        console.log(err);
    })
}
else{
    console.log('Please enter a country')
};