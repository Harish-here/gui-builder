import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { createDoc, getDocList, checkDocNameExist, deleteDoc } from '../utility/document.service';
import { cssClass as css} from '../utility/utility';

const BarScroller= {
    overflow: 'auto',
    height: '580px'
}

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            docList: getDocList(),
            docName: "",
        }
        this.gotoBuidler = this.gotoBuidler.bind(this);
        this.handleInput= this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        
    }
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
     generateRandomString(length=10){
         return Math.random().toString(20).substr(2, length)
     }
    gotoBuidler(){
        let  docName  = this.state.docName.trim();
        if(docName === ""){
            alert('Please enter the name');
            return
        }
        if(checkDocNameExist(docName)){
            alert('Doc name already exists');
            return
        }

        const { history } = this.props;
        let randomid = this.generateRandomString();
        createDoc(randomid,docName);
        history.push(`/builder/${randomid}`);

    }

    deleteItem(id){
        if(!window.confirm("Are you sure to delete?")){ return}
        deleteDoc(id);
        let newList = getDocList();
        this.setState({
            docList: newList
        })
    }
    

    handleInput(e){
        this.setState({docName: e.target.value})
    }

    render(){
        const { docList } = this.state;
        return (
            <div className='h-full flex content-stretch'>
                <div className='w-2/3 p-3 flex items-center justify-center'>
                    <div className='shadow p-10 w-2/3 flex border flex-col'>
                        <input onChange={this.handleInput} placeholder='Type the name of the doc' type="text" className='shadow-lg p-5  m-3 border text-lg'/>
                        <div className='flex justify-center'>
                         <button className={css['btn-primay']}
                               onClick={this.gotoBuidler}
                               >
                                Go
                        </button>
                        
                        </div>
                        
                    </div>
                </div>
                <div  className='w-1/3 p-3 border-l-2 flex flex-col'>
                    <div className='p-3 text-center text-lg border-b' >
                        Saved items
                    </div>
                    <div className='p-3' >
                        <ul style={BarScroller} className='divide-y'>
                            {docList.map(doc => {
                                return (
                                <li key={doc.docId} className='py-3 flex items-center justify-between'>
                                    <div className='w-2/3 flex items-center'>
                                        {doc.docName}
                                    </div>
                                    <div className='w-1/3 flex text-blue-400 items-center justify-around'>
                                        <Link className='text-sm hover:bg-gray-300 p-1 rounded' to={`/preview/${doc.docId}`}>Preview</Link>
                                        <Link className='text-sm hover:bg-gray-300 p-1 rounded' to={`/builder/${doc.docId}`}>Edit</Link>
                                        <button className={css['btn-danger-sm']} onClick={()=> this.deleteItem(doc.docId)}>Delete</button>
                                    </div>
                                </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);

