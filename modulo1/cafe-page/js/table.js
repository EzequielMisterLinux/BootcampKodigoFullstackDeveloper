const cursos = [
    {
        imagen: "../images/curso1.jpg",
        titulo: "Técnicas de extracción de café",
        precio: "Gratis",
        cupo: 20
    },
    {
        imagen: "../images/curso2.jpg",
        titulo: "Taller para Tostar y Moler Granos",
        precio: "$15.00",
        cupo: 30
    },
    {
        imagen: "../images/curso3.jpg",
        titulo: "4 Recetas de Café para Principiantes",
        precio: "Gratis",
        cupo: 20
    }
];


function crearTablaCursos() {
    const contenedor = document.getElementById('cursosTable');
    

    const tabla = document.createElement('table');
    tabla.className = 'desktop-table';
    

    const thead = tabla.createTHead();
    const headerRow = thead.insertRow();
    const headers = ['Imagen', 'Título', 'Precio', 'Cupo'];
    headers.forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        headerRow.appendChild(th);
    });


    const tbody = tabla.createTBody();
    cursos.forEach(curso => {
        const row = tbody.insertRow();
        
        const imgCell = row.insertCell();
        const img = document.createElement('img');
        img.src = curso.imagen;
        img.alt = curso.titulo;
        img.classList.add('curso-imagen');
        imgCell.appendChild(img);

        const tituloCell = row.insertCell();
        tituloCell.textContent = curso.titulo;

        const precioCell = row.insertCell();
        precioCell.textContent = curso.precio;

        const cupoCell = row.insertCell();
        cupoCell.textContent = curso.cupo;
    });


    const lista = document.createElement('ul');
    lista.className = 'mobile-list';

    cursos.forEach(curso => {
        const item = document.createElement('li');
        item.className = 'curso-item';

        const img = document.createElement('img');
        img.src = curso.imagen;
        img.alt = curso.titulo;
        img.classList.add('curso-imagen');

        const info = document.createElement('div');
        info.className = 'curso-info';

        const titulo = document.createElement('h3');
        titulo.textContent = curso.titulo;

        const precio = document.createElement('p');
        precio.textContent = `Precio: ${curso.precio}`;

        const cupo = document.createElement('p');
        cupo.textContent = `Cupo: ${curso.cupo}`;

        info.appendChild(titulo);
        info.appendChild(precio);
        info.appendChild(cupo);

        item.appendChild(img);
        item.appendChild(info);

        lista.appendChild(item);
    });

    contenedor.appendChild(tabla);
    contenedor.appendChild(lista);
}


document.addEventListener('DOMContentLoaded', crearTablaCursos);