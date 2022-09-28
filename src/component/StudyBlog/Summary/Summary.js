import React from 'react';
import './Summary.css';
import pic from "../../../img/rubel.jpg";

const Summary = () => {
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
                        <h5 className='break-time'>10s</h5>
                    </div>
                    <div>
                        <h5 className='break-time'>20s</h5>
                    </div>
                    <div>
                        <h5 className='break-time'>30s</h5>
                    </div>
                    <div>
                        <h5 className='break-time'>40s</h5>
                    </div>
                </div>
             </div>

             <div className='mt-4'>
                <h5>Exercise Details</h5>
                <input  placeholder='Exercise time: 0 seconds' className='input-field' type="text" />

                <input placeholder='Break time: 0 seconds' className='input-field' type="text" />

             </div>
             <div>
                <button className='active-btn btn btn-primary'>Activity Completed</button>
             </div>
        </div>
    );
};

export default Summary;