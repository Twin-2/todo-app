import React, { useState, useEffect } from 'react';

export const SiteContext = React.createContext();

function Site(props) {

    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [defaultSort, setDefaultSort] = useState('difficulty')
    const [mode, setMode] = useState('light')
    const [displayCompletedItems, setDisplayCompletedItems] = useState(false)

    const state = {
        displayCompletedItems,
        itemsPerPage,
        defaultSort,
        mode,
        setItemsPerPage,
        setDefaultSort,
        setMode,
        setDisplayCompletedItems,
        saveSettings,
    };

    function saveSettings(formInput) {
        localStorage.setItem('displaySettings', JSON.stringify(formInput))
    }

    function setSettings() {
        let displaySettings = localStorage.getItem('displaySettings')
        displaySettings = JSON.parse(displaySettings)
        setDisplayCompletedItems(displaySettings.displayCompleted)
        setItemsPerPage(displaySettings.itemsPerPage)
        setDefaultSort(displaySettings.defaultSort)
    }

    useEffect(() => {
        if (localStorage.getItem('displaySettings')) { setSettings() }
    }, [])

    return (
        <SiteContext.Provider value={state}>
            {props.children}
        </SiteContext.Provider>
    )

}

export default Site;