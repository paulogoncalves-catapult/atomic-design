import React from 'react';
import { Text } from '../atom';

type CounterTypes = {
    description?: string;
    image: string;
}

export const Descriptor: React.FC<CounterTypes> = ({ description, image }) => {
    return (
        <>
            <div>
                <img src={image} height={200} />
            </div>
            {description ? (
                <>
                    <Text text={description} />
                    <hr/>
                </>
            ) : null}
        </>
    )
}