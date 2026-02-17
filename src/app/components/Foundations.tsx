// "use client";
// import { motion } from "framer-motion";
// import { GraduationCap, Award } from "lucide-react";

// const education = [
//   {
//     title: "BS in Industrial Technology",
//     institution: "Mariano Marcos State University",
//     status: "Current / Ongoing",
//     detail: "Focused on bridging technical systems with industrial automation.",
//     color: "from-green-500/20"
//   },
//   {
//     title: "Electronics & Telecomm Tech",
//     institution: "Tech-Voc Specialization",
//     status: "Graduate",
//     detail: "Deep dive into circuit logic, signals, and hardware infrastructure.",
//     color: "from-purple-500/20"
//   }
// ];

// const certificates = [
//   {
//     title: "CS50x: Computer Science",
//     issuer: "Harvard University",
//     skills: ["C", "Memory", "Data Structures"],
//     color: "from-blue-500/10"
//   },
//   {
//     title: "CS50W: Web Programming",
//     issuer: "Harvard University",
//     skills: ["Django", "React", "Scalability"],
//     color: "from-red-500/10"
//   }
// ];

// export default function Foundations() {
//   return (
//     <section id="academic" className="py-24 px-6 max-w-7xl mx-auto">
//       <div className="flex items-center gap-4 mb-12">
//         <h2 className="text-3xl font-bold text-white tracking-tighter">Academic Core</h2>
//         <div className="h-[1px] flex-grow bg-white/5" />
//       </div>

//       <div className="grid lg:grid-cols-3 gap-8">
        
//         {/* Formal Education Column */}
//         <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
//           {education.map((edu, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`p-8 rounded-[2rem] bg-gradient-to-br ${edu.color} to-black/20 border border-white/5 flex flex-col justify-between`}
//             >
//               <div>
//                 <div className="flex justify-between items-start mb-4">
//                   <GraduationCap className="text-white/20" size={32} />
//                   <span className="text-[10px] font-mono text-accent border border-accent/20 px-2 py-1 rounded">
//                     {edu.status}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-bold text-white">{edu.title}</h3>
//                 <p className="text-zinc-500 text-xs font-mono mt-1">{edu.institution}</p>
//               </div>
//               <p className="text-zinc-400 text-sm mt-6 leading-relaxed italic">
//                 "{edu.detail}"
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Certifications Column */}
//         <div className="flex flex-col gap-6">
//           <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-4">Specializations</h4>
//           {certificates.map((cert, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 group hover:bg-white/10 transition-all"
//             >
//               <div className="flex gap-4 items-start">
//                 <Award className="text-accent mt-1" size={20} />
//                 <div>
//                   <h3 className="text-sm font-bold text-white">{cert.title}</h3>
//                   <p className="text-[10px] text-zinc-500 uppercase tracking-tight font-mono">{cert.issuer}</p>
//                   <div className="flex flex-wrap gap-1 mt-3">
//                     {cert.skills.map(skill => (
//                       <span key={skill} className="text-[9px] text-zinc-400 bg-black/30 px-2 py-0.5 rounded border border-white/5">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const education = [
  {
    title: "BS in Industrial Technology",
    institution: "Mariano Marcos State University",
    status: "Ongoing",
    detail: "Focused on bridging technical systems with industrial automation.",
    color: "from-green-500/20"
  },
  {
    title: "Electronics & Telecomm Tech",
    institution: "Tech-Voc Specialization",
    status: "Graduate",
    detail: "Study of circuit logic, signals, and hardware infrastructure.",
    color: "from-purple-500/20"
  }
];

const certificates = [
  {
    title: "CS50x: Computer Science",
    issuer: "Harvard University",
    skills: ["C", "Memory", "Data Structures", "SQL"],
    color: "from-blue-500/10",
    certLink: "https://certificates.cs50.io/83e09398-576d-492f-90ea-3473e246abf7.pdf?size=letter"
  },
  {
    title: "CS50W: Web Programming",
    issuer: "Harvard University",
    skills: ["Django", "React", "Scalability", "Python"],
    color: "from-red-500/10",
    // Fixed: changed 'certlink' to 'certLink' to match the logic below
    certLink: "https://cs50.harvard.edu/certificates/2bd05b01-02c5-42e9-bd3a-8d2b9e4e93f7"
  }
];

export default function Foundations() {
  return (
    <section id="academic" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tighter">Academic Core</h2>
        <div className="h-[1px] flex-grow bg-white/5" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Formal Education Column */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[2rem] bg-gradient-to-br ${edu.color} to-black/20 border border-white/5 flex flex-col justify-between shadow-xl shadow-black/20 group hover:border-white/10 transition-all duration-500`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <GraduationCap className="text-white/20 group-hover:text-accent transition-colors" size={32} />
                  <span className="text-[9px] font-mono text-accent border border-accent/20 px-2 py-1 rounded uppercase tracking-widest">
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{edu.title}</h3>
                <p className="text-zinc-500 text-xs font-mono mt-1">{edu.institution}</p>
              </div>
              <p className="text-zinc-400 text-sm mt-8 leading-relaxed italic opacity-80">
                "{edu.detail}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Column */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] px-4 italic">Verification Required</h4>
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-[1.8rem] bg-zinc-900/50 border border-white/5 group hover:border-accent/30 transition-all relative overflow-hidden"
            >
              <div className="flex gap-4 items-start relative z-10">
                <Award className="text-accent mt-1 shrink-0" size={20} />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div className="max-w-[80%]">
                      <h3 className="text-sm font-bold text-white group-hover:text-accent transition-colors leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono mt-1">{cert.issuer}</p>
                    </div>
                    
                    {cert.certLink && (
                      <a 
                        href={cert.certLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-accent transition-all p-1.5 bg-white/5 rounded-full hover:scale-110 active:scale-95"
                        title="View Official Certificate"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mt-4">
                    {cert.skills.map(skill => (
                      <span key={skill} className="text-[8px] text-zinc-500 bg-black/40 px-2 py-0.5 rounded border border-white/5 font-mono group-hover:text-zinc-300 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Subtle background glow */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${cert.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}