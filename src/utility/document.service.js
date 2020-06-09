
const docModel = {
    docId: "",
    docName: "",
    createdAt: "",
    updatedAt: "",
    docItems: {}
}


export function createDoc(id,name){
    let newDoc = JSON.parse(JSON.stringify(docModel));
    newDoc.docId = id;
    newDoc.docName = name;
    let timeDate = (new Date()).toDateString() + ' - ' + (new Date()).toLocaleTimeString();
    newDoc.createdAt = timeDate;
    newDoc.updatedAt = timeDate; 
    localStorage.setItem(id,JSON.stringify(newDoc));
}

export function getDocList(){
    let items = Object.values(localStorage);
    return items.map(obj => JSON.parse(obj))
}


export function getDoc(id){
    let item = localStorage.getItem(id);
    return JSON.parse(item);
}

export function updateDoc(id,newSource){
    localStorage.removeItem(id);
    let timeDate = (new Date()).toDateString() + ' - ' + (new Date()).toLocaleTimeString();
    newSource.createdAt = timeDate;
    newSource.updatedAt = timeDate;
    localStorage.setItem(id,JSON.stringify(newSource))
}

export function deleteDoc(id){
    localStorage.removeItem(id)
}

export function checkDocNameExist(name){
    let names = getDocList();
    return names.map(x => x.docName).includes(name)
}