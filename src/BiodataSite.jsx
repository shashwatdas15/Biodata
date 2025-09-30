import React, { useMemo } from "react";
import { Download, Share2, Calendar, Briefcase, Ruler, Palette, Star, User, Music, School } from "lucide-react";

function handleShare() {
  const text = `Marriage Bio-Data\n\nName: Shashwat Das (BTech, IIT ISM Dhanbad)\nDOB: 01.01.2000\nZodiac Sign (Rashi): Capricorn (Makar)\nLunar Mansions (Nakshatra): Shravan\nWork: CONVERZ AI\nHeight: 5' 9\"\nColour: Wheatish\nFather: Barendra Nath Das (Music Teacher)\nMother: Malati Bhuyan (Govt Teacher)`;
  if (navigator.share) {
    navigator.share({ title: "Shashwat – Marriage Bio-Data", text });
  } else {
    navigator.clipboard.writeText(text).then(() => alert("Copied summary to clipboard!"));
  }
}

export default function BiodataSite() {
  const facts = useMemo(() => ([
    { label: "Name", value: "Shashwat Das (BTech, IIT ISM Dhanbad)", icon: User },
    { label: "Date of Birth", value: "01.01.2000", icon: Calendar },
    { label: "Zodiac Sign (Rashi)", value: "Capricorn (Makar)", icon: Star },
    { label: "Lunar Mansions (Nakshatra)", value: "Shravan", icon: Star },
    { label: "Work", value: "CONVERZ AI", icon: Briefcase },
    { label: "Height", value: "5' 9\"", icon: Ruler },
    { label: "Complexion", value: "Wheatish", icon: Palette },
  ]), []);

  const family = useMemo(() => ([
    { label: "Father", value: "Barendra Nath Das (Music Teacher)", icon: Music },
    { label: "Mother", value: "Malati Bhuyan (Govt Teacher)", icon: School },
  ]), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sky-50 text-slate-800 antialiased print:bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200 print:hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-2xl bg-gradient-to-tr from-rose-400 to-sky-400 text-white grid place-items-center font-semibold shadow-sm">SD</div>
            <div className="leading-tight">
              <p className="text-sm text-slate-500">Marriage Bio-Data</p>
              <h1 className="text-lg font-semibold">Shashwat Das</h1>
            </div>
          </div>
          {/* <div className="flex items-center gap-2">
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-sm border border-slate-200 bg-white hover:bg-slate-50">
              <Download className="size-4" /> Print / Save PDF
            </button>
            <button onClick={handleShare} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-sm text-white bg-gradient-to-r from-rose-500 to-sky-500 hover:opacity-95">
              <Share2 className="size-4" /> Share
            </button>
          </div> */}
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="rounded-3xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-2 p-8 sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-rose-50 text-rose-700 ring-1 ring-rose-200">Marriage Profile</div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Shashwat Das</h2>
              <p className="mt-1 text-slate-500">BTech, IIT ISM Dhanbad</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {facts.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Icon className="size-4 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
                      <p className="font-medium text-slate-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-8 sm:p-10 bg-gradient-to-br from-sky-100 via-white to-rose-100">
              <div className="absolute inset-0 pointer-events-none" />
              <div className="relative">
                <div className="mx-auto size-32 sm:size-40 rounded-full bg-gradient-to-tr from-rose-400 to-sky-400 shadow-inner shadow-rose-200 ring-4 ring-white grid place-items-center text-white text-4xl font-bold select-none">SD</div>
                <p className="mt-4 text-center text-sm text-slate-600">“Seeking a joyful, kind-hearted match from a loving family.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="rounded-3xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 overflow-hidden">
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl font-semibold">Family Details</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {family.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Icon className="size-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">{label}'s Name</p>
                    <p className="font-medium text-slate-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 print:pb-6">
        <div className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Shashwat Das · Designed with ♥ for a new beginning
        </div>
      </footer>
    </div>
  );
}
