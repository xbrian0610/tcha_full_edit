// //前端
// function PostAccount() {
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
//     if (grecaptcha.getResponse().length !== 0) {
//         console.log("The captcha has been already solved");
//     } else {
//         alert("請勾選驗證");
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

//             window.location.href = "/index.html";
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