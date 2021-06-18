const terms = $(".accordion_item_trigger-t");
$(document).ready(function () {
  $(terms).append("<img class='arow' src='images/wheel/arow.png' alt=''>");
  let arrow = $(".arow");
  arrow.first().css("margin-right", "27px");
  arrow.last().css("margin-right", "27px");
  createTableValue();
});

var tableEgt = [
  { position: "100₾ +", prize: "100 ცალი 1 ლარიანი EGT ფრისპინი" },
  { position: "80₾-99.99₾", prize: "80 ცალი 1 ლარიანი EGT ფრისპინი" },
  { position: "60₾-79.99₾", prize: "60 ცალი 1 ლარიანი EGT ფრისპინი" },
  { position: "40₾-59.99₾", prize: "40 ცალი 1 ლარიანი EGT ფრისპინი" },
  { position: "20₾-39.99₾", prize: "20 ცალი 1 ლარიანი EGT ფრისპინი" },
];

createTableValue = () => {
  $.each(tableEgt, function (i) {
    let egtValue = tableEgt[i];
    $("#table-header-egt").after(
      "<tr><td>" +
        egtValue.position +
        "</td><td>" +
        egtValue.prize +
        "</td></tr>"
    );
  });
};

$(terms).click(function () {
  $(this).children(".arow").toggleClass("rotateThatBitch");
});

$(".dazzling-conteiner").click(function () {
  window.open(
    "https://www.crocobet.com/#/slots?menu=egt&provider=egt&slot=20dazzlinghot",
    "_blank"
  );
});
