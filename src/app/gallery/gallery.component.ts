import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {

		/*var url =
		  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLYjmaSDaONaYjDwr0wLZ62L6_6Sq8-3yc&key=xliZOLSszuaPPSpQqMxpTmpY";

		$.ajax({
		  url: url,
		  dataType: "jsonp",
		  success: function(data) {
		    console.log(data);
				
		  }
		});
*/

  }

}
