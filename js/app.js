$(function () {
  $(".drag-obj").draggable({ revert: true });

  $("#drop-place").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    },
  });
});
