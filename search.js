const keywords = [
    'HTML',
    'CSS',
    'JavaScript',
    'Learn web development using python flask',
    'Learn web development using python django',
    'How read .dat files using "pickle" module of python ?',
    'Learn basics of python with 30 days code challenge',
    'Learn AI & ML with projects and workshops by best IITian researchers'
];
let inputBox = document.querySelector('input#input-box');
let resultsBox = document.querySelector('div#resultsBox');
let results;

inputBox.addEventListener('input', (e) => {
    results = keywords.filter((keyword) => {
        const input = e.target.value;
        return keyword.toLowerCase().includes(input.toLowerCase());
    })

    if (!results.length || e.target.value === '') {
        resultsBox.style.display = "none";
    } else {
        resultsBox.style.display = "block";
    }

    resultsBox.innerHTML = results.map((result) => {
        return "<li onclick=\"completeSearch(this.textContent)\">" + result + "</li>"
    }).join("");
})

const completeSearch = (value) => {
    inputBox.value = value;
}