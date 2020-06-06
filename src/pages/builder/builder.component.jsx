import React from 'react';
import './builder.style.css';

class Builder extends React.Component {
    constructor(){
        super();
        this.state = {
            list: [11,21,31,41,51,12,22,32,42,52,13,23,33,43,53,14,24,34,44,54,15,25,35,45,55]
        }
    }

    render(){
        return (
            <div id='builder' className='h-full flex content-stretch'>
                <div className='w-3/12 border-r-2 p-3'>

                </div>
                <div className='w-9/12 p-3 flex justify-center items-center'>
                    <div id='builder-ui' className='shadow-lg w-2/3 flex flex-wrap flex-start'>
                        
                        {
                            this.state.list.map(x => <div id={`cell-${x}`} className='cell-container w-1/5 p-2'></div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Builder;

