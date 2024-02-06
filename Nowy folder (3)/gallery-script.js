function openLightbox(imgSrc) {
    var lightboxImage = document.getElementById('lightbox-img');
    lightboxImage.src = imgSrc;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
