import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Contanier = styled.div`
    width:100px;
    background-color:white;
    min-height:35px;
`;

const InputText = styled.input`
    width:100px;
`;

const Button = styled.button``;
const Image = styled.img``;
function ComponentSelector(props){
    if(['input','radio','email'].includes(props.type)){
        return <InputText {...props} />
    }

    if(props.type === 'button'){
        return <Button className='bg-blue-500 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded'>Button </Button>
    }

    if(props.type === 'image'){
        return <Image src='https://i.picsum.photos/id/378/100/75.jpg' />
    }
    return null
}


class Item extends React.Component {
    
    render(){
        return (
            
            <Draggable draggableId={this.props.columnId + '-' + this.props.item} index={this.props.index} >
                {(provided)=>(
                    <Contanier 
                        className=' item p-2 m-4 text-center'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                       ref={provided.innerRef}
                    >
                        {/* {this.props.item} */}
                        <ComponentSelector type={this.props.item} disabled className='border text-center' placeholder={this.props.item} />
                    </Contanier>
                )}
            </Draggable>
            
        )
        
    }
}

export default Item;