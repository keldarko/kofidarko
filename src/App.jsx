import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Contact Card */}
        <div className="ios-glass rounded-[32px] p-8 text-center">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#81D8D0] to-blue-600 p-[2px] mx-auto mb-6">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <span className="font-medium text-2xl text-white">KD</span>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-3xl font-medium text-white mb-2 tracking-tight">
            Kofi Darko
          </h1>
          <p className="text-white/60 text-lg mb-8 font-light">
            Software Developer
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <a
              href="mailto:kofi@kofidarko.com"
              className="flex items-center justify-center gap-3 w-full bg-white/5 hover:bg-white/10 rounded-2xl py-4 px-6 transition-colors duration-200 group"
            >
              <iconify-icon
                icon="solar:letter-linear"
                width="20"
                height="20"
                className="text-white/60 group-hover:text-[#81D8D0] transition-colors"
              ></iconify-icon>
              <span className="text-white font-medium">kofi@kofidarko.com</span>
            </a>

            <a
              href="tel:+44(0)7767213730"
              className="flex items-center justify-center gap-3 w-full bg-white/5 hover:bg-white/10 rounded-2xl py-4 px-6 transition-colors duration-200 group"
            >
              <iconify-icon
                icon="solar:phone-linear"
                width="20"
                height="20"
                className="text-white/60 group-hover:text-[#81D8D0] transition-colors"
              ></iconify-icon>
              <span className="text-white font-medium">+44 (0) 7767 213 730</span>
            </a>

            <div className="flex justify-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/keldarko"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200 group"
              >
                <iconify-icon
                  icon="simple-icons:linkedin"
                  width="20"
                  height="20"
                  className="text-white/60 group-hover:text-[#81D8D0] transition-colors"
                ></iconify-icon>
              </a>
              <a
                href="https://www.instagram.com/keldarko"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200 group"
              >
                <iconify-icon
                  icon="simple-icons:instagram"
                  width="20"
                  height="20"
                  className="text-white/60 group-hover:text-[#81D8D0] transition-colors"
                ></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}