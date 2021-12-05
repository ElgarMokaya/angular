import { Injectable } from '@angular/core';
//import { info } from 'console';
//import { getMaxListeners } from 'process';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1:string[]=["elgar mokaya","s13","em@gmail.com"]
  info2:string[]=["joan mwengei","s12","jm@gmail.com"]
  info3:string[]=["faith nyasuguta","s11","fn@gmail.com"]

  getInfo1():string[]{
    return this.info1
  }

  getInfo2():string[]{
    return this.info2
  }

  getInfo3():string[]{
    return this.info3
  }

  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }


  constructor() { }
}

