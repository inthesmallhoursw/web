// 获取表单元素
var loginForm = document.querySelector('.login-form');
var emailInput = document.querySelector('input[type="email"]');
var passwordInput = document.querySelector('input[type="password"]');

// 为表单添加提交事件监听器
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    // 获取用户输入的电子邮件和密码
    var email = emailInput.value;
    var password = passwordInput.value;

    // 简单的验证逻辑
    if (email && password) {
        // 假设验证通过，这里可以添加 AJAX 请求来与服务器进行验证

        // 模拟登录成功，跳转到主页
        window.location.href = '../index.html'; // 根据你的目录结构调整路径
    } else {
        alert('请填写电子邮件和密码');
    }
});
