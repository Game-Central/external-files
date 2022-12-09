var html = `
<head>
  <style>
    body {
      background-color: #222;
    }
    /* Menu */
    #menuHead {
      width: 100vw;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      background-color: #121212;
    }
    #menuBody {
      width: 100vw;
      height: calc(100vh - 50px);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      background-color: #333;
    }
    #menuNavbar {
      width: 250px;
      height: calc(100vh - 50px);
      position: absolute;
      bottom: 0;
      left: 0;
      margin: auto;
      background-color: #222;
      text-align: center;
      color: white;
      font-size: 20px;
    }


    .menuNavbar-item {
      font-size: 30px;
      text-align: center;
      padding-top: 10px;
      color: #888;
      font-family: Copperplate, Papyrus, fantasy;
      font-weight: 0;
      transition: all .2s ease-in-out;
    }
    .menuNavbar-item:hover {
      color: #fff;
      transform: scale(1.05);
    }

    /* Menu Pages */
    
    .menuBodyPages {
      overflow-x: hidden;
      overflow-y: scroll;
      width: calc(100% - 300px);
      height: calc(100vh - 50px);
      position: absolute;
      bottom: 0;
      right: 0;
      margin: auto;
      text-align: center;
      color: white;
      font-size: 20px;
      font-weight: 0;
    }
    /* Menu Navbar */
    .navBarSelected {
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
      font-size: 30px;
      text-align: center;
      padding-top: 10px;
      color: #fff;
      font-family: Copperplate, Papyrus, fantasy;
      font-weight: 0;
      transition: all .2s ease-in-out;
    }
    .navBarSelected:hover {
      transform: scale(1.09);
      transform-origin: bottom;      
    }

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  opacity: 0; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
#menuTitle {
  color: #fff;
  font-size: 25px;
  text-align: left;
  padding-top: 10px;
  font-family: Garamond;
}
#injectBTN {
  width: 90%;
  height: 8%;
  border: 5px solid #222;
  border-bottom:none; 
  font-size: 24px;
  background-color: #666;
  color: white;
}
#injectBTN:hover {
  background-color: #444;
}
#injectText {
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  overflow-x:hidden;
  overflow-y:scroll; 
  width: 90%; 
  height: 60%; 
  border: 5px solid #222; 
  background-color: #555;
  resize: none;
  caret-color: white;
  color: white;
  font-size: 16px;
}
.bookmarkletBTN {
  width: 85%;
  border-radius: 30px 15px 30px 15px;
  border: #222 solid 5px;
  background-color: #444;
  color: white;
  padding: 5px;
      transition: all .2s ease-in-out;
  margin-bottom: 15px;
}
.bookmarkletBTN:hover {
      transform: scale(1.09);
      transform-origin: center; 
}
  </style>
</head>
<body onbeforeunload="window.close">
  <div id="menuHead">
    <div id="menuTitle">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png" height="30px" style="float: left;">
      <a>&zwnj; Chrome Exploit Menu</a>
      <a style="font-size: 20; float: right; margin-left: 5px; margin-right: 15px; color: white;"id="linkedURL" href="#"></a>
      <a style="font-size: 20; float: right;">Linked Page: </a>
    </div>
  </div>
  <div id="menuBody">
    <div id="menuNavbar">
      <div class="menuNavbar-item" id="ChangelogBTN">Changelog</div>
      <div class="menuNavbar-item" id="ScriptInjectorBTN">Script Injector</div>
      <div class="menuNavbar-item" id="BookmarkletsBTN">Bookmarklets</div>
    </div>
    <div id="menuBodyPage">

      <div id="Home" class="menuBodyPages">
          <h1>Welcome</h1>
      </div>

      <div id="Bookmarklets" class="menuBodyPages" style="display: none;">
          <h1>Bookmarklets</h1>
          <a>Click The Buttons To Inject The Various Bookmarklets Into The Page That The Menu Is Linked Too<br><strong>Tip:</strong> Bookmarklets Will Not Work On Every Site</a><br><br>

          <button onclick="injectBookmarklet(this)" class="bookmarkletBTN">
            <a style="font-size: 32;">Share Page</a>
            <br>
            <a>Opens A Menu To Share The Current Page To Various Other Platforms</a>
            <pre style="display: none;">javascript:(function()%7Bvoid((function(svc)%20%7B%20%20%20%20var%20d%20%3D%20document%2C%20%20%20%20%20%20%20%20w%20%3D%20window%2C%20%20%20%20%20%20%20%20p%20%3D%200%2C%20%20%20%20%20%20%20%20b%20%3D%20function()%20%7B%20%20%20%20%20%20%20%20%20%20%20%20if%20(!p)%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20p%20%3D%201%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(_atc.xol)%20_adr.onReady()%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(w.addthis_sendto)%20addthis_sendto(svc%20%7C%7C%20'bkmore'%2C%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20product%3A%20'bmt-'%20%2B%20_atc.ver%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20p%20%3D%200%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(_atw)%20_atw.clb()%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%20%7D%3B%20%20%20%20if%20(!w._atc)%20%7B%20%20%20%20%20%20%20%20var%20ol%20%3D%20w.addthis_onload%20%7C%7C%20%5B%5D%2C%20%20%20%20%20%20%20%20%20%20%20%20o%20%3D%20d.createElement('script')%3B%20%20%20%20%20%20%20%20w.addthis_product%20%3D%20'bmt-250'%3B%20%20%20%20%20%20%20%20o.src%20%3D%20'%2F%2Fs7.addthis.com%2Fjs%2F250%2Faddthis_widget.js%23domready%3D1%26username%3Dbookmarklet'%3B%20%20%20%20%20%20%20%20ol.push(b)%3B%20%20%20%20%20%20%20%20w.addthis_onload%20%3D%20ol%3B%20%20%20%20%20%20%20%20d.getElementsByTagName('body')%5B0%5D.appendChild(o)%20%20%20%20%7D%20else%20b()%7D)())%7D)()<pre>
          </button>
          
          <button onclick="injectBookmarklet(this)" class="bookmarkletBTN">
            <a style="font-size: 32;">History Flooder</a>
            <br>
            <a>Floods Your History With The Current Page</a>
            <pre style="display: none;">javascript:(function()%7Bvar%20url%20%3D%20window.location.href%3Bfor%20(var%20t%20%3D%20'%2F'%2C%20o%20%3D%200%3B%20o%20%3C%20200%3B%20o%2B%2B)%20%7Bhistory.pushState(0%2C%200%2C%20t%20%2B%3D%20o.toString())%7Dhistory.pushState(0%2C%200%2C%20url)%3Balert('History%20flooded')%7D)()<pre>
          </button>
          
          <button onclick="injectBookmarklet(this)" class="bookmarkletBTN">
            <a style="font-size: 32;">Bouncing Dragon</a>
            <br>
            <a>Adds A Dragon To The Page That Bounces Around Like The Old DVD Logo</a>
            <pre style="display: none;">javascript:(function()%7Bfunction callback()%7Bwindow.SeaDragon.add()%7Dvar s%3Ddocument.createElement("script")%3Bs.src%3D"https%3A%2F%2Fmrcoles.com%2Fmedia%2Fjs%2Fseadragon.js"%3Bif(s.addEventListener)%7Bs.addEventListener("load"%2Ccallback%2Cfalse)%7Delse if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()<pre>
          </button>
          
          <button onclick="injectBookmarklet(this)" class="bookmarkletBTN">
            <a style="font-size: 32;">View Page Source</a>
            <br>
            <a>View The Linked Pages Source Code</a>
            <pre style="display: none;">javascript:(function()%7Bvar%20html%20%3D%20document.getElementsByTagName('html')%5B0%5D.innerHTML%3Bvar%20win%20%3D%20window.open().document%3Bwin.write('%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3Ctitle%3E%20'%2Blocation.href%2B'%3C%2Ftitle%3E%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%22%20%2F%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E')%3Bvar%20b%3Dwin.body.appendChild(win.createElement('pre'))%3Bb.style.overflow%3D'auto'%3Bb.style.whiteSpace%3D'pre-wrap'%3Bb.appendChild(win.createTextNode('%3C!DOCTYPE%20html%3E%5Cn'%2Bdocument.documentElement.innerHTML))%7D)()<pre>
          </button>

      </div>

      <div id="Changelog" class="menuBodyPages" style="display: none;">
          <h1>Changelog</h1>
          a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>
      </div>

      <div id="ScriptInjector" class="menuBodyPages" style="display: none;">
          <h1>Script Injector</h1>
          <button id="injectBTN" onclick="injectText()">Inject</button>
          <textarea id="injectText" onkeyup=""></textarea>
      </div>

    </div>
  </div>
</body>
`;
var win = window.open("", "", "height=450,width=800");
win.document.getElementsByTagName("html")[0].innerHTML = html;
var script = `
document.getElementById('linkedURL').innerHTML = '<u>'+window.opener.location.href+'</u>';

function injectBookmarklet(element) {
  var code = element.lastChild.innerHTML;
  var code = code.split('<pre>');
  window.opener.location = code[0]
}

function injectText() {
  window.opener.inject(document.getElementById('injectText').value);
  alert('Script Injection Successful')
}

function changePage(element, clickerElement) {
    var ee = clickerElement;
    var elements = [...document.getElementsByClassName('menuBodyPages')];
    elements.forEach(i=>{
        i.style.display = "none";
    });
    var e = document.getElementById(element);
    e.style.display = "block";

    
    elements = [...document.getElementById('menuNavbar').children];
    elements.forEach(i=>{
            i.innerHTML = i.innerHTML.replace('  &l', '');
            i.innerHTML = i.innerHTML.replace('&l', '');
            i.innerHTML = i.innerHTML.replace('t;', '');
            i.innerHTML = i.innerHTML.replace('&lt/strong&gt', '');
            i.innerHTML = i.innerHTML.replace('&ltstrong&gt', '')
    });
    ee.innerHTML = ee.innerHTML+' <';
    
    elements = [...document.getElementById('menuNavbar').children];
    elements.forEach(i=>{
            i.classList.add("menuNavbar-item");
            i.classList.remove("navBarSelected");
    });
    ee.classList.add("navBarSelected");
    ee.classList.remove("menuNavbar-item");
};

document.getElementById('ChangelogBTN').addEventListener("click", function(){
  changePage('Changelog', document.getElementById('ChangelogBTN'));
}, false);

document.getElementById('ScriptInjectorBTN').addEventListener("click", function(){
  changePage('ScriptInjector', document.getElementById('ScriptInjectorBTN'));
}, false);

document.getElementById('BookmarkletsBTN').addEventListener("click", function(){
  changePage('Bookmarklets', document.getElementById('BookmarkletsBTN'));
}, false);

document.title = "Chrome Exploit Menu"
`;
var scriptElement = win.document.createElement("script");
scriptElement.innerHTML = script;
win.document.body.appendChild(scriptElement);

script = 
`
function inject(code) {
  var scriptElement = document.createElement("script");
  scriptElement.innerHTML = code;
  document.body.appendChild(scriptElement);
}
`
scriptElement = document.createElement("script");
scriptElement.innerHTML = script;
document.body.appendChild(scriptElement);
