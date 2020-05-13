export default class SanitizeHtml {

  sanitizeHtml (str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }
}
