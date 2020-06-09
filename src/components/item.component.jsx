import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ItemSelector from './itemSelector.component';

const Contanier = styled.div`
    min-width:100px;
    min-height:35px;
`;




class Item extends React.Component {
    
    render(){
        return (
            
            <Draggable draggableId={this.props.columnId + '-' + this.props.item} index={this.props.index} >
                {(provided)=>(
                    <Contanier 
                        className={(this.props.columnId === 'collection') ? ' item p-4 m-3 text-center border' : " flex justify-center items-center p-4"}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                       ref={provided.innerRef}
                    >
                        <ItemSelector type={this.props.item} disabled className='text-center' placeholder={this.props.item} />
                    </Contanier>
                )}
            </Draggable>
            
        )
        
    }
}

export default Item;