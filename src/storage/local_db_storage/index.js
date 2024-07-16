import { BaseStorage } from '../base_storage';

import Dexie from 'dexie';


export class LocalDBStorage extends BaseStorage{
    constructor(name){
        var db = new Dexie(name);

        db.version(1).stores({
            documents: "++id,&key,data"
        });
        db.open();
        super(db);
    }
    add(key, data, options= {}){
        return new Promise((resolve, reject)=>{
            this.store.documents.put({
                data: data,
                key: key
            }).then(()=>{resolve(this);}, reject);
        });
    }
    get(key){
        return new Promise((resolve, reject)=>{
            this.store.documents.where('key').equals(key).first().then((document)=>{
                resolve(document.data);
            }, reject);
        });
    }
    remove(key){
        return new Promise((resolve, reject)=>{
            this.get(key).then((document)=>{
                this.store.documents.delete(document.id).then(()=>{
                    resolve(document.data);
                }, reject);
            }, reject);
        })
    }
}