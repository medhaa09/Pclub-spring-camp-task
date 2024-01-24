const fs = require('fs');

const filePath = 'C:/Users/Lenovo/Desktop/web dev task/webdevtask/student_data.json';
const rawData = fs.readFileSync(filePath);
const jsonData = JSON.parse(rawData);

//Accesses the array "documents" containing each student's data as object
const students = jsonData.documents;

 //to Keep only students whose roll no begins with "23" and are in BTech
const filteredData = students.filter(student => (student.i.startsWith("23") && (student.p==="BTech" || student.p==="BS")));

/*saves the filtered data to a new JSON file
const filteredFilePath = 'C:/Users/Lenovo/Desktop/web dev task/webdevtask/filtered_student_data.json';
fs.writeFileSync(filteredFilePath, JSON.stringify(filteredData, null, 2));*/



const filePath2 = 'C:/Users/Lenovo/Desktop/web dev task/webdevtask/filtered_student_data.json';
const rawData2 = fs.readFileSync(filePath2);
const jsonData2 = JSON.parse(rawData2);
// Using map to add a new key-value pair to each object
const filteredDataByWing = jsonData2.map(obj => {
    // Extracting the value from the room no key
    const roomNo = obj.r;
    if (roomNo){
    //extracting wing name from room number
    const i=roomNo.indexOf('-');
    const wingName = roomNo.substring(0,i)+roomNo.substring(i+1,i+2);
    
    // Adding the new key-value pair to the object
    //For each object (obj) in the array, a new object is created using the spread operator (...obj), which creates a shallow copy of the original object
    return { ...obj, wing: wingName };
    }
  });
  
//saves the filtered data with wings of each student to a new JSON file
const filteredbyWingFilePath = 'C:/Users/Lenovo/Desktop/web dev task/webdevtask/filteredbyWing_student_data.json';
fs.writeFileSync(filteredbyWingFilePath, JSON.stringify(filteredDataByWing, null, 2));

console.log(`Filtered by wing data saved to "${filteredbyWingFilePath}".`);