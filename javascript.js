$(document).ready(function(){

  getQuote();
  var currentQuote;
  var author;

  function getQuote() {
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      $("#quote").html('"' + data.quoteText + '"');
      $("#author").html('&mdash; ' + data.quoteAuthor);
  currentQuote = '"' + data.quoteText + '"' + ' (' + data.quoteAuthor + ')';  
  });

  };
  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + currentQuote);
    
  });
  $("#newQuote").on("click", function(){
    getQuote();
  });
});