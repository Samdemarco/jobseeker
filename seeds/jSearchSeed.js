const fs = require('fs')
const fetch = require('node-fetch');
require('dotenv').config();

//JSearch API

const tempJobs = []; 


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const url = 'https://jsearch.p.rapidapi.com/search?query=full%20stack&num_pages=2';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

   fetch(url, options)
	.then(res => res.json())    
	.then(json => { console.log(json)  
        console.log("In the file");

    for (var i=0; i<10;i++) {         // i<json.data.length;i++){
       const temp = {job_title: json.data[i].job_title, description: json.data[i].job_description, job_city: json.data[i].job_city, employer: json.data[i].employer_name};
        
      tempJobs.push(temp);  
    //   console.log(tempJobs);
    }   
    
    const jsonString = JSON.stringify(tempJobs);

    fs.writeFile('./seeds/jobData.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

       

  })
	.catch(err => console.error('error:' + err)); 