import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../Actions/userActions";

const Login = () => {
    //redux 적용 순서
    //1. dispatch 선언
    //2. useEffect 선언
    //3. submitHandler 수정 (action 적용)
    //4. userSelect 적용
    //5. userSelect에 대한 상태 선언
    const navigate = useNavigate()
    //1.
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //4.
    const userLogin = useSelector(state => state.userLogin)
    //5
    const {loading, userInfo} = userLogin

    const submitHandler = async (e) => {
        e.preventDefault();

        const userInput = {
            email,
            password,
        }

        //3
        dispatch(login(userInput))

    }

    //2
    useEffect(() => {
        if(userInfo){
            navigate("/profile")
        }
    }, [dispatch, userInfo, navigate]);

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-lg-center"}>
                {loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
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