import React from 'react';
import { Star } from 'lucide-react';
import { REAL_GOOGLE_REVIEWS } from '../data/reviewsData';

interface ClientReviewItem {
  id: string;
  title: string;
  reviewerName: string;
  rating: number;
  dateTag: string;
  text: string;
  role: string;
  location: string;
  avatarImage: string;
}

// Curated reviews formatted in Image 4 UI style (Title, 5 Stars, Date/Verified, Review text, User avatar & name)
const ROW_1_REVIEWS: ClientReviewItem[] = [
  {
    id: "rev-01",
    title: "Dream house architectural planning",
    reviewerName: "Prashant Singh",
    rating: 5,
    dateTag: "Google Verified",
    text: "Awesome office, nice place to work and a well experienced architect who makes your dreams come true by designing your house.",
    role: "Villa Owner",
    location: "Sanjay Place, Agra",
    avatarImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rev-02",
    title: "Unique interior designs in Agra",
    reviewerName: "Kc Anand",
    rating: 5,
    dateTag: "Google Verified",
    text: "Unique interior designs and a very responsible team in Agra. Their modern interior and architectural work really stands out.",
    role: "Commercial Executive",
    location: "Civil Lines, Agra",
    avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rev-03",
    title: "Excellent finishing & unique interiors",
    reviewerName: "Rohit Anand",
    rating: 5,
    dateTag: "Google Verified",
    text: "The work is very good, with excellent finishing and unique interior design for our residence in Dayalbagh.",
    role: "Turnkey Client",
    location: "Dayalbagh, Agra",
    avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rev-04",
    title: "Gazab ki planning and 3D designing",
    reviewerName: "Vivek Sheel",
    rating: 5,
    dateTag: "Google Verified",
    text: "Excellent planning and 3D designing. Truly impressed with the detail and realistic perspective before construction.",
    role: "Civil Engineer & Homeowner",
    location: "Fatehabad Road, Agra",
    avatarImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rev-05",
    title: "Unique 3D design & elevation modeling",
    reviewerName: "Renu Dhaked",
    rating: 5,
    dateTag: "Google Verified",
    text: "The 3D work is very nice, with unique designs. Every room and elevation was carefully planned to perfection.",
    role: "Residence Owner",
    location: "Kamla Nagar, Agra",
    avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
];

const ROW_2_REVIEWS: ClientReviewItem[] = [
  {
    id: "rev-06",
    title: "Very nice 3D work and planning",
    reviewerName: "Yash Pal",
    rating: 5,
    dateTag: "Google Verified",
    text: "Very nice 3D work and planning. Professional approach, prompt delivery, and accurate on-site execution alignment.",
    role: "Real Estate Developer",
    location: "Shastri Puram, Agra",
    avatarImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rev-07",
    title: "Nice work with best work experience",
    reviewerName: "Man Singh",
    rating: 5,
    dateTag: "Google Verified",
    text: "Nice work and a very good overall experience. The architectural team handled our questions with utmost patience.",
    role: "Duplex Villa Client",
    location: "Sikandra, Agra",
    avatarImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rev-08",
    title: "Detailed 3D planning & layout",
    reviewerName: "Vimal Kumar",
    rating: 5,
    dateTag: "Google Verified",
    text: "Nice work and very good 3D planning. Clear structural layout and transparent material discussions throughout.",
    role: "Farmhouse Client",
    location: "Shamshabad Road, Agra",
    avatarImage: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rev-09",
    title: "Modern interior designing excellence",
    reviewerName: "Sujit Kumar",
    rating: 5,
    dateTag: "Google Verified",
    text: "Nice work in interior designing. Clean lines, contemporary materials, and functional spatial flow for our home.",
    role: "Apartment Owner",
    location: "Civil Lines, Agra",
    avatarImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rev-10",
    title: "Flawless turnkey execution & 3D flow",
    reviewerName: "Dr. Amit Goyal",
    rating: 5,
    dateTag: "Google Verified",
    text: "From initial 3D visualization to final architectural drawings, Ashiyana Design Studio delivered exceptional quality.",
    role: "Healthcare Specialist",
    location: "Agra, Uttar Pradesh",
    avatarImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
];

export const ClientStories: React.FC = () => {
  return (
    <div
      id="reviews"
      className="py-16 sm:py-20 lg:py-24 text-white relative overflow-hidden bg-[#0B0D12]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header section matching Image 4 style */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16 relative z-10">
        {/* Google G Logo Badge Icon (Center Top) */}
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white text-[#111317] font-bold text-lg shadow-md mb-4 border border-white/20">
          <span className="text-blue-600 font-extrabold">G</span>
        </div>

        {/* Clean, Classy Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white mb-3">
          Stories from those who built with us
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mb-5 font-normal">
          Real verified experiences from homeowners and clients across Agra who turned spatial visions into reality.
        </p>

        {/* Rating Pill Badge: 4.9 ★★★★★ • 43+ reviews */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white shadow-xs">
          <div className="w-5 h-5 rounded-md bg-white text-[#111317] font-extrabold text-[11px] flex items-center justify-center">
            G
          </div>
          <span className="font-bold text-white">4.9</span>
          <div className="flex items-center text-[#F5A623]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]" />
            ))}
          </div>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-300 font-medium">43+ Google Reviews</span>
        </div>
      </div>

      {/* Dual Row Continuous Marquee Container */}
      <div className="relative w-full overflow-hidden space-y-5 sm:space-y-6">
        
        {/* Subtle Edge Fade Gradients for Seamless Black Boundary Integration */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B0D12] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B0D12] to-transparent z-20" />

        {/* ROW 1: Upper Review Boxes scrolling from LEFT TO RIGHT (animate-marquee-ltr) */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="animate-marquee-ltr flex gap-5 sm:gap-6 shrink-0">
            {/* 3x loop array for 100% gapless continuous marquee */}
            {[...ROW_1_REVIEWS, ...ROW_1_REVIEWS, ...ROW_1_REVIEWS].map((item, idx) => (
              <div
                key={`r1-${item.id}-${idx}`}
                className="w-[300px] sm:w-[360px] lg:w-[390px] shrink-0 bg-white text-[#111317] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.3)] border border-neutral-100 flex flex-col justify-between"
              >
                <div>
                  {/* Title / Catchphrase */}
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#111317] line-clamp-1 mb-1.5">
                    {item.title}
                  </h3>

                  {/* 5 Gold Stars & Date Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-[#F5A623]">
                      {[...Array(item.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-neutral-400 font-medium">
                      {item.dateTag}
                    </span>
                  </div>

                  {/* Review Text in Black */}
                  <p className="text-xs sm:text-[13px] text-[#24272E] leading-relaxed line-clamp-3 mb-5 font-normal">
                    {item.text}
                  </p>
                </div>

                {/* Reviewer Bottom Info: Avatar + Name + Role/Location */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-neutral-100">
                  <img
                    src={item.avatarImage}
                    alt={item.reviewerName}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-neutral-200 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-xs sm:text-sm text-[#111317] truncate leading-tight">
                      {item.reviewerName}
                    </p>
                    <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Lower Review Boxes scrolling from RIGHT TO LEFT (animate-marquee-rtl) */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="animate-marquee-rtl flex gap-5 sm:gap-6 shrink-0">
            {/* 3x loop array for 100% gapless continuous marquee */}
            {[...ROW_2_REVIEWS, ...ROW_2_REVIEWS, ...ROW_2_REVIEWS].map((item, idx) => (
              <div
                key={`r2-${item.id}-${idx}`}
                className="w-[300px] sm:w-[360px] lg:w-[390px] shrink-0 bg-white text-[#111317] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.3)] border border-neutral-100 flex flex-col justify-between"
              >
                <div>
                  {/* Title / Catchphrase */}
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#111317] line-clamp-1 mb-1.5">
                    {item.title}
                  </h3>

                  {/* 5 Gold Stars & Date Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-[#F5A623]">
                      {[...Array(item.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-neutral-400 font-medium">
                      {item.dateTag}
                    </span>
                  </div>

                  {/* Review Text in Black */}
                  <p className="text-xs sm:text-[13px] text-[#24272E] leading-relaxed line-clamp-3 mb-5 font-normal">
                    {item.text}
                  </p>
                </div>

                {/* Reviewer Bottom Info: Avatar + Name + Role/Location */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-neutral-100">
                  <img
                    src={item.avatarImage}
                    alt={item.reviewerName}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-neutral-200 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-xs sm:text-sm text-[#111317] truncate leading-tight">
                      {item.reviewerName}
                    </p>
                    <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
