// function get_files() {
//     var API = "http://localhost:3000/files"

//     $.ajax({
//         url: API,
//         type: "GET",
//         dataType: "json",
//         cache: false,
//         success: function (res) {
//             console.log(res);
//             for (i = 0; i < res.length; i++) {
//                 var content = `
//                 <tr id = files${i + 1}>
//                     <th scope="row">${i + 1}</th>
//                     <td>${res[i].original_name}</td>
//                     <td>${res[i].extension}</td>
//                     <td>
//                         <a onclick="download_File('${res[i].id}')" id="a_file${i}"  download="${res[i].original_name}">
//                         ${res[i].original_name}
//                         </a>
//                     </td>
//                     <td>${res[i].size}  B</td>
//                     <td>${res[i].createdAt}</td>

//                 </tr>`;
//                 {/* <td>
//                         <a class="btn" role="button" style="padding: 0;">
//                             <img style="max-width: 30px;" src="./image/delete.png" alt="">
//                         </a>
//                     </td> */}
//                 $('#files_table').append(content);
//             }
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }



// function download_File(id) {
//     console.log(id);
//     window.open('http://localhost:3000/file/' + id + '/download');
// }

// function get_Videos() {
//     var API = "http://localhost:3000/videos"

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