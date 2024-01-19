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

// Phần xem lời chúc 2
const opens2 = document.querySelectorAll('.js-content2')
const modal2 = document.querySelector('.js-modal2')
const modalContainer2 = document.querySelector('.js-modal_container2')
const modalClose2 = document.querySelector('.js-modal_icon2')
// phần thêm class open vào modal
function showOpen2() {
    modal2.classList.add('open2')
}
// phần gỡ bỏ open ở modal
function hideOpen2() {
    modal2.classList.remove('open2')
}
// lặp qua từng thẻ button
for(const open of opens2) {
    open.addEventListener('click',showOpen2)
}
// lắng nghe hành vi onlick vào nút close
modalClose2.addEventListener('click',hideOpen2)
modal2.addEventListener('click',hideOpen2)
modalContainer2.addEventListener('click', function(even){
    even.stopPropagation()
})

// Phần xem lời chúc 3
const opens3 = document.querySelectorAll('.js-content3')
const modal3 = document.querySelector('.js-modal3')
const modalContainer3 = document.querySelector('.js-modal_container3')
const modalClose3 = document.querySelector('.js-modal_icon3')
// phần thêm class open vào modal
function showOpen3() {
    modal3.classList.add('open3')
}
// phần gỡ bỏ open ở modal
function hideOpen3() {
    modal3.classList.remove('open3')
}
// lặp qua từng thẻ button
for(const open of opens3) {
    open.addEventListener('click',showOpen3)
}
// lắng nghe hành vi onlick vào nút close
modalClose3.addEventListener('click',hideOpen3)
modal3.addEventListener('click',hideOpen3)
modalContainer3.addEventListener('click', function(even){
    even.stopPropagation()
})


// Phần xem lời chúc 4
const opens4 = document.querySelectorAll('.js-content4')
const modal4 = document.querySelector('.js-modal4')
const modalContainer4 = document.querySelector('.js-modal_container4')
const modalClose4 = document.querySelector('.js-modal_icon4')
// phần thêm class open vào modal
function showOpen4() {
    modal4.classList.add('open4')
}
// phần gỡ bỏ open ở modal
function hideOpen4() {
    modal4.classList.remove('open4')
}
// lặp qua từng thẻ button
for(const open of opens4) {
    open.addEventListener('click',showOpen4)
}
// lắng nghe hành vi onlick vào nút close
modalClose4.addEventListener('click',hideOpen4)
modal4.addEventListener('click',hideOpen4)
modalContainer4.addEventListener('click', function(even){
    even.stopPropagation()
})


// Phần xem lời chúc 5
const opens5 = document.querySelectorAll('.js-content5')
const modal5 = document.querySelector('.js-modal5')
const modalContainer5 = document.querySelector('.js-modal_container5')
const modalClose5 = document.querySelector('.js-modal_icon5')
// phần thêm class open vào modal
function showOpen5() {
    modal5.classList.add('open5')
}
// phần gỡ bỏ open ở modal
function hideOpen5() {
    modal5.classList.remove('open5')
}
// lặp qua từng thẻ button
for(const open of opens5) {
    open.addEventListener('click',showOpen5)
}
// lắng nghe hành vi onlick vào nút close
modalClose5.addEventListener('click',hideOpen5)
modal5.addEventListener('click',hideOpen5)
modalContainer5.addEventListener('click', function(even){
    even.stopPropagation()
})


// Phần xem lời chúc 6
const opens6 = document.querySelectorAll('.js-content6')
const modal6 = document.querySelector('.js-modal6')
const modalContainer6 = document.querySelector('.js-modal_container6')
const modalClose6 = document.querySelector('.js-modal_icon6')
// phần thêm class open vào modal
function showOpen6() {
    modal6.classList.add('open6')
}
// phần gỡ bỏ open ở modal
function hideOpen6() {
    modal6.classList.remove('open6')
}
// lặp qua từng thẻ button
for(const open of opens6) {
    open.addEventListener('click',showOpen6)
}
// lắng nghe hành vi onlick vào nút close
modalClose6.addEventListener('click',hideOpen6)
modal6.addEventListener('click',hideOpen6)
modalContainer6.addEventListener('click', function(even){
    even.stopPropagation()
})