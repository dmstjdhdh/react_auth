import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";

const Profile = () => {

    const [userInfo, setuserInfo] = useState({})

    const getUserInfo = async () => {

        try{
            const token = localStorage.getItem("token")
            const options = {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
            const {data, status} = await axios.get("http://localhost:8000/api/auth", options)

            if(status === 200)
            {
                setuserInfo(data.data);
            }
        } catch (e) {
            console.log(e.message);
        }

    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <Container>
            <Row>
                <h1>
                    {userInfo.email}
                </h1>
            </Row>
        </Container>
    );
};

export default Profile;