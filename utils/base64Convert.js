export function base64Convert(src, callback, outputFormat) {
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
        const canvas = document.createElement("canvas");

        const ctx = canvas.getContext("2d");

        canvas.height = img.naturalHeight;
        canvas.width = img.naturalWidth;

        ctx.drawImage(img, 0, 0);

        const dataURL = canvas.toDataURL();

        callback(dataURL);
    };

    img.src = src;
}
