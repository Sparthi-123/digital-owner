import React, { useState } from 'react';
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
  FaAddressCard,
  FaEnvelope,
  FaTimes,
  FaExternalLinkAlt,
  FaLock,
  FaTh,
  FaPlayCircle,
  FaRegIdBadge,
  FaUserFriends,
  FaBriefcase,
  FaRetweet,
  FaHeart,
  FaComment,
  FaPaperPlane
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './index.css';
import profileImg from './assets/ceo3.webp';
import logoImg from './assets/logo.png';
import mailImg from './assets/gmail.png';
import igGrid from './assets/ig_grid.png';

function App() {

  const profile = {
    name: "Mr. Sreekarrthikeyan Mahadevan",
    company: "TECH VASEEGRAH",
    avatar: profileImg,
    stallId: "TRZ055",
  };

  const links = [
    {
      name: "WHATSAPP",
      url: "https://wa.me/919047484484",
      description: "Chat with us directly on WhatsApp for quick responses.",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm">
          <FaWhatsapp className="text-white text-2xl" />
        </div>
      ),
      theme: "from-[#25D366]/20 to-[#128C7E]/20 text-[#128C7E]",
      isWhatsApp: true
    },
    {
      name: "FACEBOOK",
      url: "https://www.facebook.com/people/Tech-Vaseegrah/61558676843990/",
      description: "Follow our page for the latest updates and announcements.",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center shadow-sm">
          <FaFacebookF className="text-white text-[1.4rem]" />
        </div>
      ),
      theme: "from-[#1877F2]/20 to-[#0c59c2]/20 text-[#1877F2]",
      isFacebook: true
    },
    {
      name: "X.COM",
      url: "https://x.com/Tech_Vaseegrah",
      description: "Join the conversation and stay tuned with our tweets.",
      icon: (
        <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-sm">
          <FaXTwitter className="text-white text-xl" />
        </div>
      ),
      theme: "from-gray-300 to-gray-500 text-black",
      isX: true
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/techvaseegrah/",
      description: "Check out our latest visual content, stories and reels.",
      icon: (
        <div className="w-11 h-11 rounded-[10px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-sm">
          <FaInstagram className="text-white text-[1.6rem]" />
        </div>
      ),
      theme: "from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 text-[#dc2743]",
      isInstagram: true
    },
    {
      name: "GOOGLE MAPS",
      url: "https://www.google.com/maps/search/?api=1&query=Tech+Vaseegrah&query_place_id=ChIJIfTQuMq5qjsR4YB6dK1Bxbk",
      description: "Find our office location and get directions.",
      icon: (
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Maps" className="w-[2.4rem] h-[2.4rem] drop-shadow-sm" />
      ),
      theme: "from-green-100 to-blue-100 text-blue-600"
    },
    {
      name: "GOOGLE REVIEW",
      url: "https://www.google.com/search?q=tech+vaseegrah+google+reviews&oq=tech+vaseegrah+googlr+&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigATIJCAMQIRgKGKABMgcIBBAhGI8CMgcIBRAhGI8C0gEJMTU2NzlqMGo0qAIAsAIB&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x3baab9cab8d0f421:0xb9c541ad747a80e1,3,,,,",
      description: "Read what others say about us or leave your own review.",
      icon: (
         <div className="w-11 h-11 rounded-lg bg-[#4285F4] flex items-center justify-center shadow-sm">
          <FaStore className="text-white text-xl" />
        </div>
      ),
      theme: "from-yellow-100 to-blue-100 text-blue-600"
    },
    {
      name: "WEBSITE",
      url: "https://techvaseegrah.com/about",
      description: "Learn more about our services and solutions on our website.",
      icon: (
        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm p-1">
          <img src={logoImg} alt="Tech Vaseegrah Logo" className="w-full h-full object-contain" />
        </div>
      ),
      theme: "from-[#1ba048]/20 to-[#158039]/20 text-[#1ba048]",
      isWebsite: true
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/company/tech-vaseegrah/posts/?feedView=all",
      description: "Connect with us professionally and see our corporate updates.",
      icon: (
        <div className="w-11 h-11 rounded-md bg-[#0077B5] flex items-center justify-center shadow-sm">
          <FaLinkedinIn className="text-white text-2xl" />
        </div>
      ),
      theme: "from-[#0077B5]/20 to-[#005e93]/20 text-[#0077B5]",
      isLinkedIn: true
    },
    {
      name: "EMAIL",
      url: "mailto:techvaseegrah@gmail.com",
      description: "Send us an email for inquiries and support.",
      icon: (
        <div className="w-11 h-11 rounded-md bg-white flex items-center justify-center shadow-sm p-1">
          <img src={mailImg} alt="Gmail" className="w-full h-full object-contain" />
        </div>
      ),
      theme: "from-red-100 to-red-200 text-red-600"
    }
  ];


  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-6 font-sans relative overflow-x-hidden">
      
      {/* Top Section */}
      <div className="w-full max-w-sm flex flex-col items-center">
        <h2 className="text-sm font-semibold tracking-wider text-white mb-8 uppercase text-center bg-[#1ba048] px-8 py-3 rounded-full shadow-md w-full">
          Welcome to Profile
        </h2>

        {/* Profile Card */}
        <div className="neu-raised bg-white w-full rounded-3xl p-6 flex flex-col items-center mb-10 transition-all duration-300">
          <div className="w-24 h-24 rounded-full overflow-hidden border-[4px] border-white shadow-[6px_6px_12px_#d1e6d6,-6px_-6px_12px_#ffffff] mb-4">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-sm font-semibold text-white text-center tracking-wide uppercase bg-[#1ba048] px-5 py-1.5 rounded-full shadow-sm mt-2">
            {profile.company}
          </h1>
          <p className="text-base text-black mt-2 font-bold">{profile.name}</p>
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
        Stall ID: {profile.stallId} | Powered by ProfileConnect
      </div>
      
    </div>
  );
}

export default App;
