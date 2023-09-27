
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
  const length = 27;

  for (let i = 0; i < elements.length; i++) {
    const text = generateRandomString(length);
    const maxLineLength = 15; // 改行するテキストの長さの上限

    let formattedText = '';
    for (let j = 0; j < text.length; j++) {
      formattedText += text.charAt(j);

      if ((j + 1) % maxLineLength === 0) {
        formattedText += '\n'; // 改行を追加
      }
    }

    elements[i].textContent = formattedText;
  }
}

// 1秒ごとにテキストを更新
setInterval(replaceText, 1000);