import { El } from "../utils/createElement";
export function Loading() {
  return El({
    element: "div",
    className: "flex flex-col justify-center items-center h-screen",
    children: [
      El({
        element: "div",
        className: "flex gap-2 justify-center items-center h-screen",
        children: [
          El({
            element: "img",
            src: "./src/assets/imgs/Logo.svg",
          }),
          El({
            element: "P",
            innerText: "Shoea",
            className: "text-[52px] font-inter font-bold",
          }),
        ],
      }),
      El({
        element: "img",
        src: "./src/assets/imgs/spinner-atom.svg",
        className:"mb-28"
      }),
    ],
  });
}
