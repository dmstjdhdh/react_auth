import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";

const ForgotPassword = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [showNumber, setshowNumber] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const userInput = {
            email,
        }

        try{

            // 이메일 보내고, 인증번호를 해당 이메일에 보내야하지않을까
            // const {data, status} = await axios.post("http://localhost:8000/api/auth/signup", userInput);
            // if(status === 201){
            //     navigate("/login");
            //     setIsLoading(false);
            // }
            setshowNumber(true);
        } catch (e) {
            console.log(e.message);
            setIsLoading(false);
            setshowNumber(true);
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
                    <h4>
                        가입한 이메일 주소를 입력해주세요
                    </h4>
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

                        {showNumber && (
                            <Form.Group className="mb-3" controlId="formBasicCode">
                                <Form.Label>Verification Code</Form.Label>
                                <Form.Control type="text" placeholder="Enter verification code" />
                            </Form.Group>
                        )}

                        <Button className="mt-3" variant="primary" type="submit">
                            {showNumber ? '인증코드 확인' : '이메일로 인증코드 받기'}
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;