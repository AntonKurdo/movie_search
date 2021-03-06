import notify from "./notification";


export default function request(slider, str = 'spider') {
    const btnClean = document.querySelector('.clean_inp');
    const loading = document.querySelector('.search-input_cont img');
    let html = document.querySelector('.carousel__container');
    const url = `https://www.omdbapi.com/?s=${str}&apikey=39a13229`;
    btnClean.style.display = 'none';
    loading.style.display = 'inline-block';
    fetch(url).then(res => {       
        return res.json();
    }).then(res => {
       if(res.Response === 'True') {
        res.Search.forEach(one => {
            fetch(`https://www.omdbapi.com/?i=${one.imdbID}&apikey=39a13229`).then(rate => {
                return rate.json();
            }).then(rate => {
                one.Rate = rate.Ratings[0].Value;
                let arr = res.Search.map(item => {
                    return `<div class="card" style="width: 18rem;">
                                <h5 class="card-title"><a href='https://www.imdb.com/title/${item.imdbID}/' target='blank'>${item.Title}</a></h5>
                                <img src="${item.Poster}" class="card-img-top" alt="poster" draggable = 'false'>
                                <div class="card-body">             
                                    <p class="card-text">${item.Year}</p>
                                    <p class="card-text"> <i class="fas fa-star"></i> ${item.Rate}</p>             
                                </div>
                                </div>`
                })
                html.innerHTML = arr.join('');
                slider(arr.length);
                loading.style.display = 'none';
                btnClean.style.display = 'block';
            })
        })
     } else {
        document.querySelector('.notif').innerHTML = '';
        let flag = 'wrong request';
        notify(str, flag)            
        loading.style.display = 'none';
        btnClean.style.display = 'block';
     }
    })
}