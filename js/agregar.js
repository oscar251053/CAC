// cuando el dom se cargue
document.addEventListener('DOMContentLoaded', async () => {
    // tengo que levantar los datos del formulario, validar los inputs, en caso de algun value vacio, mostrar un mensaje de error
    // y no hacer la peticion fetch
    // si los datos son correctos, realizo la peticion fetch post a la api para agregar una pelicula
    // si la respuesta es correcta, muestro un mensaje de exito y limpio los inputs del formulario
    
    //obtengo el formulario
    formNuevaPelicula = document.getElementById('formNuevaPelicula');
    //agrego el evento submit al formulario
    formNuevaPelicula.addEventListener('submit', async (event) => {
        //prevengo el comportamiento por defecto del formulario
        event.preventDefault();
        //obtengo los datos del formulario
        const formData = new FormData(formNuevaPelicula);
        //obtengo los valores de los inputs
        const titulo = formData.get('titulo');
        const director = formData.get('director');
        const elenco = formData.get('elenco');
        const genero = formData.get('genero');
        const duracion = formData.get('duracion');
        const sinopsis = formData.get('sinopsis');
        const fechaDeEstreno = formData.get('fechaDeEstreno');
        const clasificacion = formData.get('clasificacion');
        const imagen = formData.get('imagen');
        //valido los inputs
        if (titulo === ''|| clasificacion === '' || director === '' || elenco === '' || genero === '' || duracion === '' || sinopsis === '' || fechaDeEstreno === '' || imagen === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        // levanto solo el nombre del file para enviarlo a la api
        const imageName = imagen.name;
       const request = JSON.stringify({
        titulo: titulo,
        director: director,
        elenco: elenco,
        genero: genero,
        duracion: duracion,
        sinopsis: sinopsis,
        fechaDeEstreno: fechaDeEstreno,
        clasificacion : clasificacion,
        imagen: imageName
    })
    console.log(request)
        //configuracion de options, es un post y necesita body
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            body: request
        };
        try{
        //realizo la peticion fetch a la api para agregar una pelicula
        const response = await fetch('http://localhost:8080/apisimple/peliculas', options);
        //obtengo la respuesta
        const data = await response.json();
        //si la respuesta es correcta, muestro un mensaje de exito y limpio los inputs del formulario
        // si el codigo es 201, la pelicula se agrego correctamente
        if (response.status === 201) {
            alert('Pelicula agregada correctamente');
            formNuevaPelicula.reset();
            // que se recargue la pagina para ver la pelicula agregada
            location.reload();
        } else {
            alert('Error al agregar la pelicula');
        }
    }catch(error){
        console.log(error + "error")
       }
    });

});