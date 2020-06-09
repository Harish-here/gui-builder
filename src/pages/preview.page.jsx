import React from 'react';
import { Link } from "react-router-dom";
import ItemSelector from '../components/itemSelector.component';
import PropTypes from "prop-types";
import { getDoc } from '../utility/document.service';
import { DocCordinates} from '../utility/utility';
import { DocTitle, Cell, Board } from '../components/Document.components';


class Preview extends React.Component {
    constructor(props){
        super(props);
        const { params } = this.props.match;
        let docExists = getDoc(params.docId);
        this.state = {
            xy: DocCordinates,
            ...docExists
        }
    }
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render(){
        const { docItems, docName, docId, createdAt } = this.state
        return (
            <div className='h-full flex content-stretch'>
                <div className='p-3 w-full flex items-center justify-center'>
                    <div className='flex flex-col h-full items-center w-full'>
                        <div className='p-2 flex flex-col items-center justify-center'>
                            <DocTitle className='p-2 text-center shadow rounded bg-gray-200 min-w-3'>
                                {docName}
                                <Link className='text-xs ml-1 blue' to={`/builder/${docId}`}> Edit Doc</Link>
                            </DocTitle>
                            <span className='ml-3 text-xs p-1 text-gray-400'>
                                Created on - {createdAt}
                            </span>
                        </div>
                        <Board id='preview-board' className='w-3/5 shadow-lg border flex flex-wrap'>
                            {
                                this.state.xy.map(x =>
                                <Cell key={`cell-${x}`} id={`cell-${x}`} className='flex justify-center items-center w-1/6' >
                                        <ItemSelector type={ (docItems[x] && docItems[x].length >0) ? docItems[x][0] : ""}  />
                                </Cell>)
                            }
                        </Board>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Preview;

