// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all enroll buttons
var enrollButtons = document.getElementsByClassName("enrollBtn");

// Add click event listeners to each enroll button
Array.from(enrollButtons).forEach(function(button) {
    button.addEventListener("click", function() {
        var courseName = button.previousElementSibling.textContent;
        var courseDetails = getCourseDetails(courseName); // Replace this with your logic to fetch course details
        document.getElementById("courseDetails").textContent = courseDetails;
        modal.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Replace this function with your logic to fetch course details based on the course name
function getCourseDetails(courseName) {
    // Example course details
    if (courseName === "Course 1") {
        return "Course 1 Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    } else if (courseName === "Course 2") {
        return "Course 2 Details: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    } else if (courseName === "Course 3") {
        return "Course 3 Details: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";
    } else {
        return "Course details not available.";
    }
}
