var sBdr = function(tag_id){

    var body = document.getElementById(tag_id);

    this.sBdr = {
        video: {
            destination: './visuals/vid.mp4'
        },
        text: {
            content:'Relax',
            class: 'centered font'
        },
        fn: {
            div: {},
            objects: {},
            header: {},
            footer: {}
        }
    };

    var sBdr = this.sBdr;

    sBdr.fn.objects.initMainVideo = function(destination){
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
            src: destination,
            type: 'video/mp4'
        }
        source = document.createElement('source');
        source.id = "mp4";
        Object.entries(sourcecontent).forEach(([k,v])=>{
            source.setAttribute(k, v)
        })
        vid.appendChild(source);
        body.appendChild(vid);
    }

    sBdr.fn.div.initParticles = function(){
        particles = document.createElement('div');
        particles.id = "particles-js";
        body.appendChild(particles);
    }

    sBdr.fn.header.initMainHeader = function(text, css){
        header = document.createElement('h1');
        header.id = "header";
        header.setAttribute("class", css);
        text = document.createTextNode(text);
        header.appendChild(text);
        body.appendChild(header);
    }

    sBdr.fn.objects.initMainControlls = function(){
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
    }

    sBdr.fn.footer.initMainFooter = function(){
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
    }

    sBdr.fn.init = new function() {
        sBdr.fn.objects.initMainVideo(sBdr.video.destination);
        sBdr.fn.div.initParticles();
        sBdr.fn.header.initMainHeader(sBdr.text.content, sBdr.text.class);
        sBdr.fn.objects.initMainControlls();
        sBdr.fn.footer.initMainFooter();

    }
}

var test = new sBdr('body');
