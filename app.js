document.getElementById('announcements').insertAdjacentHTML('afterend', '<div class="folders" id="folders"><ul class="foldersList"><li class="folder98" id="folder98"><img src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png" width="50" height="50" onclick="showSchedule()"></li><li>Schedule</li></ul><ul class="foldersList"><li class="folder98"><img src="https://win98icons.alexmeub.com/icons/png/calculator-0.png" width="50" height="50" onclick="showCalc()"></li><li>Calculator</li></ul><div id="calc"><img src="https://i.pinimg.com/originals/27/fc/05/27fc05d3f826760c7fd00dc4334af1e6.png" width="300" height="200"></div><ul class="foldersList"><li class="folder98"><img src="https://win98icons.alexmeub.com/icons/png/msie1-2.png" width="50" height="50" onclick="showInternet()"></li><li>Internet</li></ul><ul class="foldersList"><li class="folder98"><img src="https://win98icons.alexmeub.com/icons/png/directory_fonts_cool-3.png" width="50" height="50" onclick="change()"></li><li id="changeThemeText">Dark Theme</li></ul></div>');
document.getElementById('videowrap-header').insertAdjacentHTML('afterend', '<div class="banner"><img src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png" max-width="332" max-height="55" id="narrowImage"><img src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png" max-width="896" max-height="55" id="wideImage"></div>');
document.getElementsByTagName('head')[0].insertAdjacentHTML('afterend', '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet">');
document.getElementById('playlistrow').insertAdjacentHTML('afterend', '<div class="window active" id="schedule"><div class="window-toolbar"><div class="window-title">Command Prompt</div><div class="window-buttons"><div class="window-button close closeButton" id="closeButton" onclick="closeSchedule()"></div><div class="window-button help"></div></div></div><div class="window-wrapper schedule"><ul class="scheduleList"><li class="scheduleItem">08.22.2022</li><li class="scheduleItem">9PM</li><li class="scheduleItem">Spider-Man</li></ul></div></div><div class="window active" id="window"><div class="window-toolbar"><div class="window-title">Microsoft Internet Explorer</div><div class="window-buttons"><div class="window-button close closeButton" id="closeButton" onclick="closeButton()"></div><div class="window-button help"></div></div></div><div class="window-wrapper"><div class="functionRow"><ul class="functionRowList"><li class="functionRowItem">File</li><li class="functionRowItem">Edit</li><li class="functionRowItem">View</li><li class="functionRowItem">Go</li><li class="functionRowItem">Favourites</li><li class="functionRowItem">Help</li></ul><ul class="functionRowList address"><li class="functionRowItem address">Adress</li><li class="functionRowItem addressLink">https://Brohsky_social.com</li></ul></div><ul id="windowList"><li class="windowItem"><a href="https://www.instagram.com/" class="windowLink twitter">Twitter</a></li><li class="windowItem"><a href="https://www.instagram.com/" class="windowLink twitter2">Twitter</a></li><li class="windowItem"><a href="https://www.instagram.com/" class="windowLink twitter3">Twitter</a></li></ul></div></div><div id="toolbar"><div class="toolbar-start-menu"><button class="start-button">Start</button></div><div class="toolbar-separator"></div><div class="toolbar-left"><button class="toolbar-icon ie"></button><button class="toolbar-icon outlook"></button><button class="toolbar-icon desktop"></button><button class="toolbar-icon channels"></button></div><div class="toolbar-separator"></div><div class="toolbar-right"><div class="time"><span class="hour"></span>:<span class="minutes"></span> AM</div></div></div>');

