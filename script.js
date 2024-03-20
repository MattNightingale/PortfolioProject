//cog animations

const largeCog = document.getElementById('largecog');

const smallCog = document.getElementById('smallcog');

let reverse = function() {
     smallCog.style.animationDirection = "reverse";
     largeCog.style.animationDirection = "reverse";
}

let forwards = function() {
    smallCog.style.animationDirection = "normal";
    largeCog.style.animationDirection = "normal";
}

smallCog.addEventListener('mouseover', reverse);

smallCog.addEventListener('mouseout', forwards);

largeCog.addEventListener('mouseover', reverse);

largeCog.addEventListener('mouseout', forwards);

//project animations

const folder = document.getElementById('folder');
const openFolder = document.getElementById('openfolder');

const file1 = document.getElementById('folderimage1');
const file2 = document.getElementById('folderimage2');
const file3 = document.getElementById('folderimage3');
const file4 = document.getElementById('folderimage4');

const caption1 = document.getElementById('caption1');
const caption2 = document.getElementById('caption2');
const caption3 = document.getElementById('caption3');
const caption4 = document.getElementById('caption4');


let labelChange = function() {
    label.innerHTML = "HIDE PROJECTS";
}

let labelBack = function() {
    label.innerHTML = "SHOW PROJECTS"
}

let filesOut = function() {
    file1.style.marginTop = "-3rem";
    file1.style.position = "relative";
    file1.style.transition = "1s";
    caption1.style.display = "inline"
    file2.style.marginTop = "5rem";
    file2.style.position = "relative";
    file2.style.transition = "1s";
    caption2.style.display = "inline"
    file3.style.marginTop = "5rem";
    file3.style.position = "relative";
    file3.style.transition = "1s";
    caption3.style.display = "inline"
    file4.style.marginTop = "5rem";
    file4.style.position = "relative";
    file4.style.transition = "1s";
    caption4.style.display = "inline";
    openFolder.style.display = "block";
    folder.style.display = "none";
    openFolder.addEventListener('click', filesIn);
    folder.removeEventListener('click', filesOut);
    folder.addEventListener('click', filesIn);
}

let filesIn = function() {
    file1.style.marginTop = "-5rem";
    file1.style.position = "fixed";
    caption1.style.display = "none";
    file2.style.marginTop = "-10rem";
    file2.style.position = "fixed";
    caption2.style.display = "none";
    file3.style.marginTop = "-10rem";
    file3.style.position = "fixed";
    caption3.style.display = "none";
    file4.style.marginTop = "-10rem";
    file4.style.position = "fixed";
    caption4.style.display = "none";
    openFolder.style.display = "none";
    folder.style.display = "block";
    folder.removeEventListener('click', filesIn);
    folder.addEventListener('click', filesOut);
}


folder.addEventListener('click', filesOut);


