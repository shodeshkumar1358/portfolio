import Image from "next/image";

export default function ProjectArtwork({ project }) {
  return (
    <div
      className={`project-art project-art--${project.theme}`}
      aria-hidden="true"
    >
      <div className={`art-window art-window--${project.theme}`}>
        <div className="art-window__top">
          <span />
          <span />
          <span />
          <i />
        </div>
        <div className="art-window__content">
          {project.theme === "fitlog" && (
            <div className="fitlog-layout">
              <div className="fitlog-header">
                <Image
                  src="/project-images/fitlog-logo.png"
                  alt=""
                  width={22}
                  height={22}
                  className="fitlog-logo"
                />
                <span>FITLOG</span>
                <nav aria-hidden="true">
                  <span>Workouts</span>
                  <span>My Plan</span>
                </nav>
                <i>Plan&nbsp; 0&nbsp;&nbsp; Saved&nbsp; 0</i>
              </div>
              <div className="fitlog-heading">
                <span>WORKOUT LIBRARY</span>
                <strong>Train with intent.<br />Log every set.</strong>
                <small>
                  Pick a lift, build today&apos;s plan, and keep your training
                  on track.
                </small>
                <i>Browse Workouts <b>↗</b></i>
              </div>
              <div className="fitlog-library">
                <span>The Library</span>
                <i>Chest</i>
                <i>Arms</i>
                <b>12 lifts · Every major muscle group</b>
              </div>
              <div className="fitlog-exercise" aria-hidden="true">
                <span />
                <i />
                <b />
              </div>
            </div>
          )}
          {project.theme === "bazardor" && (
            <div className="bazardor-layout">
              <div className="bazardor-header">
                <strong>বাজার দর</strong>
                <span>হোম&nbsp;&nbsp; পণ্যসমূহ&nbsp;&nbsp; বিভাগ</span>
                <i>প্রবেশ করুন</i>
              </div>
              <div className="bazardor-home">
                <div className="bazardor-heading">
                  <span>আজকের বাজার</span>
                  <strong>আজকের বাজারের দাম এক নজরে</strong>
                  <small>
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার বাজারভিত্তিক দাম
                  </small>
                  <i>সব পণ্য দেখুন <b>↗</b></i>
                </div>
                <Image
                  className="bazardor-hero-image"
                  src="/project-images/bazardor-hero.svg"
                  alt=""
                  width={200}
                  height={160}
                />
              </div>
            </div>
          )}
          {project.theme === "field" && (
            <div className="field-layout">
              <span className="field-wordmark">
                form
                <br />
                &amp; field
              </span>
              <span className="field-edition">
                OBJECTS FOR SLOWER DAYS
                <br />
                COLLECTION No. 04 — 2025
              </span>
              <div className="field-object">
                <span className="vase vase--large" />
                <span className="vase vase--small" />
                <span className="field-leaf field-leaf--one" />
                <span className="field-leaf field-leaf--two" />
              </div>
              <span className="field-caption">A softer kind of everyday.</span>
            </div>
          )}
        </div>
      </div>
      <span className="art-caption">{project.visualLabel}</span>
    </div>
  );
}
