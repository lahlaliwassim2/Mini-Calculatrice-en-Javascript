(function() {

    let screen = document.querySelector('.scren');
    let butons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let c = document.querySelector('.btn-c');

butons.forEach(function(button){
    button.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

})();