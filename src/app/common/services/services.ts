import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import * as _ from 'underscore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  { Configuration } from '../constants/constants';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

import { data_json } from '../../../json/team.json';
@Injectable()
export class CommanService {
		jsonArr:any = data_json;
	OptionData:object = {};
	AlertOption:object = {};
	presenttoast:any;
	presentloading:any;
	version:any;
	currentUser: any;
    constructor(
    	@Inject(LOCAL_STORAGE) private localStorage: any,
    	public configuration: Configuration,
    	public http: HttpClient,
    )
    {
    	
    }

  	/* Post methods */
  	async postMethod(url, postData)
  	{
  		let a: any = {};
	    let headers = new HttpHeaders({});
	      return  await this.http.post(this.configuration.BASE_URL+url+'?version='+this.version+'&lang=English', postData,{
	        headers:headers
	    })
	    .toPromise()
	    .then(async res => {
	    	return  await JSON.parse(JSON.stringify(res));
	    	/*if(res.json().status)
	          	return  await res.json();  
	        else
	        	return await res.json();*/
	    }, err => {
	       console.log('Something went worngs.');
	    });

	    /*return  await this.http.post(this.configuration.BASE_URL+url+'?version='+this.version+'&lang=English',postData)
	    .subscribe(async (res:Response) =>  { 
	    	return  await res.json();
	    },
	    err => {
	       console.log('Something went worngs.');
	    });*/
  	}

  	async getMethod(url){
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
    
        return  await this.http.get('http://cors.io/?'+url,{headers}).subscribe(async (res)=>{
            console.log(res);
            return  await JSON.parse(JSON.stringify(res));
        });
    }
    
    async getJson(){
   
        return jsonArr;
    }
  	sendToken(token: string) { this.localStorage.setItem("LoggedInUser", token)}
  	clearToken() { this.localStorage.removeItem("LoggedInUser")}
	getToken(){return this.localStorage.getItem("LoggedInUser")}
	isLoggedIn() { return this.getToken() !== null;}
	logout() { this.localStorage.removeItem("LoggedInUser");}
}
