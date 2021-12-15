import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const SpringCardStyles = styled.div`
    .card {
        width: 45ch;
        height: 45ch;
        background: grey;
        border-radius: 5px;
        background-image: url(${p => p.image});
        background-size: cover;
        background-position: center center;
        box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.5s;
        will-change: transform;
        border: 15px solid white;
    }
    .card:hover {
        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = ({ imageUrl }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    console.log('imageUrl: ', imageUrl);
    return (
        <SpringCardStyles image={imageUrl}>
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            />
        </SpringCardStyles>
    );
};

export default Card;
