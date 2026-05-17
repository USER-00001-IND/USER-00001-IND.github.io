import { useEffect, useState } from "react";

export function useTypingEffect(words, speed = 62, pause = 1200) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const doneTyping = !deleting && letterIndex === currentWord.length;
    const doneDeleting = deleting && letterIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (doneTyping) {
          setDeleting(true);
          return;
        }
        if (doneDeleting) {
          setDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
          return;
        }
        setLetterIndex((index) => index + (deleting ? -1 : 1));
      },
      doneTyping ? pause : deleting ? speed / 1.8 : speed
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, letterIndex, pause, speed, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}
