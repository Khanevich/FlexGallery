const panels = document.querySelectorAll('.panel');

function toggleOpen() {
console.log('Hello');
this.classList.toggle('open');
}

for(var i=0;i<panels.length;i++){
panels[i].onclick = toggleOpen;
}

function toggleActive(e) {
  console.log(e);
  if (e.propertyName.includes('flex')) {
   this.classList.toggle('open-active');
    }
}

for(var i=0;i<panels.length;i++){
// panels[i].ontransitionend = toggleActive;
}
