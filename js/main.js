// Search Functionality
function searchContent() {
    const query = document.getElementById('search-input').value;
    if (query.trim() === "") {
        alert("Please enter a search term.");
        return;
    }
    alert(`Searching for: ${query}`);
}

// Upload Anime Functionality
const uploadForm = document.getElementById('upload-form');
const uploadStatus = document.getElementById('upload-status');

uploadForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const animeTitle = document.getElementById('anime-title').value;
    const animeDescription = document.getElementById('anime-description').value;
    const animeFile = document.getElementById('upload-anime').files[0];

    // Validate file
    if (!animeFile) {
        uploadStatus.textContent = "Please select a file to upload.";
        return;
    }

    // Check file size (1GB limit)
    const maxFileSize = 1024 * 1024 * 1024; // 1GB in bytes
    if (animeFile.size > maxFileSize) {
        uploadStatus.textContent = "File size must be less than 1GB.";
        return;
    }

    // Check file format
    const allowedFormats = ['mp4', 'mkv', 'avi'];
    const fileExtension = animeFile.name.split('.').pop().toLowerCase();
    if (!allowedFormats.includes(fileExtension)) {
        uploadStatus.textContent = "Supported formats: MP4, MKV, AVI.";
        return;
    }

    // Simulate upload process
    uploadStatus.textContent = `Uploading "${animeTitle}"...`;
    setTimeout(() => {
        uploadStatus.innerHTML = `
            <strong>Upload Successful!</strong><br>
            <strong>Title:</strong> ${animeTitle}<br>
            <strong>Description:</strong> ${animeDescription}<br>
            <strong>File:</strong> ${animeFile.name} (${(animeFile.size / 1024 / 1024).toFixed(2)} MB)
        `;
    }, 2000); // Simulate a 2-second upload delay
});

// Gallery Functionality
const galleryInput = document.getElementById('gallery-input');
const gallery = document.getElementById('gallery');

galleryInput.addEventListener('change', (event) => {
    const files = event.target.files;
    gallery.innerHTML = ""; // Clear previous content

    for (const file of files) {
        const fileType = file.type.split('/')[0]; // image or video
        const fileURL = URL.createObjectURL(file);

        if (fileType === 'image') {
            const img = document.createElement('img');
            img.src = fileURL;
            gallery.appendChild(img);
        } else if (fileType === 'video') {
            const video = document.createElement('video');
            video.src = fileURL;
            video.controls = true;
            gallery.appendChild(video);
        }
    }
});

// Subscription Box
const subscriptionBox = document.getElementById('subscription-box');
const cancelButton = document.getElementById('cancel-button');

// Show subscription box after 1 minute
setTimeout(() => {
    subscriptionBox.style.display = 'block';
}, 60000); // 60 seconds

// Close subscription box when cancel button is clicked
cancelButton.addEventListener('click', () => {
    subscriptionBox.style.display = 'none';
});

// Create APK Functionality
function createAPK() {
    alert("Generating APK file...");
}