
import "./Home.css"
import 'animate.css';
import Footbar from "../../components/footbar/Footbar";
import { Link } from "react-router-dom";
import timer from "../../img/alarm-1-svgrepo-com.svg"
function Home() {
  

function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals[i].getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
  } else {
    reveals[i].classList.remove("active");
  }
}
}
window.addEventListener("scroll", reveal);









  return (

    <div className='home-container'>


<section className="home-section">
<h1 className="t1-home">CIRON STUDIO</h1>
</section>
<section className="home-section">
<div className="container reveal">
<h2 className="h2-sec1">Notre activité</h2>
<div className="text-container">
  
  <div className="text-box">
    <h3 className="h3-sec1">Votre site internet sur mesure</h3>
    <p className="p-sec1">
      Deployez votre presence en ligne, nous vous accompagnons de la conception À la maintenance.
    </p>
  </div>
  <div className="text-box">
    <h3 className="h3-sec1">votre jeu video À portee de main</h3>
    <p className="p-sec1">
      Pour les projets les plus ambitieux, nous concevons votre jeu mobile ou PC.
    </p>
  </div>
</div>
</div>
</section>



<section className="home-section">
<div className="container reveal">
<h2 id="nous-contacter"><Link  to="Contact"> Nous contacter</Link></h2>

</div>

</section>
</div>
  )
}

export default Home