import nouxLogo3D from "./images/nouxLogo3D.jpg";
import xCardVector from "./images/xCardVector.svg";
import event from "./images/event.png";
import women from "./images/women.png";
import womenSideView from "./images/womanSideView.png";
import flower from "./images/flower.png";

export const images = {
  nouxLogo3D,
  xCardVector,
  event,
  women,
  womenSideView,
  flower,
};

export const icons = {
  arrow: (props) => (
    <svg
      viewBox="0 0 20 20"
      width={props.size || "20px"}
      height={props.size || "20px"}
      fill={props.color || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.4277 1.96437C7.4277 1.43176 7.85945 1 8.39205 1H18.0356C18.5682 1 19 1.43176 19 1.96437V11.6081C19 12.1407 18.5682 12.5725 18.0356 12.5725C17.503 12.5725 17.0713 12.1407 17.0713 11.6081V4.29255L2.64626 18.7175C2.26965 19.0942 1.65905 19.0942 1.28245 18.7175C0.905847 18.3409 0.905851 17.7303 1.28246 17.3537L15.7074 2.92874H8.39205C7.85945 2.92874 7.4277 2.49698 7.4277 1.96437Z" />
    </svg>
  ),
  xCardVector: () => (
    <svg
      width="451"
      height="447"
      viewBox="0 0 451 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M443.797 -33.7427L285.686 157.33L188.051 43.5868L279.113 -67.5935C284.106 -73.5516 291.468 -77 299.251 -77H423.659C445.998 -77 458.152 -50.879 443.797 -33.7427ZM443.439 402.743L48.8875 -67.5935C43.8952 -73.5516 36.5015 -77 28.7497 -77H-95.6896C-117.997 -77 -130.151 -50.879 -115.796 -33.7427L62.1266 178.347C65.181 182.027 65.181 187.363 62.1266 191.043L-115.469 402.743C-129.825 419.879 -117.671 446 -95.3631 446H29.0762C36.828 446 44.2217 442.583 49.214 436.625L156.443 308.772C160.383 304.101 167.608 304.101 171.526 308.804L278.755 436.593C283.748 442.552 291.11 446 298.893 446H423.301C445.64 446 457.794 419.879 443.439 402.743Z"
        stroke="#626262"
        stroke-opacity="0.5"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  ),
};
