import { BaseStorage } from './base_storage';

export class SessionStorage extends BaseStorage{
    constructor(){
        super(sessionStorage);
    }
    add(key,data){
        return new Promise((resolve, reject)=>{
            this.store.setItem(key, JSON.stringify(data));
            resolve(this);
        });
    }
    get(key){
        return new Promise((resolve, reject)=>{
            let item = this.store.getItem(key);
            resolve(item ? JSON.parse(item) : null);
        });
    }
    remove(key){
        return new Promise((resolve, reject)=>{
            let data = this.get(key);
            this.store.removeItem(key);
            resolve(data);
        });
    }
}