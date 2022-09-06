const toggler = document.querySelectorAll('[class$="directory"], [class$="label"]');

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
  'ae6-directory': ['.ae6-directory', '.ae6-label'],
  't01-directory': ['.t01-directory', '.t01-label'],
  't02-directory': ['.t02-directory', '.t02-label'],
  't03-directory': ['.t03-directory', '.t03-label'],
  't04-directory': ['.t04-directory', '.t04-label'],
  't05-directory': ['.t05-directory', '.t05-label'],
  't06-directory': ['.t06-directory', '.t06-label'],
  't07-directory': ['.t07-directory', '.t07-label'],
  't08-directory': ['.t08-directory', '.t08-label'],
  't09-directory': ['.t09-directory', '.t09-label'],
  't10-directory': ['.t10-directory', '.t10-label'],
  't11-directory': ['.t11-directory', '.t11-label'],
  't12-directory': ['.t12-directory', '.t12-label'],
  't13-directory': ['.t13-directory', '.t13-label'],
  't14-directory': ['.t14-directory', '.t14-label'],
  't15-directory': ['.t15-directory', '.t15-label'],
  't16-directory': ['.t16-directory', '.t16-label'],
  't17-directory': ['.t17-directory', '.t17-label'],
  't18-directory': ['.t18-directory', '.t18-label'],
  't20-directory': ['.t20-directory', '.t20-label'],
  't21-directory': ['.t21-directory', '.t21-label'],
  't22-directory': ['.t22-directory', '.t22-label'],
  't23-directory': ['.t23-directory', '.t23-label'],
  't24-directory': ['.t24-directory', '.t24-label'],

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