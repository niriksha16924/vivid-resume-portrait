import { createFileRoute } from "@tanstack/react-router";
import { Code2, Database, Globe, Layers, Boxes, FileText, Download, Mail, Phone, MapPin, Award, GraduationCap, ArrowUpRight } from "lucide-react";
import photo from "@/assets/niriksha.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niriksha — MCA Student & Aspiring Software Developer" },
      { name: "description", content: "Portfolio of Niriksha from Udupi: skills in PHP, Python, Java, SQL, projects, education and resume." },
      { property: "og:title", content: "Niriksha — Portfolio" },
      { property: "og:description", content: "MCA student and aspiring software developer from Udupi, Karnataka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { group: "Programming", icon: Code2, items: ["PHP", "Python", "Java"] },
  { group: "Web Technology", icon: Globe, items: ["HTML"] },
  { group: "Database", icon: Database, items: ["SQL"] },
  { group: "Core Concepts", icon: Layers, items: ["OOP", "Data Structures"] },
];

const projects = [
  { n: "01", title: "Placement Preparation System", tag: "PHP", points: ["Developed an academic project focused on placement preparation.", "Applied PHP programming concepts and strengthened programming logic."] },
  { n: "02", title: "Sorting Algorithms Implementation", tag: "Bubble & Brick Sort", points: ["Implemented sorting algorithms using comparisons and swaps to arrange data.", "Practiced algorithmic logic and fundamental data structures."] },
];

function Heading({ n, a, b }: { n: string; a: string; b: string }) {
  return (
    <div className="mb-14 flex items-end gap-5">
      <span className="text-xs tracking-[0.3em] text-primary">{n}</span>
      <h2 className="font-display text-5xl font-light md:text-6xl">{a} <span className="italic text-primary">{b}</span></h2>
      <span className="hairline mb-4 hidden flex-1 opacity-40 sm:block" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen grain bg-background bg-glow font-sans font-light text-foreground">
      <nav className="sticky top-0 z-20 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-2xl tracking-wide">Niriksha<span className="text-primary">.</span></span>
          <div className="flex items-center gap-6 text-xs font-light uppercase tracking-[0.25em]">
            {["about", "skills", "projects", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="hidden hover:text-primary md:inline">{s}</a>
            ))}
            <a href={resume.url} download="Niriksha_Resume.pdf" className="rounded-sm border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-primary-foreground">Resume</a>
          </div>
        </div>
      </nav>

      <header className="rise mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div>
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" /> Hello, I'm
          </p>
          <h1 className="mt-4 font-display text-8xl font-light italic leading-none text-gradient md:text-[10rem]">Niriksha</h1>
          <p className="mt-6 text-lg font-light tracking-wide">MCA Student · Aspiring Software Developer</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" /> Udupi, Karnataka</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={resume.url} download="Niriksha_Resume.pdf" className="inline-flex items-center gap-2 border border-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-2 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground underline-offset-8 hover:text-foreground hover:underline">Contact me</a>
          </div>
          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            {[["MCA", "Pursuing"], ["BCA", "2025"], ["NPTEL", "Certified"]].map(([a, b]) => (
              <div key={a}>
                <p className="font-display text-4xl font-light italic text-primary">{a}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-52 md:w-64">
          <img src={photo.url} alt="Portrait of Niriksha" className="glow-ring aspect-square w-full rounded-full object-cover" />
          <span className="glass absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs tracking-wide">● Open to opportunities</span>
        </div>
      </header>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <Heading n="01" a="About" b="me" />
        <div className="relative border-l border-primary/60 py-4 pl-10 md:pl-16">
          <span className="absolute -left-3 -top-10 font-display text-9xl italic text-primary/20">“</span>
          <p className="font-display text-3xl font-light leading-snug md:text-4xl">
            Motivated MCA student and BCA graduate seeking an entry-level IT opportunity to apply programming knowledge,
            contribute to software projects, and grow my skills in <span className="italic text-primary">programming and problem-solving.</span>
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <Heading n="02" a="Technical" b="skills" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ group, icon: Icon, items }) => (
            <div key={group} className="glass rounded-sm p-6">
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((i) => <span key={i} className="font-display text-2xl">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <Heading n="03" a="Academic" b="projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="glass group relative overflow-hidden rounded-sm p-8">
              <span className="absolute -right-2 -top-6 font-display text-9xl italic text-primary/10">{p.n}</span>
              <div className="flex items-center justify-between">
                <span className="rounded-sm border border-primary/50 px-3 py-1 text-xs tracking-wide text-primary">{p.tag}</span>
                <Boxes className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </div>
              <h3 className="mt-6 font-display text-3xl">{p.title}</h3>
              <ul className="mt-4 space-y-2 font-light text-muted-foreground">
                {p.points.map((pt) => <li key={pt}>— {pt}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[2fr_1fr]">
        <div>
          <Heading n="04" a="My" b="education" />
          <ol className="relative space-y-8 border-l border-border pl-8">
            {[
              ["Currently pursuing", "Master of Computer Applications (MCA)", "Poornaprajna Institute of Management"],
              ["Graduated 2025", "Bachelor of Computer Applications (BCA)", "Bhandarkar's Arts and Science College"],
            ].map(([d, t, s]) => (
              <li key={t} className="relative">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{d}</p>
                <h3 className="mt-1 flex items-center gap-2 font-display text-2xl"><GraduationCap className="h-5 w-5 text-primary" />{t}</h3>
                <p className="text-muted-foreground">{s}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <Heading n="05" a="Certified" b="course" />
          <div className="glass rounded-sm p-6">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-2xl">Cloud Computing</h3>
            <p className="text-sm tracking-wide text-muted-foreground">NPTEL · 2026</p>
          </div>
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-6xl px-6 py-24">
        <Heading n="06" a="My" b="resume" />
        <div className="glass grid items-center gap-8 rounded-sm p-8 md:grid-cols-[auto_1fr_auto]">
          <div className="flex h-20 w-20 items-center justify-center rounded-sm border border-primary/50 bg-primary/10">
            <FileText className="h-9 w-9 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-3xl">Niriksha — Resume</h3>
            <p className="mt-1 text-sm text-muted-foreground">Education, skills, projects and certification in one page · PDF</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={resume.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] hover:border-primary">
              View <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={resume.url} download="Niriksha_Resume.pdf" className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90">
              <Download className="h-4 w-4" /> Download
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="mt-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Get in touch</p>
          <h2 className="mt-4 font-display text-6xl">Let's <span className="italic text-primary">connect</span></h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-light tracking-wide">
            <a href="mailto:nirikshasanthosh647@gmail.com" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-primary-foreground"><Mail className="h-4 w-4" /> nirikshasanthosh647@gmail.com</a>
            <a href="tel:9916780317" className="glass inline-flex items-center gap-2 rounded-sm px-6 py-3"><Phone className="h-4 w-4" /> 9916780317</a>
          </div>
          <p className="mt-14 text-xs tracking-wide text-muted-foreground">© 2026 Niriksha · Udupi, Karnataka</p>
        </div>
      </footer>
    </div>
  );
}
