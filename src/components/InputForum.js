import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styled from 'styled-components';
import icon from "../assets/imgs/close-icon.svg"

const InputForum = () => {
    const [name, setname] = useState('');
    const [description, setDescription] = useState('');
    const [Department, setDepartment] = useState('');
    const [Category, setCategory] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [assignee, setAssignee] = useState('');
    const [urgency, setUrgency] = useState('');


    const handlenameChange = (event) => {
        setname(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDueDateChange = (date) => {
        setDueDate(date);
    };

    const handleAssigneeChange = (event) => {
        setAssignee(event.target.value);
    };

    const handleUrgencyChange = (event) => {
        setUrgency(event.target.value);
    };
    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', {
            name,
            description,
            Department,
            dueDate,
            assignee,
            urgency,
        });
    };

    return (
        <ForumContainer>
            <HeadingContainer>
                <Heading>please fill the forum to create a project</Heading>
                <IconBtn>
                    <Close src={icon} />
                </IconBtn>
            </HeadingContainer>
            <form onSubmit={handleSubmit}>
                {/* section one */}
                <SectionsContainer>
                    <SectionOne>
                        <TextField label="project name" value={name} onChange={handlenameChange} />
                        <TextField label="Description" value={description} onChange={handleDescriptionChange} />
                        <TextField label="category" value={Category} onChange={handleCategoryChange} />
                        <TextField label="Department" value={Department} onChange={handleDepartmentChange} />
                    </SectionOne>
                    <SectionTwo>

                        <FormControl >
                            <InputLabel id="assignee-label">Assignee</InputLabel>
                            <Select labelId="assignee-label" value={assignee} onChange={handleAssigneeChange}>
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value="Alice">Alice</MenuItem>
                                <MenuItem value="Bob">Bob</MenuItem>
                                <MenuItem value="Charlie">Charlie</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl >
                            <InputLabel id="urgency-label">Urgency</InputLabel>
                            <Select labelId="urgency-label" value={urgency} onChange={handleUrgencyChange}>
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value="high">High</MenuItem>
                                <MenuItem value="medium">Medium</MenuItem>
                                <MenuItem value="low">Low</MenuItem>
                            </Select>
                        </FormControl>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disableToolbar
                                variant="inline"
                                inputFormat="MM/dd/yyyy"
                                margin="normal"
                                label="Due Date"
                                value={dueDate}
                                onChange={handleDueDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </LocalizationProvider>
                    </SectionTwo>
                </SectionsContainer>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>

            </form>
        </ForumContainer>
    );
};

export default InputForum;

const ForumContainer = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 4vw 0px;
    flex-direction: column;
    align-items: center;
`
const SectionOne = styled.div`
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    gap:4vw ;
`
const SectionTwo = styled(SectionOne)`
    /* background-color: green; */
`
const SectionsContainer = styled.div`
    /* background-color: red; */
    display: flex;
    gap: 30px;
    padding: 2vw;
`
const HeadingContainer = styled.div``
const Heading = styled.h1``
const Close = styled.img``
const IconBtn = styled.button`
border: none;
background-color: transparent;
cursor: pointer;
`