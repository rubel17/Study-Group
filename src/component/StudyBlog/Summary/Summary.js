import React from 'react';
import './Summary.css';
import pic from "../../../img/rubel.jpg";

const Summary = ({studyTime}) => {
    // console.log(studyTime);
    
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
                    <div>
                        <h5 className='break-time'><a href="/home">10s</a></h5>
                    </div>
                    <div>
                        <h5 className='break-time'><a href="/home">20s</a></h5>
                    </div>
                    <div>
                        <h5 className='break-time'><a href="/home">30s</a></h5>
                    </div>
                    <div>
                        <h5 className='break-time'><a href="/home">40s</a></h5>
                    </div>
                </div>
             </div>

             <div className='mt-4'>
                <h5>Study Details</h5>
                <h5 className='field'>Study Time : <small>{studyTime}</small> Seconds</h5>
                <h5 className='field'>Break Time : <small>0</small> Seconds</h5>

             </div>
             <div>
                <button className='active-btn btn btn-primary'>Activity Completed</button>
             </div>
        </div>
    );
};

export default Summary;