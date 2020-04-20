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

function memberRegister() {
    // console.log(gender);
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var ensure_pwd = $("#ensure_pwd").val();
    var gender = $("#gender").val();
    var category = $("#category").val();
    var service = $("#service").val();
    var position = $("#position").val();
    var address = $("#address").val();
    var phone = $("#phone").val();

    var API = "https://localhost:5001/api/member/Register";

    // for (var i = 0, length = radios.length; i < length; i++) {
    //     if (radios[i].checked) {
    //         // 弹出选中值
    //         // alert(radios[i].value);
    //         var gender = radios[i].value;
    //         // 选中后退出循环
    //         break;
    //     }
    // }
    //mailgun
    if (password !== ensure_pwd) {
        alert("密碼不相符!!");
    } else if (email === "" || password === "" || username === "" || service === "" || position === "" || address === "" || phone === "") {
        alert("資料不完整 請再檢查一下!!")
    }
    else {
        console.log({
            username, email, password, ensure_pwd, gender, category, service, position, address, phone
        })
    }
    $.ajax({
        url: API,
        type: "POST",
        dataType: "json",
        data: {
            username: username,
            email: email,
            password: password,
            gender: gender,
            category: category,
            service: service,
            position: position,
            address: address,
            phone: phone,
        },
        cache: false,
        success: function (res) {
            // console.log(res);
            if (username === "" || email === "" || password === "" || gender === "" || category === "" || service === "" || position === "" || address === "" || phone === "") {
                alert("資料不完整 請再檢查一下!!");
            } else {
                console.log(gender + ',' + name + ',' + race + ',' + unit + ',' + post + ',' + address + ',' + tel + ',' + email + ',' + password);
                window.location.assign(`http://localhost:3000/email_deliver.html?email=${email}`);
            }
        },
        error: function (err) {
            console.log(err);
            // if (err.responseJSON.message) {
            //     alert(err.responseJSON.message);
            //     return;
            // }
            alert('系統錯誤');
        }
    });
};