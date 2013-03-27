$('#tiles').imagesLoaded(function() {
  // Prepare layout options.
  var options = {
    autoResize: true, // This will auto-update the layout when the browser window is resized.
    container: $('#main'), // Optional, used for some extra CSS styling
    offset: 2, // Optional, the distance between grid items
    itemWidth: 210 // Optional, the width of a grid item
  };

  // Get a reference to your grid items.
  var handler = $('#tiles li');

  // Call the layout function.
  handler.wookmark(options);

  // Capture clicks on grid items.
  handler.click(function(){
    // Randomize the height of the clicked item.
    // var newHeight = $('img', this).height() + Math.round(Math.random()*300+30);
    // $(this).css('height', newHeight+'px');

    // Update the layout.
    handler.wookmark();
  });
});


//Populating Icons in About Page
$.each(['pinterest', 'linkedin', 'modelmayhem', 'youtube', 'github'] , function(i, val) {
  $("img#" + val).bind('mouseover', function() {
      $("img#" + val).attr("src", "img/" + val + ".png");
    }
  );

  $("img#" + val).bind('mouseout', function() {
      $("img#" + val).attr("src", "img/" + val + "_g.png");
    }
  );
});