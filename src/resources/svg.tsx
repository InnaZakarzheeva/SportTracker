import React from "react";
import { Animated } from "react-native";
import Svg, {
  Circle,
  ClipPath,
  Color,
  Defs,
  G,
  Line,
  Path,
  Rect,
} from "react-native-svg";

import { Colors } from ".";

interface SvgProps {
  width?: number;
  height?: number;
  color?: Color;
}

interface AnimatedSvgProps {
  width?: number;
  height?: Animated.Value;
}

const LogoSvg = (props: AnimatedSvgProps) => {
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  const { width = 230, height = 280 } = props;

  return (
    <AnimatedSvg
      width={width}
      height={height}
      viewBox="0 0 230 280"
      fill="none">
      <Path
        d="M12.2912 76.2219C12.1063 118.15 12.1063 156.2 12.4761 160.633C12.6609 165.251 11.9214 170.977 10.4424 173.378C8.40879 177.257 8.59367 178.18 11.1819 180.027C13.2156 181.505 13.7702 183.167 12.4761 185.014C11.5517 186.492 11.3668 190.002 11.9214 192.957C12.6609 196.097 12.1063 198.683 10.9971 199.422C6.7449 202.192 1.75325 225.465 1.3835 245.598C0.828867 268.133 1.01374 269.056 13.9551 276.629C21.7199 281.062 22.6443 281.247 44.6445 280.139C57.0312 279.4 70.5272 279.03 74.7793 279.03C84.7627 279.03 90.3089 275.152 87.166 270.164C85.5022 267.394 85.5022 264.808 86.9812 259.821L89.0148 253.171H159.083H228.966V126.647V0.12257H120.814H12.6609L12.2912 76.2219ZM226.193 25.4274V47.9617L221.571 43.5287C206.226 29.3063 187.554 27.4592 180.898 39.6499C177.57 45.9299 182.747 57.3818 189.033 57.3818C193.84 57.3818 199.386 53.1335 199.386 49.2547C199.386 47.9617 198.092 45.3758 196.613 43.344C193.84 39.6499 192.73 41.8664 195.503 46.1146C197.352 49.07 196.243 53.6876 193.655 53.6876C192.73 53.6876 191.991 51.6559 191.991 49.07C191.991 46.4841 191.066 44.4523 189.957 44.4523C188.663 44.4523 188.478 46.4841 189.218 49.9935C189.957 53.3182 189.772 55.5347 188.478 55.5347C186.075 55.5347 185.335 54.0571 183.856 45.9299C182.747 39.6499 183.117 38.9111 188.108 36.1405C191.251 34.6628 195.134 33.3699 196.982 33.3699C202.344 33.3699 214.731 40.5734 220.277 46.8535C225.084 52.3947 225.269 53.1335 225.269 75.4831C225.269 91.922 224.529 99.6797 222.495 103.374C216.025 115.934 195.503 127.571 183.671 125.354C179.234 124.43 177.016 126.647 181.083 127.94C183.487 128.679 180.159 136.806 173.133 146.78C170.175 150.659 167.957 154.907 167.957 156.015C167.957 157.124 168.881 156.754 169.806 155.277C171.1 153.245 171.654 154.538 171.654 159.894C171.654 168.575 170.73 170.053 163.52 173.747C160.562 175.225 156.679 178.55 154.646 181.136C150.209 187.416 147.251 210.873 149.839 221.217C151.318 227.682 151.133 229.344 148.175 232.299C146.326 234.331 144.108 237.287 142.999 238.949C139.301 244.86 86.2417 245.414 78.4769 239.688C76.813 238.395 75.1491 234.885 74.4096 231.745L73.3003 226.019L83.4685 226.943C89.0148 227.312 94.0065 226.943 94.5611 226.019C95.3006 225.096 91.788 224.357 86.6114 224.357C70.5272 224.726 69.4179 217.892 85.1324 215.491C91.9728 214.383 99.5527 209.026 99.5527 204.963C99.5527 202.007 89.1997 192.218 85.8719 192.218C84.208 192.218 82.9139 193.511 82.9139 194.989C82.9139 196.466 83.8383 197.759 84.7627 197.759C85.8719 197.759 86.6114 198.498 86.6114 199.606C86.6114 200.53 83.8383 201.453 80.3256 201.453C74.7793 201.453 74.2247 200.899 74.2247 196.282C74.2247 193.511 73.6701 189.632 72.7457 187.6C71.6364 184.645 71.6364 184.276 73.855 186.123C75.1491 187.416 77.7374 188.524 79.4012 188.524C82.1744 188.524 82.5441 187.231 81.6198 177.811C81.0651 172.085 79.771 166.728 78.6617 166.174C77.7374 165.435 70.8969 164.327 63.5019 163.588C50.3757 162.48 50.0059 162.295 48.8967 156.754C48.342 153.614 48.1572 150.659 48.7118 150.105C49.2664 149.551 49.6362 150.105 49.6362 151.213C49.6362 152.506 51.1152 153.43 52.7791 153.43C55.3673 153.43 55.3673 152.875 52.0396 149.181C44.6445 141.239 42.2411 133.851 42.2411 119.259C42.2411 111.501 43.1655 103.559 44.0899 101.527C45.384 99.3103 45.384 98.0174 44.2748 98.0174C38.5436 98.0174 37.2495 131.08 42.6109 140.869C43.7201 143.271 45.384 149.181 45.9387 153.984L47.2328 162.85L38.7285 162.295L30.2242 161.741L26.1569 147.888C19.8711 125.908 21.535 107.068 30.2242 102.081C32.2578 100.973 33.552 97.8327 33.7368 93.0303C33.9217 88.782 36.3251 81.9478 39.2831 76.776L44.6445 67.9101L46.863 73.2666C50.1908 80.8396 54.6278 86.1961 56.2917 84.5337C57.0312 83.7949 55.922 81.3937 53.8883 78.9925C49.4513 74.1901 46.6782 65.8783 45.0143 52.5794C43.905 44.0829 44.4596 42.0511 49.6362 33.7393C52.7791 28.5675 55.5522 22.6568 55.7371 20.4404C55.922 18.4086 57.2161 16.3768 58.88 16.0074C67.1994 13.4215 79.4012 13.0521 85.8719 14.7144C92.8972 16.5615 93.267 16.9309 92.7123 23.5804L92.3426 30.5992L94.746 23.211C97.5191 14.345 102.511 12.6827 123.217 13.4215L137.452 13.9756L138.746 21.7333C140.226 30.5992 142.814 36.3252 147.99 42.0511C151.133 45.5605 151.688 48.1464 150.948 59.9677C150.579 67.7254 150.948 74.0054 151.688 74.0054C152.612 74.0054 153.167 72.1584 153.167 69.9419C153.167 66.2477 153.352 66.063 156.864 69.3878C161.486 73.636 161.486 75.1137 156.864 76.4066C154.831 76.9607 153.167 78.4384 153.167 79.7314C153.167 81.5784 153.721 81.5784 155.385 79.9161C156.679 78.6231 158.898 77.6996 160.562 77.6996C162.78 77.6996 163.335 79.3619 162.78 84.9032C162.041 92.8456 167.033 100.049 173.133 99.6797C175.722 99.6797 175.537 99.3103 172.209 97.6479C169.991 96.5397 167.217 93.3997 165.923 90.4444C161.486 79.3619 171.839 68.4642 186.999 68.4642C194.209 68.4642 197.537 71.4195 200.495 81.209L202.714 87.8585L202.899 82.1325C203.083 78.8078 201.42 74.1901 199.386 71.6042C197.352 69.0183 195.688 64.7701 195.688 61.9995C195.688 59.0442 194.949 57.5665 193.655 58.49C192.545 59.0442 191.991 61.0759 192.545 62.7383C193.1 65.1395 191.806 65.6936 185.335 65.8783C181.083 65.8783 174.612 67.7254 171.1 69.9419L164.629 73.636L160.007 68.8336C156.679 65.3242 155.2 61.2606 154.646 55.1653C154.091 47.4076 154.461 46.8535 157.419 48.5158C159.268 49.4394 161.117 49.9935 161.486 49.6241C161.671 49.2547 162.596 41.497 163.15 32.2616C164.259 19.5168 163.89 15.0838 162.041 13.6062C155.755 8.24968 40.3924 11.5744 33.3671 17.3003C30.9637 19.1474 30.5939 48.1464 32.8124 48.1464C33.552 48.1464 35.9553 46.8535 38.1739 45.1911L42.2411 42.4205V54.6112C42.2411 64.5854 41.3168 67.9101 37.4344 74.0054C34.6612 78.069 32.0729 85.0879 31.5183 89.7055C30.9637 95.6162 29.1149 99.6797 25.6023 103.189C18.3921 110.393 17.098 124.43 21.9048 142.716C23.9384 150.289 25.972 158.047 26.7115 159.71C27.6359 162.111 26.5267 162.665 21.1652 162.665H14.5097V82.3173V1.96964L120.259 2.33906L226.008 2.89318L226.193 25.4274ZM157.974 25.9816C158.158 36.6946 156.864 42.6052 154.461 42.6052C153.352 42.6052 152.982 42.0511 153.721 41.497C154.276 40.7581 153.167 38.9111 151.133 37.2487C147.436 34.2934 141.705 20.6251 143.184 18.4086C143.553 17.6697 147.066 17.3003 150.763 17.3003C157.789 17.6697 157.789 17.6697 157.974 25.9816ZM49.6362 21.7333C49.6362 25.4274 40.3924 39.4652 38.9134 37.9875C38.1739 37.4334 37.6192 33.3699 37.4344 29.1216C37.2495 22.6568 37.989 21.1792 41.1319 20.2556C47.4177 18.5933 49.6362 18.9627 49.6362 21.7333ZM225.638 177.441L225.269 251.509L195.873 251.14L166.478 250.77L168.327 244.49C169.251 240.981 172.949 234.331 176.276 229.898C182.008 222.51 185.52 212.536 184.411 207.918C184.226 206.81 184.596 202.192 185.335 197.205C187.184 186.861 184.411 178.55 177.755 174.301C173.688 171.531 173.503 170.607 174.612 160.079C175.352 153.984 177.94 145.118 180.344 140.685C182.562 136.252 184.596 131.449 184.596 130.156C184.596 128.494 186.814 127.571 191.066 127.571C200.31 127.571 210.663 121.66 219.168 112.055C223.05 107.437 226.193 103.743 226.193 103.559C226.193 103.559 226.008 136.806 225.638 177.441ZM53.7035 165.62L65.9053 166.913L67.9389 174.486C69.0482 178.55 70.3423 186.307 70.8969 191.479C72.0062 199.976 71.6364 201.084 68.3087 202.007C66.0902 202.562 64.4263 204.039 64.4263 205.148C64.4263 206.81 65.1658 206.81 66.8297 205.517C67.9389 204.593 73.855 203.855 79.771 204.039C91.0484 204.593 92.3426 203.116 87.166 197.205C84.7627 194.434 84.5778 193.88 86.6114 194.989C92.1577 198.129 95.8552 202.192 95.8552 205.332C95.8552 209.396 91.788 211.612 81.9895 213.275C69.9726 215.306 70.1574 215.122 72.376 234.516C73.6701 247.63 73.6701 252.248 72.1911 252.802C70.8969 253.171 69.9726 254.649 69.9726 256.127C69.9726 257.974 70.8969 257.789 73.6701 255.018C75.7037 252.987 79.2164 251.324 81.25 251.324C84.7627 251.324 85.1324 252.063 84.208 258.158C83.6534 262.037 82.5441 267.209 81.9895 269.795C81.0651 273.304 81.25 273.859 82.729 271.642C84.3929 269.241 84.7627 269.241 84.7627 272.011C84.7627 274.228 83.2836 275.336 80.1408 275.336C76.0735 275.336 75.7037 274.967 77.3676 270.534C79.771 264.623 79.771 262.407 77.3676 262.407C76.4432 262.407 75.5188 264.439 75.5188 267.209C75.5188 273.674 66.8297 276.999 45.9387 278.476C29.8544 279.584 29.1149 279.4 28.0057 275.706C27.451 273.489 26.1569 271.642 25.2325 271.642C24.1233 271.642 23.7535 273.12 24.3081 275.152C24.8628 277.737 24.3081 278.292 21.7199 277.737C17.2828 276.444 17.2828 275.521 21.3501 272.381C23.1989 271.088 24.1233 269.426 23.3838 268.871C22.6443 268.133 20.7955 268.871 19.1316 270.534C15.2492 274.413 14.14 274.228 8.22391 269.61C3.41713 265.916 3.41713 265.731 3.97176 244.305C4.52639 227.312 5.45077 220.848 8.40879 214.013C10.6273 209.396 11.7366 204.963 11.1819 204.224C9.33317 202.377 16.5433 197.759 21.3501 197.759C23.7535 197.759 25.6023 196.836 25.6023 195.727C25.6023 194.434 23.5686 194.25 20.056 194.989C14.8795 196.097 14.5097 195.912 14.5097 190.925C14.6946 183.721 20.6106 171.161 25.7872 167.467C30.5939 164.327 35.031 163.958 53.7035 165.62ZM179.789 179.658C181.453 182.059 182.747 187.6 182.747 192.957C182.747 201.638 182.562 202.007 179.789 198.498C177.016 194.989 176.831 194.989 178.31 198.683C181.268 206.81 181.268 217.708 177.94 223.803C175.352 229.159 174.612 229.529 173.503 226.574C172.579 223.988 171.839 224.726 169.806 230.822C168.512 234.885 166.478 237.841 165.554 237.102C164.444 236.363 164.075 237.656 164.814 240.057C165.923 244.86 164.629 249.477 162.226 249.477C161.301 249.477 160.562 248.184 160.562 246.707C160.562 245.229 159.822 243.936 158.713 243.936C157.789 243.936 156.864 245.229 156.864 246.707C156.864 251.324 151.318 249.847 151.133 245.229C150.948 241.35 150.948 241.35 149.469 245.783C148.175 250.031 147.99 250.031 146.696 246.891C142.814 237.656 153.906 228.051 158.343 236.917L160.377 241.165V236.917C160.562 234.147 159.268 232.115 157.049 231.561C151.503 230.083 150.024 209.58 154.091 189.263C154.646 187.231 156.679 183.167 158.898 180.581C163.89 173.932 175.537 173.563 179.789 179.658ZM94.746 245.968C106.578 247.63 121.738 247.261 137.637 244.675C142.259 243.936 143.738 244.49 144.478 247.63C145.402 251.14 144.663 251.324 112.309 250.77C85.1324 250.401 78.8466 249.847 77.3676 247.63C74.5945 243.382 75.1491 241.535 78.4769 242.828C80.1408 243.567 87.5358 244.86 94.746 245.968Z"
        fill="white"
      />
      <Path
        d="M87.5358 47.4076C70.1575 49.9935 57.0312 52.21 57.0312 52.7641C57.0312 53.1335 58.6951 56.2735 60.7288 59.783C64.2414 65.5089 64.2414 66.4324 61.6532 71.4195C55.5522 83.2408 61.0985 98.0173 71.8213 98.0173C74.7794 98.0173 77.5525 97.2785 78.1071 96.355C78.8466 95.2467 81.9895 95.4314 86.0568 96.5397C89.9392 97.6479 97.1494 97.8326 102.326 97.0938C107.318 96.355 115.267 95.6162 119.704 95.6162C126.175 95.2467 128.578 94.3232 131.536 90.2596C133.57 87.489 134.679 84.5337 133.755 83.7949C133.015 82.8714 131.906 83.2408 131.536 84.349C127.654 95.4314 120.074 95.4314 105.284 84.349C93.267 75.6678 89.7543 74.0054 91.4182 78.2537C92.5275 81.209 81.8047 91.5526 75.334 94.1385C69.2331 96.355 63.5019 92.8455 61.838 86.1961C59.9893 78.9925 65.7204 67.356 72.9306 62.7383C78.8466 59.0441 79.5861 59.0441 82.729 61.8147C85.1324 64.0312 86.4266 64.2159 88.0904 62.5536C90.8636 59.783 91.0485 55.5347 88.4602 55.5347C87.5358 55.5347 86.7963 56.4582 87.1661 57.5665C87.3509 58.6747 86.4266 60.1524 85.3173 60.5218C83.8383 61.0759 82.9139 59.783 82.9139 57.7512C82.9139 53.8723 86.2417 51.8405 92.7123 51.8405C98.8133 51.8405 102.141 54.6112 100.662 58.49C99.5528 61.4453 99.3679 61.4453 96.7796 58.1206C94.3762 54.7959 94.1914 54.7959 94.0065 57.9359C94.0065 62.7383 99.5528 64.2159 102.511 60.1524C104.729 57.1971 105.839 57.0123 112.494 59.0441C119.519 61.0759 129.133 70.6807 129.133 75.4831C129.133 76.776 130.057 77.6996 130.982 77.6996C132.091 77.6996 132.83 77.1454 132.83 76.5913C132.83 74.5595 128.578 67.5407 125.066 63.4771L121.368 59.5982L127.099 55.35C130.797 52.5794 132.276 50.5476 131.167 49.4394C129.133 47.4076 96.9645 46.1146 87.5358 47.4076ZM107.872 49.9935C108.612 51.1017 111.939 51.4711 115.822 50.917C120.998 49.9935 121.923 50.1782 119.889 51.6558C115.267 54.9806 103.25 53.6876 103.25 49.8088C103.25 47.5923 106.393 47.777 107.872 49.9935ZM81.0651 51.4711C81.0651 53.1335 71.2667 59.2288 68.6784 59.2288C67.7541 59.2288 65.3507 57.9359 63.317 56.2735C59.9893 53.5029 59.9893 53.5029 64.6112 54.4264C67.3843 54.9806 72.0062 54.2417 74.7794 52.7641C81.0651 49.6241 81.0651 49.6241 81.0651 51.4711ZM110.645 92.6608C110.645 94.6926 97.1494 96.1703 89.7543 94.8773L82.9139 93.7691L89.0148 87.1196L94.9309 80.2855L102.696 86.0114C106.948 88.9667 110.46 92.1067 110.645 92.6608Z"
        fill="white"
      />
      <Path
        d="M133.755 62.923C132.276 65.3242 134.494 68.8336 136.713 67.5407C138.931 66.063 138.931 61.0759 136.713 61.0759C135.604 61.0759 134.309 61.8147 133.755 62.923Z"
        fill="white"
      />
      <Path
        d="M191.436 102.82C186.445 105.406 182.747 107.992 183.487 108.546C184.781 109.839 201.235 101.712 201.235 99.6797C201.235 97.6479 201.974 97.2785 191.436 102.82Z"
        fill="white"
      />
      <Path
        d="M93.267 115.195C92.3426 117.966 92.5274 124.985 93.267 130.895L94.9308 141.424L95.4855 133.481C95.8552 129.233 95.8552 122.214 95.4855 117.781C94.9308 110.577 94.746 110.393 93.267 115.195Z"
        fill="white"
      />
      <Path
        d="M166.293 114.272C163.89 118.889 163.705 123.876 165.923 123.876C167.587 123.876 170.36 112.794 169.066 111.501C168.696 110.947 167.402 112.24 166.293 114.272Z"
        fill="white"
      />
      <Path
        d="M78.292 151.767C76.2584 152.506 72.376 153.245 69.6028 153.245C66.6448 153.43 64.4263 154.353 64.4263 155.277C64.4263 156.57 67.0146 156.754 71.4516 156.015C80.8803 154.353 85.6871 152.321 83.6534 151.213C82.729 150.659 80.3256 150.844 78.292 151.767Z"
        fill="white"
      />
      <Path
        d="M146.881 152.875C141.335 155.831 118.41 155.461 108.981 152.506C105.839 151.398 104.914 151.582 105.839 153.06C108.242 157.124 127.469 159.525 139.116 157.493C145.217 156.385 150.948 154.538 152.058 153.429C155.201 150.289 152.427 149.92 146.881 152.875Z"
        fill="white"
      />
      <Path
        d="M95.1157 178.55C93.8216 181.874 95.6703 190.371 97.5191 190.371C98.2586 190.371 98.4435 187.046 98.0737 182.983C97.3342 174.856 96.7796 174.117 95.1157 178.55Z"
        fill="white"
      />
      <Path
        d="M118.965 195.173C115.452 197.759 113.973 197.759 106.023 194.989C102.326 193.696 102.326 193.88 105.839 196.651C110.46 200.345 118.78 200.53 121.738 196.836C125.066 192.957 123.402 192.033 118.965 195.173Z"
        fill="white"
      />
      <Path
        d="M99.5527 217.708C99.5527 221.032 100.477 223.618 101.402 223.618C102.511 223.618 102.881 221.586 102.141 218.446C100.292 211.243 99.5527 211.058 99.5527 217.708Z"
        fill="white"
      />
      <Path
        d="M124.696 221.956C122.847 223.064 118.04 223.618 114.158 223.064C105.469 221.956 104.544 224.911 113.049 226.389C119.519 227.682 129.133 224.911 129.133 221.771C129.133 219.555 129.133 219.555 124.696 221.956Z"
        fill="white"
      />
      <Path
        d="M204.378 186.123C194.579 195.912 186.445 205.517 186.445 207.364C186.445 209.211 186.814 210.689 186.999 210.689C189.033 210.689 223.605 171.531 223.05 170.053C222.68 168.945 214.361 176.333 204.378 186.123Z"
        fill="#04AAF3"
      />
      <Path
        d="M204.932 202.746C195.134 212.72 185.15 223.249 182.747 226.204L178.125 231.745L183.671 227.866C190.327 223.064 194.764 219.001 202.344 210.319C205.672 206.625 209.924 202.746 212.142 201.453C214.361 200.345 215.655 198.683 215.1 197.575C214.361 196.651 214.731 195.912 215.47 195.912C216.395 195.912 218.613 193.326 220.277 190.371C222.126 187.231 223.42 184.83 223.05 184.83C222.68 184.83 214.546 192.957 204.932 202.746Z"
        fill="#04AAF3"
      />
      <Path
        d="M212.327 211.428C195.134 228.051 180.898 243.751 180.898 246.152C180.898 247.445 190.512 238.949 202.159 227.312C213.806 215.676 223.42 205.517 223.42 204.778C223.42 201.638 220.277 203.67 212.327 211.428Z"
        fill="#04AAF3"
      />
      <Path
        d="M9.51804 247.815C3.602 250.031 4.15663 251.509 10.4424 250.216C13.9551 249.477 16.3585 250.031 18.0224 252.063C20.6106 255.203 19.3165 261.668 15.619 262.961C12.2912 264.254 8.22391 261.483 9.88779 258.897C10.8122 257.235 11.7366 257.235 13.7702 258.897C15.8038 260.56 16.3585 260.375 16.3585 257.974C16.3585 252.987 8.22391 255.018 7.4844 260.006C6.7449 264.808 12.6609 267.209 18.2072 264.254C21.3501 262.591 21.9048 260.744 21.535 255.573C20.9804 248.184 16.3585 245.229 9.51804 247.815Z"
        fill="white"
      />
    </AnimatedSvg>
  );
};

