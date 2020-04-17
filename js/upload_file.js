// function uploadFile() {
//     var mid = $("#mid").prop('files');
//     var API = "http://localhost:3000/file/";
//     var form_data = new FormData();

//     var file = document.getElementById("mid");
//     if (file.length < 1) {
//         alert('請選擇檔案');
//         return false;
//     }
//     for (let i = 0; i < mid.length; i++) {
//         form_data.append('files', mid[i]);
//     }
//     console.log(form_data)

//     console.log(API);
//     $.ajax({
//         url: API,
//         type: "POST",
//         contentType: false, //required
//         processData: false, // required
//         data: form_data,
//         success: function (res) {
//             alert("上傳檔案成功");
//             document.getElementById("mid").value = "";
//         },
//         error: function (err) {
//             if (err.responseJSON.message) {
//                 alert(err.responseJSON.message);
//                 return;
//             }
//             alert('系統錯誤');
//         }
//     })
// }
// function uploadhref() {
//     var fin = $("#fin").val();
//     var API = "http://localhost:3000/video/";

//     if (fin == "") {
//         alert("請貼上網址");
//         return;
//     }
//     console.log(fin);
//     $.ajax({
//         url: API,
//         type: "POST",
//         data: {
//             url: fin
//         },
//         dataType: "json",
//         cache: false,
//         success: function (res) {
//             alert("上傳影片網址成功");
//             document.getElementById("fin").value = "";
//         },
//         error: function (res) {
//             if (err.responseJSON.message) {
//                 alert(err.responseJSON.message);
//                 return;
//             }
//             alert("系統錯誤！")
//         }
//     })
// }