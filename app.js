const rootSelector = document.getElementById('root');
const scaleSelector = document.getElementById('scale');
const chordSelector = document.getElementById('chord');
const noteSpan = document.querySelectorAll('.note');
const scaleLabel = document.querySelector('.scale-label');
const chordLabel = document.querySelector('.chord-label');

let key = rootSelector.options[rootSelector.selectedIndex].value;
let rootNote = document.querySelector('.' + key);
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
        retScale.push(notes[i]);
    }
    return retScale;
}

function scalify() {
    noteSpan.forEach(function (note) {
        note.style.opacity = "0";
    });
    for (let i = 0; i < scale.length; i++) {
        let notes = document.querySelectorAll("." + scale[i]);
        notes.forEach(function (note) {
            note.style.opacity = "1";
        });
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

const keyCs = document.querySelector('.key-cs');
const keyD = document.querySelector('.key-d');
const keyDs = document.querySelector('.key-ds');
const keyE = document.querySelector('.key-e');
const keyF = document.querySelector('.key-f');
const keyFs = document.querySelector('.key-fs');
const keyG = document.querySelector('.key-g');
const keyGs = document.querySelector('.key-gs');
const keyA = document.querySelector('.key-a');
const keyAs = document.querySelector('.key-as');
const keyB = document.querySelector('.key-b');

const pianoKeys = document.querySelector(".board");
pianoKeys.addEventListener("click", playKeynote);
const playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", playScale);

function playScale() {
    const fScale = scale.map(note => note.toLowerCase());
    if (scaleLabel.classList.contains("inactive")) {
        const fScale = scale.map(note => note.toLowerCase());
        fScale.forEach(element => {
            playNote(element)
            keyGlow(element)
        });
    } else {
        let i = 0;
        fScale.forEach(element => {
            ++i;
            setTimeout((i) => {
                playNote(element)
                keyGlow(element)
            }, 0 + (60 / 150) * (1000 * i));
        });
    }
}

function playKeynote(e) {
    if (e.target !== e.currentTarget) {
        const keyNote = e.target.className.substring(10);
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
        case 'c':
            noteC2.start();
            break;
        case 'cs':
            noteCs2.start();
            break;
        case 'd':
            noteD2.start();
            break;
        case 'ds':
            noteDs2.start();
            break;
        case 'e':
            noteE2.start();
            break;
        case 'f':
            noteF2.start();
            break;
        case 'fs':
            noteFs2.start();
            break;
        case 'g':
            noteG2.start();
            break;
        case 'gs':
            noteGs2.start();
            break;
        case 'a':
            noteA2.start();
            break;
        case 'as':
            noteAs2.start();
            break;
        case 'b':
            noteB2.start();
            break;
    }
}