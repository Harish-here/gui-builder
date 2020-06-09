import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ItemList from "../components/item-list.component";
import { getDoc, updateDoc } from '../utility/document.service';
import { cssClass as css, DocCordinates, Components} from '../utility/utility';
import { DocTitle, Cell, Board } from '../components/Document.components';


class Builder extends React.Component {
    constructor(props){
        super(props);
        const { params } = this.props.match;
        let docExists = getDoc(params.docId);
 
        this.state = {
            xy: DocCordinates,
            collection: Components,
            showGrid: false,
            ...docExists
        }
        this.onDragEnd = this.onDragEnd.bind(this);
        this.saveDoc = this.saveDoc.bind(this);
        this.showTheGrid = this.showTheGrid.bind(this);
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
        let sourceId = source.droppableId.split('-')[1]; //Source cell
        let destId = destination.droppableId.split('-')[1]; //destination cell
        
        
        //scene -1 collection box to new cell
        
        if(source.droppableId === 'collection'){
            let item = draggableId.split('-')[1]; // component item
            newDocItems[destId] = [item]; //feed into the coordinate

        }else{
            //scene - 2 a cell to cell
            let item = draggableId.split('-')[2];
            newDocItems[sourceId] = [];
            newDocItems[destId] = [item];
            
        }

        
        this.setState({
            docItems: newDocItems
          })
        //auto save changes
        setTimeout(()=>{
            this.saveDoc()
        },1000)
        
    }

    showTheGrid(e){
        this.setState({
            showGrid: !this.state.showGrid
        })
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
        delete updatedDoc.showGrid;
        updateDoc(updatedDoc.docId,updatedDoc);
        let { updatedAt } = getDoc(updatedDoc.docId);
        this.setState({updatedAt})

    }

    render(){
        const { collection, docItems, docName, showGrid, docId, updatedAt } = this.state;
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
            <div id='builder' className='h-full flex content-stretch'>
                <div className='w-2/12 border-r-2 p-3'>
                    <div className='text-lg text-center text-black-300 border-b mb-2 p-2'>
                        Components
                        <div className='text-xs p-1 text-gray-400'>
                                Drag and Drop the components on board to add and reverse it to remove from board
                        </div>
                    </div>
                   <ItemList columnId='collection' collections={collection} /> 
                </div>
                <div className='w-10/12 p-3 flex justify-center items-center'>
                    <div className='w-full flex flex-col items-center h-full'>
                        <div className='absolute flex justify-around items-center p-2 bottom-0 left-10 right-10 shadow border rounded w-1/5 h-15'>
                            <button onClick={() => this.clearElements()} className={css['btn-ghost-sm']}>Clear All</button>
                            <div className='text-xs flex items-center'> <input onChange={this.showTheGrid} type='checkbox' className='mr-2' />show grids </div>
                            <button onClick={() => this.saveDoc()} className='bg-blue-500 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded'>Save</button>
                        </div>
                        <div className='p-2 flex flex-col items-center justify-center'>
                            <DocTitle className='p-2 text-center shadow rounded bg-gray-200 min-w-3'>
                                {docName}
                                <Link className='text-xs ml-3 blue' to={`/preview/${docId}`}> Preview Doc</Link>
                            </DocTitle>
                            <span className='ml-3 text-xs p-1 text-gray-400'>
                                Last saved on - {updatedAt}
                            </span>
                        </div>
                        <Board id='builder-ui' className='shadow-lg w-2/3 border flex flex-wrap flex-start'>
                            
                            {
                                this.state.xy.map(x =>
                                <Cell key={`cell-${x}`} id={`cell-${x}`} className={`w-1/6 ${(showGrid) ? "border" : ""}`}>
                                        <ItemList columnId={`cell-${x}`} collections={ docItems[x] || []} />
                                </Cell>)
                            }
                        </Board>
                    </div>
                    
                </div>
            </div>
            </DragDropContext>
        )
    }
}

export default withRouter(Builder);

