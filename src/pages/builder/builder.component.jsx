import React from 'react';
import './builder.style.css';
import { DragDropContext } from 'react-beautiful-dnd';
import ItemList from "../../components/item-list/item-list.component";

class Builder extends React.Component {
    constructor(){
        super();
        this.state = {
            list: [11,21,31,41,51,12,22,32,42,52,13,23,33,43,53,14,24,34,44,54,15,25,35,45,55],
            list2: [11,21,31,41,51,12,22,32],
            pageItems: {
                "11": [],
                "21": [],
                "31": [],
                "41": []
            }
        }
        this.onDragEnd = this.onDragEnd.bind(this)
    }
    onDragEnd(result){
        const { destination, source, draggableId } = result;

        if(!destination) return

        if(destination.droppableId === source.droppableId) return

        let newPageItems = JSON.parse(JSON.stringify(this.state.pageItems));
        let coordinate = destination.droppableId.split('-')[1];
        let item = draggableId.split('-')[0];
      
        newPageItems[coordinate] = [this.state.list2[item]]

        this.setState({
            pageItems: newPageItems
        })

        
    }

    render(){
        const { list2, pageItems } = this.state;
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
            <div id='builder' className='h-full flex content-stretch'>
                <div className='w-3/12 border-r-2 p-3'>
                   <ItemList columnId='cell-00' collections={list2} /> 
                </div>
                <div className='w-9/12 p-3 flex justify-center items-center'>
                    <div id='builder-ui' className='shadow-lg w-2/3 flex flex-wrap flex-start'>
                        
                        {
                            this.state.list.map(x =>
                             <div key={`cell-${x}`} id={`cell-${x}`} className='cell-container w-1/5 '>
                                    <ItemList columnId={`cell-${x}`} collections={ pageItems[x] || []} />
                            </div>)
                        }
                    </div>
                </div>
            </div>
            </DragDropContext>
        )
    }
}

export default Builder;

