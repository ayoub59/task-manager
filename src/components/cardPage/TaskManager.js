import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import Task from "./Task"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  width: 80%;
`;

const Column = styled.div`
  border: 2px solid #000;
  border-radius: 5px;
  width: 30%;
  padding: 10px;
`;

const Title = styled.h2`
  text-align: center;
  padding: 2vw 0;
`;

// const Task = styled.div`
//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { columnId: 1, id: 1, title: 'Task 1', description: 'Description for Task 1' },
        { columnId: 1, id: 2, title: 'Task 2', description: 'Description for Task 2' },
        { columnId: 1, id: 3, title: 'Task 3', description: 'Description for Task 3' },
        { columnId: 2, id: 4, title: 'Task 4', description: 'Description for Task 4' },
        { columnId: 2, id: 4, title: 'Task 4', description: 'Description for Task 4' },
        { columnId: 2, id: 4, title: 'Task 4', description: 'Description for Task 4' },
        { columnId: 2, id: 4, title: 'Task 4', description: 'Description for Task 4' },
        { columnId: 3, id: 5, title: 'Task 5', description: 'Description for Task 5' },
        { columnId: 3, id: 5, title: 'Task 5', description: 'Description for Task 5' },
        { columnId: 3, id: 5, title: 'Task 5', description: 'Description for Task 5' },
        { columnId: 3, id: 5, title: 'Task 5', description: 'Description for Task 5' },
        { columnId: 3, id: 5, title: 'Task 5', description: 'Description for Task 5' },
        { columnId: 3, id: 5, title: 'Task 5', description: 'Description for Task 5' },
        { columnId: 3, id: 5, title: 'Task 5', description: 'Description for Task 5' },
        { columnId: 3, id: 5, title: 'Task 5', description: 'Description for Task 5' },
    ]);

    const handleDrop = (taskId, columnId) => {
        // update tasks array with new column id for the dropped task
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Container>
                <Column>
                    <Title>to do</Title>
                    {/* Map over tasks and render Task components here */}
                    {tasks.filter(task => task.columnId === 1).map(task => (
                        <Task key={task.id} id={task.id} name={task.title} description={task.description} />
                    ))}
                </Column>
                <Column>
                    <Title>doing</Title>
                    {/* Map over tasks and render Task components here */}
                    {tasks.filter(task => task.columnId === 2).map(task => (
                        <Task key={task.id} id={task.id} name={task.title} description={task.description} />
                    ))}
                </Column>
                <Column>
                    <Title>done</Title>
                    {/* Map over tasks and render Task components here */}
                    {tasks.filter(task => task.columnId === 3).map(task => (
                        <Task key={task.id} id={task.id} name={task.title} description={task.description} />
                    ))}
                </Column>
            </Container>
        </DndProvider>
    );
};

export default TaskManager;
