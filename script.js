/*  function navigateMBAReport() {
    // Get the selected option from the dropdown
    var selectedOption = document.getElementById("MBA_report").value;

    // Navigate to the corresponding link based on the selected option
    if (selectedOption === "hbs") {
        window.open("https://www.hbs.edu/recruiting/employment-data/Pages/default.aspx");
    } else if (selectedOption === "stanford") {
        window.location.href = "https://www.gsb.stanford.edu/organizations/recruit/strategies-resources/employment-reports/full-time";
    } else if (selectedOption === "wharton") {
        window.open("https://statistics.mbacareers.wharton.upenn.edu/full-time/");
    } else if (selectedOption === "booth") {
        window.open("https://www.chicagobooth.edu/mba/full-time/career-impact/employment-report");
    } else if (selectedOption === "cbs") {
        window.open("https://business.columbia.edu/recruiters/employment-report");
    } else if (selectedOption === "kellogg") {
        window.open("https://www.kellogg.northwestern.edu/the-experience/career/employer/employment-statistics.aspx");
    } else if (selectedOption === "mit") {
        window.open("https://mitsloan.mit.edu/sites/default/files/2023-12/MBA-Employment-Report-2023-2024_2.pdf");
    } else if (selectedOption === "berkeley") {
        window.open("https://www.kellogg.northwestern.edu/the-experience/career/employer/employment-statistics.aspx");
    } else if (selectedOption === "tuck") {
        window.open("https://www.tuck.dartmouth.edu/mba/career-services/employment-statistics");
    } else if (selectedOption === "ucla") {
        window.open("https://www.anderson.ucla.edu/degrees/full-time-mba/career-impact");
    } else if (selectedOption === "duke") {
        window.open("https://www.fuqua.duke.edu/sites/www1.fuqua.duke.edu/files/media/programs/daytime/duke-mba-employment-2023.pdf");
    } else if (selectedOption === "cornell") {
        window.open("https://www.johnson.cornell.edu/programs/full-time-mba/two-year-mba/careers/employment-data/");
    } else if (selectedOption === "stern") {
        window.open("https://www.stern.nyu.edu/business-partnerships/employment-reports");
    } else if (selectedOption === "michigan") {
        window.open("https://michiganross.umich.edu/graduate/full-time-mba/careers/employment-data");
    } else if (selectedOption === "yale") {
        window.open("https://som.yale.edu/programs/mba/career-paths/employment-report-2023-24");
    }
    // Add more conditions for other options
  }

  function navigateTestPrep() {
    // Get the selected option from the dropdown
    var selectedOption = document.getElementById("testPrep").value;

    // Navigate to the corresponding link based on the selected option
    if (selectedOption === "targetTestPrep") {
        window.open("https://gmat.targettestprep.com/");
    } else if (selectedOption === "magoosh") {
        window.open("https://gre.magoosh.com/");
    } else if (selectedOption === "sage") {
        window.open("https://7sage.com/");
    } else if (selectedOption === "lsatDemon") {
        window.open("https://lsatdemon.com/");
    }
    // Add more conditions for other options
  }
*/

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar ul");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".navbar ul li a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});
