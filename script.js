var artist = [
    { name: "Julian Mbatha", band: "Fine band" },
    { name: "Julian Mbatha", band: "Fine band" },
    { name: "Julian Mbatha", band: "Fine band" }
  ];

  function createArtistHTML(artist) {
    return `
      <div class="artist">
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





