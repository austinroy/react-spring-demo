import React from 'react';
import { useSpring, animated } from 'react-spring';

const HookedComponent = () => {
    const [props] = useSpring({
        opacity: 1,
        color: 'white',
        from: { opacity: 0 },
        delay: '2000'
    })
    return <animated.div style={props}>This text Faded in Using Hooks</animated.div>
}

export default HookedComponent;
