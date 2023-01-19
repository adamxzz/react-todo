import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const TodoItem = (props) => {

    let html = (
        <>
            {props.todo.text}
            <Badge pill bg="success" className="float-end" onClick={() => {props.markAsDone(props.todo.id)}}>&#10003;</Badge>
        </>
    );

    if(props.todo.done){
        html = (
            <>
                <span className='done'>{props.todo.text}</span>
                <span className='float-end'>&#128077;</span>
            </>
        );
    }

    return (
        <ListGroup.Item>
            {html}
        </ListGroup.Item>
    );
};

export default TodoItem;