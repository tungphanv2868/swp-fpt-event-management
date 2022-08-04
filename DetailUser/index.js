document.getElementById('btn_nav').onclick = function () {
    let menu = document.getElementById('menu');
    let blur = document.getElementById('blur');
    menu.style.visibility = 'visible';
    blur.style.display = 'block';
    menu.style.opacity = '1';

    blur.onclick = function () {
        menu.style.visibility = 'hidden';
        menu.style.opacity = '0';
        blur.style.display = 'none';

    }
}   


const showContainers = document.querySelectorAll('.show-replies');
showContainers.forEach(btn => btn.addEventListener('click', (e) => {
    let parentContainer = e.target.closest('.comment_container');
    let _id = parentContainer.id;
    if(_id){
        let childrenContainer = parentContainer.querySelectorAll(`[dataset=${_id}]`);
        childrenContainer.forEach(child => child.classList.toggle('opened'));
    }
}))

