import { El } from "../../utils/createElement";

export function Welcome() {
  return El({
    element: "div",
    className:
      "bg-[url('./src/assets/imgs/Wallpaper.svg')] w-[428px] h-[926px] relative",
    children: [
      El({
        element: "div",
        className: "w-[428px] h-[926px] backdrop-brightness-75",
        children: [
          El({
            element: "div",
            className:
              "absolute bottom-0 right-0 left-0 px-8 pb-20 text-white font-inter",
            children: [
              El({
                element: "p",
                className:
                  "text-[40px] font-semibold leading-none animate-[fadeRight_1s_1]",
                innerText: "Welcome to 👋",
              }),
              El({
                element: "p",
                className:
                  "text-[72px] font-bold leading-loose animate-[fadeRight_2s_1]",
                innerText: "Shoea",
              }),
              El({
                element: "p",
                className: "text-[16px] font-semibold leading-none animate-[fadeRight_2.5s_1]",
                innerText:
                  "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
