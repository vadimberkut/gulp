import Http from './http.js';
import ID from './id.js';


export default class {

    static urlBuilder(){
        return  Array.prototype.join.call(arguments, '/')
    }

    static items(){

        let list = [{id: ID(), name: 'A'},{id: ID(), name: 'B'},{id: ID(), name: 'C'}];

        return {
            all: ()=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>resolve(list),1000);
                });
            },
            one: (id)=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>resolve(list[0]),1000);
                });
            },
            create: (item)=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>resolve({...item, id: ID()}),1000);
                });
            },
            update: (item)=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>resolve(item),1000);
                });
            },
            delete: (id)=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>resolve(id),1000);
                });
            },
            deleteAll: ()=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>resolve(),1000);
                });
            },
        }
    }
}