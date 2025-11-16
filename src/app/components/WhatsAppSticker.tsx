"use client";

export default function WhatsAppFloat() {
  const whatsappNumber = "+971545999795"; 
const message = encodeURIComponent("Hello! I’m interested in learning more about Duqor's luxury interior design services.");


  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 left-6 z-50 
        flex items-center justify-center 
        bg-green-500 text-white 
        w-14 h-14 sm:w-16 sm:h-16 
        rounded-full shadow-xl 
        hover:scale-110 active:scale-95 
        transition-transform duration-300 
        cursor-pointer
      "
      aria-label="Chat on WhatsApp"
    >
      {/* Official WhatsApp SVG logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-8 h-8 sm:w-9 sm:h-9"
      >
        <path d="M16.004 3.003c-7.168 0-12.999 5.832-12.999 13.001 0 2.295.598 4.539 1.737 6.525L3 29l6.683-1.729a12.86 12.86 0 0 0 6.32 1.608h.001c7.17 0 13.002-5.832 13.002-12.999 0-3.476-1.352-6.74-3.809-9.192a12.92 12.92 0 0 0-9.193-3.685zM16.004 26.6h-.001a10.66 10.66 0 0 1-5.432-1.487l-.389-.23-3.963 1.026 1.059-3.866-.253-.397A10.67 10.67 0 0 1 5.336 16c0-5.89 4.777-10.669 10.668-10.669a10.6 10.6 0 0 1 7.547 3.13 10.67 10.67 0 0 1 3.125 7.549c0 5.889-4.778 10.667-10.672 10.667zm5.855-7.999c-.321-.16-1.897-.938-2.191-1.043-.295-.107-.511-.16-.728.16-.217.32-.834 1.043-1.021 1.26-.188.217-.377.242-.698.081-.321-.16-1.354-.498-2.58-1.587-.954-.849-1.598-1.896-1.786-2.217-.188-.32-.02-.493.141-.654.144-.144.321-.377.481-.565.16-.188.214-.321.321-.534.107-.214.053-.4-.027-.56-.08-.16-.728-1.76-1-2.413-.264-.637-.534-.55-.728-.56-.188-.01-.4-.01-.615-.01-.214 0-.56.08-.854.4-.295.32-1.122 1.094-1.122 2.668 0 1.574 1.149 3.096 1.31 3.309.16.214 2.266 3.461 5.49 4.849.767.332 1.364.531 1.828.68.768.244 1.466.21 2.017.127.616-.092 1.897-.774 2.166-1.523.267-.75.267-1.394.187-1.523-.08-.13-.294-.208-.615-.369z" />
      </svg>
    </a>
  );
}
