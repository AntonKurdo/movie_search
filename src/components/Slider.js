export default function slider(length) {
    const step = 290;
    let counter = 0;
    
    document.querySelector('.btn-right').addEventListener('click', () => {
        counter >= length - 4 ? (counter = -1) : null;
        counter++;
        document.querySelectorAll('.card').forEach(item => {
            item.style.transform = 'translateX(' + `${-step * counter}px)`

        });
    });

    document.querySelector('.btn-left').addEventListener('click', () => {
        counter <= 0 ? counter = length - 3 : null;
        counter--;
        document.querySelectorAll('.card').forEach(item => {
            item.style.transform = 'translateX(' + `${-step * counter}px)`
        });

    })
}
