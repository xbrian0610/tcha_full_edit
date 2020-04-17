// function resend() {
//     var email = $("#reemail").val();
//     var API = "http://localhost:3000/auth/register/mail";
//     console.log(API);
//     console.log(email);

//     if (email === "") {
//       alert("請輸入email喔!");
//       return;
//     }

//     $.ajax({
//       url: API,
//       type: "POST",
//       dateType: "json",
//       data: {
//         email: email,
//       },
//       cache: false,  
//       success: function (res) {
//         document.cookie = "token=" + res.token + ";";
//         alert("請去信箱收信!")
//         window.location.assign("http://localhost:3000/log_in.html");
//       },
//       error: function (err) {
//         if (err.responseJSON.message) {
//           alert(err.responseJSON.message);
//           return;
//         }
//         alert('系統錯誤');
//       }
//     });
//   }