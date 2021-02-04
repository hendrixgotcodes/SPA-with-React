import React, {useState} from 'react';

const AddTask = ({onAdd})=>{

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    function submitForm(e){

        e.preventDefault();

        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);

    }

    return(

        <form className="add-form" onSubmit={submitForm}>

            <div className="form-control">

                <label>
                    Task
                    <input type="text" placeholder="Add task"
                        value={text}
                        onChange = {(e)=> setText(e.target.value)}
                    />
                </label>
                
            </div>
            <div className="form-control">

                <label>
                    Day & Time
                    <input type="text" placeholder="Add Day & Time"
                         value={day}
                         onChange = {(e)=> setDay(e.target.value)}
                    />
                </label>

            </div>
            <div className="form-control">

                <label>
                    Set Reminder
                    <input type="checkbox"
                     checked={reminder}
                     onChange = {(e)=> setReminder(e.target.checked)}
                    />
                </label>

            </div>

            <input type="submit" value="Save Task"/>

        </form>

    )

}

export default AddTask