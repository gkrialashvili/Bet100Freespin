const terms = $(".accordion_item_trigger-t");
$(document).ready(function () {
  $(terms).append("<img class='arow' src='images/wheel/arow.png' alt=''>");
  let arrow = $(".arow");
  arrow.first().css("margin-right", "27px");
  arrow.last().css("margin-right", "27px");
});

$(terms).click(function () {
  $(this).children(".arow").toggleClass("rotateThatBitch");
});

$(".dazzling-conteiner").click(function () {
  window.open(
    "https://www.crocobet.com/#/slots?menu=egt&provider=egt&slot=20dazzlinghot",
    "_blank"
  );
});
