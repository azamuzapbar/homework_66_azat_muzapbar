const colors = ['#ADFF2F', '#FF0000', '#FF1493', '#00FFFF', '#9932CC'];

function addNewElement() {
  for (let i = 0; i < 5; i++) {
    let element = document.createElement('div');
    element.className = 'element';
    element.innerHTML = `Element <span style='color: ${colors[i]}'>${i+1}</span>`;
    document.getElementById("container").appendChild(element);
  }
}

addNewElement();
