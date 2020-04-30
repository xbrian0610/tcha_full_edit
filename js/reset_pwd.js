function resetPassword() {
    var pre_pwd = $("#pre_pwd").val();
    var new_pwd = $("#new_pwd").val();
    var ensure_pwd = $("#ensure_pwd").val();
    var API = "http://192.168.43.56:5002/api/member/ChangePassword";

    if (pre_pwd === "") {
        alert("請輸入您的舊密碼或驗證信中的新密碼");
        return;
    }
    if (pre_pwd === new_pwd) {
        alert("新密碼與舊密碼相同!!請換一組新密碼!!");
        return;
    }
    if (new_pwd !== ensure_pwd) {
        alert('"新密碼"與"確認新密碼"的內容不相符!');
        return;
    }
    console.log({ pre_pwd: pre_pwd, new_pwd: new_pwd });
    console.log({
        Email: localStorage.email,
        Password: pre_pwd,
        NewPassword: new_pwd
    });
    $.ajax({
        url: API,
        type: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token
        },
        data: JSON.stringify({
            Email: localStorage.email,
            Password: pre_pwd,
            NewPassword: new_pwd
        }),
        cache: false,
        success: function (res) {
            console.log(res);
            alert(res);
            localStorage.email = "";
            localStorage.name = "";
            localStorage.token = "";
            localStorage.isAdmin = "";
            localStorage.id = "";

            // document.cookie = "token=" + res.token + ";";
            window.location.assign("http://192.168.43.56:5500/index.html");
        },
        error: function (err) {
            console.log(err.responseText);
            alert(err.responseText);
        }
    });

}