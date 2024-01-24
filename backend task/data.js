const axios = require('axios'); // importing axios library for making HTTP requests
const fs = require('fs'); // importing file system module for writing data to a file

// Define an async function to fetch data from MongoDB API
const fetchData = async () => {
    try {
        // Make a POST request to the MongoDB API endpoint
        const response = await axios.post(
            'https://ap-south-1.aws.data.mongodb-api.com/app/data-yubip/endpoint/data/v1/action/find',
            { // payload
                "dataSource": "Cluster0", // name of the data source
                "database": "student_data", // name of the database
                "collection": "student_data", // name of the collection
                "filter": {}, // filter for querying data, here it is empty which means all documents will be returned
                "limit": 30000 // number of documents to be returned
            },
            {   //Defining Headers
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjQwYTkzMjk5ZTc1Mzg0OWNmM2JmNzIyIiwiZXhwIjoxNzA2MDQyMzk3LCJpYXQiOjE3MDYwNDA1OTcsImlzcyI6IjY1YjAxZDE1MmYyN2ZjYzVmODVjNTc2YiIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjY0MGE5MzI5OWU3NTM4NDljZjNiZjcyMiIsInN1YiI6IjY0MGIyMDhjMzYwOGQxNWU1OGRmMDU5MSIsInR5cCI6ImFjY2VzcyJ9.K3GWfXWOcM-OXIACZRUfr9l_Zzh9L-TC3pazK8LSvrA',
                    'Content-Type': 'application/json', // content type of the payload
                    'Referer': 'https://search.pclub.in/' // referer header
                }//the authorization key has to be fetched from search.pclub.in networks response in the autherization header at the time of script usage.
            }
        );

        
        return response.data;// Returns the data from the response
    } catch (error) {
        console.error('Error:', error);
        
        return {};
    }
};
console.log(fetchData());// prints the fetched data on the terminal

// Used await to wait for fetchData to complete before continuing
/*(async () => {
    const fileContent = await fetchData();
    const filePath = 'C:/Users/Lenovo/Desktop/web dev task/webdevtask/student_data.json';

    try {
        fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
        console.log(`File "${filePath}" has been written synchronously.`);
    } catch (error) {
        console.error(`Error writing file: ${error.message}`);
    }
})();*/