const rootSelector = document.getElementById('root');
const scaleSelector = document.getElementById('scale');
const chordSelector = document.getElementById('chord');
const noteSpan = document.querySelectorAll('.note');
const scaleLabel = document.querySelector('.scale-label');
const chordLabel = document.querySelector('.chord-label');

let key = rootSelector.options[rootSelector.selectedIndex].value;
let rootNote = document.querySelector('.' + key + '2');
rootNote.classList.add("note--root");

let activeInterval = scaleSelector.options[scaleSelector.selectedIndex].value;

let scale = [];

const notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'];

chordLabel.addEventListener('click', function () {
    this.classList.remove("inactive");
    scaleLabel.classList.add("inactive");
    chordSelector.classList.remove("inactive");
    scaleSelector.classList.add("inactive");

    let intervalNumber = chordSelector.options[chordSelector.selectedIndex].value;
    activeInterval = Array.from(String(intervalNumber), Number);
    scale = createScale();
    scalify()
    return scale
})

scaleLabel.addEventListener('click', function () {
    this.classList.remove("inactive");
    chordLabel.classList.add("inactive");
    scaleSelector.classList.remove("inactive");
    chordSelector.classList.add("inactive");

    let intervalNumber = scaleSelector.options[scaleSelector.selectedIndex].value;
    activeInterval = Array.from(String(intervalNumber), Number);
    scale = createScale();
    scalify()
    return scale
})

chordSelector.addEventListener('change', function () {
    chordLabel.classList.remove("inactive");
    scaleLabel.classList.add("inactive");
    this.classList.remove("inactive");
    scaleSelector.classList.add("inactive");

    let intervalNumber = this.value;
    activeInterval = Array.from(String(intervalNumber), Number);
    scale = createScale();
    scalify()
    return scale
})

scaleSelector.addEventListener('change', function () {
    scaleLabel.classList.remove("inactive");
    chordLabel.classList.add("inactive");
    this.classList.remove("inactive");
    chordSelector.classList.add("inactive");

    let intervalNumber = this.value;

    activeInterval = Array.from(String(intervalNumber), Number);
    scale = createScale();
    scalify()
    return scale
})

rootSelector.addEventListener('change', function () {
    key = this.value;
    scale = createScale();
    noteSpan.forEach(note => {
        note.classList.remove("note--root");
    })
    let rootNote = document.querySelector('.' + scale[0])
    rootNote.classList.add("note--root");
    scalify()
    return scale
})

function createScale() {
    let retScale = [];
    for (let i = notes.indexOf(key), j = 0; j < activeInterval.length + 1; i = (i + activeInterval[j++]) % notes.length) {
        if (i < notes.indexOf(key)) {
            retScale.push(notes[i] + '3');
        } else {
            retScale.push(notes[i] + '2');
        }
        console.log('i' + i);
        console.log('j' + j)
        console.log('notes i ' + notes[i])
    }
    return retScale;
}

function scalify() {
    noteSpan.forEach(note => note.style.opacity = "0");
    for (let i = 0; i < scale.length; i++) {
        let notes = document.querySelectorAll("." + scale[i]);
        notes.forEach(note => note.style.opacity = "1");
    }
}

const noteC2 = new Tone.Player('./sound/c2.mp3').toDestination();
const noteE2 = new Tone.Player('./sound/e2.mp3').toDestination();
const noteG2 = new Tone.Player('./sound/g2.mp3').toDestination();
const noteCs2 = new Tone.Player('./sound/cs2.mp3').toDestination();
const noteD2 = new Tone.Player('./sound/d2.mp3').toDestination();
const noteDs2 = new Tone.Player('./sound/ds2.mp3').toDestination();
const noteF2 = new Tone.Player('./sound/f2.mp3').toDestination();
const noteFs2 = new Tone.Player('./sound/fs2.mp3').toDestination();
const noteGs2 = new Tone.Player('./sound/gs2.mp3').toDestination();
const noteA2 = new Tone.Player('./sound/a2.mp3').toDestination();
const noteAs2 = new Tone.Player('./sound/as2.mp3').toDestination();
const noteB2 = new Tone.Player('./sound/b2.mp3').toDestination();

const noteC3 = new Tone.Player('./sound/c3.mp3').toDestination();
const noteE3 = new Tone.Player('./sound/e3.mp3').toDestination();
const noteG3 = new Tone.Player('./sound/g3.mp3').toDestination();
const noteCs3 = new Tone.Player('./sound/cs3.mp3').toDestination();
const noteD3 = new Tone.Player('./sound/d3.mp3').toDestination();
const noteDs3 = new Tone.Player('./sound/ds3.mp3').toDestination();
const noteF3 = new Tone.Player('./sound/f3.mp3').toDestination();
const noteFs3 = new Tone.Player('./sound/fs3.mp3').toDestination();
const noteGs3 = new Tone.Player('./sound/gs3.mp3').toDestination();
const noteA3 = new Tone.Player('./sound/a3.mp3').toDestination();
const noteAs3 = new Tone.Player('./sound/as3.mp3').toDestination();
const noteB3 = new Tone.Player('./sound/b3.mp3').toDestination();

