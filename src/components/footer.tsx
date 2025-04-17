import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 text-center text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        <p>&copy; {new Date().getFullYear()} Lumana. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-gray-400">
          <a href="#" className="hover:text-blue-600">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-600">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-600">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-blue-600">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
