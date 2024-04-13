import { Welcome } from "../templates/start/welcome";
import { El } from "../utils/createElement";

export function WelcomePage() {
    const element = El({
      element: "div",
    });
    const child = Welcome();
    element.append(child);
    return element;
  }