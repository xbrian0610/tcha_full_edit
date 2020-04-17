// function resetPassword() {
//     var verification = $("#verification").val();
//     var new_password = $("#new_password").val();
//     var ensure_new_password = $("#ensure_new_password").val();
//     var API = "http://localhost:3000/auth/forgot/mail";

//     if (verification === "") {
//         alert("請輸入驗證信");
//         return;
//     }
//     if (new_password !== ensure_new_password) {
//         alert('"新密碼"與"確認新密碼"的內容不相符!');
//         return;
//     }
//     console.log({ verify: verification, password: new_password });
//     $.ajax({
//         url: API,
//         type: "PATCH",
//         dateType: "json",
//         data: {
//             verify: verification,
//             password: new_password,
//         },
//         cache: false,
//         success: function (res) {
//             console.log(res);
//             console.log("12345");
//             document.cookie = "token=" + res.token + ";";
//             window.location.assign("http://localhost:3000/reset_password_success.html");
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     });
// }