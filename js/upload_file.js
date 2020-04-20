function uploadPpt() {
    var for_ppt = $("#for_ppt").prop('files');
    var API = "http://localhost:3000/file/";
    var form_data = new FormData();

    var file = document.getElementById("mid");
    if (file.length < 1) {
        alert('請選擇PPT檔案');
        return false;
    }
    for (let i = 0; i < for_ppt.length; i++) {
        form_data.append('files', for_ppt[i]);
    }
    console.log(form_data)

    console.log(API);
    $.ajax({
        url: API,
        type: "POST",
        contentType: false, //required
        processData: false, // required
        data: form_data,
        success: function (res) {
            alert("上傳檔案成功");
            document.getElementById("mid").value = "";
        },
        error: function (err) {
            if (err.responseJSON.message) {
                alert(err.responseJSON.message);
                return;
            }
            alert('系統錯誤');
        }
    })
} function uploadDoc() {
    var for_doc = $("#for_doc").prop('files');
    var API = "http://localhost:3000/file/";
    var form_data = new FormData();

    var file = document.getElementById("for_doc");
    if (file.length < 1) {
        alert('請選擇PPT檔案');
        return false;
    }
    for (let i = 0; i < for_doc.length; i++) {
        form_data.append('files', for_doc[i]);
    }
    console.log(form_data)

    console.log(API);
    $.ajax({
        url: API,
        type: "POST",
        contentType: false, //required
        processData: false, // required
        data: form_data,
        success: function (res) {
            alert("上傳檔案成功");
            document.getElementById("mid").value = "";
        },
        error: function (err) {
            if (err.responseJSON.message) {
                alert(err.responseJSON.message);
                return;
            }
            alert('系統錯誤');
        }
    })
}