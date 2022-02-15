module.exports = {
  // 로드될 페이지의 html 소스
  HTML:(head, style, variousStyle, header, signInHeader, tabDownHeight, tabSignIn, categoryList, display, card, footer) => {
    return `
    <html lang="ko">

    <head>
      ${head}
      <style>
        ${style}
      </style>
    </head>
    
    <body style="${variousStyle.bodyStyle}">
      <style>${display}</style>

      <!-- HEADER -->
      <header style="${variousStyle.headerStyle}">
        <div class="inner">
          <!-- LOGO -->
          <a href="/" class="logo">
            <img src="https://github.com/JeongMyeonghoon1105/Images/blob/main/Logo.png?raw=true" alt="Daniel's Tech Blog">
          </a>
          <!-- MAIN MENU -->
          <div class="main-menu" id="main-menu">
            ${header}
            <!-- 5th Item of Menu (Sign In) -->
            ${signInHeader}
          </div>
          <!-- Hidden Item (Menu) -->
          <div class="item" id="hidden-menu"><i class="fas fa-bars" id="menu-icon"></i></div>
          <div id="tab-down">
            <div id="tab-down-inner">
              ${tabSignIn}
              <ul id="tab-items">${categoryList}</ul>
              <div id="tab-post-container">
                <h2 class="tab-post-button" onclick="location.href='/post'">Post</h2>
              </div>

              <form action="/search/" method="post" id="tab-search-container">
                <input type="text" name="title" id="tab-search" placeholder="Search">
                <button type="submit" class="tab-search-button"><i class="fas fa-search"></i></button>
              </form>
              
            </div>
          </div>
        </div>
      </header>
      
      <!-- WRAP -->
      <div class="wrap" style="${variousStyle.wrapStyle}">
        <div class="inner" style="${variousStyle.innerStyle}">
          <!-- CARD -->
          <div class="card" style="${variousStyle.cardStyle}">${card}</div>
          <!-- SEARCH BAR -->
          <form action="/search/" method="post" id="search-container" style="${variousStyle.menuStyle}">
            <input type="text" name="title" id="search-bar" placeholder="Search">
            <button type="submit" id="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <!-- MENU -->
          <div class="menu" style="${variousStyle.menuStyle}">
            <div class="contents">
              <h1>Menu</h1><br>
              <ul style="list-style-type: none; font-size: 15px;">
                ${categoryList}
              </ul><br>
              <h2 style="display: ${display}; font-weight: bold; cursor: pointer;" onclick="location.href='/post'">
                Post
              </h2>
            </div>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      ${footer}

      <!-- JS -->
      <script>
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
        
        /* Menu 버튼 눌렀을 때 */
        hiddenMenu.addEventListener('click', () => {
          if (menuIcon.className === 'fas fa-bars'){
            /* Menu Icon 바꾸기 */
            menuIcon.className = "fas fa-times";
            menuIcon.setAttribute('style', 'font-size: 25px;');

            /* Tab Down 표출 */
            tabDown.setAttribute('style', 'pointer-events: auto; ${tabDownHeight}');
            tabDownInner.setAttribute('style', 'pointer-events: auto; ${tabDownHeight}');
            tabSearchContainer.setAttribute('style', 'opacity: 1; pointer-events: auto; transition: 1.8s;');
            tabSearch.setAttribute('style', 'opacity: 1; pointer-events: auto; transition: 1.8s;');
            tabSign.setAttribute('style', 'opacity: 1; pointer-events: auto; transition: 1.7s;');
            tabItems.setAttribute('style', 'opacity: 1; pointer-events: auto; transition: 1.7s;');
            tabList.setAttribute('style', 'display: ${display}; opacity: 1; pointer-events: auto; transition: 1.7s;');
          } else {
            /* Menu Icon 복구 */
            menuIcon.className = 'fas fa-bars';
            menuIcon.setAttribute('style', 'font-size: 23px;');

            /* Tab Down 가리기 */
            tabDown.setAttribute('style', 'pointer-events: none; height: 0;');
            tabDownInner.setAttribute('style', 'pointer-events: none; height: 0;');
            tabSearchContainer.setAttribute('style', 'opacity: 0; pointer-events: auto; transition: 0;');
            tabSearch.setAttribute('style', 'opacity: 0; pointer-events: auto; transition: 0;');
            tabSign.setAttribute('style', 'opacity: 0; pointer-events: none; transition: 0;');
            tabItems.setAttribute('style', 'opacity: 0; pointer-events: none; transition: 0;');
            tabList.setAttribute('style', 'opacity: 0; pointer-events: none; transition: 0;');
          }
        })

        /* Tab Down 표출된 상황에서 VW를 1200px 이상으로 늘릴 시 Tab Down 숨기기 */
        window.addEventListener('resize', () => {
          if (window.innerWidth > 1200) {
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
      </script>
    </body>
    
    </html>
    `;
  },
  // 메뉴바
  list:(postingCount, display) => {
    return `
    <li><a href="/?category=Frontend">Frontend(${postingCount.frontend})</a></li>
    <li><a href="/?category=Backend">Backend(${postingCount.backend})</a></li>
    <li><a href="/?category=DevOps">DevOps(${postingCount.devops})</a></li>
    <li><a href="/?category=CS">CS(${postingCount.cs})</a></li>
    <li><a href="/trash" style="display: ${display}">Trash</a></li>
    `;
  },
  // 글 작성 페이지의 내용
  writtingArea:(category, title, data, categorySelect) => {
    return `
    <div class="writting-area">
      <form action="/update_process/?category=${category}&title=${title}" method="post">
        <!-- Title -->
        <div class="title">
          <textarea name="title" id="title-input" rows="1" cols="55" maxlength="100" placeholder="Title"
            value="${title}" required></textarea>
        </div>
        <div class="border"></div>
        <div>
          <textarea name="content" id="contents-input" style="white-space: pre-wrap;" 
          value="${data}" required></textarea>
        </div>
        <div class="border"></div>
        <div class="category">
          <select name="category" id="category-input" required>
            <option value="Frontend" ${categorySelect.frontend}>Frontend</option>
            <option value="Backend" ${categorySelect.backend}>Backend</option>
            <option value="DevOps" ${categorySelect.devops}>DevOps</option>
            <option value="CS" ${categorySelect.cs}>CS</option>
          </select>
        </div>
        <div class="br"></div>
        <div class="br"></div>
        <div class="br"></div>
        <div style="position: relative; height: 30px;">
          <button type="submit" class="post-button">Post</button>
        </div>
      </form>
    </div>
    `;
  },
  // 헤더 내부 Sign In/Out 버튼
  Header:(process, InOut) => {
    return `
    <div class="item" id="sign-in" onclick="location.href='/${process}'">
      <span data-tooltip-text="Sign ${InOut}"><i class="fas fa-user-circle"></i></span>
    </div>
    `
  },
  // 탭바 내부 Sign In/Out 버튼
  Tab:(process, InOut) => {
    return `
    <div onclick="location.href='/${process}'" id="tab-sign">
      Sign ${InOut}
    </div>
    `
  },
  // 게시물 페이지 하단 삭제/수정(복구) 버튼
  buttonContainer:(process_1, process_2, btnName, category, title, color) => {
    return `
    <div class="button-container">
      <a href="/${process_1}_process/?category=${category}&title=${title}" class="update-delete-button" style="color: red;">
        DELETE
      </a>
      <a href="/${process_2}/?category=${category}&title=${title}" class="update-delete-button" style="color: ${color};">
        ${btnName}
      </a>
    </div>
    `;
  },
  // 게시물 제목 및 내용
  postContainer:(title, content) => {
    return `
    <div class="post-container">
      <h1 class="post-title">${title}</h1><br>
      <div class="post-contents">${content}</div>
    </div>
    `;
  },
  // 게시물 생성/수정시 DB에 저장할 컨텐츠 형식
  writeContainer:(content) => {
    return `
      <div class="post-contents">
        ${content}
      </div>
    `;
  },
  // 카테고리 페이지 내부 각 아이템(각 게시물로 연결되는 링크)
  postingItem:(category, title, date, logoImage) => {
    return `
    <!-- 
    <div class="posting-item">
      <div class="posting-container">
        <a href="/?category=${category}&title=${title}" class="posting-content">
          ${title}
        </a>
        <div class="posting-date">${date}</div>
      </div>
    </div>
    -->

    <a href="/?category=${category}&title=${title}" style="display: flex; width: 70%; height: 100px; margin: 30px auto;">
      <div style="width: 100px; background-color: white; border: none; border-radius: 50px;">
        <img src="${logoImage}" alt="" style="width: 100px; height: 97px; border-radius: 50px;">
      </div>
      <div style="width: 80%; margin-left: 25px;">
        <div style="width: 100%; border-bottom: 2px solid lightgray; padding: 14px 0;">
          ${title}
        </div>
        <div style="width: 100%; padding: 10px 0; font-size: 10px;">
          ${date}
        </div>
      </div>
    </a>
    `;
  },
  // 휴지통 페이지 내부 각 아이템(각 게시물로 연결되는 링크)
  trashItem:(category, title) => {
    return `
    <div class="posting-item">
      <div class="posting-container">
        <a href="/trash/?category=${category}&title=${title}" class="posting-content">
          ${title}
        </a>
        <div style="display: flex; min-width: 90px;">
          <a class="delete-button" href="/clear_process/?category=${category}&title=${title}">
            DELETE
          </a>
          <div style="width: 5px;"></div>
          <a class="delete-button" href="/recover_process/?category=${category}&title=${title}" style="color: green;">
            RECOVER
          </a>
        </div>
      </div>
    </div>
    `;
  },
  // 페이지 제목란
  descriptionArea:(descriptionContent) => {
    return `
    <div class="description-area">
      <h1>${descriptionContent}</h1>
    </div>
    `;
  },
  // 카테고리/휴지통에 게시물이 없음을 알리는 문구
  notice:(noticeContent) => {
    return `
    <div class="notice">
      <text style="line-height: 0px;">
        ${noticeContent}
      </text>
    </div>
    `;
  }
}