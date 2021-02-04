import React from 'react';

const AddTask = ()=>{

    return(

        <form className="add-form">

            <div className="form-control">

                <label>
                    Task
                    <input type="text" placeholder="Add task"/>
                </label>
                
            </div>
            <div className="form-control">

                <label>
                    Day & Time
                    <input type="text" placeholder="Add Day & Time"/>
                </label>

            </div>
            <div className="form-control">

                <label>
                    Set Reminder
                    <input type="checkbox"/>
                </label>

            </div>

            <input type="submit" value="Save Task"/>

        </form>

    )

}

export default AddTask