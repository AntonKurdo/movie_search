export default function notify(str) {
    const cont = document.querySelector('.search-input_cont');
    let notificationCont = document.createElement('p');
    notificationCont.classList.add('notif')
    notificationCont.innerHTML = `<i class="fas fa-exclamation-circle"></i>  Showing results for <span>'${str}'</span>`;
    cont.appendChild(notificationCont)
}