function pad(pad, str, padLeft) {
  if (typeof str === 'undefined') 
    return pad;
  if (padLeft) {
    return (pad + str).slice(-pad.length);
  } else {
    return (str + pad).substring(0, pad.length);
  }
}

function repeatChar(char, times){
  var result = '';
  for(var i = 0; i<times;i++)
    result += char;
  return result;
}

function removeChar(str, charToRemove){
  str = str.toString();
  return str.replace(charToRemove,'');
}