document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");

    const pages = [
        // Adicione aqui os URLs das suas páginas
        "../index.html",
        "../metodo.html",
        "../valores.html"
        // ...
    ];

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        pages.forEach(page => {
            fetch(page)
                .then(response => response.text())
                .then(content => {
                    if (content.toLowerCase().includes(searchTerm)) {
                        const resultItem = document.createElement("p");
                        resultItem.innerHTML = `<a href="${page}">${page}</a>`;
                        searchResults.appendChild(resultItem);
                    }
                })
                .catch(error => console.error(error));
        });
    });
});
