import React, {useState} from 'react';
import {Button, Col, Container, Form, Navbar, Row, Spinner} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirm, setConfirm] = useState("");
    const [code, setCode] = useState("");
    const [showCode, setShowCode] = useState(false);
    const [emailVerifired, setEmailVerifired] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const [isPersonal,setIsPersonal] =useState(false);
    const [isMarketing,setIsMarketing] = useState(false);

    const checkCode = async(e) => {
        e.preventDefault();


        const userInput = {
            email,
            code
        }

        try{
            const {data, status} = await axios.post("http://localhost:8000/api/auth/email/check", userInput)

            if(status === 201){
                alert("확인되었습니다.")
                setShowCode(false);
                setEmailVerifired(true);
            }

        } catch (e) {
            alert("인증코드가 맞지 않습니다.");
        }
    }

    const sendCode = async(e) => {
        e.preventDefault();

        const userEmail = {
            email
        }

        try{
            const {data, status} = await axios.post("http://localhost:8000/api/auth/email/send", userEmail);

            if(status === 201){
                setShowCode(data);
            }

        } catch (e) {
            console.log(e.message);
            setIsLoading(false);
        }
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

        setIsLoading(true);

        const userInput = {
            email,
            username,
            password,
            isMarketingAgree: isMarketing,
            isPersonalInfoAgree: isPersonal
        }

        try{

            const {data, status} = await axios.post("http://localhost:8000/api/auth/signup", userInput);
            if(status === 201){
                navigate("/login");
                setIsLoading(false);
            }
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