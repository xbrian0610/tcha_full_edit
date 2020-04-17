// const API = "http://localhost:3000/user";
// let editingUser = {};
// let deletingId;

// function manage_Member(callback) {
//   $.ajax({
//     url: `${API}s`,
//     type: "GET",
//     dataType: "json",
//     cache: false,
//     success(res) {
//       if (callback) {
//         callback();
//       }
//       for (let i = 0; i < res.length; i += 1) {
//         const content = `
//                 <tr id = member${i + 1}>
//                     <th scope="row">${i + 1}</th>
//                     <td>${res[i].name}</td>
//                     <td>${res[i].gender === 0 ? "女" : "男"}</td>
//                     <td>${res[i].race}</td>
//                     <td>${res[i].service}/${res[i].position}</td>
//                     <td>${res[i].address}</td>
//                     <td>${res[i].tel}</td>
//                     <td>${res[i].email}</td>
//                     <td>
//                         <a class="btn" role="button" style="padding: 0;" onclick="edit_member(
//                           '${res[i].id}'
//                           )">
//                             <img style="max-width: 30px;" src="./image/edit.png" alt="">
//                         </a>
//                     </td>
//                     <td>
//                         <a class="btn" role="button" style="padding: 0;" onclick="delete_member('${
//           res[i].id
//           }')">
//                             <img style="max-width: 30px;" src="./image/delete.png" alt="">
//                         </a class="btn" role="button" style="padding: 0;">
//                     </td>
//                 </tr>`;
//         $("#member_table").append(content);
//       }
//     },
//     error(err) {
//       console.log(err);
//     }
//   });
// }

// // function editList(id) {
// //   $(`#edit${id}`).css("display", "none");
// //   $(`#update${id}`).css("display", "inline");

// //   const input = document.createElement("input");
// //   input.type = "text";
// //   input.id = `edit_title${id}`;
// //   input.value = $(`#title${id}`).text();
// //   input.size = Math.max((20 / 4) * 3, 4);

// //   $(`#title${id}`).css("display", "none");
// //   $(`#title${id}`)
// //     .parent()
// //     .append(input);

// //   const message_input = document.createElement("input");
// //   message_input.type = "text";
// //   message_input.id = `edit_message${id}`;
// //   message_input.value = $(`#message${id}`).text();
// //   message_input.size = Math.max((50 / 4) * 3, 4);

// //   $(`#message${id}`).css("display", "none");
// //   $(`#message${id}`)
// //     .parent()
// //     .append(message_input);
// // }

// function edit_member(email) {
//   $.ajax({
//     url: `${API}/id?id=${email}`,
//     type: "GET",
//     dateType: "json",
//     cache: false,
//     success(res) {
//       editingUser = res;
//       document.getElementById("id01").style.display = "block";

