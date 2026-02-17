# Página de Aniversario 💕

Una hermosa página web de aniversario con contador de tiempo y carta interactiva.

## Cómo publicar en GitHub Pages

### Paso 1: Crear un repositorio en GitHub
1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón "+" en la esquina superior derecha y selecciona "New repository"
3. Nombra tu repositorio (por ejemplo: "aniversario" o "feliz-aniversario")
4. Marca la casilla "Public"
5. Haz clic en "Create repository"

### Paso 2: Subir los archivos
Hay dos formas de hacerlo:

#### Opción A: Usando la interfaz web de GitHub (más fácil)
1. En tu nuevo repositorio, haz clic en "uploading an existing file"
2. Arrastra todos los archivos de esta carpeta:
   - index.html
   - styles.css
   - script.js
   - WhatsApp Image 2026-02-16 at 10.04.01 PM.jpeg
   - WhatsApp Image 2026-02-16 at 10.04.02 PM.jpeg
3. Haz clic en "Commit changes"

#### Opción B: Usando Git (desde la terminal)
```bash
git init
git add .
git commit -m "Primera versión de la página de aniversario"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. En tu repositorio, ve a "Settings" (Configuración)
2. En el menú lateral izquierdo, busca "Pages"
3. En "Source", selecciona "main" branch
4. Haz clic en "Save"
5. Espera unos segundos y recarga la página
6. Verás un mensaje con la URL de tu página: `https://TU-USUARIO.github.io/TU-REPOSITORIO/`

### ¡Listo!
Ahora puedes compartir el link con tu amor y ella podrá verlo desde su iPhone 13 Pro en Safari 💕

## Características de la página
- ✅ Título "Feliz Aniversario Mi Amor"
- ✅ Contador desde el 17 de febrero de 2023
- ✅ Imagen de fondo personalizada
- ✅ Sobre interactivo que se abre con un toque
- ✅ Carta romántica
- ✅ Corazones flotantes animados
- ✅ Totalmente responsive para iPhone 13 Pro
- ✅ Optimizado para Safari

## Notas
- La carta es personalizable. Puedes editar el contenido en el archivo `index.html`
- Si quieres cambiar la imagen de fondo, solo edita la línea en `styles.css` que dice `background-image: url('...')`
