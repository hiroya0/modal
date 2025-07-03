const open = document.getElementById('openModalBtn');
const myModal = document.getElementById('myModal');
const close = document.getElementById('closeModalBtn');

open.addEventListener('click', function(){
    myModal.style.display = 'block';
});

close.addEventListener('click',function(){
    myModal.style.display = 'none';
});