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

function showDaysCount(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let dayscount = (today - birthday)/1000/60/60/24;
    dayscount = Math.floor(dayscount);
    document.getElementById('dateb').innerHTML = 'Количество дней с даты рождения: ' + dayscount;
}

function udal() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    inputDate.value = "";
    dayscount = 0;
    document.getElementById('dateb').innerHTML = 'Количество дней с даты рождения: ' + dayscount;
}