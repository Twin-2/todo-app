import React, { useState } from 'react';
import { useContext } from "react";
import { SiteContext } from "../context/siteContext";
import { FormGroup, Button, Switch, HTMLSelect } from "@blueprintjs/core";


function SiteStyles() {
    const siteContext = useContext(SiteContext);
    // const [formInput, setFormInput] = useState({})
    // console.log(formInput)

    const handleChange = (e) => {
        // setFormInput({ ...formInput, [e.target.name]: e.target.value })
        switch (e.target.name) {
            case 'itemsPerPage':
                siteContext.setItemsPerPage(e.target.value)
            case 'defaultSort':
                siteContext.setDefaultSort(e.target.value)
            default:
                null
        }
    }

    const hanldeCompletedToggle = (e) => {
        let display = !siteContext.displayCompletedItems
        // setFormInput({ ...formInput, [e.target.name]: display })
        siteContext.setDisplayCompletedItems(display)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        siteContext.saveSettings()
    }

    return (
        <FormGroup
            inline={false}>

            <label>Items Per Page</label>
            <input name='itemsPerPage' type="number" value={siteContext.itemsPerPage} onChange={handleChange} />

            <span>Default Sort</span>
            <HTMLSelect name='defaultSort' value={siteContext.defaultSort} onChange={handleChange}>
                <option value="assignee">Assignee</option>
                <option value="complete">Complete</option>
                <option value="text">Text</option>
                <option value="difficulty">Difficulty</option>
            </HTMLSelect>

            <span>Display Completed?</span>
            <Switch name='displayCompleted' checked={siteContext.displayCompletedItems} onChange={hanldeCompletedToggle} />

            <span>Dark Mode </span>
            <Switch disabled={true} label='Coming soon!' name='mode' />

            <Button onClick={handleSubmit}>Submit</Button>
        </FormGroup>
    )
}

export default SiteStyles