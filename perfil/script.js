// Variável para armazenar o usuário logado
let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

// Função para exibir as informações do usuário
document.addEventListener("DOMContentLoaded", () => {
    if (usuarioLogado) {
        // Exibe os dados do usuário
        document.getElementById("nome-usuario").textContent = usuarioLogado.nome || "Nome não fornecido";
        document.getElementById("email-usuario").textContent = usuarioLogado.email;
    } else {
        // Se não estiver logado, redireciona para o login
        alert("Você precisa estar logado para acessar seu perfil.");
        window.location.href = "login.html";
    }

    // Função de logout
    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("usuarioLogado");
        alert("Você saiu da sua conta.");
        window.location.href = "login.html"; // Redireciona para a página de login
    });
});

// Função para alterar o nome do usuário
document.getElementById("changename").onclick = function () {
    const novoNome = prompt("Digite seu nome:");
    if (novoNome) {
        // Atualiza o nome no objeto do usuário e salva no localStorage
        usuarioLogado.nome = novoNome;
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

        // Atualiza a interface
        document.getElementById("nome-usuario").textContent = novoNome;
        alert("Nome atualizado com sucesso!");
    }
};
