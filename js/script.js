const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    btn.classList.remove('btn-shadow');
    setTimeout(function(){
        btn.classList.add('btn-shadow')
    },200)
});