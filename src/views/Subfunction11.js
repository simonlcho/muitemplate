import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: "0.5em",
      marginRight: "0.5em",      
      height: '100em'
    },
    formstyle: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,    
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },    
    lineBottomMargin: {
      marginBottom: "1em"
    },
    formControl: {
      marginTop:  "-1.2em"
    },    
  }));

  export default function Subfunction11(props) {

    const classes = useStyles();  

    const [state, setState] = useState({ 
      field0: "", 
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",      
      field7: new Date(), 
      field81: "", 
      field82: "", 
      field83: "", 
      field84: "", 
      field9: "", 
      field10: "" });    

    useEffect(() => {
       setState({
        field0: "000", 
        field1: "111",
        field2: "222",
        field3: "333",
        field4: "444",
        field5: "555",
        field6: "666",                                        
        field7: new Date("2020/06/18"),
        field81: true,        
        field82: true,
        field83: true,
        field84: true,
        field9: "3",                                
        field10: "2"
    })}, []);    

    const handlefield7Change = (date) => {
      setState(prevState => ({
        ...prevState,
        field7: date
      }));  
    };  

    const handleFieldChange = e => {
      const {name, value, type, checked} = e.target;
      if (type == "checkbox") {
        setState(prevState => ({
          ...prevState,
          [name]: checked
        }));        
      }
      else {
        setState(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    };

    const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Field0 ${state.field0}`);
      alert(`Submitting Field1 ${state.field1}`);
      alert(`Submitting Field1 ${state.field2}`);
      alert(`Submitting Field1 ${state.field3}`);
      alert(`Submitting Field1 ${state.field4}`);
      alert(`Submitting Field1 ${state.field5}`);
      alert(`Submitting Field1 ${state.field6}`);                              
      alert(`Submitting Field7 ${state.field7}`);        
      alert(`Submitting Field81 ${state.field81}`);      
      alert(`Submitting Field82 ${state.field82}`);      
      alert(`Submitting Field83 ${state.field83}`);      
      alert(`Submitting Field84 ${state.field84}`);                              
      alert(`Submitting Field9 ${state.field9}`);            
      alert(`Submitting Field10 ${state.field10}`);           
    } 

    return (
      <React.Fragment>
        {props.showSideBar ? <Sidebar setShowSideBar={props.setShowSideBar} /> : null}
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Typography variant="h6">
          {props.title}
          </Typography>        

          <div className={classes.lineBottomMargin}></div>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={classes.formstyle}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                id="field0"
                name="field0"                
                label="Field 0"
                multiline
                rows={4}                
                size="small"
                fullWidth
                value={state.field0}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleFieldChange}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                disabled                
                id="field1"
                name="field1"                        
                label="Field 1"
                size="small"
                fullWidth
                defaultValue="Disabled"
                value={state.field1}                            
                variant="outlined"
                onChange={handleFieldChange}                   
                InputLabelProps={{
                  shrink: true,
                }}                             
                />
              </Grid>
              <Grid item xs={6}>
                  <TextField
                  id="field2"
                  name="field2"                          
                  label="Field 2"
                  size="small"
                  fullWidth
                  defaultValue="Read Only"
                  value={state.field2}                     
                  InputProps={{
                    readOnly: true,
                  }}                  
                  variant="outlined"
                  onChange={handleFieldChange}                     
                  InputLabelProps={{
                    shrink: true,
                  }}                                             
                  />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="field3"
                  name="field3"                          
                  label="Field 3"
                  size="small"
                  fullWidth
                  defaultValue="Helper Text"
                  helperText="Some helper text" 
                  value={state.field3}                                      
                  variant="outlined"
                  onChange={handleFieldChange}                     
                  InputLabelProps={{
                    shrink: true,
                  }}                                             
                  />
              </Grid>
              <Grid item xs={2}>
                <TextField
                    id="field4"
                    name="field4"                            
                    label="Field 4"
                    size="small"
                    fullWidth
                    value={state.field4}                       
                    variant="outlined"
                    onChange={handleFieldChange}                       
                    InputLabelProps={{
                      shrink: true,
                    }}
                />
              </Grid>                
              <Grid item xs={2}>
                <TextField
                    id="field5"
                    name="field5"                            
                    label="Field 5 (Number)"
                    size="small"
                    fullWidth
                    type="number"     
                    value={state.field5}                                      
                    variant="outlined"
                    onChange={handleFieldChange}                       
                    InputLabelProps={{
                      shrink: true,
                    }} 
                />                
              </Grid>
              <Grid item xs={4}>
                <TextField
                      required                
                      id="field6"
                      name="field6"                              
                      label="Field 6"
                      size="small"
                      fullWidth
                      defaultValue="Required Field"
                      variant="outlined"
                      value={state.field6}                         
                      onChange={handleFieldChange}                         
                      InputLabelProps={{
                        shrink: true,
                      }} 
                />
              </Grid>

              <Grid item xs={3}>
                <KeyboardDatePicker
                      disableToolbar                
                      id="field7"
                      name="field7"                              
                      label="Field 7"
                      size="small"
                      fullWidth
                      variant="inline"
                      inputVariant="outlined"
                      format="yyyy/MM/dd"
                      value={state.field7}
                      onChange={handlefield7Change}                      
                      InputLabelProps={{
                        shrink: true,
                      }}                      
                />
              </Grid>
              <Grid item xs={4}>

              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Field 8</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox checked={state.field81} color="primary" onChange={handleFieldChange} name="field81" />}
                    label="Option 1"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={state.field82} color="primary" onChange={handleFieldChange} name="field82" />}
                    label="Option 2"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={state.field83} color="primary" onChange={handleFieldChange} name="field83" />}
                    label="Option 3"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={state.field84} color="primary" onChange={handleFieldChange} name="field84" />}
                    label="Option 4"
                  />                  
                </FormGroup>
              </FormControl>

              </Grid>
              <Grid item xs={5}>

              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Field 9</FormLabel>
                <RadioGroup id="field9" name="field9" value={state.field9} onChange={handleFieldChange} row>
                  <FormControlLabel value="1" control={<Radio color="primary" />} label="Option 1" />
                  <FormControlLabel value="2" control={<Radio color="primary" />} label="Option 2" />
                  <FormControlLabel value="3" control={<Radio color="primary" />} label="Option 3" />
                  <FormControlLabel value="4" disabled control={<Radio color="primary" />} label="Option 4 (Disabled option)" />
                </RadioGroup>
              </FormControl>

              </Grid>

              <Grid item xs={4}>

              <FormControl 
                variant="outlined" 
                fullWidth
                size="small"
              >
                <InputLabel 
                  id="selectField10Label"
                >
                  Field 10
                </InputLabel>
                <Select
                  labelId="selectField10Label"
                  id="field10"
                  name="field10"
                  value={state.field10}
                  onChange={handleFieldChange}
                  label="Field 10"
                >
                  <MenuItem value="">&nbsp;</MenuItem>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>

              </Grid>
              <Grid item xs={8}>
                
              </Grid>
              <Grid item xs={4}>
              <Button 
                variant="contained"
                type="submit"                
              >Save</Button>                
              </Grid>

            </Grid>
          </div>
          </MuiPickersUtilsProvider>

          </form>

          <div className={classes.lineBottomMargin}></div>

        </main>

      </React.Fragment>
    );
  }
