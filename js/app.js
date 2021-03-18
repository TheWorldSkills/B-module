var isRevert = true;

$(document).ready(function () {
  $.getJSON("../store/store.json", function (data, textStatus) {
    for (var i = 0; i < data.length; i++) {
      $("#drag-wrap").append(
        `<div class="grid-item drag-obj">
          <img src="../store/상품사진/${data[i].photo}" />
          <br />
          <span>상품명 : ${data[i].product_name}</span>
          <br />
          <span>브랜드 : ${data[i].brand}</span>
          <br />
          <span>가격 : ${data[i].price}원</span>
        </div>`
      );
      $(".drag-obj").draggable({ 
        revert: "invalid",
        helper: "clone"
      });
  
      $("#drop-place").droppable();
    }
  });
});
