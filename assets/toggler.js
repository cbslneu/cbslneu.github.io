const toggler = document.querySelectorAll('[class$="directory"]');
console.log(toggler);

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active")

    if (toggler[i].outerHTML.includes("fa-folder directory")) {
      $('#myUL li').find('.directory', '.internal-label').toggleClass('fa-folder-open', 'font-weight-bold');
      $('#myUL li').find('.internal-label').toggleClass('font-weight-bold');
    } else if (toggler[i].outerHTML.includes("entrain-directory")) {
      $('#myUL li').find('.entrain-directory').toggleClass('fa-folder-open');
      $('#myUL li').find('.entrain-label').toggleClass('font-weight-bold')
    } else if (toggler[i].outerHTML.includes("a01-directory")) {
      $('#myUL li').find('.a01-directory').toggleClass('fa-folder-open');
      $('#myUL li').find('.a01-label').toggleClass('font-weight-bold');
    } else if (toggler[i].outerHTML.includes("a02-directory")) {
      $('#myUL li').find('.a02-directory').toggleClass('fa-folder-open');
      $('#myUL li').find('.a02-label').toggleClass('font-weight-bold');
    } else if (toggler[i].outerHTML.includes("a03-directory")) {
      $('#myUL li').find('.a03-directory').toggleClass('fa-folder-open');
      $('#myUL li').find('.a03-label').toggleClass('font-weight-bold');
    } else if (toggler[i].outerHTML.includes("a05-directory")) {
      $('#myUL li').find('.a05-directory').toggleClass('fa-folder-open');
      $('#myUL li').find('.a05-label').toggleClass('font-weight-bold');
    } else if (toggler[i].outerHTML.includes("a07-directory")) {
      $('#myUL li').find('.a07-directory').toggleClass('fa-folder-open');
      $('#myUL li').find('.a07-label').toggleClass('font-weight-bold');
    } else if (toggler[i].outerHTML.includes("a08-directory")) {
      $('#myUL li').find('.a08-directory').toggleClass('fa-folder-open');
      $('#myUL li').find('.a08-label').toggleClass('font-weight-bold');
    } else if (toggler[i].outerHTML.includes("a09-directory")) {
      $('#myUL li').find('.a09-directory').toggleClass('fa-folder-open');
      $('#myUL li').find('.a09-label').toggleClass('font-weight-bold');
    } else if (toggler[i].outerHTML.includes("a10-directory")) {
      $('#myUL li').find('.a10-directory').toggleClass('fa-folder-open');
      $('#myUL li').find('.a10-label').toggleClass('font-weight-bold');
    } else {
      console.error("Directory doesn't exist");
    }
  });
}


