import React, { useState } from "react";
import { Phone, Mail, Facebook, Send, Copy, Check, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) {
      alert("Мессежээ оруулна уу.");
      return;
    }
    // Deep link mailto integration
    const mailtoUrl = `mailto:achluunkiller@gmail.com?subject=${encodeURIComponent(
      subject || "A Message for Achluun"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setMessage("");
    setSubject("");
  };

  return (
    <section
      id="contact-section"
      className="relative w-full bg-black py-24 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full text-orange-400 text-xs font-semibold tracking-wider uppercase">
            <MessageSquare size={12} />
            Холбоо барих
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Хамтдаа шинэ <span className="text-orange-400">Түүх</span> бичицгээе
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto">
            Санал хүсэлт илгээх, эсвэл зүгээр л танилцаж, шатар тоглохыг хүсвэл доорх сувгуудаар холбогдоорой.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left panel: Quick Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-white/80 font-bold text-lg tracking-tight mb-4 pl-1">
              Шууд холбогдох хаягууд
            </h3>

            {/* Phone contact card */}
            <div className="bg-[#121214] border border-white/10 rounded-2xl p-5 hover:border-orange-500/30 transition-all duration-300 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium uppercase font-mono">Утасны дугаар</p>
                  <p className="text-white font-bold text-lg">86878889</p>
                </div>
              </div>

              <button
                onClick={() => handleCopy("86878889", "phone")}
                className="text-white/40 hover:text-white p-2 rounded-lg hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                title="Хуулж авах"
              >
                {copiedText === "phone" ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Email contact card */}
            <div className="bg-[#121214] border border-white/10 rounded-2xl p-5 hover:border-orange-500/30 transition-all duration-300 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium uppercase font-mono">Имэйл хаяг</p>
                  <p className="text-white font-bold text-base md:text-lg select-all">achluunkiller@gmail.com</p>
                </div>
              </div>

              <button
                onClick={() => handleCopy("achluunkiller@gmail.com", "email")}
                className="text-white/40 hover:text-white p-2 rounded-lg hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                title="Хуулж авах"
              >
                {copiedText === "email" ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Facebook contact card */}
            <a
              href="https://www.facebook.com/Achluun"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#121214] border border-white/10 rounded-2xl p-5 hover:border-orange-500/30 hover:bg-[#15151c] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-all">
                    <Facebook size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase font-mono">Фэйсбүүк хуудас</p>
                    <p className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">
                      Achluun Achluun
                    </p>
                  </div>
                </div>
                <Facebook size={18} className="text-white/30 group-hover:text-white/80 transition-colors mr-2" />
              </div>
            </a>
          </div>

          {/* Right panel: Direct Email Feedback form */}
          <div className="lg:col-span-7 bg-[#121214] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-orange-500/20 transition-all">
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Бичгээр зурвас илгээх</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/50 text-xs font-semibold tracking-wider uppercase mb-1.5 font-mono">
                  Гарчиг (Заавал биш)
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Санал хүсэлт, мэндчилгээ г.м."
                  className="w-full bg-[#1c1c1f]/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:bg-[#1c1c1f] transition-all"
                />
              </div>

              <div>
                <label className="block text-white/50 text-xs font-semibold tracking-wider uppercase mb-1.5 font-mono">
                  Таны зурвас
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Таны бичихийг хүссэн зүйл..."
                  className="w-full bg-[#1c1c1f]/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:bg-[#1c1c1f] transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send size={16} />
                Мэйлээр илгээх (Эхлүүлэх)
              </button>
            </form>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 gap-4">
          <p>© {new Date().getFullYear()} Lithos & Ачлуун. Бүх эрх хамгаалагдсан.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Нууцлалын бодлого</a>
            <span>•</span>
            <span className="font-mono">Created with Passion for Anime & Geology</span>
          </div>
        </div>
      </div>
    </section>
  );
}
