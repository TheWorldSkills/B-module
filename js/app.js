

var revertIt = false;



$(document).ready(function(){
  $.getJSON("../store/store.json", function(data){
      console.log(data);
  })
})

$(function () {
  $(".drag-obj").draggable({ revert: revertIt });
  

  $("#drop-place").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight");
    },
  });
});
