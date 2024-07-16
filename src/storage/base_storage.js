export class BaseStorage{
    constructor(store){
        this.store = store;
    }
    add(){
        return new Promise((resolve, reject)=>{
            console.warn('baseStorage:add is virtual function');
            resolve(null)
        });
    }
    get(){
        return new Promise((resolve, reject)=>{
            console.warn('baseStorage: get is virtula function');
            resolve(null)
        });
    }
    remove(){
        return new Promise((resolve, reject)=>{
            console.warn('baseStorage: remove is virtual function');
            resolve(null)
        });
    }
}