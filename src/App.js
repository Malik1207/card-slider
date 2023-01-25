import "./App.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

function App() {
  return (
    <div className="bg-primary">
      <Splide
        aria-label="My Favorite Images"
        data-splide='{
        "type":"loop",
        "perPage":3,
        "gap":"1rem",
        "breakpoints":{
          "768":{
            "perPage":2
          },
          "576":{
            "perPage":1
          }
        }
      }'
      >
        <SplideSlide>
          <div class="card">
            <img src="https://akcdn.detik.net.id/community/media/visual/2023/01/23/cristiano-ronaldo.jpeg?w=700&q=90" alt="Image 1" />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="card">
            <img src="https://akcdn.detik.net.id/community/media/visual/2023/01/23/cristiano-ronaldo.jpeg?w=700&q=90" alt="Image 1" />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="card">
            <img src="https://akcdn.detik.net.id/community/media/visual/2023/01/23/cristiano-ronaldo.jpeg?w=700&q=90" alt="Image 1" />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default App;
