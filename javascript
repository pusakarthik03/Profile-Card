document.addEventListener("DOMContentLoaded", function () {
    const followBtn = document.querySelector(".buttons .button:first-child");
    const messageBtn = document.querySelector(".buttons .button:last-child");
    const likeIcon = document.querySelector(".bx-heart");
    const likeCount = likeIcon.nextElementSibling;

    // Follow Button Toggle
    followBtn.addEventListener("click", function () {
        if (followBtn.textContent === "Follow") {
            followBtn.textContent = "Following";
            followBtn.style.backgroundColor = "#28a745";
        } else {
            followBtn.textContent = "Follow";
            followBtn.style.backgroundColor = "#120f68";
        }
    });

    // Message Button Alert
    messageBtn.addEventListener("click", function () {
        alert("Messaging feature coming soon!");
    });

    // Like Button Click
    likeIcon.addEventListener("click", function () {
        let count = parseInt(likeCount.textContent.replace("k", "")) * 1000;
        count += 100;
        likeCount.textContent = (count / 1000) + "k";
    });
});
