// function getUrlParameter(name) {
//     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//     var results = regex.exec(location.search);
//     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
//   };

//   window.onload = () => {
//     const data = document.getElementById('email');
//     let urlData = getUrlParameter('email');
//     data.innerHTML = `請至信箱 ${urlData} 收取驗證信`;
//   }