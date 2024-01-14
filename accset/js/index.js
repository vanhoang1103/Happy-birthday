// var red = document.querySelector('.chucmung')
// setInterval(() => {
//     red.classList.toggle('red')
// }, 100);

// Phần xem lời chúc 1
const opens = document.querySelectorAll('.js-content')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal_container')
const modalClose = document.querySelector('.js-modal_icon')
// phần thêm class open vào modal
function showOpen() {
    modal.classList.add('open')
}
// phần gỡ bỏ open ở modal
function hideOpen() {
    modal.classList.remove('open')
}
// lặp qua từng thẻ button
for(const open of opens) {
    open.addEventListener('click',showOpen)
}
// lắng nghe hành vi onlick vào nút close
modalClose.addEventListener('click',hideOpen)
modal.addEventListener('click',hideOpen)
modalContainer.addEventListener('click', function(even){
    even.stopPropagation()
})