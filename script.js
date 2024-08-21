document.addEventListener('DOMContentLoaded', () => {
    let image = document.querySelector('img');
    image.onclick = () => {
      console.log('Ovo je slika palestinske masline!');
    };
  });
//Drugi zadatak
  document.getElementById('read-more').addEventListener('click', function() {
    document.getElementById('extra-text').style.display = 'block';
    
});