function currentTime(){
    let date = new Date();
    document.getElementsByClassName('time')[0].innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

setInterval(currentTime, 1000);

function showSchedule() {
    document.getElementById("schedule").style.display = "block";
}

function closeSchedule() {
    document.getElementById("schedule").style.display = "none";
}


function closeButton() {
    document.getElementById("window").style.display = "none";
}

function showCalc() {
    document.getElementById("calc").style.display = "block";
    function hideCalc() {
        document.getElementById("calc").style.display = "none";
    }
    setTimeout(hideCalc, 3000);
}

function showInternet() {
    document.getElementById("window").style.display = "block";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

if (document.getElementById("welcome") === null) {
    document.getElementById("queue").style.display = "none";
}

let counter = 0;
let nameArray = [];

function colorNickname() {
    while (counter < document.querySelectorAll("[class^=chat-msg]").length) {
        let nameColor;

        switch (getRandomInt(12)) {
            case 0: nameColor = "#ff0000"; break;
            case 1: nameColor = "#ff8000"; break;
            case 2: nameColor = "#ffff00"; break;
            case 3: nameColor = "#80ff00"; break;
            case 4: nameColor = "#00ff00"; break;
            case 5: nameColor = "#00ff80"; break;
            case 6: nameColor = "#00ffff"; break;
            case 7: nameColor = "#0080ff"; break;
            case 8: nameColor = "#0000ff"; break;
            case 9: nameColor = "#7f00ff"; break;
            case 10: nameColor = "#ff00ff"; break;
            case 11: nameColor = "#ff007f"; break;
        }

        let nameElement = document.querySelectorAll("[class^=chat-msg]")[counter];
        if (nameArray.length === 0) {
            nameArray.push(nameElement.getElementsByClassName('username')[0].innerHTML);
            nameElement.getElementsByClassName('username')[0].style.color = nameColor;
            nameArray.push(nameElement.getElementsByClassName('username')[0].style.color);
        }
        else if (nameElement.getElementsByClassName('username')[0] != undefined || null) {
            for (let i = 0; i <= nameArray.length; i+=2) {
                if (nameArray[i] === nameElement.getElementsByClassName('username')[0].innerHTML) {
                    nameElement.getElementsByClassName('username')[0].style.color = (nameArray[i+=1]);
                    break;
                }
                else if (i === nameArray.length && nameArray[i] != nameElement.getElementsByClassName('username')[0].innerHTML) {
                    nameElement.getElementsByClassName('username')[0].style.color = nameColor;
                    nameArray.push(nameElement.getElementsByClassName('username')[0].innerHTML);
                    nameArray.push(nameElement.getElementsByClassName('username')[0].style.color);
                    break;
                }
            }
        }
        counter += 1;
    }
}

setInterval(colorNickname, 50);

document.addEventListener('click',(e) => {
    let re = /: $/;
    let re2 = / nick-hover$/;


    if (e.target.classList.contains("nick-hover")) {
        let nameInput = e.target.className;
        nameInput = nameInput.replace(re2, "").substring(9);
        document.getElementById("chatline").value = "@"+nameInput+", ";
    }
    else if (e.target.className === "username") {
        let replyName = e.target.innerHTML;
        replyName = replyName.replace(re, ", ");
        document.getElementById("chatline").value = "@"+replyName;
    }
    else if (e.target.parentNode.classList.contains("nick-hover")) {
        let nameInput = e.target.parentNode.className;
        nameInput = nameInput.replace(re2, "").substring(9);
        document.getElementById("chatline").value = "@"+nameInput+", ";
    }
});


let audio = new Audio('https://www.myinstants.com/media/sounds/old-aol-instant-messenger-aim-sound-effects-youtube.mp3');
let messageCount = document.querySelectorAll("[class^=chat-msg]").length;
let pmCount = 0;


function checkMessage() {
    if  (pmCount < document.getElementsByClassName('pm-buffer')[0].childElementCount) {
        pmCount += 1;
        audio.play();
    }
}

setInterval(checkMessage, 300);

var theme = "light";

function change() {
    if (theme === "light") {
        theme = "dark";
        document.getElementById("changeThemeText").innerHTML = "Light Theme";
        document.getElementById("messagebuffer").style.color = "white";
        document.getElementsByClassName("banner")[0].style.color = "white";
        document.getElementById("wrap").style.backgroundColor = "#000080";
        document.getElementById("messagebuffer").style.backgroundColor = "#272b30";
        document.getElementById("userlist").style.backgroundColor = "#272b30";
        document.getElementById("folders").style.backgroundColor = "#000080";
        document.getElementsByClassName("banner")[0].style.backgroundColor = "#272b30";
        document.getElementsByClassName("banner")[0].style.borderTop = "17px solid #008080";
        document.getElementsByClassName("embed-responsive-16by9 ")[0].style.backgroundColor = "#272b30";
        document.getElementById("chatheader").style.backgroundColor = "#008080";
        document.getElementById("videowrap-header").style.backgroundColor = "#008080";
    }
    else {
        theme = "light";
        document.getElementById("changeThemeText").innerHTML = "Dark Theme";
        document.getElementById("messagebuffer").style.color = "black";
        document.getElementsByClassName("banner")[0].style.color = "black";
        document.getElementById("wrap").style.backgroundColor = "#008080";
        document.getElementById("messagebuffer").style.backgroundColor = "white";
        document.getElementById("userlist").style.backgroundColor = "white";
        document.getElementById("folders").style.backgroundColor = "#008080";
        document.getElementsByClassName("banner")[0].style.backgroundColor = "white";
        document.getElementsByClassName("banner")[0].style.borderTop = "17px solid #000080";
        document.getElementsByClassName("embed-responsive-16by9 ")[0].style.backgroundColor = "white";
        document.getElementById("chatheader").style.backgroundColor = "#000080";
        document.getElementById("videowrap-header").style.backgroundColor = "#000080";
    }
}