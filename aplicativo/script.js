// Lógica para exibir o estado logado/deslogado
document.addEventListener("DOMContentLoaded", () => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const menuUsuario = document.getElementById("menu-usuario");
    const iconePerfil = document.getElementById("icone-perfil");
    const opcoesDeslogado = document.getElementById("opcoes-deslogado");
    const usuarioLogadoDiv = document.getElementById("usuario-logado");
    const emailUsuario = document.getElementById("email-usuario");

    if (usuarioLogado) {
        // Se o usuário estiver logado
        opcoesDeslogado.style.display = "none";
        usuarioLogadoDiv.style.display = "flex";
    } else {
        // Se o usuário não estiver logado
        opcoesDeslogado.style.display = "flex";
        usuarioLogadoDiv.style.display = "none";
    }

    // Abre/fecha o menu ao clicar no ícone de perfil
    iconePerfil.addEventListener("click", (e) => {
        e.preventDefault();
        menuUsuario.classList.toggle("active");
    });

    // Botão de logout
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("usuarioLogado");
        alert("Você saiu da sua conta.");
        location.reload(); // Recarrega a página para voltar ao estado deslogado
    });
});

document.getElementById("myprofile").onclick = function(){
    window.location.href = "../perfil/perfil.html"
};

document.getElementById("cadastromusica").onclick = function(){
    window.location.href = "../cadasmusica/index.html"
};

