const apiUrl = "/data/products.json";
// scroll to top
const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
};
// newsletter form
const newsletterForm = document.getElementById("newsletter-form");
const newsletter = () => {
    const email = document.getElementById("newsletter-email").value;
    const storedNewsletterEmail = localStorage.getItem("newsletter_email");
    if (email == "") {
        alert("Please fill all the details");
    } else if (storedNewsletterEmail == email) {
        alert("Already Subscribed");
    } else {
        localStorage.setItem("newsletter_email", email);
        alert("Subscribed Successfully");
    }
};
newsletterForm.addEventListener("submit", newsletter);

//End Newsletter form **************************//
// fetch Data  function/////////////////////////////////////////////////////////
function fetchData(url, options = {}) {
    return fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // This parses the response body as JSON
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
            throw error; // Re-throw the error to propagate it
        });
}

// this is for truncate string ******
const limit = (string = "", limit = 0) => {
    return string.substring(0, limit);
};