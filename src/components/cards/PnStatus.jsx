import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(3),
    },
  }));

export default function PnStatus() {
        const state = { 
            pN0: [
                { id: 1, tag: "pN0"},
                { id: 2, tag: "pN0(sn)"},
                { id: 3, tag: "pN0(i-)"},
                { id: 4, tag: "pN0(i-)(sn)"},
                { id: 5, tag: "pN0(i+)"},
                { id: 6, tag: "pN0(i+)(sn)"},
                { id: 7, tag: "pN0(mol-)"},
                { id: 8, tag: "pN0(mol-)(sn)"},
                { id: 9, tag: "pN0(mol+)"},
                { id: 10, tag: "pN0(mol+)(sn)"},
            ],
            pN1:[
              { id: 1, tag: "pN1"},
              { id: 2, tag: "pN1(sn)"},
              { id: 3, tag: "pN1mi"},
              { id: 4, tag: "pN1mi(sn)"},
              { id: 5, tag: "pN1a"},
              { id: 6, tag: "pN1a(sn)"},
              { id: 7, tag: "pN1b"},
              { id: 8, tag: "pN1b(sn)"},
              { id: 9, tag: "pN1c"},
              { id: 10, tag: "pN1c(sn)"},
            ],
            pN2:[
              { id: 1, tag: "pN2"},
              { id: 2, tag: "pN2(sn)"},
              { id: 3, tag: "pN2a"},
              { id: 4, tag: "pN2a(sn)"},
              { id: 5, tag: "pN2b"},
              { id: 6, tag: "pN2b(sn)"},
              { id: 7, tag: "pNX"},
              { id: 8, tag: "pNX(sn)"},
            ],
            pN3:[
              { id: 1, tag: "pN3"},
              { id: 2, tag: "pN3(sn)"},
              { id: 3, tag: "pN3a"},
              { id: 4, tag: "pN3a(sn)"},
              { id: 5, tag: "pN3b"},
              { id: 6, tag: "pN3b(sn)"},
              { id: 7, tag: "pN3c"},
              { id: 8, tag: "pN3c(sn)"},
            ],
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
            <Grid container spacing={2}>
              <Grid item >
                <FormLabel color="primary" component="legend">pN0</FormLabel>
                  {state.pN0.map((item, key) =>
                        <Grid item xs={12}>
                          <FormControlLabel key={item.id} control={<Radio color="primary"/>} value={item.tag} label={item.tag} key={item.id} />
                        </Grid>
                  )}
              </Grid>
              <Grid item >
                <FormLabel color="primary" component="legend">pN1</FormLabel>
                  {state.pN1.map((item, key) =>
                      <Grid item xs={12}>
                        <FormControlLabel key={item.id} control={<Radio color="primary"/>} value={item.tag} label={item.tag} key={item.id} />
                      </Grid>
                  )}
              </Grid>
              <Grid item >
                <FormLabel color="primary" component="legend">pN2</FormLabel>
                  {state.pN2.map((item, key) =>
                      <Grid item xs={12}>
                        <FormControlLabel key={item.id} control={<Radio color="primary"/>} value={item.tag} label={item.tag} key={item.id} />
                      </Grid>
                  )}
              </Grid>
              <Grid item >
                <FormLabel color="primary" component="legend">pN0</FormLabel>
                  {state.pN3.map((item, key) =>
                      <Grid item xs={12}>
                        <FormControlLabel key={item.id} control={<Radio color="primary"/>} value={item.tag} label={item.tag} key={item.id} />
                      </Grid>
                  )}
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </div>
    );
  }