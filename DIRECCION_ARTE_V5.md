# Para Ariana — Edición de autor, V5

## Intención
Diseñar una experiencia digital que se sienta como un álbum y una carta personal, no como una plantilla de producto. La protagonista es la historia real de Elías y Ariana: sus imágenes, cartas, canciones y películas.

## Referencia de diseño
- **27b / i-D Spotlight — Elle Fanning**. Framer Awards 2025, *Best Storytelling*. Aprendizaje: tipografía e imágenes ordenadas en una narrativa que invita a continuar, no artificios añadidos. Fuente oficial: https://www.framer.com/awards/
- **Dirección de fotografía editorial.** El valor proviene de la secuencia, encuadre y respiración entre escenas, no de acumulación de brillos o formas decorativas. Esto es un criterio de diseño de esta propuesta, no un premio atribuido.

## Cambios de V5
1. Cabecera mínima que funciona como índice.
2. Portada de doble composición: dedicatoria original y fotografía a tamaño de escena. En móvil se integran para que título y foto aparezcan juntos.
3. Tipografía editorial Cormorant Garamond para títulos con contraste frente a DM Sans para lectura y controles.
4. Una transición en papel cálido para conectar portada, recuerdos y galería.
5. Entrada a la galería de fotografías diseñada como doble página, con fotografía protagonista.
6. Dos aniversarios narrados en módulos alternos de imagen y texto, sin tarjetas con efectos.
7. Cartas como archivo de lectura, sin emojis de decoración ni fondos tipo dashboard.
8. Superposición cinematográfica sobria, manteniendo música, fotos, mensajes animados y videos originales.
9. Controles y navegación más accesibles: etiquetas, Escape para cerrar, indicador de fotografía y respeto de movimiento reducido.
10. Fotografía con carga diferida en la galería para mejorar el rendimiento.

## Arquitectura
- `index.html`: estructura e información.
- `assets/css/legacy.css`: copia **sin modificar** de los estilos originales, con estados visuales de los elementos interactivos.
- `assets/css/editorial-v5.css`: nueva dirección de arte.
- `assets/js/original.js`: JavaScript **idéntico** al original.
- `assets/js/experience-v5.js`: mejoras progresivas no destructivas.

## Garantías
- No cambia `main` ni fusiona modificaciones anteriores.
- Texto de cartas, valores y contenido de sorpresas intactos.
- Rutas originales de fotos, audio y video intactas.
- La nueva versión no implica funcionamiento certificado hasta probarla visualmente en navegador y dispositivos.
- El objetivo no es copiar literalmente una página premiada, sino aplicar sus principios de diseño.

## Pendientes antes de publicación
- Probar el carrusel con fotos de distintas proporciones y tamaños de pantalla.
- Probar las dos sorpresas completas, audio/video, controles de reproducción y regreso.
- Revisar modales con teclado, foco y lecturas extensas.
- Ajustar fotografías concretas (encuadres) según la versión que vea la pareja.
- Revisar contraste, rendimiento real y compatibilidad móvil.

## Regla incorporable al Manual Maestro
Para proyectos emocionales, definir primero una única idea editorial y construir alrededor de los materiales originales. Evitar repetición de tarjetas, gradientes, resplandores y efectos que no sirven a la historia. El diseño debe sentirse hecho para esas personas, no para cualquier sitio.
