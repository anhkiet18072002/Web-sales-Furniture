// document.getElementById('DangNhap').addEventListener('submit',function(baoloi){
//     baoloi.preventDefault();
//     var email= document.getElementById('email').value;
//     var password= document.getElementById('password').value;
//     var errorMessage= document.getElementById('error-message');
//     //Đăng nhập thành công
//     if(email === 'khiemdeptrai' && password ==='12345')
//     {
//         errorMessage.textContent='';
//         alert('Nhập đúng rồi đó');

//     }
//     //Đăng nhập sai và yêu cầu nhập lại
//     else
//     {
//         errorMessage.textContent='Nhập sai rồi đó';
//     }
// });
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var em = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Kiểm tra tên đăng nhập và mật khẩu
    if (em === 'khiemh235@gmail.com' && password === '12345') {
        // Đăng nhập thành công
        errorMessage.textContent = ''; // Xóa thông báo lỗi (nếu có)
        alert('Xin chào quý khách');
    } 

    else {
        // Hiển thị thông báo lỗi và yêu cầu nhập lại
        errorMessage.textContent = 'Sai tài khoản hoặc mật khẩu. Yêu cầu nhập lại';
    }
    
});
