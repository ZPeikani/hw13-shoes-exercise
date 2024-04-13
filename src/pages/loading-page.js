import { Loading } from "../templates/start/loading";
import { El } from "../utils/createElement";

export function LoadingPage() {
  const element = El({
    element: "div",
  });
  const child = Loading();
  element.append(child);
  return element;
}
