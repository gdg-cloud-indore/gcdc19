import { Component, AfterViewInit } from '@angular/core';
import { CommanService } from '../common/services/services'; 
import * as _ from 'underscore';
/*import * as Prism from 'prismjs';*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  /**
   * @method ngAfterViewInit
   */
  neweventList:any;
  newTeamLists:any;
  constructor(private commonService: CommanService) { 
    
  }
  ngOnInit() {
   this.getEvent();
   this.getEventJson();
  }
  ngAfterViewInit() {
    //getMethod();
  }

  getEvent()
  {
    this.neweventList = [{"created":1551684293000,"duration":14400000,"id":"259465282","name":"GCDC: Cloud Study Jam '19","rsvp_limit":300,"date_in_series_pattern":false,"status":"past","time":1552192200000,"local_date":"2019-03-10","local_time":"10:00","updated":1552205433000,"utc_offset":19800000,"waitlist_count":0,"yes_rsvp_count":32,"venue":{"id":26191331,"name":"Techcoopers Software Solutions","lat":22.722747802734375,"lon":75.88687133789062,"repinned":true,"address_1":"Shekhar central","city":"Indore","country":"in","localized_country_name":"India"},"group":{"created":1532694839000,"name":"Google Cloud Developer Community, Indore","id":29367618,"join_mode":"open","lat":22.719999313354492,"lon":75.86000061035156,"urlname":"Google-Cloud-Developer-Community-Indore","who":"Members","localized_location":"Indore, India","state":"","country":"in","region":"en_US","timezone":"Asia/Calcutta"},"link":"https://www.meetup.com/Google-Cloud-Developer-Community-Indore/events/259465282/","description":"<p>Announcing Cloud Study Jam \u201919</p> <p>New to the Cloud but don't know where to start? Join us for a Cloud Study Jams.</p> <p>Get official Google training, a $55+ value, free of charge. You will get hands-on experience with several machine learning tools from Google and with the Cloud Console.</p> <p>You will have free access to more labs you can finish at home. Complete all labs in the quest and earn a Google-hosted badge for your online profile, and additional 30 days access to the training platform to compete in any labs you want.</p> <p>Topic: Kubernetes<br/>Date: 10th Mar\u201919<br/>Venue: Techcoopers Software Solutions<br/>Address: Shekhar central, 214, 5-4, Manorama Ganj, Indore, Madhya Pradesh 452001<br/>Agenda :<br/>10 : 00 am - Managing Deployments Using Kubernetes Engine<br/>11 : 00 am - Awwvision: Cloud Vision API from a Kubernetes Cluster<br/>12 : 00 am - Break<br/>12 : 10 am - Kubeflow End to End<br/>01 : 00 pm - Deploy a Web App on GKE with HTTPS Redirect using Lets Encrypt<br/>02 : 00 pm - Event ends - THANK YOU!</p> <p>Please Register: <a href=\"https://goo.gl/forms/rMA8Ie4ixB5Hpenq1\" class=\"linkified\">https://goo.gl/forms/rMA8Ie4ixB5Hpenq1</a></p> <p>Bring a laptop (fully charged, will have limited power sockets). We will provide Wi-Fi. The labs will run on all of the latest versions of the popular browsers. For the best experience, make sure your laptop has Firefox or Chrome installed</p> ","how_to_find_us":"Shekhar central, 214, 5-4, Manorama Ganj, Indore, Madhya Pradesh 452001","visibility":"public","pro_is_email_shared":false}];
    let obj = {};
  	var urls = 'https://api.meetup.com/Google-Cloud-Developer-Community-Indore/events?desc=true&photo-host=public&page=1&status=past&key=29f5617a573f394d6d2f156a4643d';
  	this.commonService.getMethod(urls)
        .then(data => {
          var neweventList = data;
         if(!_.isEmpty(neweventList))
         {
            // this.neweventList = neweventList;
         }
    },error =>console.log(error))
  }
  getEventJson()
  {
    //this.newTeamList = [{"name":"Tanishka Porwal","designation":"WTM Lead","twitter":"https://twitter.com/PorwalTanishka","linkedin":"https://www.linkedin.com/in/tanishka-porwal/","github":"","facebook":"https://www.facebook.com/Firefly.tanishka","profileImage":"tanishka.jpg"},{"name":"Ranu Jaiswal","designation":"WTM Lead","twitter":"https://twitter.com/ranuj74","linkedin":"https://www.linkedin.com/in/ranu-jaiswal-255a84100","github":"","facebook":"https://www.facebook.com/ranu.jaiswal.733","profileImage":"ranu.jpg"},{"name":"Pradhan Yash Sharma","designation":"GDG Lead","twitter":"https://twitter.com/PradhanYashSha1?s=08","linkedin":"https://www.linkedin.com/in/pradhanyashsharma","github":"","facebook":"https://www.facebook.com/PradhanYashSharma","profileImage":"yash.jpg"},{"name":"Bushra Sagir","designation":"Organizer","twitter":"https://twitter.com/bushra_sagir","linkedin":"https://www.linkedin.com/in/bushra-sagir-91746793","github":"","facebook":"https://www.facebook.com/bushra.sagir","profileImage":"bushra.jpg"},{"name":"Tushar Pal","designation":"Organizer","twitter":"https://twitter.com/tpal94","linkedin":"https://www.linkedin.com/in/tushar-p-325b5869","github":"","facebook":"https://www.facebook.com/tpal94","profileImage":"tushar.jpg"},{"name":"Mayank Jain","designation":"Developer","twitter":"","linkedin":"www.linkedin.com/in/mayank-jain-262635140","github":"","facebook":"https://www.facebook.com/mayank.jain.5030","profileImage":"mayank.jpg"},{"name":"Priyal Jain","designation":"Developer","twitter":"https://twitter.com/priyaljain919","linkedin":"https://www.linkedin.com/in/priyaljain919/","github":"","facebook":"https://www.facebook.com/priyal.jain.9678","profileImage":"priyal.jpg"},{"name":"Rajat Gupta","designation":"Developer","twitter":"https://twitter.com/rajat71194","linkedin":"https://www.linkedin.com/in/rajat-gupta-a22b5769","github":"","facebook":"https://www.facebook.com/rajat.gupta.165","profileImage":"rajat.jpg"},{"name":"Adeen Shukla","designation":"Developer","twitter":"https://twitter.com/AdeenShukla","linkedin":"https://linkedin.com/in/adeen-s","github":"","facebook":"https://facebook.com/RealAdeenShukla","profileImage":"adeen.jpg"},{"name":"Shachita Jain","designation":"Content Writer","twitter":"https://twitter.com/ShachitaJain","linkedin":"http://linkedin.com/in/shachita","github":"","facebook":"https://www.facebook.com/shachita.jain","profileImage":"shachita.jpg"},{"name":"Sonia Goplani","designation":"Organizer","twitter":"","linkedin":"https://www.linkedin.com/in/sonia-goplani-620a72a0","github":"","facebook":"https://www.facebook.com/sonia.goplani.7","profileImage":"sonia.jpg"},{"name":"Devesh Lashkari","designation":"Organizer","twitter":"https://twitter.com/devesh_lashkari","linkedin":"https://www.linkedin.com/in/devesh-lashkari/","github":"","facebook":"https://www.facebook.com/devesh.lashkari.1","profileImage":"devesh.jpg"},{"name":"Akshay Malviya","designation":"Organizer","twitter":"https://twitter.com/malviya_akshay","linkedin":"https://www.linkedin.com/in/akshaymalviya","github":"","facebook":"https://www.facebook.com/akshay.malviya1788","profileImage":"akshay.jpg"},{"name":"Aayush Agrawal","designation":"Organizer","twitter":"https://twitter.com/malviya_akshay","linkedin":"https://www.linkedin.com/in/aayushagrawal101/","github":"","facebook":"https://www.facebook.com/aayush.agrawal.984","profileImage":"ayush.jpg"},{"name":"Bhanu Kushwah","designation":"Designer","twitter":"https://twitter.com/ImBhanuKushwah","linkedin":"https://www.linkedin.com/in/bhanu-kushwah/","github":"","facebook":"https://www.facebook.com/people/Bhanu-Kushwah/100007943176574","profileImage":"bhanu.jpg"}];
    let obj = {};
  	// var urls = './assets/users.json';
  	var urls = 'https://raw.githubusercontent.com/gdg-iwd/iwd-indore/master/src/assets/data/team.json';
  	this.commonService.getMethod(urls)
        .then(data => {
          var newteamtList = data;
          if(!_.isEmpty(newteamtList))
          {
            this.newTeamLists = newteamtList;
             console.log(this.newTeamLists)
          }
    },error =>console.log(error))
  }
}
