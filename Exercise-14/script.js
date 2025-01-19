let cont = document.querySelector(".cont");
let msgs = [
  "Initializing Hacking",
  "Reading your files",
  "Password Files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning Up",
];

async function logs() {
  for (const item of msgs) {
    let x = new Promise((resolve, reject) => {
      let tm = Math.floor(Math.random() * 7) + 1;
      setTimeout(() => {
        resolve(item)
      }, tm * 1000);
    });
    await x
    let d = document.createElement("div")
    d.innerHTML = item
    cont.appendChild(d)
  }
}

async function clear() {
  await logs();

  setTimeout(() => {
    document.body.innerHTML = ''
  }, 1500);
}

setInterval(() => {
  let lst = cont.lastElementChild;
  if (lst && lst.innerHTML.endsWith("...")){
    lst.innerHTML = lst.innerHTML.slice(0, lst.innerHTML.length - 3);
  }
  else{
    lst.innerHTML += '.'
  }
}, 500);

clear();
