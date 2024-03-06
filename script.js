

const largeCog = document.getElementById('largecog');

const smallCog = document.getElementById('smallcog');

let reverse = function() {
     smallCog.style.animationDirection = "reverse";
}

smallCog.addEventListener('onmouseover', reverse);