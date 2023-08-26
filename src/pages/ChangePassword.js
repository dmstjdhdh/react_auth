import React, {useState} from 'react';
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        if (password !== confirm) {
            alert("Password do not match, please check password and confirm password");
        }
        const userInput = {
            password
        }

        try {

            // const {data, status} = await axios.post("http://localhost:8000/api/auth/signup", userInput);
            // if (status === 201) {
            //     navigate("/login");
            //     setIsLoading(false);
            // }

        } catch (e) {
            console.log(e.message);
            setIsLoading(false);
        }
    }

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-lg-center"}>
                {isLoading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
                <Col xs={6}>
                    <h1>
                        비밀번호변경
                    </h1>
                    <Form className={"mt-5"} onSubmit={submitHandler}>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                            />
                        </Form.Group>

                        <Button className="mt-3" variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ChangePassword;