import React from "react";
import styled from 'styled-components';

const InputText = styled.input`
    width:100px;
    border: 1px solid #e7e7e7;
    padding:2px;
    text-align:center;
`;

const Label = styled.label`
    text-align:center;
    width:70px;
`;

const Button = styled.button``;
const Image = styled.img``;

const ItemSelector = (props) => {
    
    if(['input','radio','email'].includes(props.type)){
        return <InputText {...props} placeholder={props.type} disabled />
    }

    if(props.type === 'button'){
        return <Button className='bg-blue-500 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded'>Button </Button>
    }

    if(props.type === 'image'){
        return <Image src='https://i.picsum.photos/id/378/70/40.jpg' />
    }

    if(props.type === 'label'){
        return <Label className='p-2 border'>Label</Label>
    }

    return null
}

export default ItemSelector;