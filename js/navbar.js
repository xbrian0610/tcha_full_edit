$(document).ready(function () {
    // console.log("test");
    const content = `
    <div class="top_area">
        <div class="top_title">
            <!--<div class="top_title_set"><img style="max-width:400px;margin-top:6px;" src="./image/logo.jpg"></div>-->
            <div id="navbar_right">
                <div style="width:80%;margin:auto;">
                    <a class="test_a_set index_subtitle_font" href="./intro.html">關於我們</a>
                    <!--<a class="test_a_set index_subtitle_font" href="./news.html">最新消息</a>-->
                    <a class="test_a_set index_subtitle_font" href="./matchwork.html">資訊媒合</a>
                    <a class="test_a_set index_subtitle_font" href="./course.html">培訓課程</a>
                    <!--<a class="test_a_set index_subtitle_font" href="./announcement.html">公告資訊</a>-->
                    <a class="test_a_set index_subtitle_font" href="./index.html"><img src="./image/home.png" alt="" /></a>
                    
                    <!--<a class="test_a_set index_subtitle_font" href="./learning_online.html">線上自學</a>-->
                    <!-- <a class="test_a_set index_subtitle_font" href="./photos.html">活動花絮</a> -->
                    <a class="test_a_set index_subtitle_font" href="./media_elder.html">影音教材</a>
                    <a class="test_a_set index_subtitle_font" href="./test.html">檔案繳交</a>
                    <a class="test_a_set index_subtitle_font" href="./rel_href.html">相關連結</a>
                </div>
            </div>
            <button type="button" class="btn log_in_button" data-toggle="modal" data-target="#exampleModal">
                <div id="regis_login_hint" class="index_subtitle_font" style="color:#fff;font-size:20px;font-weight:bold">登入/註冊</div>
                <div style="color:#fff;font-size:20px;" class="index_subtitle_font">${
        localStorage.name === undefined ? "" : localStorage.name
        }</div>
            </button>
            <!--<a href="./pdf/test.pdf" target="_blank" download="test">
                <button type="button" class="btn instruc_btn">
                    <img class="user_icon" src="./image/search.png" alt="">
                    <div style="color:#000;font-size:20px">使用說明</div>
                </button>
            </a>-->
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">

                <div class="modal-content" id="log_in_area">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">會員登入</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <form id="log_in_form" onsubmit="login_submit(event)">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email"
                                    aria-describedby="emailHelp" placeholder="請輸入您的Email">
                            </div>

                            <div class="form-group">
                                <label for="password">密碼</label>
                                <input type="password" class="form-control" id="password"
                                    placeholder="請輸入您的密碼">
                            </div>
                            <div style="text-align:right">
                                <a style="color:#000" href="./revalid_email.html">沒收到驗證信嗎？</a>
                                <button type="button" class="btn btn-secondary" onclick="location.href='./forget_pwd.html'">忘記密碼</button>
                                <button type="submit" class="btn btn-success">登入</button>
                                <button type="button" class="btn btn-primary" onclick="location.href='./register.html'">註冊</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
                
                <div class="modal-content"  id="log_out_area" style="display:none;">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button id="admin_mid" type="button" class="btn btn-secondary" onclick="location.href='./admin.html'">管理者畫面</button>
                        <button type="button" class="btn btn-secondary" onclick="location.href='./modify_info.html'">修改個人資料</button>
                        <button type="button" class="btn btn-secondary" onclick="location.href='./reset_password.html'">修改密碼</button>
                        <button type="submit" class="btn btn-success" onclick="log_out()">登出</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    <!--<div class="top_bottom_set"></div>-->
    `;
    $("#index_top").append(content);
});
