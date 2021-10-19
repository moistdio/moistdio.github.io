var body = document.getElementById('body');


var vidcontent = {
    preload: 'none',
    brightness: '',
    loop: '',
    playsinline: ''
}

vid = document.createElement('video');
vid.id = "background";
Object.entries(vidcontent).forEach(([k,v]) => {
    vid.setAttribute(k, v)
})

var sourcecontent= {
    src: 'visuals/vid.mp4',
    type: 'video/mp4'
}
source = document.createElement('source');
source.id = "mp4";
Object.entries(sourcecontent).forEach(([k,v])=>{
    source.setAttribute(k, v)
})
vid.appendChild(source);
body.appendChild(vid);

particles = document.createElement('div');
particles.id = "particles-js";
body.appendChild(particles);

header = document.createElement('h1');
header.id = "header";
header.setAttribute("class", "centered font");
text = document.createTextNode("Stay Tuned!");
header.appendChild(text);
body.appendChild(header);

bg_music = document.createElement('div');
bg_music.className = ("bg-music");

button = document.createElement('button');
button.className = "btn";

playcircle = document.createElement('i');
playcircle.className = "fa fa-play-circle-o";

pausecircle = document.createElement('i');
pausecircle.className = "fa fa-pause-circle-o";

button.appendChild(playcircle);
button.appendChild(pausecircle);

bg_music.appendChild(button);

body.appendChild(bg_music);

footer = document.createElement('footer');
footer.id = "footer";

content = document.createElement('p');
footertext = document.createTextNode("Soon");
br = document.createElement('br');
a = document.createElement('a');
a.setAttribute("href", "mailto:dstamatis@solidbooru.com");
a.appendChild((document.createTextNode("dstamatis@solidbooru.com")));

content.appendChild(footertext);
content.appendChild(br);
content.appendChild(a);
footer.appendChild(content);
body.appendChild(footer);
