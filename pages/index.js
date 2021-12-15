import styled from 'styled-components';
import SpringCard from '../components/SpringCard';

const SpringPageStyles = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Home = () => {
    return (
        <SpringPageStyles>
            <SpringCard imageUrl={'hill1.jpeg'} />
            <SpringCard imageUrl={'hill2.jpeg'} />
        </SpringPageStyles>
    );
};

export default Home;
