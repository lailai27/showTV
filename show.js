// 現正+即將
function apple() {
    cat.style.display = 'none';
    bee.style.display = "block";
}
function apples() {
    bee.style.display = 'none';
    cat.style.display = "block";
}

//會員登入介面
var btn = document.querySelector("#abc");
var infoModal = document.querySelector("#def");
var close = document.querySelector("#close");
btn.addEventListener("click", function () {
    infoModal.showModal();
})
close.addEventListener("click", function () {
    infoModal.close();
})
function appear() {
    var x = document.getElementById('GHI');
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}

//切換即將上映
var imgs = ['/小專/img即將/娃娃.png', '/小專/img即將/巨齒.png', '/小專/img即將/玩命.png', '/小專/img即將/美人魚.png', '/小專/img即將/金之國.png'];
var texts = ['駭人骨娃娃', '正宗巨齒鯊', '玩命關頭X', '小美人魚', '金之國水之國'];
var dates = ['上映日期:2023/05/26', '上映日期:2023/05/12', '上映日期:2023/05/17', '上映日期:2023/05/25', '上映日期:2023/05/12'];

var changeimg = ['/小專/img即將/陰影.png', '/小專/img即將/龍馬.png', '/小專/img即將/油麻.png', '/小專/img即將/神鬼.png', '/小專/img即將/湯道.png'];
var changetext = ['陰影下的她', '龍馬精神', '油麻菜籽', '神鬼聖戰', '湯道'];
var changedate = ['上映日期:2023/05/12', '上映日期:2023/05/12', '上映日期:2023/05/12', '上映日期:2023/05/12', '上映日期:2023/05/12'];

var isAlt = false;
function foxy() {
    if (isAlt) {
        document.getElementById('img_1').src = imgs[0];
        document.getElementById('img_2').src = imgs[1];
        document.getElementById('img_3').src = imgs[2];
        document.getElementById('img_4').src = imgs[3];
        document.getElementById('img_5').src = imgs[4];

        document.getElementById('text_1').innerHTML = texts[0];
        document.getElementById('text_2').innerHTML = texts[1];
        document.getElementById('text_3').innerHTML = texts[2];
        document.getElementById('text_4').innerHTML = texts[3];
        document.getElementById('text_5').innerHTML = texts[4];

        document.getElementById('date_1').innerHTML = dates[0];
        document.getElementById('date_2').innerHTML = dates[1];
        document.getElementById('date_3').innerHTML = dates[2];
        document.getElementById('date_4').innerHTML = dates[3];
        document.getElementById('date_5').innerHTML = dates[4];
        isAlt = false;
    } else {
        document.getElementById('img_1').src = changeimg[0];
        document.getElementById('img_2').src = changeimg[1];
        document.getElementById('img_3').src = changeimg[2];
        document.getElementById('img_4').src = changeimg[3];
        document.getElementById('img_5').src = changeimg[4];

        document.getElementById('text_1').innerHTML = changetext[0];
        document.getElementById('text_2').innerHTML = changetext[1];
        document.getElementById('text_3').innerHTML = changetext[2];
        document.getElementById('text_4').innerHTML = changetext[3];
        document.getElementById('text_5').innerHTML = changetext[4];

        document.getElementById('date_1').innerHTML = changedate[0];
        document.getElementById('date_2').innerHTML = changedate[1];
        document.getElementById('date_3').innerHTML = changedate[2];
        document.getElementById('date_4').innerHTML = changedate[3];
        document.getElementById('date_5').innerHTML = changedate[4];
        isAlt = true;
    }
}

//倒數計時
// 設定倒數計時的目標時間，這裡是 2023 年 5 月 5 日下午 6 點
var targetDate = new Date('May 17, 2023 00:00:00').getTime();

var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');

function updateCountdown() {
    // 取得現在的時間
    var now = new Date().getTime();
    // 計算剩餘時間
    var remainingTime = targetDate - now;
    // 計算天數、小時、分鐘和秒數
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    // 更新畫面
    daysEl.innerHTML = days + "天";
    hoursEl.innerHTML = hours + "時";
    minutesEl.innerHTML = minutes + "分";
    secondsEl.innerHTML = seconds + "秒";
}
// 每秒更新一次倒數計時器
setInterval(updateCountdown, 1000);

//展開收合正在現映
function foxys() {
    var moreImages = document.getElementById('more-images');
    moreImages.classList.toggle('hide');
    var moreImagess = document.getElementById('more-imagess');
    moreImagess.classList.toggle('hide');

}

//觸發現正即將 切換跟展開按鈕互換
var button1 = document.getElementById('button1'); //現正熱映
var button2 = document.getElementById('button2'); //即將上映
var button3 = document.getElementById('zooz');  //切換即將上映按鈕
var button4 = document.getElementById('button4');  //展開現正熱映按鈕

button1.addEventListener('click', () => {
    button3.style.display = 'none';
    button4.style.display = 'block';
})
button2.addEventListener('click', () => {
    button3.style.display = 'block';
    button4.style.display = 'none';
})