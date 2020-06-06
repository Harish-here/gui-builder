import React from 'react';
import './home.style.css';

class Home extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className='h-full flex content-stretch'>
                <div className='w-2/3 p-3 flex items-center justify-center'>
                    <div className='shadow p-10 w-2/3 flex flex-col'>
                        <input placeholder='Type the name of the doc' type="text" className='shadow-lg p-5  m-3 border text-lg'/>
                        <div className='flex justify-center'>
                         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Go</button>
                        </div>
                        
                    </div>
                </div>
                <div  className='w-1/3 p-3 border-l-2 flex flex-col'>
                    <div className='p-3 text-center text-lg border-b' >
                        Saved items
                    </div>
                    <div className='p-3' >
                        <ul className='divide-y'>
                            <li className='py-3 flex justify-between'>
                                <div className='w-2/3 flex items-center'>
                                    Document name
                                </div>
                                <div className='w-1/3 flex justify-around'>
                                    <div>Preview</div>
                                    <div>Edit</div>
                                </div>
                            </li>
                            <li className='py-3 flex justify-between'>
                                <div className='w-2/3 flex items-center'>
                                    Document name
                                </div>
                                <div className='w-1/3 flex justify-around'>
                                    <div>Preview</div>
                                    <div>Edit</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

