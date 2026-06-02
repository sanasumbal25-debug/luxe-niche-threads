import suit1 from "../assets/suit1.jpg";
import suit2 from "../assets/suit2.jpg";
import suit3 from "../assets/suit3.jpg";
import suit4 from "../assets/suit4.jpg";

function InstagramGallery() {

  return (

    <section className="insta-gallery">

      <h2>
        Follow Us On Instagram
      </h2>

      <div className="insta-grid">

        <img src={suit1} alt="" />
        <img src={suit2} alt="" />
        <img src={suit3} alt="" />
        <img src={suit4} alt="" />

      </div>

    </section>

  );
}

export default InstagramGallery;