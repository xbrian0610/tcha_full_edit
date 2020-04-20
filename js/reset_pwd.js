function resetPassword() {
    var pre_pwd = $("#pre_pwd").val();
    var new_pwd = $("#new_pwd").val();
    var ensure_pwd = $("#ensure_pwd").val();
    var API = "http://localhost:3000/auth/forgot/mail";

    if (pre_pwd === "") {
        alert("請輸入您的舊密碼或驗證信中的新密碼");
        return;
    }
    if (new_pwd !== ensure_pwd) {
        alert('"新密碼"與"確認新密碼"的內容不相符!');
        return;
    }
    console.log({ verify: pre_pwd, password: new_pwd });
    $.ajax({
        url: API,
        type: "PATCH",
        dateType: "json",
        data: {
            verify: pre_pwd,
            password: new_password,
        },
        cache: false,
        success: function (res) {
            console.log(res);
            console.log("12345");
            document.cookie = "token=" + res.token + ";";
            window.location.assign("http://localhost:3000/reset_pwd_success.html");
        },
        error: function (err) {
            console.log(err);
        }
    });
}