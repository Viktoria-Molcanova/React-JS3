
import './App.css';

import React, { useState } from 'react';
import { TextField, Button, Card, List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        setFahrenheit(value ? (value * 9/5 + 32).toFixed(2) : '');
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        setCelsius(value ? ((value - 32) * 5/9).toFixed(2) : '');
    };

    return (
        <div>
            <TextField
                label="Цельсий"
                value={celsius}
                onChange={handleCelsiusChange}
                variant="outlined"
            />
            <TextField
                label="Фаренгейт"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                variant="outlined"
            />
        </div>
    );
};

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <TextField
                label="Новая задача"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                variant="outlined"
            />
            <Button onClick={addTask} variant="contained">Добавить</Button>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index}>
                        {task}
                        <IconButton onClick={() => deleteTask(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <h1>Температурный конвертер</h1>
            <TemperatureConverter />
            <h1>Список дел</h1>
            <TodoList />
        </div>
    );
};

export default App;