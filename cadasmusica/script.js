// Função para cadastrar a música
document.getElementById('cadastromusica').addEventListener('click', function() {
  const title = prompt('Digite o título da música:');
  const artist = prompt('Digite o artista da música:');
  const audioFile = document.createElement('input');
  audioFile.type = 'file';
  audioFile.accept = '.mp3';

  audioFile.onchange = function(event) {
      const file = event.target.files[0];

      if (!file) {
          alert('Por favor, selecione um arquivo MP3!');
          return;
      }

      const reader = new FileReader();
      reader.onload = function() {
          const music = {
              title: title,
              artist: artist,
              audio: reader.result
          };

          const musicList = JSON.parse(localStorage.getItem('musicList')) || [];
          musicList.push(music);

          localStorage.setItem('musicList', JSON.stringify(musicList));
          alert('Música cadastrada com sucesso!');

          renderUserAlbums(); // Atualiza a exibição dos álbuns
      };
      reader.readAsDataURL(file);
  };

  audioFile.click(); // Abre o seletor de arquivo
});

// Função para renderizar os álbuns do usuário
function renderUserAlbums() {
  const userAlbums = document.getElementById('user-albums');
  userAlbums.innerHTML = ''; // Limpa os álbuns existentes

  const musicList = JSON.parse(localStorage.getItem('musicList')) || [];
  if (musicList.length === 0) {
      userAlbums.innerHTML = '<p>Você ainda não cadastrou nenhuma música.</p>';
      return;
  }

  musicList.forEach((music, index) => {
      const albumCard = document.createElement('div');
      albumCard.className = 'album-card';
      albumCard.innerHTML = `
          <h3>${music.title}</h3>
          <p><strong>Artista:</strong> ${music.artist}</p>
          <audio controls>
              <source src="${music.audio}" type="audio/mp3">
              Seu navegador não suporta o player de áudio.
          </audio>
          <button onclick="removeMusic(${index})">Remover</button>
      `;

      userAlbums.appendChild(albumCard);
  });
}

// Função para remover uma música
function removeMusic(index) {
  const musicList = JSON.parse(localStorage.getItem('musicList')) || [];
  musicList.splice(index, 1); // Remove a música pelo índice
  localStorage.setItem('musicList', JSON.stringify(musicList));
  renderUserAlbums(); // Atualiza a exibição dos álbuns
}

// Renderizar os álbuns ao carregar a página
window.onload = renderUserAlbums;