const EmailSvg = (props: SvgProps) => {
  const { width = 24, height = 24 } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 6C22 4.89999 21.1 4 20 4H4C2.9 4 2 4.89999 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM12 13L4 8V18H20V8L12 13Z"
        fill={Colors.primary}
        fill-opacity="0.54"
      />
    </Svg>
  );
};

const CloseIconSvg = (props: SvgProps) => {
  const { width = 15, height = 15 } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <Line
        x1="0.646447"
        y1="11.253"
        x2="11.253"
        y2="0.646443"
        stroke="#04AAF3"
      />
      <Line
        x1="0.353553"
        y1="0.646447"
        x2="10.9602"
        y2="11.253"
        stroke="#04AAF3"
      />
    </Svg>
  );
};

const ErrorIconSvg = (props: SvgProps) => {
  const { width = 13, height = 13 } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 13 13" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.50001 1.08334C3.51001 1.08334 1.08334 3.51 1.08334 6.5C1.08334 9.49 3.51001 11.9167 6.50001 11.9167C9.49001 11.9167 11.9167 9.49 11.9167 6.5C11.9167 3.51 9.49001 1.08334 6.50001 1.08334ZM5.95834 9.20834V8.125H7.04168V9.20834H5.95834ZM5.95834 3.79167V7.04167H7.04168V3.79167H5.95834Z"
        fill="#EA2525"
      />
    </Svg>
  );
};

