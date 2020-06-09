
//for 6 X 6
export const DocCordinates = [11,21,31,41,51,61,12,22,32,42,52,62,13,23,33,43,53,63,14,24,34,44,54,64,15,25,35,45,55,65,16,26,36,46,56,66];

export const Components = ["input","email","image","button","radio","label"];

export const cssClass = {
    "btn-primay": "bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded",
    "btn-danger": "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    "btn-danger-sm": "bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-1 px-2 rounded",
    "btn-primay-sm": "bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-1 px-2 rounded",
    "btn-pill": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
    "btn-pill-sm": "bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-1 px-1 rounded-full",
    "btn-ghost": "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
    "btn-ghost-sm": "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded",
    "btn-elevated": "00 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
    "btn-elevated-sm": "00 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
}

export function addDummyData(){
    if(Object.values(localStorage).length === 0){

        localStorage.setItem('ga4c89230c','{"docId":"ga4c89230c","docName":"sample UI","createdAt":"Wed Jun 10 2020 - 2:15:38 AM","updatedAt":"Wed Jun 10 2020 - 2:15:38 AM","docItems":{"11":["input"],"12":[],"13":[],"14":["button"],"15":["radio"],"16":[],"22":[],"23":["label"],"32":["image"],"33":["input"],"34":["button"],"45":["button"],"undefined":["image"]}}')
        localStorage.setItem('425241i838','{"docId":"425241i838","docName":"Tony Stark","createdAt":"Wed Jun 10 2020 - 2:15:38 AM","updatedAt":"Wed Jun 10 2020 - 2:15:38 AM","docItems":{"12":[],"13":["image"],"36":["button"],"42":[],"43":[],"44":["image"],"52":["email"],"53":["email"]}}')
        console.log('dummy data added')
       
       }
}
