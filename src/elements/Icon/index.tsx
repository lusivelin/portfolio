export const MainLogo = ({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "32"}
        height={height || "32"}
        viewBox="0 0 2000.000000 1500.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1500.000000) scale(0.100000,-0.100000)"
          fill="#333"
          stroke="none"
        >
          <path
            d="M9504 11323 c-269 -466 -490 -853 -492 -860 -3 -10 26 -13 135 -13
l138 0 355 615 c195 338 357 615 360 615 3 0 165 -277 360 -615 l355 -615 138
0 c75 0 137 4 137 8 0 13 -979 1707 -989 1710 -4 1 -228 -379 -497 -845z"
          />
          <path
            d="M9330 9596 c-198 -54 -319 -239 -290 -443 25 -177 154 -306 334 -334
168 -26 336 63 413 218 26 53 28 67 28 173 0 98 -3 122 -23 164 -81 177 -280
272 -462 222z"
          />
          <path
            d="M6690 7300 l0 -1900 950 0 950 0 0 250 0 250 -640 0 -640 0 0 1650 0
1650 -310 0 -310 0 0 -1900z"
          />
          <path
            d="M11885 8445 c-249 -39 -475 -147 -634 -306 l-71 -70 0 171 0 170
-310 0 -310 0 0 -1505 0 -1505 310 0 309 0 3 938 3 937 27 99 c77 280 241 450
508 523 92 25 357 25 450 -1 301 -82 479 -311 520 -666 6 -49 10 -454 10 -957
l0 -873 305 0 306 0 -4 1003 c-3 1095 -1 1063 -63 1258 -121 385 -407 655
-796 753 -179 46 -396 58 -563 31z"
          />
          <path
            d="M9120 6905 l0 -1505 310 0 310 0 0 1505 0 1505 -310 0 -310 0 0
-1505z"
          />
          <path
            d="M5219 3901 l-615 -1066 2698 -3 c1484 -1 3912 -1 5396 0 l2698 3
-615 1066 -616 1067 -3 -204 c-2 -196 -3 -204 -22 -204 -11 0 -20 -2 -20 -3 0
-2 189 -331 420 -731 231 -400 420 -730 420 -732 0 -2 -2232 -4 -4960 -4
-2728 0 -4960 2 -4960 4 0 2 189 332 420 732 231 400 420 729 420 731 0 1 -9
3 -20 3 -19 0 -20 8 -22 204 l-3 204 -616 -1067z"
          />
        </g>
      </svg>
    </>
  );
};

export const ExploreLogo = () => {
  return (
    <svg
      width="31"
      height="34"
      viewBox="0 0 31 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.19167 33.2333L0.75 29.7916L15.5 15.0416L30.25 29.7916L26.8083 33.2333L15.5 21.9864L4.19167 33.2333ZM4.19167 18.4833L0.75 15.0416L15.5 0.291626L30.25 15.0416L26.8083 18.4833L15.5 7.23642L4.19167 18.4833Z"
        fill="#333333"
      />
    </svg>
  );
};
