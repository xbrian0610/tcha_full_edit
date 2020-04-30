function resend(e) {
    e.preventDefault();

    var email = $("#resendEmail").val();
    var API = "http://192.168.43.56:5002/api/member/ReSendEmail?Email=" + email;
    console.log(API);
    console.log(email);

    $('#submit_btn').css("display", "none");
    $('#loading_btn').css("display", "block");
    $('#loading_btn').css("margin", "auto");

    if (email === "") {
        alert("請輸入email喔!");
        return;
    }

    $.ajax({
        url: API,
        type: "GET",
        // dateType: "json",

        cache: false,
        success: function (res) {
            document.cookie = "token=" + res.token + ";";
            $('#resend_email').modal('show');
            // alert("請去信箱收信!")
            // window.location.assign("http://192.168.43.56:5500/index.html");
        },
        error: function (err) {
            alert(err.responseText);
            console.log(err.responseText);
        }
    });
}