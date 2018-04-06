/*
* how a regex output can be used for destructuring
* 
*/

function parseProtocol(url) { 
    var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
      return false;
    }
    console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
  
    var [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
  }
  
console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "ht