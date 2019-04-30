import { Component, AfterViewInit } from '@angular/core';
import { CommanService } from '../common/services/services'; 
/*import * as Prism from 'prismjs';*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private commonService: CommanService) { 
    
  }
    /*
   * 
   * function(ngOnInit) : Excute on Controller load
   *  
   */
  ngOnInit() {
   this.getEvent();
  }
  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    //Prism.highlightAll();
  }
  /**
   * @name - getEvent - get the event from Meetup
   * @author - Rajat G
   */  
  getEvent()
  {
    let obj = {};
  	var urls = 'https://api.meetup.com/Google-Cloud-Developer-Community-Indore/events?desc=true&photo-host=public&page=1&status=past&key=29f5617a573f394d6d2f156a4643d';
  	this.commonService.getMethod(urls)
        .then(data => {
          console.log(data)
    },error =>console.log(error))
  }
}