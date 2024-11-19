document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const wordCountDisplay = document.getElementById("wordcount");
    const sentenceCountDisplay = document.getElementById("sentenceCount");
  
    textInput.addEventListener("input", () => {
      const text = textInput.value.trim();
  
      // calculate word count
      const words = text.split(/\s+/).filter(word => word.length > 0);
      const wordCount = words.length;
  
      // calculate sentence count
      const sentences = text.split(/[.!?]\s+/).filter(sentence => sentence.length > 0);
      const sentenceCount = sentences.length;
  
      // update count
      wordCountDisplay.textContent = `Words: ${wordCount}`;
      sentenceCountDisplay.textContent = `Sentences: ${sentenceCount}`;
    });
  });
  