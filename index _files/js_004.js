(function(){
/**/

})();
(function(){
//used to sync advertiser without leaking referer to final destination
	  var frm = document.createElement('iframe');
	  frm.style.visibility = 'hidden';
	  frm.style.display = 'none';
	  frm.src = "https://pixel.mathtag.com/sync/iframe?mt_adid=158433&v1=&v2=&v3=&v4=2016-04-25&v5=2016-05-02&s1=&s2=AMS&s3=HKG&s4=5&s5=Y&s6=en&mathid_data=%7B%22dv1%22%3A%22TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTAuMTA7IHJ2OjQyLjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvNDIuMA%3D%3D%22%2C%22dv2%22%3A%22NzY1NzliZmVmMDVmNTM5NTE2ODQxODYyZjUzOGZjM2I%3D%22%2C%22dv3%22%3A%22MzYwY2I0OTY3ODM5OTgxMzA0MjQ5MzBjZGQzMjY2N2E%3D%22%2C%22dv4%22%3A%22MjU2MHwxNDQwfDI1NjB8MTQxN3wyNHx8%22%2C%22dv5%22%3A%22RXVyb3BlL0Jlcmxpbg%3D%3D%22%2C%22dv6%22%3A%22%22%2C%22dv7%22%3A%22MA%3D%3D%22%2C%22dv8%22%3A%22dHJ1ZXx0cnVlfHRydWU%3D%22%2C%22dv9%22%3A%22fGVuLVVTfA%3D%3D%22%2C%22dv10%22%3A%22TW96aWxsYXxOZXRzY2FwZXxNYWNJbnRlbHw%3D%22%7D&mt_uuid=3190571e-2131-4d00-a5f8-fac304c2ce46&no_iframe=1";
	  frm.setAttribute("id", "mm_sync_back_ground");
	  var trys = 0;
	  var interval = setInterval(function(){
	      if (trys++ < 20 && interval && !document.getElementById("mm_sync_back_ground"))
		  if (document.body) {
		      if (interval) {
			  clearInterval(interval);
			  interval = 0;
		       }
		      document.body.appendChild(frm);
		  }
	  }, 100);

})();

window.MathIDSet = '9DEbgMS6rO2A7lTxrNYe8F+hZB+i9lutERuxP1utkgVLmsied1yDbXlmM/Va9NcAVcqUOsHmd2EgO4PZsb/L+Q==';