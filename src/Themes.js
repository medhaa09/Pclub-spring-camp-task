import Button from '@mui/material/Button'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ThemeContext } from './ThemeContext';

//component for handling themes
export default function Themes(){
// Destructuring values from the ThemeContext
const { toggleTheme } = useContext(ThemeContext);
 // to access the current theme using useTheme hook
const theme = useTheme();
 // this is state for controlling the open/close state of a modal
const [open, setOpen] = React.useState(false);
//function to open and close the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
//the mode button. stack is used to stack the two buttons together
return (<div class="buttons">
<Stack direction="column" spacing={2}>
<Button size="large" onClick={toggleTheme}  sx={{ 
        color: "black",   
        backgroundColor:"rgb(230, 230, 230)",
        minWidth: '60px',
        width: '60px', // width equal to height for a circle
        height: '60px',
        padding: 0, 
        borderRadius: '50%', 
        '&:hover': {
            backgroundColor: 'white',
        },
        '& .MuiButton-startIcon': {
          margin: 0,
        },
        '& .MuiButton-iconSizeMedium > *:first-of-type': {
          fontSize: '1rem', //icon size
        }
      }}startIcon={theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />} variant=""  className="icon">
</Button>

<Button onClick={handleOpen} size="large" sx={{ 
        color: "black",
        backgroundColor:"rgb(230, 230, 230)",
        minWidth: '60px',
        width: '60px', 
        height: '60px', 
        padding: 0, 
        borderRadius: '50%', 
        '&:hover': {
            backgroundColor: 'white',
        },
        '& .MuiButton-startIcon': {
          margin: 0, 
        },
        '& .MuiButton-iconSizeMedium > *:first-of-type': {
          fontSize: '1rem', 
        }
      }} variant="" startIcon={<HelpOutlineIcon/>} className="icon">
</Button>
</Stack>
   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="helpicon" >
          <Typography id="modal-title" variant="h6" component="h1">
          Setting a custom DP
          </Typography>
          <Typography id="modal-description" >
          You can customise the image shown here by placing a custom image in your iitk webhome folder called dp.jpg/dp.png such that going to http://home.iitk.ac.in/~yourusername/dp opens up that particular picture.
          
          </Typography>
          <Typography id="modal-title2" variant="h6" component="h1">
          How do I update the data shown here?
          </Typography>
          <Typography id="modal-description2" >
          The data here is scraped from the Office Automation Portal. The data there can be updated via the Login Based Services &gt; Student Profile &gt; PI form. If you have had a branch change, please go to the ID Cell and update your ID Card to update your branch.
          
          The changes if any will be reflected in about a week.

          </Typography>
          <Typography id="modal-title2" variant="h6" component="h1">
          I can't see students' pictures/I can't access student data.
          </Typography>
          <Typography id="modal-description2" >
          Access to student data is restricted to those currently on campus or connecting via VPN. Please visit the website once via either method so that the data can be stored locally. After this, you will be able to access student data from anywhere (as long as you don't wipe your cache or local files.)
          
          </Typography>
        </Box>
    </Modal>

</div>
);
}