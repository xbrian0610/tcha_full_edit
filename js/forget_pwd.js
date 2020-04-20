function forget_pwd() {
    var email = $("#email").val();
    var API = "http://localhost:3000/auth/forgot/mail";
    console.log(API);
    if (email === "") {
        alert("請輸入email喔!");
        return;
    }
    $.ajax({
        url: API,
        type: "POST",
        dateType: "json",
        data: {
            email: email,
        },
        cache: false,
        success: function (res) {
            console.log(res);
            console.log("12345");
            document.cookie = "token=" + res.token + ";";
            window.location.assign("http://localhost:3000/reset_password.html");
        },
        error: function (err) {
            if (err.responseJSON.message) {
                alert(err.responseJSON.message);
                return;
            }
            alert('系統錯誤');
        }
    });
}