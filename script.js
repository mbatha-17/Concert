var artist = [
    { image: 'image/speaker_01 (1).png', name: "Julian Mbatha", band: "Fine band" },
    { image: 'image/speaker_02 (1).png', name: "Julian Mbatha", band: "Fine band" },
    { image: 'image/speaker_03 (1).png', name: "Julian Mbatha", band: "Fine band" },
    { image: 'image/speaker_04 (1).png', name: "Julian Mbatha", band: "Fine band" },
    { image: 'image/speaker_05 (1).png', name: "Julian Mbatha", band: "Fine band" },
    { image: 'image/speaker_06 (1).png', name: "Julian Mbatha", band: "Fine band" }
  ];

  function createArtistHTML(artist) {
    return `
      <div class="artist">
         ${artist.image ? `<img src="${artist.image}" alt="${artist.name}">` : ''}
        <h3>${artist.name}</h3>
        <p>${artist.band}</p>
      </div>
    `;
  }

  function renderArtists() {
    var container = document.getElementById('featured-artists');
    var artistsHTML = '';

    for (var i = 0; i < artist.length; i++) {
      artistsHTML += createArtistHTML(artist[i]);
    }

    container.innerHTML = artistsHTML;
  }

  window.onload = function() {
    renderArtists();
  };





