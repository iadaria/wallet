export default ({ color }: { color: string }): string => `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44C34.1503 44 44 34.1503 44 22Z" fill="${color}"/>
  <path d="M22.184 8.149V8.162C22.197 8.23 22.197 8.311 22.197 8.392V18.134C22.184 18.188 22.143 18.201 22.103 18.228C21.819 18.363 21.549 18.485 21.265 18.607C20.873 18.782 20.468 18.971 20.076 19.147L18.657 19.796C18.266 19.971 17.874 20.147 17.495 20.323C17.036 20.539 16.563 20.741 16.104 20.958C15.712 21.133 15.32 21.322 14.914 21.498C14.59 21.647 14.266 21.782 13.955 21.931C13.928 21.944 13.901 21.957 13.875 21.957C13.861 21.957 13.861 21.957 13.847 21.944L14.212 21.336C14.915 20.174 15.604 19.026 16.306 17.863C17.05 16.62 17.806 15.377 18.549 14.134C19.239 12.986 19.941 11.837 20.63 10.689C21.13 9.851 21.644 9.013 22.143 8.176C22.157 8.149 22.171 8.136 22.171 8.108H22.184C22.171 8.122 22.184 8.135 22.184 8.148V8.149Z" fill="#838485"/>
  <path d="M30.48 21.944L30.493 21.957L28.507 23.133L22.264 26.822C22.237 26.835 22.21 26.849 22.197 26.862C22.157 26.862 22.157 26.822 22.157 26.808V18.337C22.157 18.296 22.157 18.242 22.17 18.201C22.183 18.147 22.224 18.161 22.264 18.174C22.44 18.255 22.629 18.336 22.804 18.417C23.332 18.661 23.859 18.904 24.386 19.134C24.846 19.336 25.291 19.552 25.75 19.755C26.21 19.958 26.67 20.174 27.129 20.377C27.52 20.552 27.926 20.741 28.318 20.917C28.709 21.093 29.115 21.282 29.507 21.457C29.817 21.593 30.128 21.741 30.439 21.877C30.439 21.917 30.452 21.93 30.479 21.944H30.48Z" fill="#131313"/>
  <path d="M22.183 35.253C22.183 35.266 22.17 35.28 22.17 35.293H22.156C22.156 35.266 22.129 35.253 22.116 35.226C21.278 34.05 20.44 32.861 19.603 31.686L17.035 28.065C16.211 26.903 15.374 25.727 14.549 24.565C14.333 24.255 14.117 23.957 13.901 23.646C13.887 23.619 13.874 23.606 13.847 23.566C13.887 23.566 13.914 23.592 13.927 23.606C15.103 24.295 16.265 24.984 17.441 25.673C18.792 26.47 20.13 27.268 21.481 28.065L22.17 28.47C22.197 28.497 22.197 28.524 22.197 28.551V35.064C22.197 35.131 22.197 35.199 22.183 35.253Z" fill="#828384"/>
  <path d="M13.833 21.971V21.957C14.266 21.768 14.684 21.566 15.117 21.377C15.671 21.12 16.225 20.877 16.779 20.62C17.198 20.43 17.63 20.228 18.049 20.039C18.67 19.755 19.279 19.485 19.899 19.201C20.319 19.011 20.738 18.823 21.17 18.621C21.467 18.485 21.778 18.35 22.075 18.215C22.102 18.201 22.143 18.188 22.156 18.161C22.17 18.161 22.17 18.174 22.156 18.188V26.768C22.156 26.808 22.143 26.848 22.17 26.876C22.143 26.916 22.116 26.876 22.102 26.862C21.981 26.795 21.859 26.727 21.737 26.646C19.13 25.106 16.509 23.552 13.901 22.012C13.887 21.998 13.861 21.984 13.833 21.971Z" fill="#343535"/>
  <path d="M30.452 23.565H30.466C30.466 23.592 30.439 23.619 30.426 23.646C27.939 27.146 25.453 30.659 22.967 34.159C22.71 34.523 22.44 34.889 22.183 35.253C22.17 35.239 22.17 35.226 22.17 35.213V28.457C22.737 28.119 23.291 27.795 23.859 27.457C26.048 26.16 28.237 24.876 30.412 23.579C30.425 23.592 30.439 23.579 30.452 23.565ZM22.17 18.188V8.27C22.17 8.23 22.156 8.203 22.183 8.162C24.926 12.716 27.669 17.255 30.398 21.809C30.425 21.849 30.466 21.903 30.48 21.957C30.29 21.89 30.115 21.795 29.94 21.714C29.723 21.62 29.493 21.512 29.277 21.417C29.142 21.349 28.993 21.295 28.858 21.227C28.628 21.12 28.398 21.025 28.169 20.917C28.034 20.863 27.899 20.796 27.764 20.728L26.872 20.323C26.723 20.255 26.575 20.187 26.412 20.12L25.764 19.836C25.629 19.782 25.494 19.715 25.359 19.647L24.467 19.242C24.318 19.174 24.17 19.107 24.007 19.039L23.359 18.755C23.21 18.688 23.075 18.62 22.927 18.553C22.67 18.431 22.413 18.309 22.143 18.201C22.183 18.188 22.17 18.188 22.17 18.188Z" fill="#303131"/>
  </svg>
  
`;
