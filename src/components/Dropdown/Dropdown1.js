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
        borderRadius: 10,

    
     
    },
    menuitem: {
        borderRadius: 5,
        backgroundColor:'eee',
    }



   

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
                <InputLabel id="Hire">No of Hire</InputLabel>
                <Select className= {classes.select}
                    labelId="Hire"
                    id="Graph-Dd"
                    value={value}
                    onChange={handleChange}
                    label="No of Hire"
                >
                
                    <MenuItem className={classes.menuitem} value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem className={classes.menuitem} value={10}>No of JD</MenuItem>
                    <MenuItem className={classes.menuitem} value={20}>No of Accept</MenuItem>
                    <MenuItem className={classes.menuitem} value={30}>No of Reject</MenuItem>
                    <MenuItem className={classes.menuitem} value={40}>Ongoing JD</MenuItem>
                    <MenuItem className={classes.menuitem} value={50}>Joined</MenuItem>
                    <MenuItem  className={classes.menuitem} value={60}>Not Joined</MenuItem>
            
                </Select>
            </FormControl>
          




            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="jdHire">Job Title</InputLabel>
                <Select
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