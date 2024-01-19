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
  instagram: (props) => (
    <svg
      width={props.size || "20px"}
      height={props.size || "20px"}
      fill={props.color || "currentColor"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Instagram  1" clip-path="url(#clip0_792_218)">
        <path
          id="Vector"
          d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_792_218">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  linkedIn: (props) => (
    <svg
      width={props.size || "20px"}
      height={props.size || "20px"}
      fill={props.color || "currentColor"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Linkedin (1) 1">
        <path
          id="Vector"
          d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6C1.13 6 0.02 4.881 0.02 3.5C0.02 2.12 1.13 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM5 8H0V24H5V8ZM12.982 8H8.014V24H12.983V15.601C12.983 10.931 19.012 10.549 19.012 15.601V24H24V13.869C24 5.989 15.078 6.276 12.982 10.155V8Z"
          fill="white"
        />
      </g>
    </svg>
  ),
};
