const drumBtn = document.querySelectorAll('.drum');

for (var i = 0; i < drumBtn.length; i++) {
    drumBtn[i].addEventListener('click', function () {
        console.log('click');
    })
}