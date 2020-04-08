const https = require('https');

// Problem: We need a simple way to view COVID-19 Data without clicks and chnage of tabs.
// Solution: Use NodeJs to connect to postman's api to get covid 19 information.

function print_info(total_cases, recovered, deaths){
    let message = `Total Cases: ${total_cases}, Recovered ${recovered}, Total deaths ${deaths}`;

    console.log(message);
}


const req = https.get('https://api.covid19api.com/summary', res => {

    let body = "";

     //  Read data
    res.on('data', (data) =>{
        body += data.toString();
    });

    res.on('end', ()=>{
         //  Parse the data and 
        const covid19 = JSON.parse(body);
        console.dir(covid19);
    });
   
   
    // Print the data

});