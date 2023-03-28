import { useState } from 'react';
import Column from './Column';
import AddCardForm from './AddCardForm';

const TaskManager = () => {
    // Set up initial state for columns and cards
    const [columns, setColumns] = useState({
        todo: {
            title: 'To Do',
            cards: [
                { id: 1, name: 'Task 1', description: 'Do task 1', date: '2023-04-01', person: 'John', urgency: 'medium', category: 'Work' },
                { id: 2, name: 'Task 2', description: 'Do task 2', date: '2023-04-02', person: 'Jane', urgency: 'low', category: 'Personal' }
            ]
        },
        inprogress: {
            title: 'In Progress',
            cards: [
                { id: 3, name: 'Task 3', description: 'Do task 3', date: '2023-04-03', person: 'Mark', urgency: 'high', category: 'Work' }
            ]
        },
        done: {
            title: 'Done',
            cards: [
                { id: 4, name: 'Task 4', description: 'Do task 4', date: '2023-04-04', person: 'Sara', urgency: 'medium', category: 'Personal' }
            ]
        }
    });

    // Define function to handle dropping a card onto a column
    const handleDrop = (card, toColumn) => {
        // Remove card from previous column
        const fromColumn = columns[card.column];
        const newFromCards = fromColumn.cards.filter(c => c.id !== card.id);
        const newFromColumn = { ...fromColumn, cards: newFromCards };

        // Add card to new column
        const toCards = [...toColumn.cards, card];
        const newToColumn = { ...toColumn, cards: toCards };

        // Update state with new columns
        const newColumns = { ...columns, [card.column]: newFromColumn, [toColumn.id]: newToColumn };
        setColumns(newColumns);
    };

    // Define function to handle adding a new card
    const handleAddCard = (card, columnId) => {
        const column = columns[columnId];
        const newCard = { id: Date.now(), ...card };
        const newCards = [...column.cards, newCard];
        const newColumn = { ...column, cards: newCards };
        const newColumns = { ...columns, [columnId]: newColumn };
        setColumns(newColumns);
    };

    // Render the task manager with columns and add card form
    return (
        <div className="task-manager">
            <div className="columns">
                {Object.values(columns).map(column => (
                    <Column key={column.title} column={column} onDrop={handleDrop} />
                ))}
            </div>
            <AddCardForm columns={columns} onAddCard={handleAddCard} />
        </div>
    );
};

export default TaskManager;
