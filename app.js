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