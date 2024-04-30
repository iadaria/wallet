export default ({ color }: { color: string }): string => `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
      <title>Icon / Loader@1x</title>
      <desc>Created with Sketch.</desc>
      <g id="Icon-/-Loader" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <polygon id="Canvas" points="0 0 24 0 24 24 0 24"></polygon>
          <path d="M18.364,5.636 L16.95,7.05 C14.588733,4.68849208 10.8881384,4.32381483 8.11133608,6.17898871 C5.33453373,8.0341626 4.25489466,11.5925006 5.53267833,14.6778807 C6.810462,17.7632608 10.0897911,19.5163695 13.3651732,18.8650832 C16.6405552,18.2137969 18.9997591,15.3395062 19,12 L21,12 C21,16.2936665 17.9669137,19.9893847 13.7557421,20.8270037 C9.54457042,21.6646227 5.32814447,19.4108542 3.68505875,15.4440115 C2.04197303,11.4771687 3.42984912,6.90207094 6.99991847,4.51666176 C10.5699878,2.13125258 15.3279379,2.5999007 18.364,5.636 L18.364,5.636 Z" id="Shape" fill="${color}"></path>
      </g>
  </svg>
`;
