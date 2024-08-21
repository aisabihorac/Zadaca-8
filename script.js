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
//TReci zadatak
function  ispisiRijec(rijec){
    console.log("Vasa rijec za pretragu je: " + rijec)

}
ispisiRijec("polica");
ispisiRijec("zemlja");

//Opcionalni zadatak
function ispisiBroj(broj) {
    if (broj >= 2) {
      if (broj % 2 === 0) {
        console.log(broj);
      }
      ispisiBroj(broj - 1); 
    }
  }
  ispisiBroj(100);