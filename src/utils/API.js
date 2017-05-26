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
                    resolve(list);
                });
            },
            one: (id)=>{
                return new Promise((resolve, reject)=>{
                    resolve(list[0]);
                });
            },
            create: (item)=>{
                return new Promise((resolve, reject)=>{
                    resolve({...item, id: ID()});
                });
            },
            update: (item)=>{
                return new Promise((resolve, reject)=>{
                    resolve(item);
                });
            },
            delete: (id)=>{
                return new Promise((resolve, reject)=>{
                    resolve(id);
                });
            },
            deleteAll: ()=>{
                return new Promise((resolve, reject)=>{
                    resolve();
                });
            },
        }
    }
}