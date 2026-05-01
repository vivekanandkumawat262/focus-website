export default function WhatsAppButton() {
  const phone = "919828251124"; // Replace with actual number
  const message = "Hello! I'm interested in enrolling at Hi Tech Focus English Academy.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform whatsapp-ring"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.65 4.805 1.786 6.82L2 30l7.374-1.763A13.95 13.95 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.83-1.594l-.418-.248-4.372 1.046 1.074-4.259-.273-.437A11.468 11.468 0 014.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.61c-.344-.172-2.038-1.005-2.354-1.12-.317-.115-.547-.172-.778.172-.23.344-.893 1.12-1.094 1.35-.2.23-.403.258-.747.086-.344-.172-1.452-.536-2.767-1.71-1.022-.912-1.712-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.345-.403.517-.604.172-.2.23-.344.345-.574.115-.23.057-.43-.029-.602-.086-.172-.778-1.877-1.066-2.568-.28-.674-.564-.582-.778-.593l-.662-.011c-.23 0-.603.086-.918.43-.317.344-1.207 1.179-1.207 2.876s1.236 3.337 1.409 3.567c.172.23 2.434 3.716 5.9 5.211.824.355 1.468.568 1.97.727.827.264 1.58.226 2.174.137.663-.1 2.038-.833 2.325-1.637.287-.804.287-1.493.2-1.637-.086-.143-.316-.23-.66-.401z"/>
      </svg>
    </a>
  );
}
