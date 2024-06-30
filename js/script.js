document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/apisimple/peliculas')
        .then(response => response.json())
        .then(data => {
            const tablaCuerpo = document.getElementById('tabla-cuerpo');

            data.forEach(pelicula => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${pelicula.idPelicula}</td>
                    <td>${pelicula.titulo}</td>
                    <td>${pelicula.genero}</td>
                    <td><img src="../imagenes/imagenes${pelicula.idPelicula}.jpg" alt="Imagen de ${pelicula.title}"" alt="Imagen de ${pelicula.title}" width = "100px"></td>
                    <td class="d-grid gap-2 col-6 mx-auto ">
                        <button class="btn btn-primary"  onclick="editarPelicula(${pelicula.editarPelicula})">Modificar</button>
                        <button class="btn btn-primary"  onclick="borrarPelicula(${pelicula.idPelicula})">Eliminar</button>
                    </td>
                `;
                tablaCuerpo.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function editarPelicula(idPelicula) {
    window.location.href = `modificar.html?id=${idPelicula}`;
      // Aquí se implementa la lógica para editar la película
}

function borrarPelicula(idPelicula) {
    console.log('Borrar película con ID:', idPelicula);
    // Aquí podrías implementar la lógica para borrar la película
}
