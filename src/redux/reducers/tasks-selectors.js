import { createSelector } from "reselect";


export const getFolders = (state) => {
    return state.tasks.folders;
}

// reselect library
export const getBasicFolders = createSelector(getFolders, (folders) => {
    return folders.filter(i => i.type === 'basic');
})

export const getCustomFolders = createSelector(getFolders, (folders) => {
    return folders.filter(i => i.type === 'custom');
})