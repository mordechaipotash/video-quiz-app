const videoId = 'Ni3U7agZvdk';
const questions = [
  {
    text: 'What impressive feat can GPT-4 Vision perform with illegible non-English text?',
    startTime: 569,
    endTime: 596
  },
  {
    text: 'How did GPT-4 Vision turn a poorly lit photo of a day planner into a working computer program?',
    startTime: 661,
    endTime: 690
  },
  {
    text: 'What unbelievable task can ChatGPT perform with just a photo of a whiteboard brainstorming session?',
    startTime: 817,
    endTime: 842
  },
  {
    text: 'How does Meshy AI drastically simplify the process of texturing 3D models for games?',
    startTime: 1323,
    endTime: 1353
  },
  {
    text: 'What incredible voice cloning capability is now available open source?',
    startTime: 1384,
    endTime: 1409
  },
  {
    text: 'What exciting type of video game is showcased that leverages large language models?',
    startTime: 1454,
    endTime: 1479
  }
];

let player;
let currentQuestion;
let remainingQuestions = [...questions];

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  showNextQuestions();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    showNextQuestions();
  }
}

function showNextQuestions() {
  if (remainingQuestions.length === 0) {
    document.getElementById('questions').innerHTML = 'No more questions available.';
    document.getElementById('questionTitle').innerHTML = '';
    return;
  }

  const questionElements = [];

  for (let i = 0; i < 2 && remainingQuestions.length > 0; i++) {
    const question = remainingQuestions[i];
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = `${question.text} (${question.startTime}-${question.endTime})`;
    button.onclick = () => playQuestion(question);
    question
