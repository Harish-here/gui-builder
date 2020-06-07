import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Contanier = styled.div`
    width:100px;
    background-color:white;
    min-height:35px;
`;

class Item extends React.Component {
    
    render(){
        return (
            
            <Draggable draggableId={String(this.props.index)+'-'+String(this.props.columnId) } index={this.props.index} >
                {(provided)=>(
                    <Contanier 
                        className='border item p-2 m-4 text-center'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                       ref={provided.innerRef}
                    >
                        {this.props.item}
                    </Contanier>
                )}
            </Draggable>
            
        )
        
    }
}

export default Item;