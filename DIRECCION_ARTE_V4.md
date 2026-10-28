# Para Ariana — Dirección de arte V4

## Concepto
**Archivo íntimo / Un lugar para mirar lo vivido.** No se diseña una aplicación comercial sino un regalo personal. El objetivo es evocar la experiencia de abrir un álbum fotográfico y volver a leer una carta.

## Investigación de referencia
- **27b, i-D Spotlight / Elle Fanning**, Best Storytelling, Framer Awards 2025: protagonismo de las imágenes, narrativa desplegada por secciones, relación deliberada entre tipografía y fotografías. Referencia: https://www.framer.com/awards/
- **Dropbox Brand, Daybreak Studio**, Website of the Year 2025, CSS Design Awards: coherencia y retícula visual en vez de una acumulación de componentes. Referencia: https://cssdesignawards.com/blog/2025-website-of-the-year-winners/430/

Las referencias aportan criterios, no componentes copiados.

## Decisiones visuales
- Una sola foto protagonista en la apertura, con toda la altura de la pantalla y el título original superpuesto.
- El carrusel y su contenido permanecen; los botones se reubican discretamente.
- Paleta limitada de carbón (#17151a), marfil (#eee9e2) y cobre apagado (#c9a18c). Sin brillos coloreados ni card UI repetida.
- Tipografía protagonista: Cormorant Garamond (editorial) + DM Sans (funcional y legible). Se abandona el abuso de caligrafía.
- Una sección de papel claro para pasar de fotografías a recuerdos y otra para leer cartas.
- La galería entra como doble página: fotografía a la izquierda, texto a la derecha. Sin tarjeta ni bordes redondeados.
- Los aniversarios se presentan como capítulos numerados con una fecha, texto y acción, no como dos bloques decorativos.
- Las cartas se presentan como índice de un archivo y se leen en una hoja sin adornos superfluos.
- El espacio de vídeo permanece oscuro, con controles claros.

## Conservación y verificación
- Se ha conservado íntegro el script del HTML inicial de `main`.
- Se conservaron los textos originales, arreglos de cartas, rutas de música, imágenes y videos.
- Se conservó el carrusel original y las funciones de abrir galería, cartas, video y sorpresas.
- La propuesta vive en una rama separada; `main` no cambia.
- Se verificaron equilibrio de llaves en CSS, enlaces de assets y balance de tags div.

## Pendiente de publicación
Verificar en navegador real el render de portada en diferentes anchos, contraste, carrusel, galería, vídeos, audio y transiciones antes de fusionar.

## Regla para el Manual Maestro
En un proyecto emocional, el diseño empieza por *qué se quiere hacer sentir* y qué materiales originales se quieren preservar. Cada recurso visual necesita una justificación. Eliminar efectos que solo simulen sofisticación.
