
const letters = {
  sister: {
    emoji: "🎓💗",
    kicker: "For my incredible sister",
    title: "To my amazing sister",
    photo: "images/sister.jpg",
    paragraphs: [
      "Congratulations on completing your Bachelor's degree and placing second in your faculty! I am so incredibly proud of you and everything you have accomplished. As your little sister, there is something so special about watching you grow, achieve your goals, and make something of your life. Seeing you reach this milestone makes me genuinely happy, and I hope you take the time to celebrate yourself and recognize just how far you have come.",
      "I know that life doesn't always move the way we expect it to, and sometimes we find ourselves at a standstill, unsure of what comes next. But I want you to know that I believe in you, even during the moments when you might struggle to believe in yourself. I truly believe that great things are waiting for you. Sometimes, all it takes is a little more time, patience, and the will to keep going. You don't have to have everything figured out right now, and you don't have to rush your journey just because life looks different from what you imagined.",
      "I hope you never forget how capable, intelligent, and deserving you are. You have already accomplished so much, and I know there is still so much more ahead of you. I will always be cheering you on, celebrating your wins, and reminding you of your potential whenever you need it. Being able to see you doing well in life is something I am so grateful for, and I hope the future brings you the happiness, peace, opportunities, and success you deserve.",
      "Congratulations once again! I love you so much, and I am beyond proud to be your little sister. No matter where life takes you or how long it takes to get where you want to be, I will always believe that there are beautiful things waiting for you. ♡"
    ]
  },

  mom: {
    emoji: "🌷💗",
    kicker: "For my wonderful Mom",
    title: "To my wonderful Mom",
    photo: "images/mom.jpg",
    paragraphs: [
      "Congratulations, Mom, on completing your Associate's degree! I am so, so proud of you. Seeing you reach this milestone means more to me than I could ever fully explain. I know this journey wasn't easy, and I know that finishing your degree took years of patience, sacrifice, and determination. But you did it, Mom, and I hope you understand just how incredible that is.",
      "You spent so much of your life putting your children first, making sacrifices for me and my sister, and putting parts of your own dreams and education on the back burner so that we could have the opportunities we needed. You gave up so much of your own time and put so much of yourself into raising us. I hope you know that none of those sacrifices go unnoticed or unappreciated. I see how much you have done for us, and I will always be grateful for it.",
      "One of the things that makes me happiest is knowing that, after all those years, you found your way back to something that was important to you. You didn't let the time that passed or the obstacles along the way stop you from finishing what you started. And to me, that is something truly worth celebrating. You have reminded me that it is never too late to pursue a dream, that our journeys don't always happen on the timeline we expect, and that determination can carry us through so much. I hope you give yourself the same grace and pride that you have always given us.",
      "As your daughter, I am proud of your accomplishment, but I am also proud of the woman you are. I am proud of everything you have overcome, everything you have given, and the strength you have shown throughout the years. I hope this achievement is a reminder that your dreams matter too, and that you deserve to keep pursuing them. You have spent so much time helping us build our futures, and I hope you continue to build a beautiful future for yourself as well.",
      "I also know that Grandpa would be so incredibly proud of you, Mom. I can only imagine how happy he would be to see you reach this milestone, knowing everything you had to overcome and sacrifice along the way. And I know he would be just as proud to see you continuing on to your Bachelor's degree instead of giving up on your dreams. You have come so far, and I hope you never underestimate how amazing that is. So proud of you!!!!. "
    ]
  },

  stepdad: {
    emoji: "💛✨",
    kicker: "For my stepdad",
    title: "To my  stepdad",
    photo: "images/stepdad.jpg",
    paragraphs: [
      "As I celebrate this milestone in my life, I want to take a moment to thank you for the important part you have played in helping me get here. Thank you for supporting my education, for helping me financially, and for investing in my future. I know that education takes more than just hard work from the person pursuing it, and I am so grateful to have had your support along the way.",
      "Thank you for helping me work toward my dreams and giving me the opportunity to keep pursuing the things I want for myself. Your support has helped me come this far, and it means so much to know that someone is willing to invest in my future and believe in what I can become. I don't ever want you to think that I take what you have done for me for granted, because I truly don't.",
      "As I continue growing, learning, and working toward the future I envision for myself, I hope to make you proud. I know I still have so much to learn and so many goals I want to accomplish, but I am grateful that I have been able to take these steps with your help and support. The opportunities you have helped give me are something I will always appreciate, and I hope that one day I can look back on everything I have achieved and know that your support was part of the reason I got there.",
      "Thank you for being there for me and for helping me work toward a better future. I appreciate you more than I may always express, and I am genuinely grateful to have you as part of my life. This achievement means a lot to me, and I wanted you to know that I recognize the part you have played in it. Thank you for supporting my education and my dreams. It means more than words can say. ♡"
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
