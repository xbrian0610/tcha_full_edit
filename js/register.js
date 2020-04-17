function handle_submit(e) {
    e.preventDefault();

    var userInfo = {};
    const form = e.target.elements;
    for (var i = 0; i < form.length; i += 1) {
        const element = form[i];
        userInfo = {
            ...userInfo,
            [element.name]: element.value
        }
    }
    console.log(userInfo)

    $('#exampleModal_email_deliver').modal('show');
}

// function memberRegister() {
//     // console.log(gender);
//     var race = $("#race").val();
//     var unit = $("#service_unit").val();
//     var post = $("#position").val();
//     var address = $("#address").val();
//     var email = $("#email").val();
//     var name = $("#name").val();
//     var password = $("#password").val();

//     var confirm_password = $("#password_dbCheck").val();
//     var tel = $("#phone_number").val();
//     var API = "http://localhost:3000/auth/register";

//     var radios = document.getElementsByName('gender');
//     for (var i = 0, length = radios.length; i < length; i++) {
//         if (radios[i].checked) {
//             // 弹出选中值
//             // alert(radios[i].value);
//             var gender = radios[i].value;
//             // 选中后退出循环
//             break;
//         }
//     }
//     //mailgun
//     if (password !== confirm_password) {
//         alert("密碼不相符!!");
//     } else if (email === "" || password === "" || name === "" || unit === "" || post === "" || address === "" || tel === "") {
//         alert("資料不完整 請再檢查一下!!")
//     }
//     else {
//         console.log({
//             email: email,
//             gender: gender,
//             password: password,
//             race: race,
//             unit: unit,
//             post: post,
//             address: address,
//             name: name,
//             tel: tel,
//         })
//     }
//     $.ajax({
//         url: API,
//         type: "POST",
//         dataType: "json",
//         data: {
//             gender: gender,
//             name: name,
//             race: race,
//             service: unit,
//             position: post,
//             address: address,
//             tel: tel,
//             email: email,
//             password: password,
//         },
//         cache: false,
//         success: function (res) {
//             // console.log(res);
//             if (email === "" || password === "" || name === "" || unit === "" || post === "" || address === "" || tel === "") {
//                 alert("資料不完整 請再檢查一下!!");
//             } else {
//                 console.log(gender + ',' + name + ',' + race + ',' + unit + ',' + post + ',' + address + ',' + tel + ',' + email + ',' + password);
//                 window.location.assign(`http://localhost:3000/email_deliver.html?email=${email}`);
//             }
//         },
//         error: function (err) {
//             console.log(err);
//             if (err.responseJSON.message) {
//                 alert(err.responseJSON.message);
//                 return;
//             }
//             alert('系統錯誤');
//         }
//     });
// };