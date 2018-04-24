   /**
    *   
    *   Author: Abdelkarim KHALLOUK
    *   URI: https://github.com/abdelkarim-khallouk
    *   Email: ab.khallouk@gmail.com
    *
     * */
    

    var quote;
    var author;
      
    function getNewQuote(){
        
        $.ajax( {
          url: 'http://api.forismatic.com/api/1.0/',
          jsonp: 'jsonp',
          dataType: 'jsonp',
          data: {
              method: 'getQuote',
              lang: 'en',
              format: 'jsonp'
          },
            
          success: function(data) {
            quote = data.quoteText;
            author = data.quoteAuthor;
            
            if(quote){
                $(".qod-text").html("&ldquo;" + quote + "	&rdquo;");
            }
            if(author){
                $(".qod-author").html("&mdash;" + author);
            }
            else{
                $(".qod-author").text("&mdash;" + unknown);
              }
          },
          cache: false
        });
    }

  $(document).ready(function() {
      
    $("#getQuote").on('click', function(e) {
        e.preventDefault();
        getNewQuote();
    });
      
    $("#shareQuote").on('click', function(e) {
        e.preventDefault();
        
        var text = quote + " -- " + author;
        window.open('http://twitter.com/share?text='+encodeURIComponent(text));
    });
      
});
