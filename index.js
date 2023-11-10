
function generateRandomString(length) {
  let result = '';
  const characters = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわおんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉゃゅょ';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

function replaceText() {
  const elements = document.getElementsByClassName('target-element');
  const length = 5;

  for (let i = 0; i < elements.length; i++) {
    const text = generateRandomString(length);
    const maxLineLength = 15; 

    let formattedText = '';
    for (let j = 0; j < text.length; j++) {
      formattedText += text.charAt(j);

      if ((j + 1) % maxLineLength === 0) {
        formattedText += '\n'; 
      }
    }

    elements[i].textContent = formattedText;
  }
}

setInterval(replaceText, 1000);