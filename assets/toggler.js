const toggler = document.querySelectorAll('[class$="directory"]');

const directoryClassName = {
  'fa-folder directory' : ['.directory', '.internal-label'],
  'entrain-directory': ['.entrain-directory', '.entrain-label'],
  'a01-directory': ['.a01-directory', '.a01-label'],
  'a02-directory': ['.a02-directory', '.a02-label'],
  'a03-directory': ['.a03-directory', '.a03-label'],
  'a05-directory': ['.a05-directory', '.a05-label'],
  'a07-directory': ['.a07-directory', '.a07-label'],
  'a08-directory': ['.a08-directory', '.a08-label'],
  'a09-directory': ['.a09-directory', '.a09-label'],
  'a10-directory': ['.a10-directory', '.a10-label'],
  'a11-directory': ['.a11-directory', '.a11-label'],
  'ae4-directory': ['.ae4-directory', '.ae4-label'],
  'ae6-directory': ['.ae6-directory', '.ae6-label']
}

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active")
    for (let directory in directoryClassName) {
      if (toggler[i].outerHTML.includes(directory)) {
        directoryToggle(directoryClassName[directory][0], directoryClassName[directory][1]);
      }
    }
  });
}

function directoryToggle(firstEle, secondEle) {
  const directoryEle = $('#myUL li');
  directoryEle.find(firstEle).toggleClass('fa-folder-open');
  directoryEle.find(secondEle).toggleClass('font-weight-bold');
}


