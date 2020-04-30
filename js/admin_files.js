function get_files_doc() {
    var API = "http://192.168.43.56:5002/api/fileupload/getallfiles/word"

    $.ajax({
        url: API,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.token
        },
        dataType: "json",
        cache: false,
        success: function (res) {
            console.log(res);
            for (i = 0; i < res.length; i++) {
                var content = `
                <tr id = files${i + 1}>
                    <th scope="row">${i + 1}</th>
                    <td>
                        <a class="files_hover" href="http://192.168.43.56:5002/api/fileupload/downloadfile/${res[i].file_Id}" download="${res[i].fileName}">
                            ${res[i].fileName}
                        </a>
                    </td>
                    <td>${res[i].createTime}</td>
                    <!--<td>
                        <a onclick="download_File('${res[i].id}')" id="a_file${i}"  download="${res[i].original_name}">
                        ${res[i].original_name}
                        </a>
                    </td>-->
                    <td>${res[i].members.name} </td>
                    <td>${res[i].members.email}</td>
                </tr>`;
                {/* <td>
                        <a class="btn" role="button" style="padding: 0;">
                            <img style="max-width: 30px;" src="./image/delete.png" alt="">
                        </a>
                    </td> */}
                $('#files_table_content_doc').append(content);
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function get_files_ppt() {
    var API = "http://192.168.43.56:5002/api/fileupload/getallfiles/ppt"


    $.ajax({
        url: API,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.token
        },
        dataType: "json",
        cache: false,
        success: function (res) {
            console.log(res);
            for (i = 0; i < res.length; i++) {
                var content = `
                <tr id = files${i + 1}>
                    <th scope="row">${i + 1}</th>
                    <td>
                        <a class="files_hover" href="http://192.168.43.56:5002/api/fileupload/downloadfile/${res[i].file_Id}" download="${res[i].fileName}">
                            ${res[i].fileName}
                        </a>
                    </td>
                    <td>${res[i].createTime}</td>
                    <td>${res[i].members.name} </td>
                    <td>${res[i].members.email}</td>

                </tr>`;
                {/* <td>
                        <a class="btn" role="button" style="padding: 0;">
                            <img style="max-width: 30px;" src="./image/delete.png" alt="">
                        </a>
                    </td> */}
                $('#files_table_content_ppt').append(content);
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

// function download_File(id) {
//     console.log(1234567890);
//     window.open('http://192.168.43.56:5002/api/fileupload/downloadfile/' + id);
// }

// function download_File(fileId) {
//     console.log(fileId);


    // var API = "http://192.168.43.56:5002/api/fileupload/downloadfile/" + id;

    // $.ajax({
    //     url: API,
    //     type: "GET",
    //     headers: {
    //         'Authorization': 'Bearer ' + localStorage.token
    //     },
    //     // dataType: "json",
    //     cache: false,
    //     success: function (res) {
    //         console.log(res);
    //         window.open('http://192.168.43.56:5002/api/fileupload/downloadfile/' + res.file_Id);
    //         // window.open('http://192.168.43.56:5002/api/fileupload/downloadfile/' + res[0].fileId);
    //     },
    //     error: function (err) {
    //         console.log(err);
    //     }

    // })
// }

// function get_Videos() {
//     var API = "http://192.168.43.56:3000/videos"

//     $.ajax({
//         url: API,
//         type: "GET",
//         dataType: "json",
//         cache: false,
//         success: function (res) {
//             console.log(res);
//             for (i = 0; i < res.length; i++) {
//                 var content = `
//                 <tr id= videos${i + 1}>
//         <th scope="row">${i + 1}</th>
//         <td><a href="${res[i].url}">${res[i].url}</a></td>
//         <td>${res[i].createdAt}</td>
//         <td>
//             <a class="btn" role="button" style="padding: 0;">
//                 <img style="max-width: 30px;" src="./image/delete.png" alt="">
//                         </a class ="btn" role="button" style="padding: 0;">
//                     </td>
//                 </tr>`;
//                 $('#videos_table').append(content);
//             }
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })

// }