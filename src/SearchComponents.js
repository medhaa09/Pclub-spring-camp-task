import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from "react";
import './App.css'
import TextField from '@mui/material/TextField';
import StudentCards from './StudentCards'
import Box from '@mui/material/Box';
import Themes from './Themes'

//arrays containing options of different dropdown menus
const batches = [];
batches.push('Other')
for(let i = 8; i<=23; i++){
  batches.push(`Y${i}`)
}

const halls = ['ACES', 'CPWD', 'DAY', 'GH', 'NRA', 'Not Available', 'RA', 'SBRA', 'TYPE1', 'TYPE1B', 'TYPE5', 'UNKN']
for(let j = 1; j<=14; j++)
{
  halls.push(`HALL${j}`) 
}

const programmes = [
    'BS',
    'BS-MBA',
    'BS-MS',
    'BS-MT',
    'BT-M.Des',
    'BT-MBA',
    'BT-MS',
    'BTech',
    'DIIT',
    'Exchng Prog.',
    'MBA',
    'MDes',
    'MS-Research',
    'MSc(2 yr)',
    'MSc(Int)',
    'MSc-PhD(Dual)',
    'MT(Dual)',
    'MTech',
    'MTech-PhD',
    'PGPEX-VLM',
    'PhD',
    'Prep.',
    'SURGE',
    'eMasters',
  ];

  const bloodgroups = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'Not',
    'Not-Available',
    'O+',
    'O-',
  ];

  const departments = [
    'Aerospace Engineering',
    'Biological Sciences and Bioengineering',
    'Chemical Engineering',
    'Chemistry',
    'Civil Engineering',
    'Cognitive Science',
    'Computer Science and Engineering',
    'Dean Of Academic Affairs',
    'Dean Of Research & Development',
    'Dean Of Resource & Alumni',
    'Design',
    'Earth Science',
    'Economics',
    'Electrical Engineering',
    'Environmental Engineering and Management',
    'Humanities and Social Sciences',
    'Industrial and Management Engineering',
    'Laser Technology',
    'Materials Science Programme',
    'Materials Science and Engineering',
    'Mathematics',
    'Mathematics and Scientific Computing',
    'Mathematics and Statistics',
    'Mechanical Engineering',
    'Nuclear Engineering and Technology Programme',
    'Photonics Science and Engineering',
    'Physics',
    'Space Science and Astronomy',
    'Statistics',
    'Statistics and Data Science',
    'Sustainable Energy Engineering',
  ];
  
  const genders = [
    'Any',
    'M',
    'F',
  ];
  

