function emailToForgetPwd(e) {
    e.preventDefault();

    var email = $("#forget_email").val();

    var API = "http://192.168.43.56:5002/api/member/ForgetPassword?Email=" + email;

    console.log(email);
    $.ajax({
        url: API,
        type: "GET",
        // dateType: "json",
        headers: {
            'Content-Type': 'application/json',
        },
        cache: false,
        success: function (res) {
            alert(res);
            console.log(res);
            console.log("12345");
            // document.cookie = "token=" + res.token + ";";
            window.location.assign("http://192.168.43.56:5500/index.html");
        },
        error: function (err) {
            // if (err.responseJSON.message) {
            //     alert(err.responseJSON.message);
            //     return;
            // }
            console.log(email);
            console.log(err);
            alert('系統錯誤');
        }
    });
}