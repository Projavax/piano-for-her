const synth = new Tone.Synth().toDestination();
const keys = document.querySelectorAll('.key');
let playedNotes = [];

const secretMelody = ['C4', 'E4', 'G4']; // C major chord
const message = document.getElementById('message');

keys.forEach(key => {
  key.addEventListener('click', async () => {
    const note = key.dataset.note;
    await Tone.start(); // Needed for mobile autoplay restrictions
    synth.triggerAttackRelease(note, "8n");
    playedNotes.push(note);
    checkSecretMelody();
  });
});

function checkSecretMelody() {
  const recent = playedNotes.slice(-secretMelody.length);
  if (JSON.stringify(recent) === JSON.stringify(secretMelody)) {
    message.classList.add('show');
  } else {
    message.classList.remove('show');
  }
}
