import React from 'react';
import PropTypes from 'prop-types';

const CardDetails = ({ card, onClose }) => {
    return (
        <div>
            <h2>{card.name}</h2>
            <p>{card.description}</p>
            <p>{card.date}</p>
            <p>{card.personInCharge}</p>
            <p>{card.urgency}</p>
            <p>{card.category}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

CardDetails.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        personInCharge: PropTypes.string.isRequired,
        urgency: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CardDetails;
