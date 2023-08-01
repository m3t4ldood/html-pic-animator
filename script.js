const demoTracks = [
  { title: "Track 1", source: "audio/track1.mp3", artwork: "artwork1.png" },
  { title: "Track 2", source: "audio/track2.mp3", artwork: "artwork2.png" },
  // Add more tracks here
];

const audioPlayer = document.getElementById("audioPlayer");
const artworkContainer = document.getElementById("artworkContainer");
const trackListElement = document.getElementById("trackList");

// Function to create track list items
function createTrackListItem(track) {
  const li = document.createElement("li");
  li.textContent = track.title;
  li.addEventListener("click", () => {
    audioPlayer.src = track.source;
    audioPlayer.play();
    displayArtwork(track.artwork);
  });
  return li;
}

// Function to display artwork
function displayArtwork(artwork) {
  artworkContainer.innerHTML = `<img src="${artwork}" alt="Artwork">`;
}

// Function to populate the track list
function populateTrackList() {
  for (const track of demoTracks) {
    const trackListItem = createTrackListItem(track);
    trackListElement.appendChild(trackListItem);
  }
}

// Call the function to populate the track list
populateTrackList();
