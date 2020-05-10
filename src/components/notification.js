export default function notify(str, flag) {
    const cont = document.querySelector('.search-input_cont');
    let notificationCont = document.createElement('p');
    notificationCont.classList.add('notif')
    if(flag === 'wrong request')
    {
        notificationCont.innerHTML = `<i class="fas fa-exclamation-circle"></i> There is no results for <span>'${str}'</span>`;
    } else {
        notificationCont.innerHTML = `<i style = 'color: green' class="fas fa-exclamation-circle"></i>  Showing results for <span style = 'color: green'>'${str}'</span>`;
    }
    cont.appendChild(notificationCont)
}