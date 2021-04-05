import React from 'react';
import { makeStyles,InputLabel,MenuItem, FormControl,Select} from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
    
 
 formControl: {
        margin: theme.spacing(1),
     
        minWidth: 120,
        
    },
    select: {
        background: 'eee',
        color: 'black',
        maxheight: 10,

        
    
    },

  

}));




const Dropdown = (props) => {


    const classes = useStyles();
    const [value, setValue] = React.useState('');



    const handleChange = (event) => {
        setValue(event.target.value);
    };
 

    return (
      
   

        <div >
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="jdHire">Job Title</InputLabel>
                <Select  className= {classes.select}
                    labelId="jdHire"
                    id="job-titles"
                    value={value}
                    onChange={handleChange}
                      label="Job Title"
                >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Android Developer</MenuItem>
                    <MenuItem value={20}>UX Designer</MenuItem>
                    <MenuItem value={30}>Web Developer</MenuItem>
                    <MenuItem value={40}>IOS Developer</MenuItem>
                    <MenuItem value={50}>Marketing</MenuItem>
                    <MenuItem value={60}>Web Designing</MenuItem>
                    <MenuItem value={70}> HR</MenuItem>
                    
                </Select>
            </FormControl>
        </div>
    );

}


export default Dropdown;