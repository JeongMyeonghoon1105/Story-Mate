/* Menu Icon */
var menuIcon = document.getElementById('menu-icon');
/* Menu Icon Container */
var hiddenMenu = document.getElementById('hidden-menu');
/* Tab-Down */
var tabDown = document.getElementById('tab-down');
var tabDownInner = document.getElementById('tab-down-inner');
/* Tab-Down Search Bar */
var tabSearchContainer = document.getElementById('tab-search-container');
var tabSearch = document.getElementById('tab-search');
/* Tab-Down Sign In Button */
var tabSign = document.getElementById('tab-sign');
/* Tab-Down Menu List */
var tabItems = document.getElementById('tab-items');
/* Tab-Down Post Button */
var tabList = document.getElementById('tab-post-container');

var mainMenu = document.getElementById('main-menu');
var searchToggle = document.getElementById('search');
var searchContainer = document.getElementById('search-container');

var card = document.getElementsByClassName('card');
var id = parseInt(card[0].id);

function changeHeight() {
  if (window.innerWidth > 900) {
    if (id%2==0) {
      card[0].setAttribute('style', `height: ${id/2*385+90}px`);
    } else {
      card[0].setAttribute('style', `height: ${(parseInt(id/2)+1)*385+90}px`);
    }
  } else if (window.innerWidth > 675) {
    card[0].setAttribute('style', `height: ${id*520+90}px`);
  } else if (window.innerWidth > 562.5) {
    card[0].setAttribute('style', `height: ${id*452.5+90}px`);
  } else if (window.innerWidth > 450) {
    card[0].setAttribute('style', `height: ${id*385+90}px`);
  } else if (window.innerWidth > 337.5) {
    card[0].setAttribute('style', `height: ${id*328+90}px`);
  } else if (window.innerWidth > 270) {
    card[0].setAttribute('style', `height: ${id*286+90}px`);
  }
}

/* Tab Down 표출된 상황에서 VW를 1250px 이상으로 늘릴 시 Tab Down 숨기기 */
window.addEventListener('resize', () => {
  changeHeight();
  
  if (window.innerWidth > 1250) {
    /* Menu Icon 복구 */
    menuIcon.className = 'fas fa-bars';
    menuIcon.setAttribute('style', 'font-size: 23px;');

    /* Tab Down 가리기 */
    tabDown.setAttribute('style', 'pointer-events: none; height: 0; transition: 0;');
    tabDownInner.setAttribute('style', 'pointer-events: none; height: 0; transition: 0;');
    tabSearchContainer.setAttribute('style', 'opacity: 0; pointer-events: auto; transition: 0;');
    tabSearch.setAttribute('style', 'opacity: 0; pointer-events: auto; transition: 0;');
    tabSign.setAttribute('style', 'opacity: 0; pointer-events: none; transition: 0;');
    tabItems.setAttribute('style', 'opacity: 0; pointer-events: none; transition: 0;');
    tabList.setAttribute('style', 'opacity: 0; pointer-events: none; transition: 0;');
  }
})

window.addEventListener('load', () => {
  changeHeight();
})