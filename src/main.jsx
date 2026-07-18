import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const projects = [
  { number: '01', title: 'متجر إلكتروني', text: 'واجهة متجر عصرية وسهلة الاستخدام، من عرض المنتجات حتى إتمام الطلب.' },
  { number: '02', title: 'تطبيق مهام', text: 'تطبيق بسيط يساعد المستخدم على ترتيب مهامه اليومية ومتابعة إنجازه.' },
  { number: '03', title: 'صفحة هبوط', text: 'صفحة تعريفية سريعة وجذابة لخدمة أو منتج رقمي.' },
]

function App() {
  return (
    <main>
      <nav className="nav container">
        <a className="logo" href="#top">سعد<span>.</span></a>
        <div className="nav-links">
          <a href="#about">عني</a>
          <a href="#projects">مشاريعي</a>
          <a href="#contact">تواصل</a>
        </div>
      </nav>

      <section id="top" className="hero container">
        <p className="eyebrow">مطور واجهات مبتدئ · ٢٠٢٦</p>
        <h1>أحوّل الأفكار إلى<br /><em>تجارب رقمية.</em></h1>
        <p className="intro">هلا، أنا سعد. أتعلم تطوير الويب وأبني مواقع بسيطة، سريعة، ومريحة للعين.</p>
        <a className="button" href="#projects">شوف مشاريعي <span>←</span></a>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
      </section>

      <section id="about" className="about container">
        <p className="section-label">٠١ — عني</p>
        <div>
          <h2>أتعلم، أجرّب،<br />وأبني كل يوم.</h2>
          <p>مهتم بتطوير واجهات الويب باستخدام React وJavaScript. هدفي أصنع منتجات مفيدة بتصاميم واضحة وبسيطة.</p>
          <div className="skills">
            <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span>
          </div>
        </div>
      </section>

      <section id="projects" className="projects container">
        <p className="section-label">٠٢ — مشاريعي</p>
        <h2>أشياء صنعتها.</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <span>{project.number}</span>
              <div><h3>{project.title}</h3><p>{project.text}</p></div>
              <span className="arrow">↖</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact container">
        <p className="section-label">٠٣ — تواصل</p>
        <h2>عندك فكرة؟<br /><em>خلّنا نتكلم.</em></h2>
        <a href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
      </section>

      <footer className="container"><span>© ٢٠٢٦ سعد</span><span>بُني بـ React</span></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
