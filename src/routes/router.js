import Navigo from "navigo";
import { LoadingPage } from "../pages/loading-page";
import { WelcomePage } from "../pages/welcome-page";
import { SwiperPages } from "../pages/swiperPages";

export function changePage(page) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(page);
}

const router = new Navigo("/");
export function Router() {
  router
    .on("/", () => {
      changePage(LoadingPage());
      setTimeout(() => {
        router.navigate("/welcome");
      }, 3000);
    })
    .on("/welcome", () => {
      changePage(WelcomePage());
      setTimeout(() => {
        router.navigate("/swiper");
      }, 5000);
    })
    .on("/swiper", () => {
      changePage(SwiperPages());
    });
  return router;
}
