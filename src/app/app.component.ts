import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ZenduFormsUpwork';
  selectedVal: string = 'map';
  workFlows:any[]=[
    {from:'denisgordiyenya@gmail.com',to:'denisgordiyenya@gmail.com',dueDate:'06 December',status:'Uncomplete'},
    {from:'denisgordiyenya@gmail.com',to:'denisgordiyenya@gmail.com',dueDate:'06 December',status:'Complete'},
    {from:'denisgordiyenya@gmail.com',to:'denisgordiyenya@gmail.com',dueDate:'06 December',status:'Uncomplete'},
    {from:'denisgordiyenya@gmail.com',to:'denisgordiyenya@gmail.com',dueDate:'06 December',status:'Needs Review'}
  ];
  lat = 51.678418;
  lng = 7.809007;
}
