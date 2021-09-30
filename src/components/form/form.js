import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm.js';

import { v4 as uuid } from 'uuid';


function Form(props) {

    const { handleChange, handleSubmit } = useForm(addItem);

    function addItem(item) {
        item.id = uuid();
        item.complete = false;
        props.addItem(item);
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>Add To Do Item</h2>

            <label>
                <span>To Do Item</span>
                <input className='bp3-input' onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </label>

            <label>
                <span>Assigned To</span>
                <input className='bp3-input' onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </label>

            <label className="bp3-label">
                <span className="bp3-text">Difficulty</span>
                <input className='bp3-slider' onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
            </label>

            <label>
                <button className='bp3-button bp3-intent-primary' type="submit">Add Item</button>
            </label>
        </form>
    )
}

export default Form