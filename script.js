const letters = {
  sister: {
    emoji: "🎓💗",
    kicker: "For my incredible sister",
    title: "To my amazing sister",
    photo: "images/sister.jpg",
    paragraphs: [
      "Congratulations on completing your Bachelor's degree and placing second in your faculty! I am so incredibly proud of you and everything you have accomplished. This is such a huge achievement, and I hope you take the time to celebrate yourself and recognize how much your hard work has paid off.",
      "Seeing you reach this milestone makes me so happy. I hope you know how deserving you are of every good thing that comes your way. May this accomplishment open doors to even greater opportunities, success, happiness, and a future filled with everything you've been working toward.",
      "I wish you nothing but the best as you begin this new chapter of your life. Keep believing in yourself, keep reaching for your dreams, and never forget how capable you are of achieving amazing things.",
      "Congratulations once again! I love you, and I couldn't be prouder to call you my sister. ♡"
    ]
  },
  mom: {
    emoji: "🌷💗",
    kicker: "For my wonderful Mom",
    title: "To my wonderful Mom",
    photo: "images/mom.jpg",
    paragraphs: [
      "Congratulations, Mom, on completing your Associate's degree! I am so incredibly proud of you and happy to see you accomplish something so special. Seeing you reach this milestone means so much to me, and I hope you know just how amazing this achievement is.",
      "You deserve to feel proud of yourself for all the effort, dedication, and determination it took to get here. Your accomplishment is something worth celebrating, and I hope it reminds you that you are capable of achieving so many wonderful things.",
      "As you move forward into this new chapter, I wish you nothing but happiness, success, new opportunities, and the courage to keep pursuing whatever your heart desires. May this be one of many beautiful accomplishments in your life, because you deserve every bit of success and joy that comes your way.",
      "Congratulations once again, Mom! I love you so much, and I am beyond proud of you. ♡"
    ]
  },
  stepdad: {
    emoji: "💛✨",
    kicker: "For my wonderful stepdad",
    title: "To my amazing stepdad",
    photo: "images/stepdad.jpg",
    paragraphs: [
      "I want you to know how grateful I am to have you in my life. Thank you for the care, kindness, and support you've given me. It means more than I can always put into words.",
      "Thank you for showing up, encouraging me, and being someone I can count on. The little things you do and the love you share make a real difference, and I never take that for granted.",
      "I'm lucky to have you as part of my family. I hope you know how much I appreciate you and how much you mean to me. ♡"
    ]
  }
};

const panel = document.getElementById("letter-panel");
const chooseSection = document.querySelector(".choose-section");
const letterEmoji = document.getElementById("letter-emoji");
const letterKicker = document.getElementById("letter-kicker");
const letterTitle = document.getElementById("letter-title");
const letterCopy = document.getElementById("letter-copy");
const letterPhotoWrap = document.getElementById("letter-photo-wrap");
const letterPhoto = document.getElementById("letter-photo");

function openLetter(person) {
  const letter = letters[person];
  if (!letter) return;

  letterEmoji.textContent = letter.emoji;
  letterKicker.textContent = letter.kicker;
  letterTitle.textContent = letter.title;
  letterCopy.replaceChildren();

  letter.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    letterCopy.appendChild(p);
  });

  letterPhoto.src = letter.photo;
  letterPhoto.alt = `A photo of ${person === "mom" ? "Mom" : person === "stepdad" ? "my stepdad" : "my sister"}`;
  letterPhotoWrap.classList.remove("visible");
  letterPhoto.onload = () => letterPhotoWrap.classList.add("visible");
  letterPhoto.onerror = () => letterPhotoWrap.classList.remove("visible");

  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-recipient]").forEach((button) => {
  button.addEventListener("click", () => openLetter(button.dataset.recipient));
});

function closeLetter() {
  panel.hidden = true;
  chooseSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
document.getElementById("close-letter").addEventListener("click", closeLetter);
document.getElementById("back-button").addEventListener("click", closeLetter);
