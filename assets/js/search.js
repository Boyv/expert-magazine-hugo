document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.nav-search');
    const modal = document.getElementById('search-modal');
    const searchUrl = modal.getAttribute('data-search-index');
    const closeBtn = document.querySelector('.close-search');
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');

    // Ouvrir / Fermer
    searchBtn.onclick = () => { modal.style.display = 'block'; input.focus(); };
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

    // Logique de recherche
    let searchIndex = [];
    // On récupère le JSON correspondant à la langue actuelle
fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            searchIndex = data;
            console.log("Index de recherche chargé :", searchUrl, data.length, "articles");
        })
        .catch(err => console.error("Erreur chargement index :", err));

    input.onkeyup = (e) => {
        const query = e.target.value.toLowerCase();
        results.innerHTML = "";
        if (query.length < 2) return;

        const filtered = searchIndex.filter(page => 
            page.title.toLowerCase().includes(query) || 
            page.content.toLowerCase().includes(query)
        ).slice(0, 5);

        filtered.forEach(page => {
            results.innerHTML += `<div class="search-item">
                <a href="${page.permalink}">
                    <h4>${page.title}</h4>
                    <small>${page.date}</small>
                </a>
            </div>`;
        });
    };
});