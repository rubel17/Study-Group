import React from 'react';

const Question = () => {
    return (
        <div className='m-5 bg-light p-3 border border-success rounded'>
            <div>
                <h3 className='text-primary'>1.How does react work</h3>
                <p className='text-danger ms-3'>
                    * React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. <br /> <br /> <br />

                    * React uses an HTML-in-JavaScript syntax called JSX (JavaScript and XML). Familiarity with both HTML and JavaScript will help you to learn JSX, and better identify whether bugs in your application are related to JavaScript or to the more specific domain of React.
                </p>
            </div>
            <div>
                <h3 className='text-primary'>2.Difference between props and state</h3>
                <p className='text-danger ms-3'>*Props: <br />
                    2.1: Props are used to pass data from one component to another. <br />
                    2.2:Props property is used to update the component  values in the component. <br />
                    2.3:Props cannot be modified, read-only, and Immutable. <br />
                </p>
                <p className='text-danger ms-3'> *State: <br />
                    2.1: The state is a local data storage that is local to the component only and cannot be passed to other components. <br />
                    2.2:setState property is used to update the state values in the component. <br />
                    2.3: State can be modified,and mutable.

                </p>
            </div>
            <div>
                <h3 className='text-primary'>3.What does useEffect do</h3>
                <p className='text-danger ms-3'>
                    *  Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that donot require a cleanup. We say that because we can run them and immediately forget about them. <br />
                     * Every time a React components finish rendering, useEffect run unless you specified dependencies in the dependencies array. <br />
                     *  When we want to fetch data based on passed parameter, we can updated this parameter from client side. Once the parameter is updated to new data , useEffect hook will be re-called.
                </p>
            </div>
        </div>
    );
};

export default Question;