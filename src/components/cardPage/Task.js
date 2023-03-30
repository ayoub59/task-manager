import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

const Container = styled.div`
  background-color: aqua;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 8px;
  margin-bottom: 8px;
`;

const Task = ({ id, name, description, columnId }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { id, columnId },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <Container ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <h3>{name}</h3>
            <p>{description}</p>
        </Container>
    );
};

Task.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    columnId: PropTypes.string.isRequired,
};

export default Task;
