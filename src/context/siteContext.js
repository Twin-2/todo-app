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

    function saveSettings() {
        let settings = {
            displayCompletedItems,
            defaultSort,
            itemsPerPage,
            mode,
        }
        localStorage.setItem('displaySettings', JSON.stringify(settings))
    }

    function setSettings() {
        try {
            let displaySettings = localStorage.getItem('displaySettings')
            displaySettings = JSON.parse(displaySettings)
            setDisplayCompletedItems(displaySettings.displayCompletedItems)
            setItemsPerPage(displaySettings.itemsPerPage)
            setDefaultSort(displaySettings.defaultSort)
            setMode(displaySettings.mode)
        }
        catch (e) {
            console.error(e.messege)
        }
    }

    useEffect(() => {
        setSettings()
    }, [])

    return (
        <SiteContext.Provider value={state}>
            {props.children}
        </SiteContext.Provider>
    )

}

export default Site;