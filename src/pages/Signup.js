import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Navbar, Row, Spinner} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {checkEmailCode, emailCheckCode, register, sendEmailCode} from "../Actions/userActions";

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirm, setConfirm] = useState("");
    const [code, setCode] = useState("");
    const [showCode, setShowCode] = useState(false);
    const [emailVerifired, setEmailVerifired] = useState(false);

    //const [isLoading, setIsLoading] = useState(false)

    const [isPersonal,setIsPersonal] =useState(false);
    const [isMarketing,setIsMarketing] = useState(false);

    const userRegister = useSelector((state) => state.userRegister)
    const {loading, success, error} = userRegister

    const emailSendCode = useSelector((state) => state.emailSendCode)
    const {loading: emailSendLoading, success: emailSendSuccess} = emailSendCode

    const checkEmailCode = useSelector((state) => state.checkEmailCode)
    const {loading: emailCheckLoading, success: emailCheckSuccess} = checkEmailCode

    const checkCode = async(e) => {
        e.preventDefault();

        dispatch(emailCheckCode({email, code}));
    }

    const sendCode = async(e) => {
        e.preventDefault();

        dispatch(sendEmailCode({email}))
    }
    const submitHandler = async (e) => {
        e.preventDefault();

        if(!emailVerifired)
        {
            alert("이메일이 확인되지 않았습니다.");
            return;
        }
        if(password !== confirm){
            alert("Password do not match, please check password and confirm password");
            return;
        }


        const userInput = {
            email,
            username,
            password,
            isMarketingAgree: isMarketing,
            isPersonalInfoAgree: isPersonal
        }

        dispatch(register(userInput));
    }


    useEffect(() => {

        if(emailSendSuccess){
            setShowCode(true);
        }

        if(success) {
            navigate("/login");
        }

        if (emailCheckSuccess){
            alert("확인되었습니다.");
            setShowCode(false);
            setEmailVerifired(true);
        }
    }, [emailCheckSuccess, emailSendSuccess, dispatch, success, navigate]);

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-lg-center"}>
                {loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
                {error && <h1>
                    {error}
                </h1>}
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

                        <Button onClick={sendCode} className="mb-3" variant="primary" type="submit" disabled={emailVerifired}>
                            이메일인증 코드 보내기
                        </Button>

                        {emailSendLoading && (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        )}

                        {showCode && (
                            <Form.Group className="mb-3" controlId="formBasicCode">
                                <Form.Label>Verification Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter verification code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                                <Button onClick={checkCode} className="mt-3" variant="primary" type="submit">
                                    인증코드 확인하기
                                </Button>
                            </Form.Group>
                        )}

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