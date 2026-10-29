import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/niriksha.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niriksha — MCA Student & Aspiring Software Developer" },
      { name: "description", content: "Portfolio of Niriksha from Udupi: skills in PHP, Python, Java, SQL, projects and education." },
      { property: "og:title", content: "Niriksha — Portfolio" },
      { property: "og:description", content: "MCA student and aspiring software developer from Udupi, Karnataka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "PHP", c: "bg-card text-card-foreground" },
  { name: "Python", c: "bg-secondary text-secondary-foreground" },
  { name: "Java", c: "bg-card text-card-foreground" },
  { name: "HTML", c: "bg-tangerine text-secondary-foreground" },
  { name: "SQL", c: "bg-lime text-secondary-foreground" },
  { name: "OOP", c: "bg-card text-card-foreground" },
  { name: "Data Structures", c: "bg-card text-card-foreground" },
];

const projects = [
  { title: "Placement Preparation System", tag: "PHP", c: "bg-secondary", points: ["Developed an academic project focused on placement preparation.", "Applied PHP programming concepts and strengthened programming logic."] },
  { title: "Sorting Algorithms Implementation", tag: "Bubble & Brick Sort", c: "bg-lime", points: ["Implemented sorting algorithms using comparisons and swaps to arrange data.", "Practiced algorithmic logic and fundamental data structures."] },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-2xl font-extrabold">Niriksha<span className="text-primary">.</span></span>
        <div className="hidden gap-6 font-medium sm:flex">
          {["about", "skills", "projects", "contact"].map((s) => (
            <a key={s} href={`#${s}`} className="capitalize hover:text-primary">{s}</a>
          ))}
        </div>
      </nav>

      <header className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1 text-sm font-bold text-secondary-foreground">👋 Hello, I'm</span>
          <h1 className="mt-5 font-display text-6xl font-extrabold leading-none md:text-8xl">
            Niriksha
          </h1>
          <p className="mt-5 text-xl font-medium">MCA Student · Aspiring Software Developer</p>
          <p className="mt-2 text-muted-foreground">📍 Udupi, Karnataka</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:nirikshasanthosh647@gmail.com" className="pop-card bg-primary px-6 py-3 font-bold text-primary-foreground">Get in touch</a>
            <a href="#projects" className="pop-card bg-card px-6 py-3 font-bold">See projects</a>
          </div>
        </div>
        <div className="relative mx-auto w-72 md:w-96">
          <img src={photo.url} alt="Portrait of Niriksha" className="relative aspect-[4/5] w-full rounded-[2rem] border border-border object-cover shadow-pop" />
        </div>
      </header>

      <section id="about" className="border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-display text-4xl font-extrabold">About me</h2>
          <p className="mt-5 text-lg font-medium text-muted-foreground md:text-xl">
            Motivated MCA student and BCA graduate seeking an entry-level IT opportunity to apply programming knowledge,
            contribute to software projects, and grow my skills in programming and problem-solving.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl font-extrabold">Technical <span className="text-primary">skills</span></h2>
        <div className="mt-8 flex flex-wrap gap-4">
          {skills.map((s) => (
            <span key={s.name} className={`pop-card px-6 py-3 text-lg font-bold ${s.c}`}>{s.name}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="font-display text-4xl font-extrabold">Academic <span className="text-accent">projects</span></h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className={`pop-card p-8 text-secondary-foreground ${p.c}`}>
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-bold">{p.tag}</span>
              <h3 className="mt-4 font-display text-2xl font-extrabold">{p.title}</h3>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => <li key={pt}>✦ {pt}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-display text-4xl font-extrabold">Edu<span className="text-tangerine">cation</span></h2>
          <div className="mt-8 space-y-6">
            <div className="pop-card bg-card p-6">
              <p className="text-sm font-bold text-primary">Currently pursuing</p>
              <h3 className="font-display text-xl font-bold">Master of Computer Applications (MCA)</h3>
              <p className="text-muted-foreground">Poornaprajna Institute of Management</p>
            </div>
            <div className="pop-card bg-card p-6">
              <p className="text-sm font-bold text-accent">Graduated 2025</p>
              <h3 className="font-display text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-muted-foreground">Bhandarkar's Arts and Science College</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-display text-4xl font-extrabold">Certi<span className="text-primary">fied</span></h2>
          <div className="pop-card mt-8 bg-tangerine p-6 text-secondary-foreground">
            
            <h3 className="mt-2 font-display text-xl font-bold">Cloud Computing</h3>
            <p className="font-medium">NPTEL · 2026</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t-2 border-foreground bg-card text-card-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-display text-5xl font-extrabold">Let's <span className="text-secondary">connect</span>!</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4 font-bold">
            <a href="mailto:nirikshasanthosh647@gmail.com" className="rounded-full bg-primary px-6 py-3 text-primary-foreground">✉ nirikshasanthosh647@gmail.com</a>
            <a href="tel:9916780317" className="rounded-full bg-secondary px-6 py-3 text-secondary-foreground">☎ 9916780317</a>
          </div>
          <p className="mt-10 text-sm opacity-70">© 2026 Niriksha · Udupi, Karnataka</p>
        </div>
      </footer>
    </div>
  );
}
