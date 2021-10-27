
function Calendar2(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) { 
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
}
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
}

let slides = document.getElementById('slider');
let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');

let i = 0
let img = [
    'https://www.wildernessshots.com/wp-content/uploads/2017/10/Grenadier-Mountains-Panorama-Colorado-Photos.jpg',
    'https://media.cntraveler.com/photos/6123f6bb7dfe5dff926c7675/3:1/w_2999,h_999,c_limit/South%20Korea_GettyImages-1200320719.jpg',
    'https://www.mountainphotography.com/images/xl/20120928-Cimarron-Sunset-Panorama.jpg',
    'https://www.aeroflot.ru/media/aflfiles/kr/kr_1.jpg',
    'https://wallpaperaccess.com/full/5463722.jpg',
    'https://media.audleytravel.com/-/media/images/home/north-asia-and-russia/south-korea/overview-letterbox-images/bttv/istock_908748356_gyeongbokgung_palace_seoul_letterbox.jpg'];



const HandleClick = btn_left.onclick = () =>{
    slides.style.backgroundImage = `url(${img[i]})`
    i++;
    if(i === img.length){
        i = 0
    }
    btn_right.onclick = () => {
        slides.style.backgroundImage = `url(${img.reverse()[i]})`
        i-1;
        if(i === img.length){
            i = 0
        }
    }
}

HandleClick()
