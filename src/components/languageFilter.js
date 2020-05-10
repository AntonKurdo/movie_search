import request from './Request'
import slider from './Slider'
import notify from './notification'

export default function filter(req) {
    let urllangDetect = `https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20200507T130702Z.b5bb7bc556a31e0c.090b5a0e29b4ede4db15d7f804180804c6b54c2e&text=${req}`;
    fetch(urllangDetect).then(res => {
        return res.json();
    }).then(res => {
        if (res.lang !== 'ru') {
            request(slider, req)
        } else {
            let urlTranslate = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200507T130702Z.b5bb7bc556a31e0c.090b5a0e29b4ede4db15d7f804180804c6b54c2e&text=${req}&lang=ru-en`
            fetch(urlTranslate).then(res => {
                return res.json()
            }).then(res => {
                request(slider, res.text);
                notify(res.text[0]);
            })
        }
    })
}