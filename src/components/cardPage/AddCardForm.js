import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


// const useStyles = makeStyles({
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     maxWidth: '400px',
//     margin: '0 auto',
//   },
//   formField: {
//     marginBottom: '20px',
//   },
// });

const AddCardForm = ({ onSubmit }) => {
    //   const classes = useStyles();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [personInCharge, setPersonInCharge] = useState('');
    const [urgency, setUrgency] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, description, date, personInCharge, urgency, category });
        setName('');
        setDescription('');
        setDate('');
        setPersonInCharge('');
        setUrgency('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className={"classes.formContainer"}>
            <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
                label="Date"
                variant="outlined"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <TextField
                label="Person in Charge"
                variant="outlined"
                value={personInCharge}
                onChange={(e) => setPersonInCharge(e.target.value)}
            />
            <FormControl className={"classes.formField"}>
                <InputLabel>Urgency</InputLabel>
                <Select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={"classes.formField"}>
                <InputLabel>Category</InputLabel>
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <MenuItem value="category1">Category 1</MenuItem>
                    <MenuItem value="category2">Category 2</MenuItem>
                    <MenuItem value="category3">Category 3</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
                Add Card
            </Button>
        </form>
    );
};

export default AddCardForm;
