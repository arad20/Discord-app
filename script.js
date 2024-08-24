document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
    const imageWrapper = document.getElementById('image_wrapper');
    const textInput = document.getElementById('input');

    if (fileInput) {
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                };

                reader.onerror = function() {
                    console.error('Error reading file');
                };

                reader.readAsDataURL(file);
            } else {
                imagePreview.src = '';
                imagePreview.style.display = 'none';
            }
        });
    }
    // if (imagePreview.style.display === 'block') {
    //     imageWrapper.style.display = 'block';
    //     textInput.style.borderTopLeftRadius = '0px';
    //     textInput.style.borderTopRightRadius = '0px';
    //     textInput.style.marginTop = '-2vh';
    // };
});


function openSettings() {
    const element = document.getElementById('user_settings');
    element.style.transform = 'scale(1)';
}

function closeSettings() {
    const element = document.getElementById('user_settings');
    element.style.transform = 'scale(0)';
}

function animation() {
    const letters = document.querySelectorAll('#funny-text .letter');
    letters.forEach((letter, index) => {
        letter.style.animation = 'none';
        letter.offsetHeight;
        letter.style.animation = `a 1s linear 0s 1 normal none`;
        letter.style.animationDelay = `${index * 0.25}s`;
    });
};