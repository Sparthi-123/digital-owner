import React from 'react';
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaGlobe,
  FaGoogle,
  FaStore,
  FaStar,
  FaBookOpen,
  FaAddressCard
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './index.css';
import profileImg from './assets/ceo3.webp';

function App() {
  const profile = {
    name: "Mr. Sreekarrthikeyan Mahadeven", // Used the client data
    company: "TECH VASEEGRAH",
    avatar: profileImg,
    stallId: "TRZ055", // From the mock prompt
  };

  const links = [
    {
      name: "WHATSAPP",
      url: "https://wa.me/919876543210",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm">
          <FaWhatsapp className="text-white text-2xl" />
        </div>
      ),
    },
    {
      name: "FACEBOOK",
      url: "https://www.facebook.com/people/Tech-Vaseegrah/61558676843990/",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center shadow-sm">
          <FaFacebookF className="text-white text-[1.4rem]" />
        </div>
      ),
    },
    {
      name: "X.COM",
      url: "https://x.com/Tech_Vaseegrah",
      icon: (
        <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-sm">
          <FaXTwitter className="text-white text-xl" />
        </div>
      ),
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/techvaseegrah/",
      icon: (
        <div className="w-11 h-11 rounded-[10px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-sm">
          <FaInstagram className="text-white text-[1.6rem]" />
        </div>
      ),
    },
    {
      name: "GOOGLE MAPS",
      url: "https://www.google.com/maps/search/?api=1&query=Tech+Vaseegrah&query_place_id=ChIJIfTQuMq5qjsR4YB6dK1Bxbk",
      icon: (
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Maps" className="w-[2.4rem] h-[2.4rem] drop-shadow-sm" />
      ),
    },
    {
      name: "GOOGLE REVIEW",
      url: "https://www.google.com/search?q=tech+vaseegrah+google+reviews&oq=tech+vaseegrah+googlr+&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigATIJCAMQIRgKGKABMgcIBBAhGI8CMgcIBRAhGI8C0gEJMTU2NzlqMGo0qAIAsAIB&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x3baab9cab8d0f421:0xb9c541ad747a80e1,3,,,,",
      icon: (
         <div className="w-11 h-11 rounded-lg bg-[#4285F4] flex items-center justify-center shadow-sm">
          <FaStore className="text-white text-xl" />
        </div>
      ),
    },
    {
      name: "WEBSITE",
      url: "https://techvaseegrah.com/about",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#111827] flex items-center justify-center shadow-sm">
          <FaGlobe className="text-white text-2xl" />
        </div>
      ),
    },
    {
      name: "CATALOG",
      url: "#",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#111827] flex items-center justify-center shadow-sm">
          <FaBookOpen className="text-white text-xl" />
        </div>
      ),
    },
    {
      name: "SAVE CONTACT",
      url: "#",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#111827] flex items-center justify-center shadow-sm">
          <FaAddressCard className="text-white text-xl" />
        </div>
      ),
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-6 font-sans">
      
      {/* Top Section */}
      <div className="w-full max-w-sm flex flex-col items-center">
        <h2 className="text-sm font-semibold tracking-wider text-black mb-6 uppercase text-center">
          Welcome to Tech Vaseegrah Stall
        </h2>

        {/* Profile Card */}
        <div className="neu-raised bg-white w-full rounded-3xl p-6 flex flex-col items-center mb-10 transition-all duration-300">
          <div className="w-24 h-24 rounded-full overflow-hidden border-[4px] border-white shadow-[6px_6px_12px_#d1e6d6,-6px_-6px_12px_#ffffff] mb-4">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-bold text-black text-center tracking-tight uppercase">
            {profile.company}
          </h1>
          <p className="text-sm text-gray-800 mt-1 font-semibold opacity-90">{profile.name}</p>
        </div>

        <h3 className="text-sm font-semibold tracking-wider text-black mb-8 uppercase text-center">
          Explore My Profile
        </h3>

        {/* Grid Section */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 w-full px-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-white neu-icon-raised flex items-center justify-center mb-3 group-hover:neu-pressed transition-all duration-200">
                {link.icon}
              </div>
              <span className="text-[0.65rem] font-bold text-black tracking-wide text-center leading-tight uppercase">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-12 pb-4 text-[0.65rem] font-medium text-gray-600 text-center uppercase tracking-wide opacity-80">
        Stall ID: {profile.stallId} | Powered by ProfileConnect (Client-Side Only)
      </div>
      
    </div>
  );
}

export default App;
