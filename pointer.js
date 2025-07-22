// 色変更
document.getElementById('colorPicker').addEventListener('input', function () {
  document.querySelectorAll('.nail').forEach(nail => {
    nail.style.backgroundColor = this.value;
  });
});

// デコレーション（例：リボン）ドラッグ移動
const ribbon = document.getElementById('ribbon');
let isDragging = false;

ribbon.addEventListener('touchstart', function (e) {
  isDragging = true;
}, false);

ribbon.addEventListener('touchmove', function (e) {
  if (!isDragging) return;
  const touch = e.touches[0];
  ribbon.style.left = `${touch.pageX}px`;
  ribbon.style.top = `${touch.pageY}px`;
  e.preventDefault();
}, false);

ribbon.addEventListener('touchend', function () {
  isDragging = false;
}, false);
