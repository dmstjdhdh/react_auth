import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        const userInput = {
            email,
            password,
        }
        console.log(userInput);
    }
    return (
        <Container className={"mt-5"}>

            <Row className={"justify-content-lg-center"}>
                <Col xs={6}>
                    <h1>
                        로그인
                    </h1>
                    <Form className={"mt-5"} onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            로그인하기
                        </Button>

                    </Form>
                    <div className={"mt-3"}>
                            <span className="mt-3">
                                <Link to={"/forgot/password"}>
                                    비밀번호 재설정
                                </Link>
                                {"                         "}
                                <Link to={"/signup"}>
                                    회원가입
                                </Link>
                            </span>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Login;