import React from 'react';
import './style.css';

export function MessageComponent(props){
    const{text} = props;
    const Component = <h1 className='title'>{text}</h1>;
    return Component;
        
    
}