function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = 'Дата для русской локали: ' + today.toLocaleString('ru-RU');
    let abc = document.getElementById('current-date2');
    abc.innerHTML = 'Дата для локали Azeri (Latin): ' + today.toLocaleString('az');
    let qwe = document.getElementById('current-date3');
    qwe.innerHTML = 'Дата для локали Greek: ' + today.toLocaleString('el');
    let eng = document.getElementById('current-date4');
    eng.innerHTML = 'Дата для локали English: ' + today.toLocaleString('en');
    let swe = document.getElementById('current-date5');
    swe.innerHTML = 'Дата для локали Swedish: ' + today.toLocaleString('sv');
}