const EyeSvg = (props: SvgProps) => {
  const { width = 24, height = 24 } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={Colors.primary}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Circle cx={12} cy={12} r={2} />
      <Path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7" />
    </Svg>
  );
};

const EyeOffSvg = (props: SvgProps) => {
  const { width = 24, height = 24 } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={Colors.primary}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M3 3l18 18M10.584 10.587a2 2 0 002.828 2.83" />
      <Path d="M9.363 5.365A9.466 9.466 0 0112 5c4 0 7.333 2.333 10 7-.778 1.361-1.612 2.524-2.503 3.488m-2.14 1.861C15.726 18.449 13.942 19 12 19c-4 0-7.333-2.333-10-7 1.369-2.395 2.913-4.175 4.632-5.341" />
    </Svg>
  );
};

const PasswordIconSvg = (props: SvgProps) => {
  const { width = 24, height = 24 } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 19H22V15H24V9H13.32C12.17 6.58 9.72 5 7 5C3.14 5 0 8.14 0 12C0 15.86 3.14 19 7 19C9.72 19 12.18 17.42 13.32 15H16V19ZM20 17H18V13H11.94L11.71 13.67C11.01 15.66 9.11 17 7 17C4.24 17 2 14.76 2 12C2 9.24 4.24 7 7 7C9.11 7 11.01 8.34 11.71 10.33L11.94 11H22V13H20V17ZM7 15C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9C8.65 9 10 10.35 10 12C10 13.65 8.65 15 7 15ZM6 12C6 11.45 6.45 11 7 11C7.55 11 8 11.45 8 12C8 12.55 7.55 13 7 13C6.45 13 6 12.55 6 12Z"
        fill="#04AAF3"
        fill-opacity="0.8"
      />
    </Svg>
  );
};

