export const isImageUrl = (url) => {
    // Expresión regular para verificar la extensión del archivo de la URL
    const imageExtensionRegex = /\.(jpeg|jpg|gif|png|bmp|webp)$/i;

    // Verificar si la URL tiene una extensión de imagen
    return imageExtensionRegex.test(url);
};
