$(function() {
  var wat = ['Damian', 'Dimitry', 'Jonathan', 'Prasanna']

  var layer = false;
  window.setInterval(function() {
    var l0 = "#layer" + (+layer);
    var l1 = "#layer" + (+!layer);
    layer = !layer;
    console.log(l0);
    console.log(l1);

    var bg = "/img/dope/" + wat[Math.floor(Math.random()*4)] + "/" + Math.floor((Math.random()*100 + 1)) + ".jpg"
    $('<img/>').attr('src', bg).load(function() {

      $(l1).css('background-image', 'url(' + bg + ')');
      $(l1).removeClass('transparent');
      $(l0).addClass('transparent');

      $(this).remove(); // prevent memory leaks as @benweet suggested

      window.setTimeout(function() {
        $(l0).css('z-index', 1);
        $(l1).css('z-index', 2)
        $(l0).removeClass('transparent');
      }, 700)
    });
  }, 3000);

});
