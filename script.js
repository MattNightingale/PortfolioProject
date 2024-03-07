

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