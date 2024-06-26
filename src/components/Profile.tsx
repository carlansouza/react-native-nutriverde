import React from 'react';
import styled from 'styled-components/native';


const Profile = () => {
    return (
        <Container>
            <Title>Profile</Title>
            <Paragraph>Profile Screen</Paragraph>
        </Container>
    
    );
}


const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const Title = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: #288474;
`;

const Paragraph = styled.Text`
    font-size: 16px;
    color: #285A84;
`;


export default Profile;