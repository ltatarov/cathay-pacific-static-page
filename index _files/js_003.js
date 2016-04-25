(function(){
(function() {
    var mid = document.createElement('script'); mid.type = 'text/javascript'; mid.async = true;
    mid.src = '//mathid.mathtag.com/d/i.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mid, s);
})();

(window.MathIDInits = window.MathIDInits || []).push(function() {
    MathID.getData({mt_id:'935041',ccid:'',cuid:'',mm_uuid:'3190571e-2131-4d00-a5f8-fac304c2ce46',src:'mt2'}).then(function(data) {
        var p = document.createElement('script');
        p.src = '//pixel.mathtag.com/event/js?mt_id=935041&mt_adid=158433&v1=&v2=&v3=&v4=2016-04-25&v5=2016-05-02&s1=&s2=AMS&s3=HKG&s4=5&s5=Y&s6=en&mathid_data=' + encodeURIComponent(data);
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(p, s);
    });
});
})();
