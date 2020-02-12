/* eslint-disable */
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=e=>{const t={};let n="horizontal";for(let n=1;n<=e;n++)t[n]={status:!0,bodyIndex:n,shipLength:e};return{body:t,hit:e=>{t[e].status=!1},isSunk:()=>{for(let n=1;n<=e;n++)if(t[n].status)return!1;return!0},get direction(){return n},setDirection:e=>{n=e}}},o=()=>{const e={};for(let t=1;t<=10;t++){e[t]={};for(let n=1;n<=10;n++)e[t][n]="empty"}let t=0;const n=(t,n)=>{if(!(0===t||t>10||0===n||n>10))return e[t][n]},o={1:i(1),2:i(2),3:i(3),4:i(4),5:i(5)},r=(t,i,o)=>{const r=Object.keys(t.body).length;let l=1;if(((e,t,i)=>{const o=Object.keys(e.body).length;if(i-1+o>10&&"horizontal"===e.direction||t-1+o>10&&"vertical"===e.direction)return!1;if("string"==typeof n(t,i)&&"horizontal"===e.direction){for(let e=i-1;e<=i+o;e++){if("string"!=typeof n(t,e)&&void 0!==n(t,e))return!1;for(let i=t-1;i<=t+1;i+=2)if("string"!=typeof n(i,e)&&void 0!==n(i,e))return!1}return!0}if("string"==typeof n(t,i)&&"vertical"===e.direction){for(let e=t-1;e<=t+o;e++){if("string"!=typeof n(e,i)&&void 0!==n(e,i))return!1;for(let t=i-1;t<=i+1;t+=2)if("string"!=typeof n(e,t)&&void 0!==n(e,t))return!1}return!0}})(t,i,o)){if("horizontal"===t.direction){void 0!==n(i,o-1)&&(e[i][o-1]="filled"),void 0!==n(i+1,o-1)&&(e[i+1][o-1]="filled"),void 0!==n(i-1,o-1)&&(e[i-1][o-1]="filled"),void 0!==n(i,o+r)&&(e[i][o+r]="filled"),void 0!==n(i+1,o+r)&&(e[i+1][o+r]="filled"),void 0!==n(i-1,o+r)&&(e[i-1][o+r]="filled");for(let s=o;s<o+r;s++)e[i][s]=t.body[l],void 0!==n(i-1,s)&&(e[i-1][s]="filled"),void 0!==n(i+1,s)&&(e[i+1][s]="filled"),l++}else{void 0!==n(i-1,o)&&(e[i-1][o]="filled"),void 0!==n(i-1,o+1)&&(e[i-1][o+1]="filled"),void 0!==n(i-1,o-1)&&(e[i-1][o-1]="filled"),void 0!==n(i+r,o)&&(e[i+r][o]="filled"),void 0!==n(i+r,o+1)&&(e[i+r][o+1]="filled"),void 0!==n(i+r,o-1)&&(e[i+r][o-1]="filled");for(let s=i;s<i+r;s++)e[s][o]=t.body[l],void 0!==n(s,o+1)&&(e[s][o+1]="filled"),void 0!==n(s,o-1)&&(e[s][o-1]="filled"),l++}return!0}return!1};return{body:e,placeShip:r,receiveAttack:(n,i)=>("empty"===e[n][i]||"filled"===e[n][i]||"object"==typeof e[n][i]&&!0===e[n][i].status)&&("string"==typeof e[n][i]?(e[n][i]="miss","miss"):(e[n][i].status=!1,o[e[n][i].shipLength].hit(e[n][i].bodyIndex),t++,"hit")),randomPlacement:()=>{for(let e=5;e>=1;e--){let t=!1;for(0===Math.floor(Math.random()*Math.floor(2))&&o[e].setDirection("vertical");!t;){const n=Math.floor(Math.random()*Math.floor(10))+1,i=Math.floor(Math.random()*Math.floor(10))+1;t=r(o[e],n,i)}}return!0},isAllSunk:()=>15===t,areShipsPlaced:()=>{let t=0;for(let n=1;n<=10;n++)for(let i=1;i<=10;i++)"object"==typeof e[n][i]&&e[n][i].status&&t++;return 15===t},get shipStorage(){return o}}},r={attack:(e,t,n)=>n.receiveAttack(e,t)},l=((e,t)=>{const n={attack:e=>{let t=!1;for(;!t;){const n=Math.floor(Math.random()*Math.floor(10))+1,i=Math.floor(Math.random()*Math.floor(10))+1;t=e.receiveAttack(n,i)}return t}};t.randomPlacement();const i=document.getElementById("ship-storage-container");let r;const l=document.getElementById("nav"),s=document.createElement("div"),a=(n,i=!1,o=!1)=>{const l=o?document.getElementById("ai-gameboard"):document.getElementById("player-gameboard");l.innerHTML="";const s=o?t:e;l.classList="col-5 m-2";for(let e=0;e<=10;e++){const t=document.createElement("div");if(0===e){for(let e=0;e<=10;e++){const n=document.createElement("div");0!==e&&(n.innerHTML=String.fromCharCode(64+e),n.classList="text-center"),t.appendChild(n)}t.classList="letter-row cellrow"}else t.classList="cellrow";if(l.appendChild(t),0!==e)for(let r=0;r<=10;r++){const l=document.createElement("div");0!==r?(l.setAttribute("data-x",e),l.setAttribute("data-y",r),"object"==typeof s.body[e][r]?!o&&s.body[e][r].status?l.classList="ship-display":s.body[e][r].status?o&&s.body[e][r].status&&(l.classList="cellcol"):(l.classList="attack-display",l.innerHTML="X"):"miss"===s.body[e][r]?(l.classList="miss-display",l.innerHTML="M"):l.classList="cellcol"):0===r&&0!==e&&(l.innerHTML=e),t.appendChild(l);const a=parseInt(l.getAttribute("data-x")),c=parseInt(l.getAttribute("data-y"));!1!==i&&l.addEventListener("click",()=>{i(s,a,c,n,o)})}}l.addEventListener("mouseover",()=>{l.style.cursor=o||r?"crosshair":"auto"}),document.getElementById("play-again-btn").addEventListener("click",()=>{window.location.reload()})},c=(e,t,n,i,o=!1)=>{if(r||o)if(e.placeShip(r,t,n)){const e=r.body[1].shipLength;document.getElementById(`ship-${e}`).style.visibility="hidden",r=!1,a(i,c)}else alert("This is an invalid position.");else alert("Select a ship from the left menu before!")},d=(i,o,r,l,c=!1)=>{if(document.getElementById("player-gameboard").innerHTML="",document.getElementById("ai-gameboard").innerHTML="",l&&c&&"miss"===l.attack(o,r,i)){let t="hit";for(;"hit"===t;)setTimeout(()=>{},2e3),t=n.attack(e),e.isAllSunk()&&(a(l),a(l,!1,!0),s.innerHTML="AI WINS",document.getElementById("play-again-btn").classList="btn btn-success mt-5 mr-5")}t.isAllSunk()?(a(l),a(l,!1,!0),s.innerHTML="YOU WIN",document.getElementById("play-again-btn").classList="btn btn-success mt-5 mr-5"):(a(l),a(l,d,!0))};return{renderShipStorage:t=>{const n=document.createElement("img");let l="horizontal";n.id="direction-img",n.src="../src/icons/arrows-alt-h-solid.svg",n.classList="float-right mt-3 mr-1",i.appendChild(n);const s=document.createElement("div");i.appendChild(s);for(let t=1;t<=5;t++){const n=document.createElement("div");n.id=`ship-${t}`,n.classList="ship m-3",s.appendChild(n),n.addEventListener("click",()=>{r=e.shipStorage[t],r.setDirection(l)})}n.addEventListener("click",()=>{"horizontal"===l?(r&&r.setDirection("vertical"),n.src="../src/icons/arrows-alt-v-solid.svg",l="vertical"):"vertical"===l&&(r&&r.setDirection("horizontal"),n.src="../src/icons/arrows-alt-h-solid.svg",l="horizontal")});const c=document.createElement("button");c.innerHTML="Random",c.id="random-btn",c.classList="btn btn-block btn-warning mb-2",c.style="background-color: white; color: black;",c.addEventListener("click",()=>{s.style.visibility="hidden",(e=o()).randomPlacement(),a()}),i.appendChild(c);const u=document.createElement("button");u.innerHTML="Ready",u.id="ready-btn",u.classList="btn btn-block btn-success mb-2",u.style="background-color: white; color: #28a745;",u.addEventListener("click",()=>{if(e.areShipsPlaced()){i.style.display="none",a(t),a(t,d,!0),document.getElementById("instructions").innerHTML="Click on any given cell on the right board to attack."}else alert("Place all of your ships before starting the game.")}),i.appendChild(u);const f=document.createElement("button");f.innerHTML="Reset",f.id="reset-btn",f.classList="btn btn-block btn-secondary mb-2",f.style="background-color: white; color: #6c757d",f.addEventListener("click",()=>{window.location.reload()}),i.appendChild(f)},get currentShip(){return r},renderBoard:a,renderNav:()=>{s.id="instructions",s.innerHTML="Place your ships clicking on any given ship in the left box and then clicking in any given cell on the board.<br>\n                              Your ship's 'head' will always be positioned on the cell you clicked. To switch the direction of the ship, click<br>\n                              the button at the top right corner of the left menu. When you're done placing all of your ships, press ready!",s.classList="text-center mt-5 border border-info bg-light",l.appendChild(s)},attackShipCell:d,placeShipCell:c}})(o(),o());l.renderShipStorage(r),l.renderBoard(r,l.placeShipCell),l.renderNav()}]);