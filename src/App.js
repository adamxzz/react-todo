import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './assets/app.css';

import ToDoList from "./components/ToDoList";

const App = () => {

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <ToDoList/>
                </Col>
            </Row>
        </Container>

    );

}

export default App;