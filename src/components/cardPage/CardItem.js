import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

const CardItem = ({ card, onDrop }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'card',
        item: { id: card.id },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                onDrop(item.id, dropResult.columnId);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    if (!card || !card.name) {
        return null;
    }

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
            <p>{card.date}</p>
            <p>{card.personInCharge}</p>
            <p>{card.urgency}</p>
            <p>{card.category}</p>
        </div>
    );
};

CardItem.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
        personInCharge: PropTypes.string,
        urgency: PropTypes.string,
        category: PropTypes.string,
    }),
    onDrop: PropTypes.func.isRequired,
};

export default CardItem;
