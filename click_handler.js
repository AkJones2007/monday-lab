$(document).ready(function(){

  var handlebarsTemplate = Handlebars.compile($("#data-list")).html();


  $("show-Data").on("click", function(){
    getUsers(response);

  });


});



