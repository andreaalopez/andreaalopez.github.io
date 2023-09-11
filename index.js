// Event handlers for scrolling to Work and About Me sections

const checkButton = document.getElementById("check-btn");
const WorkButton = document.getElementById("nav-work");
const myWork = document.getElementById("my-work");
const aboutMeButton = document.getElementById("nav-about")
const learnButton = document.getElementById("learn-btn");
const aboutMe = document.getElementById("about-me");
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
const indexNav = document.getElementById("index-nav");

checkButton.addEventListener("click", function() {
    myWork.scrollIntoView({ behavior: "smooth" });
});

WorkButton.addEventListener("click", function() {
    myWork.scrollIntoView({ behavior: "smooth" });
});

learnButton.addEventListener("click", function() {
    aboutMe.scrollIntoView({ behavior: "smooth" });
});

aboutMeButton.addEventListener("click", function() {
    aboutMe.scrollIntoView({ behavior: "smooth" });
});

scrollToTopBtn.addEventListener("click", function() {
    indexNav.scrollIntoView({ behavior: "smooth" });
});

// Event handlers for Connect
const linkedInButtons = document.getElementsByClassName("linkedin-btn");
const emailButtons = document.getElementsByClassName("email-btn");
const gitHubButtons = document.getElementsByClassName("github-btn");

for (const linkedInButton of linkedInButtons) {
    linkedInButton.addEventListener("click", function() {
        window.open("http://www.linkedin.com/in/andrea-lopez-1bb56321b", "_blank")
    });
}

for (const emailButton of emailButtons) {
    emailButton.addEventListener("click", function() {
        window.open("mailto:apl2171@barnard.edu", "_blank");
    });
}

for (const gitHubButton of gitHubButtons) {
    gitHubButton.addEventListener("click", function() {
        window.open("https://github.com/andreaalopez", "_blank");
    });
}

// Event handlers for work experiences

const divHacksImg = document.getElementById("divhacks");
const divHacksCaption= document.getElementById("divhacks-caption");
const oracleImg = document.getElementById("oracle");
const oracleCaption= document.getElementById("oracle-caption");
const bttaiImg = document.getElementById("bttai");
const bttaiCaption= document.getElementById("bttai-caption");
const nlpImg = document.getElementById("nlp");
const nlpCaption= document.getElementById("nlp-caption");

divHacksImg.addEventListener("click", function() {
    window.location.href = "divhacks.html";
});

divHacksCaption.addEventListener("click", function() {
    window.location.href = "divhacks.html";
});


oracleImg.addEventListener("click", function() {
    window.location.href = "oracle.html";
});

oracleCaption.addEventListener("click", function() {
    window.location.href = "oracle.html";
});

bttaiImg.addEventListener("click", function() {
    window.location.href = "bttai.html";
});

bttaiCaption.addEventListener("click", function() {
    window.location.href = "bttai.html";
});

nlpImg.addEventListener("click", function() {
    window.location.href = "nlp.html";
});

nlpCaption.addEventListener("click", function() {
    window.location.href = "nlp.html";
});

// Event handlers for previous and next

const prevNLP = document.getElementById("prev-nlp");
const nextOracle = document.getElementById("next-oracle");


prevNLP.addEventListener("click", function() {
    window.location.href = "nlp.html";
});

nextOracle.addEventListener("click", function() {
    window.location.href = "oracle.html";
});


