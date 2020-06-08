import React from 'react';
import './builder.style.css';
import { DragDropContext } from 'react-beautiful-dnd';
import ItemList from "../../components/item-list/item-list.component";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { getDoc, updateDoc } from '../../utility/document.service';

class Builder extends React.Component {
    constructor(props){
        super(props);
        const { params } = this.props.match;
        let docExists = getDoc(params.docId);
        console.log(docExists)
        this.state = {
            xy: [11,21,31,41,51,12,22,32,42,52,13,23,33,43,53,14,24,34,44,54,15,25,35,45,55],
            collection: ["input","email","image","button","radio","label"],
            ...docExists
        }
        this.onDragEnd = this.onDragEnd.bind(this);
        this.saveDoc = this.saveDoc.bind(this);

    }
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    onDragEnd(result){
        const { destination, source, draggableId } = result;

        if(!destination) return

        if(destination.droppableId === source.droppableId) return

        let newDocItems = JSON.parse(JSON.stringify(this.state.docItems));
        let sourceId = source.droppableId.split('-')[1];
        let destId = destination.droppableId.split('-')[1];
        
        // debugger;
        //scene -1 collection box to new cell
        
        if(source.droppableId === 'collection'){
            let item = draggableId.split('-')[1];
            newDocItems[destId] = [item];

        }else{
            //scene - 2 a cell to cell
            let item = draggableId.split('-')[2];
            newDocItems[sourceId] = [];
            newDocItems[destId] = [item];
            
        }

        
        this.setState({
            docItems: newDocItems
          })
        
        console.log(result)
        
    }
    
    clearElements(){
        
        let newDocItems = JSON.parse(JSON.stringify(this.state.docItems));
        for(let i in newDocItems){
            newDocItems[i] = [];
        }

        this.setState({
            docItems: newDocItems
        })
    }
    saveDoc(){
        let updatedDoc = JSON.parse(JSON.stringify(this.state));
        delete updatedDoc.collection;
        delete updatedDoc.xy;
        updateDoc(updatedDoc.docId,updatedDoc);

    }

    render(){
        const { collection, docItems } = this.state;
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
            <div id='builder' className='h-full flex content-stretch'>
                <div className='w-3/12 border-r-2 p-3'>
                   <ItemList columnId='collection' collections={collection} /> 
                </div>
                <div className='w-9/12 p-3 flex justify-center items-center'>
                    <div className='absolute flex justify-center items-center p-2 bottom-0 left-10 right-10 shadow border rounded w-1/3 h-20'>
                        <button onClick={() => this.clearElements()} className='bg-blue-500 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded'>Clear</button>
                        <button onClick={() => this.saveDoc()} className='bg-blue-500 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded'>Save</button>
                    </div>
                    <div id='builder-ui' className='shadow-lg w-2/3 flex flex-wrap flex-start'>
                        
                        {
                            this.state.xy.map(x =>
                             <div key={`cell-${x}`} id={`cell-${x}`} className='cell-container w-1/5 '>
                                    <ItemList columnId={`cell-${x}`} collections={ docItems[x] || []} />
                            </div>)
                        }
                    </div>
                </div>
            </div>
            </DragDropContext>
        )
    }
}

export default withRouter(Builder);

