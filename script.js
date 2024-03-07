/* 			ROLAGEM			 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
  
	  const target = document.querySelector(this.getAttribute('href'));
	  if (target) {
		const offset = target.offsetTop - 70; // Ajuste para distância da navbar, por exemplo, 70px
		window.scrollTo({
		  top: offset,
		  behavior: 'smooth'
		});
	  }
	});
  });


// CONTATO
  document.getElementById('emailButton').addEventListener('click', function() {
    window.location.href = 'mailto:codeinx.work@gmail.com';
  });

  document.getElementById('whatsappButton').addEventListener('click', function() {
    window.location.href = 'https://wa.link/ytownh';
  });

  // typewriter
  const textEl = document.querySelector(".text");
  const wordsEl = document.querySelector(".words");

  const words = ["Parceira", "Inovadora", "Criativa", "Transparente", "Apaixonada"].map((word) => word + ".");

  let wordIndex = 0;
  let charIndex = 0;

  let addingChars = true;
  let shouldWait = false;

  let currentWord = words[wordIndex];

  const updateCurrWord = () => {
    wordIndex++;

    if (wordIndex === words.length) wordIndex = 0;

    currentWord = words[wordIndex];
  };

  const addChar = () => {
    let currChar = currentWord[charIndex];

    const char = document.createElement("span");
    char.innerText = currChar;
    char.classList.add("char");

    wordsEl.appendChild(char);

    charIndex++;

    if (charIndex === currentWord.length) {
      charIndex--;
      addingChars = false;
      shouldWait = true;
    }
  };

  const removeChar = () => {
    const char = wordsEl.lastElementChild;

    wordsEl.removeChild(char);

    charIndex--;

    if (charIndex < 0) {
      charIndex++;
      addingChars = true;
      updateCurrWord();
    }
  };

  const runTypewriter = () => {
    const operation = addingChars ? addChar : removeChar;

    operation();

    let timeout = addingChars ? 200 : 100;

    if (shouldWait) {
      timeout = 1000;
      shouldWait = false;
    }

    setTimeout(runTypewriter, timeout);
  };

  setTimeout(runTypewriter, 1500);