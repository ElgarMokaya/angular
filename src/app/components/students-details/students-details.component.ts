import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css'],
  providers:[DataService]
})
export class StudentsDetailsComponent implements OnInit {
  
  infoReceived1 :string[]=[]
  infoReceived2:string[]=[]
  infoReceived3 :string[]=[]

getInfoFromService1(){
  this.infoReceived1=this.dservice.getInfo1()
}
getInfoFromService2(){
  this.infoReceived2=this.dservice.getInfo2()
}
getInfoFromService3(){
  this.infoReceived3=this.dservice.getInfo3()
}

  constructor(private dservice:DataService) { }

  ngOnInit(): void {
  }
  updateInfo(frm:any){
    this.dservice.addInfo(frm.value.location)

  }

}