//       const content = `
//       <div id="${editingUser.id}">
//         <label><b>電子郵件</b></label>
//         <input
//           disabled
//           value="${editingUser.email}"
//           class="w3-input w3-border"
//           name="email"
//           required
//         />
//         <label><b>姓名</b></label>
//         <input
//           value="${editingUser.name}"
//           class="w3-input w3-border w3-margin-bottom"
//           type="text"
//           placeholder="Enter Username"
//           name="name"
//           required
//         />
//         <label><b>性別</b></label>
//         <div>
//           <input
//             id="male"
//             style="margin: 0px 5px;"
//             type="radio"
//             name="gender"
//             value="1"
//             ${editingUser.gender === 1 ? "checked" : ""}
//           />
//           <label for="male">男</label>
//           <input
//             id="female"
//             style="margin: 0px 5px;"
//             type="radio"
//             name="gender"
//             value="0"
//             ${editingUser.gender === 0 ? "checked" : ""}
//           />
//           <label for="female">女</label>
//         </div>
//         <label><b>聯絡地址</b></label>
//         <input
//           value="${editingUser.service}"
//           class="w3-input w3-border"
//           name="address"
//           required
//         />
//         <label><b>聯絡電話</b></label>
//         <input
//           value="${editingUser.tel}"
//           class="w3-input w3-border"
//           name="tel"
//           required
//         />
//         <label><b>族別</b></label>
//         <div>
//           <select  name="race" id="race">
//             <option value="阿美族" ${
//         editingUser.race === "阿美族" ? 'selected="selected"' : ""
//         }>阿美族</option>
//             <option value="泰雅族" ${
//         editingUser.race === "泰雅族" ? 'selected="selected"' : ""
//         }>泰雅族</option>
//             <option value="排灣族" ${
//         editingUser.race === "排灣族" ? 'selected="selected"' : ""
//         }>排灣族</option>
//             <option value="布農族" ${
//         editingUser.race === "布農族" ? 'selected="selected"' : ""
//         }>布農族</option>
//             <option value="卑南族" ${
//         editingUser.race === "卑南族" ? 'selected="selected"' : ""
//         }>卑南族</option>
//             <option value="魯凱族" ${
//         editingUser.race === "魯凱族" ? 'selected="selected"' : ""
//         }>魯凱族</option>
//             <option value="鄒族" ${
//         editingUser.race === "鄒族" ? 'selected="selected"' : ""
//         }>鄒族</option>
//             <option value="賽夏族"${
//         editingUser.race === "賽夏族" ? 'selected="selected"' : ""
//         }>賽夏族</option>
//             <option value="雅美族(達悟族)" ${
//         editingUser.race === "雅美族(達悟族)" ? 'selected="selected"' : ""
//         }>雅美族(達悟族)</option>
//             <option value="邵族" ${
//         editingUser.race === "邵族" ? 'selected="selected"' : ""
//         }>邵族</option>
//             <option value="噶瑪蘭族" ${
//         editingUser.race === "噶瑪蘭族" ? 'selected="selected"' : ""
//         }>噶瑪蘭族</option>
//             <option value="太魯閣族" ${
//         editingUser.race === "太魯閣族" ? 'selected="selected"' : ""
//         }>太魯閣族</option>
//             <option value="撒奇萊雅族" ${
//         editingUser.race === "撒奇萊雅族" ? 'selected="selected"' : ""
//         }>撒奇萊雅族</option>
//             <option value="賽德克族" ${
//         editingUser.race === "賽德克族" ? 'selected="selected"' : ""
//         }>賽德克族</option>
//             <option value="拉阿魯哇族" ${
//         editingUser.race === "拉阿魯哇族" ? 'selected="selected"' : ""
//         }>拉阿魯哇族</option>
//             <option value="卡那卡那富族" ${
//         editingUser.race === "卡那卡那富族" ? 'selected="selected"' : ""
//         }>卡那卡那富族</option>
//             <option value="漢民族(河洛)" ${
//         editingUser.race === "漢民族(河洛)" ? 'selected="selected"' : ""
//         }>漢民族(河洛)</option>
//             <option value="漢民族(客家)" ${
//         editingUser.race === "漢民族(客家)" ? 'selected="selected"' : ""
//         }>漢民族(客家)</option>
//             <option value="新住民(外籍配偶)" ${
//         editingUser.race === "新住民(外籍配偶)"
//           ? 'selected="selected"'
//           : ""
//         }>新住民(外籍配偶)</option>
//           </select>
//           </div>
//         <label><b>服務單位</b></label>
//         <input
//           value="${editingUser.service}"
//           class="w3-input w3-border"
//           name="service"
//           required
//         />
//         <label><b>職稱</b></label>
//         <input
//           value="${editingUser.position}"
//           class="w3-input w3-border"
//           name="position"
//           required
//         />
//         <button
//           class="w3-button w3-block w3-green w3-section w3-padding"

//           type="submit"
//         >
//           修改
//         </button>
//         </div>
//       `;
//       $("#form_item").append(content);
//     },
//     error(err) {
//       console.log(err);
//     }
//   });
// }

// function changeGenderType(value) {
//   const elements = document.getElementById("myForm").elements;
//   for (let i = 0; i < elements.length; i += 1) {
//     const item = elements.item(i);
//     if (item.name === "gender") {
//       if (item.value === value) {
//         item.checked = true;
//         console.log(item);
//       } else {
//         item.checked = false;
//       }
//     }
//   }
// }

// $("#myForm").submit(event => {
//   const elements = document.getElementById("myForm").elements;
//   const obj = {};
//   for (let i = 0; i < elements.length; i += 1) {
//     const item = elements.item(i);
//     if (item.name === "gender") {
//       if (item.checked) {
//         obj[item.name] = item.value;
//       }
//     } else {
//       obj[item.name] = item.value;
//     }
//   }

//   $.ajax({
//     url: `${API}/profile/info`,
//     type: "PATCH",
//     dateType: "json",
//     data: { id: editingUser.id, ...obj },
//     cache: false,
//     success(res) {
//       alert(res.message);
//       // document.getElementById("id01").style.display = "none";
//       $(`#${editingUser.id}`).remove();
//       $("#member_table").empty();
//       manage_Member(function () {
//         document.getElementById("id01").style.display = "none";
//       });
//     },
//     error(err) {
//       console.log(err);
//     }
//   });

//   event.preventDefault();
// });

// function delete_member(id) {
//   document.getElementById("deleteForm").style.display = "block";
//   deletingId = id;
// }

// function handleCancel() {
//   console.log(123);
//   document.getElementById("deleteForm").style.display = "none";
// }

// function handleDelete() {
//   $.ajax({
//     url: `${API}?id=${deletingId}`,
//     type: "DELETE",
//     dateType: "json",
//     cache: false,
//     success(res) {
//       alert(res.message);
//       $("#member_table").empty();
//       manage_Member(handleCancel);
//     },
//     error(err) {
//       console.log(err);
//     }
//   });
// }
