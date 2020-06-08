
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
    localStorage.setItem(id,JSON.stringify(newSource))
}

export function deleteDoc(id){
    localStorage.removeItem(id)
}

export function checkDocNameExist(name){
    let names = getDocList();
    return names.map(x => x.docName).includes(name)
}