let playlistrow = document.getElementById('announcements');
playlistrow.insertAdjacentHTML('afterend', '<div class="folders" id="folders"><ul class="foldersList"><li class="folder98" id="folder98"><img src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png" width="50" height="50" onclick="showNotepad()"></li><li>Schedule</li></ul><ul class="foldersList"><li class="folder98"><img src="https://win98icons.alexmeub.com/icons/png/calculator-0.png" width="50" height="50" onclick="showCalc()"></li><li>Calculator</li></ul><div id="calc"><img src="https://i.pinimg.com/originals/27/fc/05/27fc05d3f826760c7fd00dc4334af1e6.png" width="300" height="200"></div><ul class="foldersList"><li class="folder98"><img src="https://win98icons.alexmeub.com/icons/png/msie1-2.png" width="50" height="50" onclick="showInternet()"></li><li>Internet</li></ul><ul class="foldersList"><li class="folder98"><img src="https://win98icons.alexmeub.com/icons/png/directory_fonts_cool-3.png" width="50" height="50" onclick="change()"></li><li id="changeThemeText">Dark Theme</li></ul><div id="internet"><img src="https://guidebookgallery.org/pics/gui/applications/internet/browser/win98.png" width="500" height="350"></div><div id="notepad"><img src="https://networkencyclopedia.com/wp-content/uploads/2019/09/command-prompt.jpg" width="250" height="150"><span class="foldersText">7 PM Spider-man<br>7 PM Spider-man<br>7 PM Spider-man<br>7 PM Spider-man<br>7 PM Spider-man<br></span></div></div>');

let main= document.getElementById('videowrap-header');
main.insertAdjacentHTML('afterend', '<div class="banner"><img src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png" max-width="332" max-height="55"></div>');

let font = document.getElementsByTagName('head')[0];
font.insertAdjacentHTML('afterend', '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet">');


function showNotepad() {
    document.getElementById("notepad").style.display = "block";
    function hideNotepad() {
        document.getElementById("notepad").style.display = "none";
    }
    setTimeout(hideNotepad, 5000);
}

function showCalc() {
    document.getElementById("calc").style.display = "block";
    function hideCalc() {
        document.getElementById("calc").style.display = "none";
    }
    setTimeout(hideCalc, 3000);
}

function showInternet() {
    document.getElementById("internet").style.display = "block";
    function hideInternet() {
        document.getElementById("internet").style.display = "none";
    }
    setTimeout(hideInternet, 3000);
}

if (document.getElementById("welcome") === null) {
    document.getElementById("queue").style.display = "none";
}

let audio = new Audio('https://www.myinstants.com/media/sounds/old-aol-instant-messenger-aim-sound-effects-youtube.mp3');

let messageCount = document.querySelectorAll("[class^=chat-msg]").length;

function checkMessage() {
    if  (messageCount < document.querySelectorAll("[class^=chat-msg]").length) {
        messageCount += 1;
        audio.play();
    }
}

setInterval(checkMessage, 300);

let theme = "light";

function change() {
    if (theme === "light") {
        theme = "dark";
        document.getElementById("changeThemeText").innerHTML = "Light Theme";
        document.getElementsByClassName("container-fluid")[0].style.background = "url('https://cdn.wallpapersafari.com/55/10/ipWNlt.png') no-repeat center";
        document.getElementsByClassName("container-fluid")[0].style.backgroundSize = "100% 100%";
        document.getElementById("messagebuffer").style.color = "white";
        document.getElementsByClassName("banner")[0].style.color = "white";
        document.getElementById("mainpage").style.backgroundColor = "#000080";
        document.getElementById("messagebuffer").style.backgroundColor = "#272b30";
        document.getElementById("userlist").style.backgroundColor = "#272b30";
        document.getElementById("folders").style.backgroundColor = "#000080";
        document.getElementsByClassName("banner")[0].style.backgroundColor = "#272b30";
        document.getElementsByClassName("banner")[0].style.borderTop = "17px solid #008080";
        document.getElementsByClassName("embed-responsive-16by9 ")[0].style.backgroundColor = "#272b30";
        document.getElementById("chatheader").style.backgroundColor = "#008080";
        document.getElementById("videowrap-header").style.backgroundColor = "#008080";
        document.getElementsByClassName("nick-highlight")[0].style.backgroundColor = "#555555";
    }
    else {
        theme = "light";
        document.getElementById("changeThemeText").innerHTML = "Dark Theme";
        document.getElementsByClassName("container-fluid")[0].style.background = "url('https://cdn.wallpapersafari.com/84/90/wMjQ6k.png') no-repeat center";
        document.getElementsByClassName("container-fluid")[0].style.backgroundSize = "100% 100%";
        document.getElementById("messagebuffer").style.color = "black";
        document.getElementsByClassName("banner")[0].style.color = "black";
        document.getElementById("mainpage").style.backgroundColor = "#008080";
        document.getElementById("messagebuffer").style.backgroundColor = "white";
        document.getElementById("userlist").style.backgroundColor = "white";
        document.getElementById("folders").style.backgroundColor = "#008080";
        document.getElementsByClassName("banner")[0].style.backgroundColor = "white";
        document.getElementsByClassName("banner")[0].style.borderTop = "17px solid #000080";
        document.getElementsByClassName("embed-responsive-16by9 ")[0].style.backgroundColor = "white";
        document.getElementById("chatheader").style.backgroundColor = "#000080";
        document.getElementById("videowrap-header").style.backgroundColor = "#000080";
        document.getElementsByClassName("nick-highlight")[0].style.backgroundColor = "#ddffdd";
    }
}