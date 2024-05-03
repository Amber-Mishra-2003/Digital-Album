const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']; 
let currentIndex = 0;


function updateImage() {
    document.getElementById('currentImage').src = images[currentIndex];
}


function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    updateImage();
}


function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateImage();
}


function firstImage() {
    currentIndex = 0;
    updateImage();
}


function lastImage() {
    currentIndex = images.length - 1;
    updateImage();
}


function shuffleImages() {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    currentIndex = 0;
    updateImage();
}


const filmStrip = document.getElementById('filmStrip');
images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Thumbnail ${index + 1}`;
    img.onclick = () => {
        currentIndex = index;
        updateImage();
    };
    filmStrip.appendChild(img);
});