const AccountCircleSvg = (props: SvgProps) => {
  const { width = 24, height = 24 } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM12 14.5C13.46 14.5 16.93 15.09 18.36 16.83C19.38 15.49 20 13.82 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 13.82 4.62 15.49 5.64 16.83C7.07 15.09 10.54 14.5 12 14.5ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM10.5 9.5C10.5 10.33 11.17 11 12 11C12.83 11 13.5 10.33 13.5 9.5C13.5 8.67 12.83 8 12 8C11.17 8 10.5 8.67 10.5 9.5Z"
        fill="#04AAF3"
        fill-opacity="0.8"
      />
    </Svg>
  );
};

const HomeSvg = (props: SvgProps) => {
  const { width = 25, height = 25, color } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
      <Path
        d="M3.125 9.37492L12.5 2.08325L21.875 9.37492V20.8333C21.875 21.3858 21.6555 21.9157 21.2648 22.3064C20.8741 22.6971 20.3442 22.9166 19.7917 22.9166H5.20833C4.6558 22.9166 4.12589 22.6971 3.73519 22.3064C3.34449 21.9157 3.125 21.3858 3.125 20.8333V9.37492Z"
        stroke={color || "#04AAF3"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.375 21.875V12.5H15.625V21.875"
        stroke={color || "#04AAF3"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const ProfileSvg = (props: SvgProps) => {
  const { width = 25, height = 25, color } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 27 27" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.70532 10.35C9.70532 12.3382 11.4043 13.95 13.5 13.95C15.5957 13.95 17.2947 12.3382 17.2947 10.35C17.2947 8.36177 15.5957 6.75 13.5 6.75C11.4043 6.75 9.70532 8.36177 9.70532 10.35ZM11.6027 10.35C11.6027 11.3441 12.4521 12.15 13.5 12.15C14.5479 12.15 15.3973 11.3441 15.3973 10.35C15.3973 9.35589 14.5479 8.55 13.5 8.55C12.4521 8.55 11.6027 9.35589 11.6027 10.35ZM8.75665 20.25C8.23272 20.25 7.7997 19.844 7.88602 19.3538C8.33602 16.798 10.6782 14.85 13.5 14.85C16.3218 14.85 18.664 16.798 19.114 19.3538C19.2003 19.844 18.7673 20.25 18.2433 20.25C17.7194 20.25 17.3068 19.8408 17.1776 19.3591C16.7597 17.8018 15.2716 16.65 13.5 16.65C11.7284 16.65 10.2403 17.8018 9.82242 19.3591C9.69315 19.8408 9.28059 20.25 8.75665 20.25Z"
        fill={color || "white"}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5 23.625C19.0919 23.625 23.625 19.0919 23.625 13.5C23.625 7.90812 19.0919 3.375 13.5 3.375C7.90812 3.375 3.375 7.90812 3.375 13.5C3.375 19.0919 7.90812 23.625 13.5 23.625Z"
        stroke={color || "white"}
        stroke-width="1.8"
      />
    </Svg>
  );
};

const ArchiveSvg = (props: SvgProps) => {
  const { width = 25, height = 25, color } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.15 3.55L20.54 5.23C20.83 5.57 21 6.02 21 6.5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V6.5C3 6.02 3.17 5.57 3.46 5.23L4.84 3.55C5.12 3.21 5.53 3 6 3H18C18.47 3 18.88 3.21 19.15 3.55ZM17.76 5H6.24L5.44 5.97H18.57L17.76 5ZM5 19V8H19V19H5ZM10.55 10H13.45V13H16L12 17L8 13H10.55V10Z"
        fill={color || "#04AAF3"}
      />
    </Svg>
  );
};

const RightArrowSvg = (props: SvgProps) => {
  const { width = 25, height = 25, color } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6.16499 20.13L7.93499 21.9L17.835 12L7.93499 2.09998L6.16499 3.86998L14.295 12L6.16499 20.13H6.16499Z"
        fill={color || "#04AAF3"}
      />
    </Svg>
  );
};

