function log()
{ if(document.getElementById('loga').style.display === '' || document.getElementById('loga').style.display === 'none')
    { document.getElementById('loga').style.display = 'flex' }
  else
    { document.getElementById('loga').style.display = 'none' }
}

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
    const phrases = [
        ["Where every flavour","tells a story"],
        ["For the love of","delicious food"],
        ["Flavours inspired","by seasons"]];

    let currentIndex = 0;
    function changeText() {
        p1.textContent = phrases[currentIndex][0];
        p2.textContent = phrases[currentIndex][1]
        currentIndex = (currentIndex + 1) % 3;
    }
    changeText();
    setInterval(changeText, 2000);

function rem()
{
document.getElementById('loga').style.display = 'none'
}