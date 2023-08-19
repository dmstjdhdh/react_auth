import React, {useState} from 'react';
import {Button, Col, Container, Form, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirm, setConfirm] = useState("");

    const [isPersonal,setIsPersonal] =useState(false);
    const [isMarketing,setIsMarketing] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirm){
            alert("Password do not match, please check password and confirm password");
        }
        const userInput = {
            email,
            username,
            password,
            isMarketingAgree: isMarketing,
            isPersonalInfoAgree: isPersonal
        }
        console.log(userInput);
    }

    return (
        <Container className={"mt-5"}>

            <Row className={"justify-content-lg-center"}>
                <Col xs={6}>
                    <h1>
                        회원가입
                    </h1>
                    <Form className={"mt-5"} onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

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

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="만 14세 이상입니다." />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="개인정보 수집 및 이용동의"
                                value={isPersonal}
                                onChange={(e) => setIsPersonal(!isPersonal)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="개인정보 마케팅 활용 동의"
                                value={isMarketing}
                                onChange={(e) => setIsMarketing(!isMarketing)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="이용약관" />
                        </Form.Group>

                        <Button className="mt-3" variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                    <div className={"mt-3"}>
                        <span className="mt-3">
                            이미 아이디가 있으신가요?{"     "}
                            <Link to={"/login"}>
                                로그인
                            </Link>
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;