document.addEventListener('DOMContentLoaded', function() {
    var shareButton = document.querySelector('.share button');
    var avatar = document.querySelector('.avatar');
    var partShare = document.querySelector('.partShare');
    var share = document.querySelector('.share');

    shareButton.addEventListener('click', function() {
        if (window.innerWidth > 375) {
            partShare.classList.toggle('hidden');
        } 
        else {
            avatar.classList.toggle('hidden');
            partShare.classList.toggle('hidden');
            share.classList.toggle('gray');
        }
    });
});
