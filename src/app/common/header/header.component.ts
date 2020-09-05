import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
  	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	 $('.navbar-toggle').click();
	}
  	
  }

  statsAlert() {
  	alert('Supposed to show real time data of Clan and Members.Facing some issue rendering COC API data.This section will be live soon');
  	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  		$('.navbar-toggle').click();
  	}
  }

  vdoAlert() {
    alert('Coming Soon');
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.navbar-toggle').click();
    }
  }


}
