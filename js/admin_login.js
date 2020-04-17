// //前端
// function AdminLogin() {
//     var email = $("#email").val();
//     var password = $("#password").val();
//     var API = "/auth/login";
//     if (email === "") {
//         alert("請輸入信箱");
//         return false;
//     }
//     if (password === "") {
//         alert("請輸入密碼");
//         return false;
//     }
//     $.ajax({
//         url: API,
//         type: "POST",
//         dateType: "json",
//         data: {
//             email: email,
//             password: password,
//         },
//         cache: false,
//         success: function (res) {
//             // console.log(res);


//             // console.log('email->' + email, 'password->' + password);
//             console.log("success:", res);
//             if (res.admin == true) {
//                 window.location.href = "http://localhost:3000/admin.html";
//             }
//             else {
//                 alert("您不具管理身分!!");
//                 window.location.href = "http://localhost:3000/admin_login.html";

//             }
//             // console.log(res.data[0].password);

//             // localStorage.setItem("email", res.data[0].email);
//             // localStorage.setItem("password", res.data[0].password);
//             // console.log("email==" + email);
//             // console.log("password==" + password);
//             // console.log(res.token);
//             // console.log(token);
//             // document.cookie = "token=" + res.token + ";";
//             // session_cookie = res.token;
//             // console.log(session_cookie);
//         },
//         error: function (err) {
//             alert(err.responseJSON.message);
//             // if (err.rows == null) {
//             console.log(err);
//             // alert(err.responseJSON.message);
//             // }
//         }
//     });
// };