var is_revert = true;

$(document).ready(function () {
  $.getJSON("../store/store.json", function (data, textStatus) {
    console.log(data, textStatus);
    for (var i = 0; i < data.length; i++) {
      $("#drag-wrap").append(
        `<div class="grid-item drag-obj">${data[i].product_name}<br />${data[i].brand}</div>`
      );
      console.log(data[i]);
      console.log(data[i].id);
      console.log(data[i].photo);
      console.log(data[i].brand);
      console.log(data[i].product_name);
      console.log(data[i].price);
    }
  });
});

$(function () {
  $(".drag-obj").draggable({ revert: is_revert });

  $("#drop-place").droppable({
    drop: function (event, ui) {
      is_revert = false;
    },
  });
});
