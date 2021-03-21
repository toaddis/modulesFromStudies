
function openModal(modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.remove('hide');
    modalWindow.classList.add('show');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId){
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalButtons = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector);    
    
    modalButtons.forEach((item) => {
        item.addEventListener('click', (e) => {
            if(e.target && e.target == item){
                openModal(modalSelector, modalTimerId);
            }
        });
    });

    modalWindow.addEventListener('click', (e) => {
        if(e.target == modalWindow || e.target.getAttribute('data-close') == ''){
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code == 'Escape'){
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight){
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll',showModalByScroll); 
        }    
    }

    window.addEventListener('scroll',showModalByScroll);
}
export default modal;
export {closeModal};
export {openModal};