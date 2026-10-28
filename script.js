var buttons = document.querySelectorAll('.filters button');
var cards = document.querySelectorAll('#dishes .card');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var filter = btn.getAttribute('data-filter');

    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });

    cards.forEach(function (card) {
      var show = filter === 'all' || card.getAttribute('data-cat') === filter;
      card.hidden = !show;
    });
  });
});
