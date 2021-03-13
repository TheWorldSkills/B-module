var revertIt = false;

$(function () {
  $(".drag-obj").draggable({ revert: revertIt });

  $("#drop-place").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight");
    },
  });
});
