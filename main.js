var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");

function handleNextClick() {
    const ul1 = document.querySelector("ul.first");
    const ul2 = document.querySelector("ul.second");

    const last1 = ul1.querySelector("li:last-child");
    const last2 = ul2.querySelector("li:last-child");

    ul1.removeChild(last1);
    ul1.insertBefore(last1, ul1.firstChild);

    ul2.removeChild(last2);
    ul2.insertBefore(last2, ul2.firstChild);
}

function handlePrevClick() {
    const ul1 = document.querySelector("ul.first");
    const ul2 = document.querySelector("ul.second");

    const first1 = ul1.querySelector("li:first-child");
    const first2 = ul2.querySelector("li:first-child");

    ul1.removeChild(first1);
    ul1.appendChild(first1);

    ul2.removeChild(first2);
    ul2.appendChild(first2);
}

prevButton.addEventListener("click", () => handlePrevClick());
nextButton.addEventListener("click", () => handleNextClick());