import React from "react";
import Item from "./item.component";
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Contanier = styled.div`
    min-height: 70px;
`;

class ItemList extends React.Component {
    
    render(){
        return (
            <Droppable droppableId={this.props.columnId}>
                {(provided) => (
                    <Contanier
                        {...provided.droppableProps}
                        ref={provided.innerRef} 
                        className={(this.props.columnId === "collection") ? 'flex flex-col items-center': 'flex justify-center items-center'}
                    >
                        {this.props.collections.map((x,index) => <Item columnId={this.props.columnId} key={index} item={x} index={index} />)}
                        {provided.placeholder}
                    </Contanier>
                )}
                
            </Droppable>
            
        )
    }
}

export default ItemList;
