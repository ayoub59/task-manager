import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, Box } from '@material-ui/core';
import { Typography, Box } from '@mui/material';
// import box
import CardItem from './CardItem';

// const useStyles = makeStyles({
//   columnContainer: {
//     width: '300px',
//     backgroundColor: '#f2f2f2',
//     display: 'flex',
//     flexDirection: 'column',
//     margin: '0 10px',
//     padding: '10px',
//     borderRadius: '5px',
//     boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
//   },
//   columnTitle: {
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
// });

const Column = ({ title, cards, onCardDrop }) => {
    //   const classes = useStyles();

    return (
        <Box className={"classes.columnContainer"}>
            <Typography variant="h5" className={"classes.columnTitle"}>
                {title}
            </Typography>
            <CardItem cards={cards} onCardDrop={onCardDrop} />
        </Box>
    );
};

export default Column;
