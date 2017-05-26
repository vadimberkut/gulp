import ID from './id.js';

export default function(obj){
    // let keys = obj.keys;
    let keys = Object.keys(obj);
    keys.map((key)=>{
        obj[key] = ID() + ID() + ID();
    });
    return obj;
}