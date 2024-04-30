export default ({ color }: { color: string }): string => `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
        <g>
            <g>
                <path d="M0 0L24 0 24 24 0 24z" transform="translate(-16 -339) translate(16 339)"/>
                <path fill="${color}" d="M7 10h13c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V11c0-.552.448-1 1-1h1V9c-.001-3.247 2.231-6.07 5.392-6.815 2.818-.666 5.715.476 7.338 2.79.075.108.165.25.27.429.14.238.06.544-.179.684l-.03.016-.44.22-.462.231c-.233.117-.517.034-.651-.189-.105-.174-.177-.287-.216-.34-1.172-1.587-3.198-2.36-5.171-1.895C8.593 4.664 6.999 6.681 7 9v1zm-2 2v8h14v-8H5zm5.5 3h3c.276 0 .5.224.5.5v1c0 .276-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5v-1c0-.276.224-.5.5-.5z" transform="translate(-16 -339) translate(16 339)"/>
            </g>
        </g>
    </g>
  </svg>
`;