//前端

// const base = 'http://192.168.43.56:5002'
function AdminLogin(e) {
    e.preventDefault();

    var email = $("#admin_email").val();
    var password = $("#admin_password").val();
    const API = "http://192.168.43.56:5002/api/member/Login";
    if (email === "") {
        alert("請輸入信箱");
        return false;
    }
    if (password === "") {
        alert("請輸入密碼");
        return false;
    }
    $.ajax({
        url: API,
        type: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            Email: email,
            Password: password
        }),
        cache: false,
        success: function (res) {
            console.log(res.member.IsAdmin);
            // console.log('email->' + email, 'password->' + password);
            console.log("success:", res);

            if (res.member.isAdmin === true) {
                localStorage.isAdmin = res.member.isAdmin;
                window.location.href = "http://192.168.43.56:5500/admin.html";
            }
            else {
                alert("您不具管理身分!!");
                window.location.href = "http://192.168.43.56:5500/admin_login.html";

                // }
                // console.log(res.data[0].password);

                // localStorage.setItem("email", res.data[0].email);
                // localStorage.setItem("password", res.data[0].password);
                // console.log("email==" + email);
                // console.log("password==" + password);
                // console.log(res.token);
                // console.log(token);
                // document.cookie = "token=" + res.token + ";";
                // session_cookie = res.token;
                // console.log(session_cookie);
            }
        },
        error: function (err) {
            // alert(err.responseJSON.message);
            // if (err.rows == null) {
            alert(err.responseText);

            console.log(err.responseText);
            // alert(err.responseJSON.message);
            // }
        }
    });
};

function checkAuth() {
    const check = localStorage.isAdmin;
    console.log(check);
    if (check !== "true") {
        confirm(`你不是管理員`) ? window.location.href = './index.html' : window.location.href = './index.html';
    }
}