
var gotit = false;
// var api;
// var it = this;
var gettingit = false;
var strVar="";
var callcount = 1;
var obs = new MutationObserver(function (mutations, observer) {
    for (var i = 0; i < mutations[0].addedNodes.length; i++) {
        if (mutations[0].addedNodes[i].nodeType == 1) {
            $(mutations[0].addedNodes[i]).find(".userContentWrapper").each(function () {
                // // injectFBMButton($(this));
                // callcount=+
                // //console.log(callcount);
                // f();
            });
        }
    }
    //call the thingy
    callcount++;
                //console.log(callcount);
    f();
    // injectMainButton();
});

obs.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });

// f();

// document.addEventListener("DOMSubtreeModified", function(event){
//     //something on the page has changed
// f();
// });



strVar += "<div class=\"hover-card-mask\">";
// strVar += "<img src=\"http:\/\/i.imgur.com\/fbVEMLV.jpg\"  \/>";
strVar += "<\/div>";

strVar += "<div class=\"hover-card-image\" \/>";
// strVar += "<img src=\"http://i.imgur.com/cs3kFjJ.png\" \/>";
strVar += "<\/div>";

strVar += "<div class=\"drop-content-inner\">";
// strVar += "<div class=\"avatar\">";
// strVar += "<img src=\"http:\/\/i.imgur.com\/fiINek6.jpg\" style=\"max-width:200px\"\/>";
// strVar += "<\/div>";
// strVar += "<div class=\"name\">";
// strVar += "Elias Torres";
// strVar += "<\/div>";
// strVar += "<div class=\"title\">";
// strVar += "VP Engineering, HubSpot";
// strVar += "<\/div>";
strVar += "<\/div>";
// $('a').hover(function(){
//   //console.log($(this).attr('href'));
//   //console.log("YO");
// });
function f(){
  var drop;
  var api;
  var it = this;
$('a').unbind('mouseover');
$('a').unbind('mouseout');
  // //console.log("hello");
  // var strVar="";
  {
$('a').mouseover(function() {
  //console.log($(this).attr('href'));
  //console.log("XX");
   // $(this).children(".description").show();
   // $(this).append("<div>foo</div>");
   it = this;
   
    var linkstr = $(this).attr('href');
    //console.log(linkstr);
    var link = encodeURIComponent($(this).attr('href'));
    var url = window.location.href;
    if (linkstr.indexOf("entrepreneur.com") >= 0 || url.indexOf("entrepreneur.com") >= 0 ||  linkstr.indexOf("mashable.com") >= 0 || url.indexOf("mashable.com") >= 0 ||  linkstr.indexOf("inc.com") >= 0 || url.indexOf("inc.com") >= 0 ||  linkstr.indexOf("buzzfeed.com") >= 0 || url.indexOf("buzzfeed.com") >= 0 || linkstr.indexOf("on.mash.to") >= 0 || url.indexOf("on.mash.to") >= 0 ){
      
switch (true){
      case url.indexOf("entrepreneur.com") >= 0:
      // console.log("inside is ent.com");
        linkstr = "http://www.entrepreneur.com" + linkstr;
      break;
      case url.indexOf("mashable.com") >= 0:
      // console.log("inside is mash.com");
        linkstr = "http://www.mashable.com" + linkstr;
      break;
      case url.indexOf("inc.com") >= 0:
      // console.log("inside is inc.com");
        linkstr = "http://www.inc.com" + linkstr;
      break;
      case url.indexOf("buzzfeed.com") >= 0:
      // console.log("inside is buzz.com");
        linkstr = "http://www.buzzfeed.com" + linkstr;
      break;
    }
    
      // if (url.indexOf("entrepreneur.com") >= 0) {
      //   linkstr = "http://www.entrepreneur.com" + linkstr;
      //   // //console.log("looks like i'm in ent.com already, the string will be " + linkstr);
      // };

    link = encodeURIComponent(linkstr);
    // //console.log("got it lol!");
    //console.log(gotit);
    var items = [];
    var subject;
    switch (true){
      case linkstr.indexOf("entrepreneur.com") >= 0 || url.indexOf("entrepreneur.com") >= 0 || linkstr.indexOf("entm.ag") >= 0 || url.indexOf("entm.ag") >= 0 :
      // console.log("this is ent.com");
      api = "https://api.import.io/store/data/92a74af5-2d2d-4cfc-94f9-ed9eeb7993ae/_query?input/webpage/url="+link+"&_apikey=f16e51637d954c1bae20c9be5e1821251e0e024a0269e1d622019dcbf62c3698c551f8255f3910ca5d036c67cce07bb8cf30c4de8dce37d7171b23405a48b96a6dc2a75741d468fdf97fcb09142c3049";
      break;
      case linkstr.indexOf("mashable.com") >= 0 || url.indexOf("mashable.com") >= 0 || linkstr.indexOf("on.mash.to") >= 0 || url.indexOf("on.mash.to") >= 0:
      // console.log("this is mash.com");
      api = "https://api.import.io/store/data/472871c4-7407-4401-b4dc-79bf31b5063b/_query?input/webpage/url="+link+"&_apikey=f16e51637d954c1bae20c9be5e1821251e0e024a0269e1d622019dcbf62c3698c551f8255f3910ca5d036c67cce07bb8cf30c4de8dce37d7171b23405a48b96a6dc2a75741d468fdf97fcb09142c3049";
      break;
      case linkstr.indexOf("inc.com") >= 0 || url.indexOf("inc.com") >= 0:
      // console.log("this is inc.com");
      api = "https://api.import.io/store/data/4edbc116-4cc6-45c3-84e3-1ba30fb99d37/_query?input/webpage/url="+link+"&_user=f16e5163-7d95-4c1b-ae20-c9be5e182125&_apikey=f16e51637d954c1bae20c9be5e1821251e0e024a0269e1d622019dcbf62c3698c551f8255f3910ca5d036c67cce07bb8cf30c4de8dce37d7171b23405a48b96a6dc2a75741d468fdf97fcb09142c3049";
      console.log(api);
      break;
      case linkstr.indexOf("buzzfeed.com") >= 0 || url.indexOf("buzzfeed.com") >= 0:
      api = "https://api.import.io/store/data/77cbe5c1-df24-48f1-9f32-ff9ff9226dbd/_query?input/webpage/url="+link+"&_apikey=f16e51637d954c1bae20c9be5e1821251e0e024a0269e1d622019dcbf62c3698c551f8255f3910ca5d036c67cce07bb8cf30c4de8dce37d7171b23405a48b96a6dc2a75741d468fdf97fcb09142c3049";
      // console.log("this is buzz.com");
      break;
    }
    // //console.log(api);

    
if(!gotit){
      gettingit = true;
      $.getJSON( api, function( data ) {
        if (data.results[0].subject == null) {
            subject = data.results[0].title;
        } else{
    subject = data.results[0].subject;
  }
    // //console.log( "JSON Data: " + data.results[0].listitems[0] );
    if (data.results != null) {
         if(data.results[0].listitems !=null){
  $.each((data.results[0].listitems), function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
                                                        });
         } else {
           
           if (data.results[0].backuplistitems != null){
  $.each((data.results[0].backuplistitems), function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
                                                        });
           }
           else
           {
             if (data.results[0].backup2 !=null){
  $.each((data.results[0].backup2), function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
                                                        });
             }
    //         if (data.results[0].yt != null)        {
    // items.push( "<li id='" + "ytif" + "'>" + data.results[0].yt + "</li>" );
    //         }                                                
            if (data.results[0].ytbkp != null)        {
    items.push( "<li id='" + "ytbkp" + "'>" + data.results[0].ytbkp + "</li>" );
            }       
            
             if (data.results[0].tweets !=null){
              //  console.log(api);
              if ($.isArray(data.results[0].tweets)){
              //  console.log(data.results[0].tweets.length + " tweets in this article");
  $.each((data.results[0].tweets), function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
                                                        });
              }
              else {
    items.push( "<li id='" + "tweet" + "'>" + data.results[0].tweets + "</li>" );
              }
             }                                         

           }                                             
         }

var x = document.createElement( 'html' );
x.innerHTML = strVar
var dci = $(x).find('.drop-content-inner');
  $( "<div>", {
    "class": "name",
    html: subject + "<br>"
  }).appendTo( dci );
var nme = $(x).find('.name');
  $( "<ul/>", {
    "class": "thelist",
    html: items.join( "" )
  }).appendTo( nme );
            gotit= true;
}
// else {
//   break;
// }

  // $( "<h1>", {
  //   "class": "listttle",
  //   html: subject
  // }).appendTo( "#foo" );
  // $( "<ul/>", {
  //   "class": "list",
  //   html: items.join( "" )
  // }).appendTo( "#foo" );
  //           gotit= true;
var dropposition;
if ($(window).width() < 2300) {
    // code for small viewports
    console.log($(window).width());
    dropposition = 'bottom center';
} else {
    console.log($(window).width());
    // code for large viewports
    dropposition = 'right center';
}

//console.log("2");
if (items.length != 0){
  drop = new Drop({
  target: it,
  position: dropposition,
  openOn: 'hover',
  classes: "drop-theme-basic drop-target drop-target-example-hover-card",
  constrainToWindow: false,
  constrainToScrollParent: true,
  content: x,
  remove: true
  });
  drop.open();
      }
});    
        }

//     var txt = $(this).text();
//     //if ($("#foo").length){
//     // Do something if class exists
// //} else {
//     jQuery('<div/>', {
//     id: 'foo',
//     class: 'cbpu',
//     // href: 'http://google.com',
//     title: txt,
//     rel: 'external',
//     text: ""
//   }).appendTo(this).css({'display':'none',
//                          'position': 'relative',
//                          'border': '1px solid #000',
//                           'z-index': '999999'});
// //}



    // drop.toggle();



    // $(this).children(".cbpu").show();
        //console.log('done');
    }
    else  {
        //console.log("NOT ENTREPRENEUR.COM");
        // //console.log(linkstr);
        // //console.log(window.location.pathname);
        // //console.log(window.location.href);
      }
}).mouseout(function() {
    //console.log("bi");
    if (drop != null || gettingit == true) {
      // console.log("destroying");
    // drop.destroy();      
    // drop.remove();
    
    };
    gotit = false;
    // $(this).children(".cbpu").hide();
    // $(this).children(".cbpu").empty();
    // $(this).children(".cbpu").remove();
})
}
}