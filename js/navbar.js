$(document).ready(function () {
    // console.log("test");
    const content = `
    <div class="top_area">
            <div class="top_title">
                <div>108年預防及延緩失能身體活動場域型方案推展試辦計畫</div>
                <div id="navbar_right">
                    <a class="test_a_set" href="./index.html">首頁</a>
                    <a class="test_a_set" href="./news.html">最新消息</a>
                    <a class="test_a_set" href="./announcement.html">公告資訊</a>
                    <a class="test_a_set" href="./course.html">培訓課程</a>
                    <a class="test_a_set" href="./learning_online.html">線上自學</a>
                    <a class="test_a_set" href="./matchwork.html">媒合作業</a>
                    <a class="test_a_set" href="./photos.html">活動花絮</a>
                    <a class="test_a_set" href="./test.html">測驗/檔案繳交區</a>
                </div>
                <button type="button" class="btn log_in_button" data-toggle="modal" data-target="#exampleModal">
                    <img class="user_icon" src="./image/log_in_icon.png" alt="">
                </button>
                
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                //登入前
                    <div class="modal-content" id="log_in_area">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">會員登入</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-footer">
                            <form id="log_in_form">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="請輸入您的Email">
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputPassword1">密碼</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                        placeholder="請輸入您的密碼">
                                </div>
                            </form>
                            <a style="color:#000" href="./revalid_email.html">沒收到驗證信嗎？</a>
                            <button type="button" class="btn btn-secondary"
                                onclick="location.href='./forget_pwd.html'">忘記密碼</button>
                            <button type="submit" class="btn btn-success">登入</button>
                            <button type="button" class="btn btn-primary"
                                onclick="location.href='./register.html'">註冊</button>
                        </div>
                    </div>
                    //登入後
                    <div class="modal-content"  id="log_out_area">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                onclick="location.href='./reset_password.html'">修改密碼</button>
                            <button type="submit" class="btn btn-success" onclick="log_out()">登出</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="top_bottom_set"></div>
    `;
    $("#index_top").append(content);
})