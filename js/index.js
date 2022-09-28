import checkLocalStorage from "./modules/localStorageFill.js";
import changingNavBtns from "./modules/changeNavBtns.js"
import testDirecting from "./modules/testDirecting.js";
import login from "./modules/login.js";
import registration from "./modules/registration.js";
import logout from "./modules/logout.js";
import profileGenerating from "./modules/profileGenerating.js";
import fillTasksInLS from "./modules/fillTasksInLS.js";
import fastTest from "./modules/fastTest.js";
import marathonTest from "./modules/marathonTest.js"
import stopwatch from "./modules/stopwatch.js";
import bestResultTableGenerating from "./modules/bestResultTable.js"
import generatingTaskRedactor from "./modules/generatingTaskRedactor.js"
import deletingTasks from "./modules/deletingTasks.js"
import openingModalAddingTask from "./modules/openingModalAddingTask.js"
import addingTasks from "./modules/addingTasks.js"

let currentPageURL = document.location.href;
currentPageURL = currentPageURL.split('/');
currentPageURL = currentPageURL[currentPageURL.length - 1];

checkLocalStorage();
fillTasksInLS();

logout();

if (currentPageURL == 'login.html') {
    login();
} else if (currentPageURL == 'registration.html') {
    registration();
} else if (currentPageURL == 'profile.html') {
    profileGenerating();
} else if (currentPageURL == 'fast-test.html') {
    fastTest();
    stopwatch();
} else if (currentPageURL == 'marathon-test.html') {
    stopwatch();
    marathonTest();
} else if (currentPageURL == 'best-results.html') {
    bestResultTableGenerating();
} else if (currentPageURL == 'task-redactor.html') {
    generatingTaskRedactor();
    deletingTasks();
    openingModalAddingTask();
    addingTasks();
} else if (currentPageURL == 'index.html' || currentPageURL == '') {
    changingNavBtns();
    testDirecting();
} else if (currentPageURL == 'articles.html') {
    changingNavBtns();
}
