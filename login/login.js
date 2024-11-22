document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("form-login");

    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();

        const usuario = document.getElementById("login-usuario").value;
        const senha = document.getElementById("login-senha").value;

        // Recupera os usuários do localStorage
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verifica se as credenciais são válidas
        const usuarioValido = usuarios.find(user => user.email === usuario && user.senha === senha);

        if (usuarioValido) {
            // Salva o usuário logado no localStorage
            localStorage.setItem("usuarioLogado", JSON.stringify({ email: usuario }));
            
            alert("Login realizado com sucesso!");
            // Redireciona para a página inicial
            window.location.href = "../aplicativo/index.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    });
});
