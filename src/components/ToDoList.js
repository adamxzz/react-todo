import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ToDoList = () => {

    return(
        <Card>
            <Card.Header>ToDoList</Card.Header>
            <Card.Body>

            </Card.Body>
            <Card.Footer>
                <Button variant='primary' className='float-end'>Add</Button
            </Card.Footer>
        </Card>
    );
}

export default ToDoList;