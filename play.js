// 분류 탭
document.querySelectorAll('.tabs button').forEach(function (t) {
  t.addEventListener('click', function () {
    var c = t.dataset.cat;
    document.querySelectorAll('.tabs button').forEach(function (x) { x.setAttribute('aria-pressed', x === t); });
    document.querySelectorAll('.card').forEach(function (k) { k.hidden = c !== '전체' && k.dataset.cat !== c; });
  });
});
