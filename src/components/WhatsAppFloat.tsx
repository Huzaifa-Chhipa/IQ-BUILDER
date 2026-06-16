import { useState } from 'react';
import whatsappIcon from '@/src/assets/whatsapp.png';

// WhatsApp floating button that expands to show three contacts
export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  const contacts = [
    { name: 'Office IQ Builders', number: '02132776004' },
    { name: 'Hasnain - Director', number: '03141115203' },
    { name: 'Ammar - Director of Sales', number: '03141115203' },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 z-[120]">
      {/* Main floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
        aria-label="WhatsApp Contact"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
      </button>

      {/* Expanded contact list */}
      {open && (
        <div className="flex flex-col items-end space-y-2">
          {contacts.map((c) => (
            <a
              key={c.number}
              href={`https://wa.me/${c.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 text-sm text-white hover:bg-white/20 transition"
            >
              <span className="mr-2">{c.name}</span>
              <span className="font-mono text-xs">{c.number}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
