import { useState } from "react";
import { User, Heart, Sparkles, Smile, Trophy, HelpCircle } from "lucide-react";

export default function AboutSection() {
  const [activeFunFact, setActiveFunFact] = useState<string | null>(null);

  const funFacts = [
    {
      id: "age",
      icon: <Sparkles className="text-amber-400" size={24} />,
      title: "Нас",
      description: "Би одоо 20 настай. Ирмүүн, шинийг эрэлхийлэгч залуу насны эрч хүчээр дүүрэн явна.",
    },
    {
      id: "family",
      icon: <Heart className="text-rose-500" size={24} />,
      title: "Ам бүл 5-уулаа",
      description: "Миний хамгийн хайртай хүмүүс бол миний гэр бүл. Бид хоорондоо маш дотно, бие биенээ үргэлж дэмждэг.",
    },
    {
      id: "chess",
      icon: <Trophy className="text-purple-400" size={24} />,
      title: "Шатар сонирхогч",
      description: "Шатар бол зүгээр нэг тоглоом биш, энэ бол сэтгэлгээний урлаг. Нүүдэл бүрийн цаана стратегийн нарийн тооцоо байдаг шиг амьдралд ч бас зөв нүүдэл хийх дуртай.",
    },
    {
      id: "humor",
      icon: <Smile className="text-emerald-400" size={24} />,
      title: "Бусдыг хөгжөөх дуртай",
      description: "Би хааяа тэнэг мэт аашилж, эргэн тойронд байгаа хүмүүстээ инээд хөөр, баяр баясгалан бэлэглэх дуртай. Бусдыг аз жаргалтай байхыг харах нь надад маш сайхан мэдрэмж төрүүлдэг.",
    },
  ];

  return (
    <section
      id="about-section"
      className="relative w-full bg-[#0d0d0f] py-24 px-6 md:px-16 lg:px-24 border-t border-white/10 overflow-hidden"
    >
      {/* Background radial accent for modern depth */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <User size={12} />
              Миний тухай
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
              Намайг <span className="text-emerald-400">Ачлуун</span> гэдэг
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              Би өөрийн гэсэн өвөрмөц ертөнцтэй бөгөөд анимэ үзэх, шатар тоглох, бусдыг инээлгэж хөгжөөх дуртай нэгэн.
            </p>
          </div>

          <div className="flex gap-2">
            <span className="text-emerald-500 font-mono text-sm">[ Profile v1.0 ]</span>
          </div>
        </div>

        {/* Bento Grid layout for premium visual representation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main big introduction card */}
          <div className="md:col-span-7 bg-[#141417] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all duration-300" />
            
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                <Sparkles size={22} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">Мэндчилгээ! 👋</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Цаг хугацааны давхарга бүхэн түүхийг өгүүлэх шиг миний амьдралын хором бүр ч бас дурсамжаар баялаг. Намайг Ачлуун гэдэг бөгөөд одоо 20 настай. Би айлын гол тулгуур болсон ам бүл тавуулаа хайр бэлэглэсэн гэр бүлдээ амьдардаг.
                </p>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Миний амьдралын философи маш энгийн: <span className="text-emerald-400 font-medium">Бусдад инээмсэглэл бэлэглэж, өдөр бүрийг хамгийн сэтгэл хангалуун өнгөрөөх.</span> Би үргэлж хөгжилтэй, чөлөөтэй байхыг эрхэмлэдэг.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
              <span>ХОББИ: ШАТАР & АНИМЭ</span>
              <span>20 НАСТАЙ • ЭРЧ ХҮЧТЭЙ</span>
            </div>
          </div>

          {/* Interactive Facts side panel */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            {funFacts.map((fact) => (
              <div
                key={fact.id}
                onClick={() => setActiveFunFact(activeFunFact === fact.id ? null : fact.id)}
                className={`group bg-[#141417] border rounded-2xl p-5 cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                  activeFunFact === fact.id
                    ? "border-emerald-500 shadow-lg shadow-emerald-500/5 bg-[#17171c]"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors duration-300 ${
                  activeFunFact === fact.id ? "bg-white/10" : "bg-white/5 group-hover:bg-white/10"
                }`}>
                  {fact.icon}
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-bold text-base tracking-tight">{fact.title}</h4>
                    <span className="text-[10px] text-white/30 font-mono">
                      {activeFunFact === fact.id ? "ХУМИХ" : "ДЭЛГЭХ"}
                    </span>
                  </div>
                  <p className={`text-white/60 text-xs leading-relaxed transition-all duration-300 ${
                    activeFunFact === fact.id ? "opacity-100 max-h-40" : "opacity-80 max-h-16 overflow-hidden md:line-clamp-2"
                  }`}>
                    {fact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic chess-themed sub-banner for visual variety */}
        <div className="mt-12 bg-gradient-to-r from-[#141417] to-[#1c1c22] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-emerald-500/20 transition-all duration-300">
          <div className="space-y-2 flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-purple-400 font-semibold text-xs uppercase tracking-widest">
              <Trophy size={14} />
              Шатар сонирхогч
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white">Та надтай шатар тоглох уу? ♟️</h4>
            <p className="text-white/60 text-sm max-w-xl">
              Тоглоомын удирдамж, стратегийн нүүдэл бүрт дуртай тул биөлшгүй мэт санагдах асуудлуудыг шатрын өрөг шиг маш сонирхолтойгоор тайлахыг хүсдэг.
            </p>
          </div>
          <button
            onClick={() => alert("Одоогоор шатрын онлайн өрөө бэлтгэгдэж байна. Дараа дахин шалгаарай!")}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-95 text-white font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full shadow-lg shadow-emerald-500/10 cursor-pointer"
          >
            Дуэльд урих
          </button>
        </div>
      </div>
    </section>
  );
}
