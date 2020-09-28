$(document).ready(function() {

  get();

  $(".creator").keydown(function(){
    if(event.keyCode == 13){
      create();
    }
  });

  function get(){
    $.ajax(
    {
      url:"http://157.230.17.132:3036/todos",


      method: "GET",


      success: function(data,stato){
        console.log(data);
        for(var i = 0; i < data.length; i++){
          var element = $("li:first-child").clone();

          element.text(data[i].text);
          element.removeClass("proto");

          $("ul").append(element);
        }
      },

      error: function(errore){
        console.log("Errore durante la connessione"+errore);
      }
    });
  };
  function create(){

    console.log($(".creator").val());
    $.ajax(
    {
      url:"http://157.230.17.132:3036/todos",


      method: "POST",

      data:{
        text: $(".creator").val()
      }
    });
  };
  function delete(){
    for(var i = 4; i <=716){
      $.ajax(
      {
        url:"http://157.230.17.132:3036/todos/"+i,
        method: "DELETE"
      });
    }
  };
});
