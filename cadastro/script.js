document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById("form-cadastro");

    formCadastro.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const confirmar = document.getElementById("confirmar").value;

        // Validação básica
        if (senha !== confirmar) {
            alert("As senhas não coincidem!");
            return;
        }

        // Recupera usuários do localStorage ou inicializa um array vazio
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verifica se o email já está cadastrado
        if (usuarios.find(user => user.email === email)) {
            alert("Este email já está cadastrado!");
            return;
        }

        // Adiciona o novo usuário
        usuarios.push({ email, senha });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso! Agora, faça login para continuar.");
        formCadastro.reset();

        // Redireciona para a tela de login
        window.location.href = "../login/login.html";
    });
});
