function uploadPpt() {

    // e.preventDefault();

    var for_ppt = $("#for_ppt").prop('files');
    var API = "http://192.168.43.56:5002/api/fileupload";
    var form_data = new FormData();

    var file = document.getElementById("for_ppt");

    if (file.length < 1) {
        alert('請選擇PPT檔案');
        return false;
    }
    console.log(for_ppt)
    for (let i = 0; i < for_ppt.length; i++) {
        form_data.append('UploadFile', for_ppt[i]);
    }
    form_data.append('Member_Id', localStorage.id);
    $.ajax({
        url: API,
        type: "POST",
        processData: false, // required
        contentType: false, //requiredc
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.token
        },
        data: form_data,
        success: function (res) {
            alert("上傳檔案成功");
            document.getElementById("for_ppt").value = "";
        },
        error: function (err) {

            console.log(err);
            console.log(form_data);
            alert("請選擇檔案");
        }
    })
}
function uploadDoc() {

    // e.preventDefault();

    var for_doc = $("#for_doc").prop('files');
    var API = "http://192.168.43.56:5002/api/fileupload";
    var form_data = new FormData();

    var file = document.getElementById("for_doc");

    if (file.length < 1) {
        alert('請選擇PPT檔案');
        return false;
    }
    console.log(for_doc);

    for (let i = 0; i < for_doc.length; i++) {
        form_data.append('UploadFile', for_doc[i]);
    }
    form_data.append('Member_Id', localStorage.id);
    $.ajax({
        url: API,
        type: "POST",
        processData: false, // required
        contentType: false, //requiredc
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.token
        },
        data: form_data,
        success: function (res) {
            alert("上傳檔案成功");
            document.getElementById("for_doc").value = "";
        },
        error: function (err) {

            console.log(err);
            console.log(form_data);
            alert("請選擇檔案");
        }
    })
}