const keyCs2 = document.querySelector('.key-cs2');
const keyD2 = document.querySelector('.key-d2');
const keyDs2 = document.querySelector('.key-ds2');
const keyE2 = document.querySelector('.key-e2');
const keyF2 = document.querySelector('.key-f2');
const keyFs2 = document.querySelector('.key-fs2');
const keyG2 = document.querySelector('.key-g2');
const keyGs2 = document.querySelector('.key-gs2');
const keyA2 = document.querySelector('.key-a2');
const keyAs2 = document.querySelector('.key-as2');
const keyB2 = document.querySelector('.key-b2');

const keyCs3 = document.querySelector('.key-cs3');
const keyD3 = document.querySelector('.key-d3');
const keyDs3 = document.querySelector('.key-ds3');
const keyE3 = document.querySelector('.key-e3');
const keyF3 = document.querySelector('.key-f3');
const keyFs3 = document.querySelector('.key-fs3');
const keyG3 = document.querySelector('.key-g3');
const keyGs3 = document.querySelector('.key-gs3');
const keyA3 = document.querySelector('.key-a3');
const keyAs3 = document.querySelector('.key-as3');
const keyB3 = document.querySelector('.key-b3');

const pianoKeys = document.querySelector(".board");
pianoKeys.addEventListener("click", playKeynote);
const playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", playScale);

function playScale() {
    const fScale = scale.map(note => note.toLowerCase());
    if (scaleLabel.classList.contains("inactive")) {
        const fScale = scale.map(note => note.toLowerCase());
        fScale.forEach(keyNote => {
            playNote(keyNote)
            keyGlow(keyNote)
        });
    } else {
        let i = 0;
        fScale.forEach(keyNote => {
            ++i;
            setTimeout((i) => {
                playNote(keyNote)
                keyGlow(keyNote)
            }, 0 + (60 / 150) * (1000 * i));
        });
    }
}

function playKeynote(e) {
    if (e.target !== e.currentTarget) {
        const keyNote = e.target.className.substring(10);
        // const that = e.target;
        if (keyNote.includes('s')) {
            e.target.style.backgroundColor = '#000'
        } else {
            e.target.style.backgroundColor = '#fff'
        }
        gsap.from(e.target, {
            backgroundColor: '#E74C3C',
            duration: 2.5,
            ease: "power4.out"
        });
        console.log(keyNote)
        playNote(keyNote);
    }
    e.stopPropagation();
}

function keyGlow(keyNote) {
    const item = document.querySelector('.key-' + keyNote);

    if (keyNote.includes('s')) {
        item.style.backgroundColor = '#000'
    } else {
        item.style.backgroundColor = '#fff'
    }

    gsap.from(item, {
        backgroundColor: '#E74C3C',
        duration: 2.5,
        ease: "power4.out"
    });
}

function playNote(keyNote) {
    console.log(keyNote)
    switch (keyNote) {
        case 'c2':
            noteC2.start();
            break;
        case 'cs2':
            noteCs2.start();
            break;
        case 'd2':
            noteD2.start();
            break;
        case 'ds2':
            noteDs2.start();
            break;
        case 'e2':
            noteE2.start();
            break;
        case 'f2':
            noteF2.start();
            break;
        case 'fs2':
            noteFs2.start();
            break;
        case 'g2':
            noteG2.start();
            break;
        case 'gs2':
            noteGs2.start();
            break;
        case 'a2':
            noteA2.start();
            break;
        case 'as2':
            noteAs2.start();
            break;
        case 'b2':
            noteB2.start();
            break;

        case 'c3':
            noteC3.start();
            break;
        case 'cs3':
            noteCs3.start();
            break;
        case 'd3':
            noteD3.start();
            break;
        case 'ds3':
            noteDs3.start();
            break;
        case 'e3':
            noteE3.start();
            break;
        case 'f3':
            noteF3.start();
            break;
        case 'fs3':
            noteFs3.start();
            break;
        case 'g3':
            noteG3.start();
            break;
        case 'gs3':
            noteGs3.start();
            break;
        case 'a3':
            noteA3.start();
            break;
        case 'as3':
            noteAs3.start();
            break;
        case 'b3':
            noteB3.start();
            break;
    }
}