const LogOutSvg = (props: SvgProps) => {
  const { width = 25, height = 25, color } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
      <G clip-path="url(#clip0_169_256)">
        <Path
          d="M11.7187 23.4384H1.56252V1.56343H11.7187C12.15 1.56343 12.5 1.21341 12.5 0.782204C12.5 0.351003 12.1499 0.000976562 11.7187 0.000976562H0.781228C0.350026 0.000976562 0 0.350938 0 0.782204V24.2196C0 24.6509 0.350026 25.0008 0.781228 25.0008H11.7187C12.1499 25.0008 12.4999 24.6508 12.4999 24.2196C12.5 23.7884 12.1499 23.4384 11.7187 23.4384Z"
          fill={color || "white"}
        />
        <Path
          d="M24.7733 11.9545L19.3827 6.48652C19.0773 6.17793 18.5827 6.17871 18.278 6.48652C17.9726 6.79434 17.9726 7.29431 18.278 7.60213L22.3406 11.7232H6.25233C5.82106 11.7232 5.4711 12.0764 5.4711 12.5123C5.4711 12.9482 5.82113 13.3014 6.25233 13.3014H22.3406L18.278 17.4225C17.9726 17.7311 17.9726 18.2303 18.278 18.5381C18.5835 18.8467 19.078 18.8467 19.3827 18.5381L24.7726 13.0701C25.0741 12.7662 25.0773 12.2576 24.7733 11.9545Z"
          fill={color || "white"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_169_256">
          <Rect width="25" height="25" fill={color || "white"} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const EditSvg = (props: SvgProps) => {
  const { width = 25, height = 25, color } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
      <G id="create_24px">
        <Path
          id="icon/content/create_24px"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.961 4.1125L25.886 7.0375C26.3735 7.525 26.3735 8.3125 25.886 8.8L23.5985 11.0875L18.911 6.4L21.1985 4.1125C21.436 3.875 21.7485 3.75 22.0735 3.75C22.3985 3.75 22.711 3.8625 22.961 4.1125ZM3.74847 21.5625V26.25H8.43597L22.261 12.425L17.5735 7.73748L3.74847 21.5625ZM7.39847 23.75H6.24847V22.6L17.5735 11.275L18.7235 12.425L7.39847 23.75Z"
          fill={color || "white"}
        />
      </G>
    </Svg>
  );
};

export {
  LogoSvg,
  EmailSvg,
  CloseIconSvg,
  ErrorIconSvg,
  EyeSvg,
  EyeOffSvg,
  PasswordIconSvg,
  AccountCircleSvg,
  HomeSvg,
  ProfileSvg,
  ArchiveSvg,
  RightArrowSvg,
  LogOutSvg,
  EditSvg,
};
