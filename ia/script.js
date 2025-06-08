



const palabras = ["rápido", "limpio", "potente", "útil", "elegante"];
        const contenedor = document.getElementById("escritor");
        const prefijo = "Simple pero ";
        let palabraIndex = 0;
        let letraIndex = 0;
        let escribiendo = true;

        function actualizarTexto() {
            const palabra = palabras[palabraIndex];
            
            if (escribiendo) {
                letraIndex++;
                contenedor.textContent = prefijo + palabra.slice(0, letraIndex);
                
                if (letraIndex === palabra.length) {
                    escribiendo = false;
                    setTimeout(actualizarTexto, 1000);
                    return;
                }
            } else {
                letraIndex--;
                contenedor.textContent = prefijo + palabra.slice(0, letraIndex);
                
                if (letraIndex === 0) {
                    escribiendo = true;
                    palabraIndex = (palabraIndex + 1) % palabras.length;
                }
            }
            
            setTimeout(actualizarTexto, escribiendo ? 100 : 50);
        }

        actualizarTexto();

        window.addEventListener('load', () => {
            alert('Esta web está en fase beta y probablemente tenga muchos errores.');
          });