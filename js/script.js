<script>
    document.querySelectorAll('.btn-buy').forEach(boton => {
        boton.onclick = () => {
            const card = boton.parentElement;
            // Estandarizamos los nombres de las propiedades
            const producto = { 
                nombre: card.querySelector('h3').innerText, 
                precio: card.querySelector('.precio-tag').innerText, 
                imagen: card.querySelector('img').src 
            };
            
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            
            // Feedback visual
            const textoOriginal = boton.innerText;
            boton.innerText = "¡AÑADIDO!";
            boton.style.backgroundColor = "var(--verde-jaguar)";
            boton.style.color = "#000";
            
            setTimeout(() => {
                boton.innerText = textoOriginal;
                boton.style.backgroundColor = "var(--naranja-jaguar)";
                boton.style.color = "#fff";
            }, 800);
        };
    });
</script>