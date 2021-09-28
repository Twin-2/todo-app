import React from 'react';

export const SiteContext = React.createContext();

function Site(props) {

    const state = {
        displayCompletedItems: true,
        itemsPerPage: 3,
        defaultSort: 'name',
    };

    return (
        <SiteContext.Provider value={state}>
            {props.children}
        </SiteContext.Provider>
    )

}

export default Site;