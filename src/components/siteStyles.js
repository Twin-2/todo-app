import React, { useState } from 'react';
import { useContext } from "react";
import { SiteContext } from "../context/siteContext";
import { FormGroup, Button, Switch, HTMLSelect } from "@blueprintjs/core";


function SiteStyles() {
    const siteContext = useContext(SiteContext);
    const [formInput, setFormInput] = useState({})
    console.log(formInput)

    const handleChange = (e) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value })
        if (e.target.name === 'itemsPerPage') { siteContext.setItemsPerPage(e.target.value) }
        if (e.target.value === 'defaultSort') { siteContext.setDefaultSort(e.target.value) }
    }

    const hanldeCompletedToggle = (e) => {
        let display = !siteContext.displayCompletedItems
        setFormInput({ ...formInput, [e.target.name]: display })
        siteContext.setDisplayCompletedItems(display)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // siteContext.setItemsPerPage(formInput['itemsPerPage'])
        // siteContext.setDefaultSort(formInput['defaultSort'])
        siteContext.saveSettings(siteContext)
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

            <span>Display Completed ({siteContext.displayCompletedItems.toString()})?</span>
            <Switch name='displayCompleted' checked={siteContext.displayCompletedItems} onChange={hanldeCompletedToggle} />

            <span>Dark Mode </span>
            <Switch disabled={true} label='Coming soon!' name='mode' />

            <Button onClick={handleSubmit}>Submit</Button>
        </FormGroup>
    )
}

export default SiteStyles