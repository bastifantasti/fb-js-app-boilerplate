/**
 COUNT LIKES ON HTML!

 **/
' use strict';
function countLikesPage(val){
    var url  = !!val  ? val  : 'http://www.socialmedia-backstage.de/index.php/2013/07/05/facebook-titelbilder-neue-richtlinien/';
    FB.api(
        {
            method: 'fql.query',
            query: 'select like_count,total_count,share_count,click_count from link_stat where url="'+url+'"'
        },
        function(response) {
            console.log(response[0]);

            $("#fb-like-count span").html(response[0].total_count+"(likes: "+response[0].like_count+" /share:"+response[0].share_count+" /click: "+response[0].click_count+")");
        }
    );
}
/**
 COUNT FANS ON FB

 **/
function countFans(val){
    var id  = !!val  ? val  : '20531316728';
    FB.api(
        {
            method: 'fql.query',
            query: 'select name,fan_count from page where page_id ="'+id+'"'
        },
        function(response) {
           console.log(response[0].name+" ("+id+") has "+response[0].fan_count+" fans.");

            $("#fb-fan-count span").html(response[0].fan_count+"("+response[0].name+")");
        }
    );
}

function getFriends(){

    FB.api(
        {
            method: 'fql.query',
            query: ' select uid, name, is_app_user from user where uid in (select uid2 from friend where uid1=me()) and is_app_user=1'
        },
        function(response) {
            console.log(response);
            var content ="<ul class='facepile'>";
            var friends = new Array();
            $.each(response,function(index, value){
                console.log('index: %s / value: %s', index,value);
                var id= value.uid;
                var name = value.name;
                content +='<li><img src="http://graph.facebook.com/'+id+'/picture?type=square" title="'+name+'"/></li>';

            });
            content += "</ul>";

            $("#fb-friends-use").html(content);
        }
    );


}