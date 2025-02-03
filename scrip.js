// Guardamos el tiempo de inicio en el almacenamiento local del navegador
const STORAGE_KEY = 'startTime';

// Función para verificar el DNI
function verificarDni() {
    const dni = document.getElementById('dni').value;
    const errorMessage = document.getElementById('error-message');

    if (dni.length !== 8 || isNaN(dni)) {
        errorMessage.textContent = 'El DNI debe ser un número de 8 dígitos.';
        return;
    }

    // Verificamos si el DNI ya ha pasado las 72 horas
    const startTime = localStorage.getItem(STORAGE_KEY);
    if (!startTime) {
        // Si es la primera vez que se accede, guardamos la hora actual
        localStorage.setItem(STORAGE_KEY, new Date().getTime());
    } else {
        const elapsedTime = new Date().getTime() - startTime;
        const hoursElapsed = elapsedTime / (1000 * 60 * 60);

        if (hoursElapsed > 72) {
            errorMessage.textContent = 'El tiempo de acceso ha expirado. Vuelve a intentarlo más tarde.';
            return;
        }
    }

    // Si todo está bien, mostramos la sección de manuales
    document.getElementById('dni-section').style.display = 'none';
    document.getElementById('manuales-section').style.display = 'block';
    errorMessage.textContent = '';  // Limpiar el mensaje de error
}

// Función para simular abrir un manual
function abrirManual(manual) {
    alert(`Abrir el manual: ${manual}`);
}
