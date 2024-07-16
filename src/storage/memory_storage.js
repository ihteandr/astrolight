import { BaseStorage } from './base_storage';

export class MemoryStorage extends BaseStorage{
    constructor(){
        super({});
    }
    add(key,data){
        return new Promise((resolve, reject)=>{
            this.store[key] = data;
            resolve(this);
        });
    }
    get(key){
        return new Promise((resolve, reject)=>{
            resolve(this.store[key] || null);
        });
    }
    remove(key){
        return new Promise((resolve, reject)=>{
            let data = this.get(key);
            this.store[key] = null;
            resolve(data);
        });
    }
}