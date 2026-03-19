import React, { useState } from "react";

const tabs = ["Popular", "NEET", "JEE", "KEAM", "CUET", "11 - 12", "8 - 10", "4 - 7"];

const courses = {
  Popular: [
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/NEET_JEE-6.webp",
      title: "Plus Two Tuition + JEE Coaching - STATE",
      desc: "Eduport's JEE 2027 Program is a one-year intensive course with 500+ hours of expert sessions, quality materials, and AI tools, combining Plus Two coverage with focused entrance prep.",
      board: "CBSE",
      link: "https://l.eduport.app/qcxpy8",
    },
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/1_Science_Tuition.webp",
      title: "Plus One Science Pre-Booster Batch - CBSE",
      desc: "Eduport's One-Year Online Program for CBSE Plus One Science students combines live and recorded sessions, mock tests, and personalized mentorship.",
      board: "CBSE",
      link: "https://bit.ly/3J8YHP0",
    },
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/Plus_Two_Science.webp",
      title: "Plus Two Science Pre-Booster Batch",
      desc: "Eduport's Plus Two Kerala Board Program offers 350+ hours of expert-led classes with full syllabus coverage, regular tests, and personalized mentorship.",
      board: "KERALA BOARD",
      link: "https://l.eduport.app/56j62u",
    },
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/NEET_JEE-7.webp",
      title: "Plus One Tuition + NEET Coaching - STATE",
      desc: "Eduport offers 500+ class hours covering the complete Board and NEET syllabus, premium study materials with theory, practice problems, worksheets, NCERT exercises.",
      board: "KERALA BOARD",
      link: "https://l.eduport.app/hqt9qt",
    },
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/NEET_JEE.webp",
      title: "Plus One Tuition + JEE Coaching - STATE",
      desc: "Eduport Plus One Tuition + JEE Coaching offers 500+ class hours covering the entire Board and JEE syllabus, premium study materials, and 100+ tests.",
      board: "KERALA BOARD",
      link: "https://l.eduport.app/87en4d",
    },
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/SSLC_KERALA.webp",
      title: "SSLC Pre-Booster Batch",
      desc: "Eduport's Class 10 SSLC Mastery Program offers 250+ hours of expert-led classes with live and recorded sessions for complete syllabus coverage.",
      board: "KERALA BOARD",
      link: "https://l.eduport.app/9dhgep",
    },
  ],
  NEET: [
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/NEET_JEE-7.webp",
      title: "Plus One Tuition + NEET Coaching - STATE",
      desc: "500+ class hours covering the complete Board and NEET syllabus with premium study materials, NCERT exercises, and solved PYQs.",
      board: "KERALA BOARD",
      link: "#",
    },
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/NEET_JEE-8.webp",
      title: "Plus Two Tuition + NEET Coaching - STATE",
      desc: "500+ class hours covering the entire Board and NEET syllabus, premium materials with 100+ tests for complete assessment.",
      board: "KERALA BOARD",
      link: "#",
    },
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/NEET_JEE-9.webp",
      title: "Plus Two Tuition + NEET Coaching - CBSE",
      desc: "500+ class hours covering the entire Board and NEET syllabus with premium study materials and personalized mentorship.",
      board: "CBSE",
      link: "#",
    },
  ],
  JEE: [
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/NEET_JEE-6.webp",
      title: "Plus Two Tuition + JEE Coaching - STATE",
      desc: "One-year intensive course with 500+ hours of expert sessions combining Plus Two coverage with focused JEE entrance prep.",
      board: "KERALA BOARD",
      link: "#",
    },
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/NEET_JEE.webp",
      title: "Plus One Tuition + JEE Coaching - STATE",
      desc: "500+ class hours covering the entire Board and JEE syllabus with premium materials and expert mentorship.",
      board: "KERALA BOARD",
      link: "#",
    },
  ],
  KEAM: [
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/Plus_Two_Science.webp",
      title: "Plus Two + KEAM Coaching",
      desc: "Comprehensive preparation for KEAM with Plus Two tuition, combining board exam readiness with Kerala engineering entrance prep.",
      board: "KERALA BOARD",
      link: "#",
    },
  ],
  CUET: [
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/1_Science_Tuition.webp",
      title: "CUET Preparation Batch",
      desc: "Complete CUET preparation with subject experts, mock tests, and strategy sessions for top university admissions.",
      board: "CBSE",
      link: "#",
    },
  ],
  "11 - 12": [
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/Plus_Two_Science.webp",
      title: "Plus Two Science Pre-Booster Batch",
      desc: "350+ hours of expert-led classes with full syllabus coverage, regular tests, and personalized mentorship for board exams.",
      board: "KERALA BOARD",
      link: "#",
    },
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/1_Science_Tuition.webp",
      title: "Plus One Science Pre-Booster Batch - CBSE",
      desc: "Live and recorded sessions, mock tests, and personalized mentorship for strong subject understanding and board readiness.",
      board: "CBSE",
      link: "#",
    },
  ],
  "8 - 10": [
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/SSLC_KERALA.webp",
      title: "SSLC Pre-Booster Batch",
      desc: "250+ hours of expert-led live and recorded classes for complete syllabus coverage and SSLC board exam readiness.",
      board: "KERALA BOARD",
      link: "#",
    },
  ],
  "4 - 7": [
    {
      img: "https://eduport.app/wp-content/uploads/2024/11/1_Science_Tuition.webp",
      title: "Foundation Batch (Class 4 - 7)",
      desc: "Strong foundation classes for young learners, building core concepts in Mathematics and Science with expert teachers.",
      board: "KERALA BOARD",
      link: "#",
    },
  ],
};

function CourseCard({ course }) {
  return (
    <a
      href={course.link}
      target="_blank"
      rel="noreferrer"
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden group flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={
            /** @param {React.SyntheticEvent<HTMLImageElement>} e */
            (e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?w=400&h=300&fit=crop";
            }
          }
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-[#1a1a2e] text-sm mb-2 leading-snug line-clamp-2">{course.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-3 flex-1">{course.desc}</p>
        <div className="flex items-center gap-1 mt-auto">
          <span className="text-[10px] font-bold text-[#FF6B35] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full uppercase tracking-wide">
            {course.board}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("Popular");
  const list = courses[activeTab] || [];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#1a1a2e] mb-2">Our Courses</h2>
          <p className="text-gray-500 text-sm">Learn free with Live Classes and Pre Recorded Videos</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#FF6B35] text-white shadow-md"
                  : "bg-white text-[#1a1a2e] border border-gray-200 hover:border-[#FF6B35] hover:text-[#FF6B35]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {list.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
