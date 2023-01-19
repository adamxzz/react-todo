import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ToDoItem from './ToDoItem';

const ToDoList = () => {

    let initialList = [
        {id: 1,text: '去买冰淇淋',done: true}, 
        {id: 2,text: '吃冰激凌',done: false}, 
        {id: 3,text: '睡觉',done: false}
    ];

    const [list,setList] = useState(initialList);
    const [textInput,setTextInput] = useState("");

    const markAsDone = (id) => {

        const newList = list.map((item) => {
            if (item.id === id) {
                item.done = true;
            }

            return item;
        });

        setList(newList);
    };


    let todoItems = list.map((item) => {
        return <ToDoItem key={item.id} markAsDone={markAsDone} todo={item}/>;
    });

    const handleTextInput = e => {
        setTextInput(e.target.value);
    };

    const addTodoItem = () => {
        let newTodo = {
            id: list[list.length - 1].id + 1,
            text: textInput,
            done: false
        };

        setList((prevList) => [...prevList,newTodo]);
        setTextInput("");
    };

    return (
        <Card>
            <Card.Header>ToDoList</Card.Header>
            <Card.Body>
                <ListGroup variant='flush'>
                    {todoItems}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <input type="text" value={textInput} onChange={handleTextInput}/>
                <Button variant='primary' className='float-end' onClick={addTodoItem}>Add</Button>
            </Card.Footer>
        </Card>
    );
}

export default ToDoList;