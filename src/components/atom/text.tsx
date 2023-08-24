import React from 'react';

type TextType = {
    text: string;
    variation?: 'text' | 'h1' | 'h2' ;
    color?: string;
}

export const Text: React.FC<TextType> = ({text, color = 'black', variation}) => {
    const TextType = variation || 'text';
    return (
        <TextType style={{ color }}>{text}</TextType>
    )
}