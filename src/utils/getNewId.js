const getNewId = (arr) => {
    let newId = 1;

    arr.forEach(i => {
        if (i.id > newId) newId = i.id;
    })

    return ++newId;
}

export default getNewId;