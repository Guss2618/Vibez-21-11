// Função para cadastrar a música
document.getElementById('music-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Impede o comportamento padrão do formulário (recarregar página)
  
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const audioFile = document.getElementById('audio').files[0];
  
    // Verificar se o arquivo de áudio foi selecionado
    if (!audioFile) {
      alert('Por favor, selecione um arquivo MP3!');
      return;  // Impede o cadastro de música sem o arquivo de áudio
    }
  
    // Usar FileReader para ler o arquivo de áudio
    const reader = new FileReader();
    reader.onload = function() {
      const music = {
        title: title,
        artist: artist,
        audio: reader.result  // Armazenar o áudio como base64
      };
  
      // Recuperar a lista de músicas do localStorage ou criar uma nova lista
      const musicList = JSON.parse(localStorage.getItem('musicList')) || [];
      musicList.push(music);
  
      // Salvar a nova lista de músicas no localStorage
      localStorage.setItem('musicList', JSON.stringify(musicList));
  
      alert('Música cadastrada com sucesso!');
      document.getElementById('music-form').reset();  // Limpar o formulário
    };
    reader.readAsDataURL(audioFile);  // Ler o arquivo de áudio como base64
  });
