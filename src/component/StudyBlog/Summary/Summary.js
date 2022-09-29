import React, { useEffect, useState } from 'react';
import pic from "../../../img/rubel.jpg";
import BreakTime from './BreakTime/BreakTime';
import { addToDb, getTimeDb} from '../../FakeDb/fakedb';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Summary.css';

const Summary = ({studyTime}) => {
    const [breakTimes, setBreakTimes]=useState([]);
    const [time, setTime]=useState(0);
    useEffect(()=>{
        fetch('breakTime.json')
        .then(res=>res.json())
        .then(data=>setBreakTimes(data))
    },[]);

    useEffect(()=>{
       const data = getTimeDb();
      for(const id in data){
        setTime(id);
      }
        
        
    },[])

    const handleAddBreakTime = (time) =>{
        addToDb(time);
        setTime(time);
    }

    const notify = () => {
        // alert('alert');
        toast('All Activity Completed', {position:toast.POSITION.TOP_CENTER});
    }
    
    return (
        
        <div className='mx-3'>
             <div className='d-flex mt-3 align-items-center'>
                <img className='summary-img me-3' src={pic} alt="" />
                <div>
                <h5>Md.Rubel</h5>
                <p  className='lh-1'>Khulna,Bangladesh</p>
                </div>
             </div>

             <div  className='info d-flex mt-4 p-2 ps-3'>
                <div>
                <h4>60Kg</h4>
                <p>Weight</p>
                </div>
                <div className='ps-5'>
                    <h4>5.3</h4>
                    <p>Height</p>
                </div>
                <div className='ps-5'>
                    <h4>28yrs</h4>
                    <p>Age</p>
                </div>
             </div>

             <div className='mt-4'>
                <h4>Add A Break</h4>
                <div className='all-break-time d-flex'>
                   {
                    breakTimes.map(breakTime=> <BreakTime 
                        key={breakTime.id} 
                        breakTime={breakTime}
                        handleAddBreakTime={handleAddBreakTime}
                        ></BreakTime>
                    )
                   }
                    
                    
                </div>
             </div>

             <div className='mt-4'>
                <h5>Study Details</h5>
                <h5 className='field'>Study Time : <small>{studyTime} Seconds</small> </h5>
                <h5 className='field'>Break Time : <small>{time} Seconds</small> </h5>

             </div>
             <div>
                <button onClick={notify} className='active-btn btn btn-primary'>Activity Completed</button>
             </div>
             <ToastContainer/>
        </div>
        
    );
};

export default Summary;