var isRevert = true;

$(document).ready(function () {
  $.getJSON("../store/store.json", function (data, textStatus) {
    console.log(data, textStatus);
    for (var i = 0; i < data.length; i++) {
      $("#drag-wrap").append(
        `<div class="grid-item drag-obj"><img src="../store/상품사진/${data[i].photo}" /><br />상품명 : ${data[i].product_name}<br />브랜드 : ${data[i].brand}<br />가격 : ${data[i].price}원</div>`
        // 그 죄송합니다.
      );
      $(".drag-obj").draggable({ 
        revert:function(event,ui) {
          //droppable 객체가 아닌곳에 드래그 됫을때
          if(event==false){
              isRevert=false;
              return true;
          //droppable 객체에 들어갓을때
          } else {
              isRevert=true;
          }
        },
        helper:function() {
        $helper=$(this).clone();
        return $helper; 
        }
        
      });
  
      $("#drop-place").droppable({
      drop: function (event, ui) {
        is_revert = false;
      },
    });
    }
  });
});