export default function MultipleSelect() {
    const [batch, setBatch] = useState([]); // useState for an array
    const [department, setDepartment] = useState([]); // useState for an array
    const [hall, setHall] = useState([]); // useState for an array
    const [programme, setProgramme] = useState([]); // useState for an array
    const [bloodGroup, setBloodGroup] = useState([]); // useState for an array
    const [hometown, setHometown] = useState(''); // useState for a string
    const [search, setSearch] = useState(''); // useState for a string
    const [gender, setGender] = useState('');
    const [students, setStudents] = useState([]); 
  

    const handlehometownChange = (event) => {
      const {
        target: { value },
      } = event;
      setHometown(
        // On autofill we get a stringified value
        typeof value === 'string' ? value.split(',') : value,
      );
    }
    const handlesearchChange = (event) => {
      const {
        target: { value },
      } = event;
      setSearch(
        
        typeof value === 'string' ? value.split(',') : value,
      );
    }
  const handleBatchChange = (event) => {
    const {
      target: { value },
    } = event;
    setBatch(
     
      typeof value === 'string' ? value.split(',') : value,
    );
  }
    const handleDepartmentChange = (event) => {
      const {
        target: { value },
    } = event;
    setDepartment(
      
      typeof value === 'string' ? value.split(',') : value,
    );
    }
    const handleHallChange = (event) => {
      const {
        target: { value },
      } = event;
    setHall(

      typeof value === 'string' ? value.split(',') : value,
    );
    }
    const handleProgrammeChange = (event) => {
      const {
        target: { value },
      } = event;
    setProgramme(
      
      typeof value === 'string' ? value.split(',') : value,
    );
    }
    const handleBloodGroupChange = (event) => {
      const {
        target: { value },
      } = event;
    setBloodGroup(
   
      typeof value === 'string' ? value.split(',') : value,
    );
    }
    const handleGenderChange = (event) => {
      const {
        target: { value },
      } = event;
    setGender(
      
      typeof value === 'string' ? value.split(',') : value,
    );
  
  };
  const fetchStudents = async () => {
    if (!batch.length && !department.length && !hall.length && 
      !programme.length && !bloodGroup.length && !hometown && 
      !search && (gender === 'Any' || !gender)) {
    setStudents([]); // Clear the results
    return; 
  }
  try {
    // Fetches data from the search API
    const response = await fetch('https://springcamp-backend1.onrender.com/search', {
      method: 'POST',    
      headers: {        
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({      // Send a JSON object as the request body
        batch: batch.length ? batch : undefined,    // If batch array is not empty, include it in the request body
        department: department.length ? department : undefined,  // If department array is not empty, include it in the request body
        hall: hall.length ? hall : undefined,      // If hall array is not empty, include it in the request body
        programme: programme.length ? programme : undefined,  // If programme array is not empty, include it in the request body
        bloodGroup: bloodGroup.length ? bloodGroup : undefined,  // If bloodGroup array is not empty, include it in the request body
        hometown: hometown ? hometown : undefined,  // If hometown is not empty, include it in the request body
        search: search ? search : undefined,    // If search is not empty, include it in the request body
        gender: gender !== 'Any' ? gender : undefined,  // If gender is not 'Any', include it in the request body
      }),
    });
   
    if (!response.ok) {    // If the response is not ok
      setStudents([])     // Clear the students state
      throw new Error(`HTTP error! status: ${response.status}`);  // Throw an error with the response status
    }
   
    const results = await response.json();  // Parse the response as JSON
    setStudents(results);   // Update the students state with the results
   } catch (error) {
    // Handle any errors that occur during the fetch request
    console.error(error);
   }
  }

  // Effect to fetch students whenever search filters change
  useEffect(() => {
    fetchStudents();
  }, [batch, department, hall, programme, bloodGroup, hometown, search, gender]);

  return (
    <>
    <div className="App">
      <div className='container'>
    <div className="search-container">
    <div className="dropdown">
      <FormControl fullWidth variant="filled">
        <InputLabel style={{  }} id="demo-multiple-name-label">Batch</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={batch}
          style={{  }}
          onChange={handleBatchChange}
         
        >
          {batches.map((b) => (
            <MenuItem
              key={b}
              value={b}
              
            >
              {b}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    
    <div className="dropdown">
      <FormControl fullWidth variant="filled">
        <InputLabel style={{  }} id="demo-multiple-name-label">Gender</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          onChange={handleGenderChange}
          style={{  }}
          value={gender}
          
        >
          {genders.map((b) => (
            <MenuItem
              key={b}
              value={b}
            >
              {b}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <div className="dropdown">
      <FormControl fullWidth variant="filled">
        <InputLabel style={{  }} id="demo-multiple-name-label">Hall</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={hall}
          style={{  }}
          onChange={handleHallChange}
          
        >
          {halls.map((b) => (
            <MenuItem
              key={b}
              value={b}

            >
              {b}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <div className="dropdown">
      <FormControl fullWidth variant="filled">
        <InputLabel style={{  }} id="demo-multiple-name-label">Programme</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={programme}
          style={{  }}
          onChange={handleProgrammeChange}
          
        >
          {programmes.map((b) => (
            <MenuItem
              key={b}
              value={b}
            >
              {b}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <div className="dropdown">
      <FormControl fullWidth variant="filled">
        <InputLabel style={{  }} id="demo-multiple-name-label">Department</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          style={{  }}
          value={department}
          onChange={handleDepartmentChange}
        >
          {departments.map((b) => (
            <MenuItem
              key={b}
              value={b}
              
            >
              {b}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <div className="dropdown" >
      <FormControl style={{  }} fullWidth variant="filled" >
        <InputLabel style={{ }} id="demo-multiple-name-label">Blood Group</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={bloodGroup}
          onChange={handleBloodGroupChange}
          
        >
          {bloodgroups.map((b) => (
            <MenuItem
              key={b}
              value={b}
             
            >
              {b}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <TextField style={{  }}  className="text-input" label="Hometown" variant="outlined" id="outlined-basic" onChange={handlehometownChange}/>
    <TextField style={{  }}  className="search-bar" label="Enter name, username or roll no." variant="outlined" onChange={handlesearchChange} id="outlined-basic" />
    </div>
    <Themes/>
    </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', maxWidth: '70vw', marginTop:'10%' }}>
    {students.map((student) => (
      <StudentCards key={student._id} student={student} />
    ))}
  </Box>
    </div>

  </>
  );
}
