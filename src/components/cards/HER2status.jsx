import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(3),
    },
  }));

export default function HER2status() {
        const state = { 
            items: [
                { id: 1, tag: "HR+ HER2+"},
                { id: 2, tag: "HR+ HER2-"},
                { id: 3, tag: "HR- HER2+"},
                { id: 4, tag: "Triple negatief"},
            ]
        };
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
  
    const handleChange = event => {
      setValue(event.target.value);
    };
  
    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          {state.items.map((item, key) =>
                <FormControlLabel key={item.id} control={<Radio color="primary"/>} value={item.tag} label={item.tag} key={item.id} />
            )}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }