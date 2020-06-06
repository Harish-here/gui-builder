import React from 'react';
import './preview.style.css';

class Preview extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className='h-full flex content-stretch'>
                <div className='p-3 w-full flex items-center justify-center'>
                    <div id='preview-board' className='w-2/5 shadow-lg'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Preview;

