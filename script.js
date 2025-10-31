function mostrarBienvenida() {
    alert("¡Bienvenido a Recetas Caseras! Esperamos que disfrutes aprendiendo y cocinando con nosotros 🍳");
}

function cambiarColorFondo() {
    const colores = ["#fff3e6", "#f0e68c", "#d1f2eb", "#f5b7b1", "#f9e79f", "#e8daef"];
    const colorAleatorio = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[colorAleatorio];
}

window.onload = mostrarBienvenida;

document.getElementById("colorBtn").onclick = cambiarColorFondo;