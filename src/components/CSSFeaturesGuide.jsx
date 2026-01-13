import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Code } from "lucide-react";

const CSSFeature = ({
  number,
  title,
  description,
  support,
  codepenSlug,
  codepenUser = "codebrakerk",
  mdn,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  // Load CodePen embed script
  React.useEffect(() => {
    if (showEmbed && codepenSlug) {
      const script = document.createElement("script");
      script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showEmbed, codepenSlug]);

  return (
    <div className="border border-neutral-800 rounded-lg mb-4 overflow-hidden bg-neutral-900/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-transparent hover:bg-neutral-800/30 flex items-center justify-between transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-neutral-500">#{number}</span>
          <h3 className="text-lg font-semibold text-neutral-200">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="text-neutral-400" />
        ) : (
          <ChevronDown className="text-neutral-400" />
        )}
      </button>

      {isOpen && (
        <div className="p-6 bg-transparent border-t border-neutral-800/50">
          <p className="text-neutral-300 mb-4 leading-relaxed">{description}</p>

          <div className="mb-4 p-3 bg-neutral-800/20 rounded border-l-4 border-neutral-700/50">
            <p className="text-sm font-semibold text-neutral-400 mb-1">
              Browser Support:
            </p>
            <p className="text-sm text-neutral-300">{support}</p>
          </div>

          <div className="mb-4">{children}</div>

          {codepenSlug && (
            <div className="mb-4">
              {!showEmbed ? (
                <button
                  onClick={() => setShowEmbed(true)}
                  className="w-full px-4 py-3 bg-neutral-800/40 text-neutral-200 rounded hover:bg-neutral-700/40 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Code size={16} />
                  Load Live CodePen Demo
                </button>
              ) : (
                <p
                  className="codepen"
                  data-height="500"
                  data-theme-id="dark"
                  data-default-tab="result"
                  data-slug-hash={codepenSlug}
                  data-pen-title={`CSS Feature ${number} Demo`}
                  data-user={codepenUser}
                  style={{
                    height: "500px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(38, 38, 38, 0.5)",
                    margin: "1em 0",
                    padding: "1em",
                    borderRadius: "0.5rem",
                    background: "rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <span>
                    See the Pen{" "}
                    <a
                      href={`https://codepen.io/${codepenUser}/pen/${codepenSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#d8dadb" }}
                    >
                      CSS Feature {number}
                    </a>{" "}
                    by {codepenUser} (
                    <a
                      href={`https://codepen.io/${codepenUser}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#d8dadb" }}
                    >
                      @{codepenUser}
                    </a>
                    ) on{" "}
                    <a
                      href="https://codepen.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#d8dadb" }}
                    >
                      CodePen
                    </a>
                    .
                  </span>
                </p>
              )}
            </div>
          )}

          <div className="flex gap-3 flex-wrap">
            {codepenSlug && (
              <a
                href={`https://codepen.io/${codepenUser}/pen/${codepenSlug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/40 text-neutral-200 rounded hover:bg-neutral-700/40 transition-colors text-sm"
              >
                <ExternalLink size={16} />
                Edit on CodePen
              </a>
            )}
            {mdn && (
              <a
                href={mdn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/40 text-neutral-200 rounded hover:bg-neutral-700/40 transition-colors text-sm"
              >
                <ExternalLink size={16} />
                MDN Docs
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const CodeExample = ({ code }) => (
  <pre className="bg-black text-neutral-300 p-4 rounded overflow-x-auto text-sm mb-3 border border-neutral-800">
    <code>{code}</code>
  </pre>
);

export default function CSSFeaturesGuide() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-neutral-200 mb-4">
            10 New CSS Features for 2026
          </h1>
          <p className="text-xl text-neutral-400 mb-2">
            Interactive guide with examples and documentation
          </p>
          <p className="text-sm text-neutral-500">
            Based on Web Dev Simplified's comprehensive tutorial
          </p>
        </div>

        <CSSFeature
          number={1}
          title="Border Radius Corner Shapes (Squircles!)"
          description="Finally make corner shapes beyond just rounded edges! Choose from round (default), bevel (straight cut), notch (inward rectangular), scoop (inward curve), and the beloved squircle (smooth superellipse). Create unique shapes without SVGs or complex clipping."
          support="✅ Chrome 130+, Safari 18+ | ⚠️ Limited Firefox support"
          codepenSlug="KwMgxNx"
          codepenUser="codebrakerk"
          mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"
        >
          <CodeExample
            code={`/* Traditional rounded corners */
.round {
  border-radius: 16px;
  corner-shape: round; /* Default behavior */
}
.squircle {
  border-radius: 30px;
  corner-shape: squircle;
}

/* Bevel - straight cut corners */
.bevel {
  corner-shape: bevel;
}

/* Notch - inward rectangular cut */
.notch {
  corner-shape: notch;
}

/* Scoop - inward curved cut */
.scoop {
  corner-shape: scoop;
}
`}
          />
        </CSSFeature>

        <CSSFeature
          number={2}
          title="shape() Function"
          description="Create complex custom shapes with the new shape() function for clip-path. More powerful than path() - supports CSS units (%, rem, em), CSS math functions (calc, max, min), and easier syntax. Perfect for creating stars, polygons, and custom animations with offset-path."
          support="✅ Chrome 130+ | ⚠️ Very limited support"
          codepenSlug="YOUR_SLUG_HERE"
          codepenUser="codebrakerk"
          mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/shape"
        >
          <CodeExample
            code={`/* Star shape using lines */
.star-lines {
  clip-path: shape(
    from 50% 0%, 
    line to 61% 35%,
    line to 98% 35%,
    line to 68% 57%,
    line to 79% 91%,
    line to 50% 70%,
    line to 21% 91%,
    line to 32% 57%,
    line to 2% 35%,
    line to 39% 35%,
    close
  );
}

/* Animate along custom path */
.element {
  offset-path: shape(
    from 0% 0%,
    curve to 100% 0% via 50% -50%,
    curve to 100% 100% via 150% 50%,
    curve to 0% 100% via 50% 150%,
    close
  );
  animation: move 4s linear infinite;
}

@keyframes move {
  to { offset-distance: 100%; }
}`}
          />
        </CSSFeature>

        <CSSFeature
          number={3}
          title="Styleable HTML Select (appearance: base-select)"
          description="Finally! Style native HTML select dropdowns without JavaScript hacks. Customize the picker box, dropdown icon, open state, individual options, and checkmarks. Native accessibility maintained while getting full design control."
          support="✅ Chrome 119+, Edge 119+ | ⚠️ Limited Safari/Firefox"
          codepenUrl="https://codepen.io/pen?template=zYgXKMQ"
          mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/appearance"
        >
          <CodeExample
            code={`select {
  appearance: base-select;
}

/* Style the main select box */
select::picker(select) {
  padding: 0.5rem 1rem;
  border: 2px solid #404040;
  border-radius: 8px;
  background: #0a0a0a;
  color: #d8dadb;
}

/* Animate the dropdown icon */
select::picker-icon {
  transition: rotate 0.3s;
}

select:open::picker-icon {
  rotate: 180deg;
}

/* Style individual options */
select option {
  padding: 0.5rem 1rem;
  background: #0a0a0a;
  color: #d8dadb;
}

select option:checked {
  background: #262626;
  color: #d8dadb;
}`}
          />
        </CSSFeature>

        <CSSFeature
          number={4}
          title="::scroll-marker & ::scroll-button Pseudo-elements"
          description="Create carousels and scrollable interfaces with zero JavaScript! scroll-marker acts like anchor links for jumping to scroll positions. scroll-button adds forward/backward navigation controls. Perfect for image carousels and content sliders."
          support="✅ Chrome 131+ | ⚠️ Very limited support"
          codepenUrl="https://codepen.io/pen?template=ExqZRYm"
          mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker"
        >
          <CodeExample
            code={`/* Setup carousel with markers */
.carousel {
  scroll-marker-group: after;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.carousel-item {
  scroll-snap-align: center;
  flex: 0 0 100%;
}

/* Style the scroll markers (dots) */
.carousel-item::scroll-marker {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #404040;
  border: 2px solid #666;
}

/* Active marker styling */
.carousel-item:target::scroll-marker {
  background: #d8dadb;
  border-color: #d8dadb;
}

/* Add navigation buttons */
.carousel::scroll-button(prev),
.carousel::scroll-button(next) {
  width: 40px;
  height: 40px;
  background: rgba(216, 218, 219, 0.1);
  color: #d8dadb;
  border-radius: 50%;
}`}
          />
        </CSSFeature>

        <CSSFeature
          number={5}
          title="Container Scroll State Queries"
          description="Style elements based on scroll state - whether sticky elements are stuck, snap containers are snapped, or containers are scrollable. Replaces complex JavaScript scroll listeners with pure CSS. Query three states: stuck, snapped, and scrollable."
          support="✅ Chrome 130+ | ⚠️ Very limited support"
          codepenUrl="https://codepen.io/pen?template=bGXZYPO"
          mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_scroll_state_queries"
        >
          <CodeExample
            code={`/* Setup scroll state container */
.container {
  container-type: scroll-state;
  container-name: scroller;
}

/* Query 1: Sticky element stuck state */
.header {
  position: sticky;
  top: 0;
  background: #0a0a0a;
}

@container scroller scroll-state(stuck: top) {
  .header {
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #262626;
  }
}

/* Query 2: Snap state in carousel */
@container scroller scroll-state(snapped: inline) {
  .carousel-item {
    opacity: 1;
    scale: 1;
  }
}

/* Query 3: Scrollable state */
@container scroller scroll-state(scrollable: top) {
  .scroll-to-top {
    opacity: 1;
    pointer-events: auto;
  }
}`}
          />
        </CSSFeature>

        <CSSFeature
          number={6}
          title="stretch Keyword for width/height"
          description="The true 100% value! Unlike regular 100%, stretch includes the element's margin box when sizing. No more box-sizing issues or margin overflow problems. Finally get elements to fill containers perfectly including margins."
          support="✅ Chrome 130+, Firefox 130+, Safari 18+"
          codepenUrl="https://codepen.io/pen?template=JjgwqLG"
          mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/width"
        >
          <CodeExample
            code={`/* Traditional 100% - excludes margin */
.box-100 {
  width: 100%;
  height: 100%;
  margin: 20px;
  /* Overflows container by 40px! */
}

/* New stretch - includes margin */
.box-stretch {
  width: stretch;
  height: stretch;
  margin: 20px;
  /* Perfectly fits container including margin */
}

/* Practical example: full-width cards with margin */
.card {
  width: stretch;
  margin: 1rem;
  padding: 1rem;
  background: #0f0f0f;
  border: 1px solid #262626;
  color: #d8dadb;
}`}
          />
        </CSSFeature>

        <CSSFeature
          number={7}
          title="text-box-trim & text-box-edge"
          description="Control whitespace trimming above and below text for pixel-perfect alignment. Trim to cap height, x-height, or alphabetic baseline. Perfect for aligning text with images or creating tightly-packed layouts without manual negative margins."
          support="✅ Chrome 130+, Edge 130+ | ⚠️ Limited Safari/Firefox"
          codepenUrl="https://codepen.io/pen?template=rNXzqLO"
          mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim"
        >
          <CodeExample
            code={`/* Trim both top and bottom */
.text-trimmed {
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
  /* Trim to capital height on top, baseline below */
  color: #d8dadb;
}

/* Perfect alignment example */
.header {
  display: flex;
  align-items: start;
}

.header h1 {
  text-box-edge: cap text;
  color: #d8dadb;
  /* Now aligns perfectly with icon */
}

.header img {
  height: 1em;
  filter: brightness(0.85);
}`}
          />
        </CSSFeature>

        <CSSFeature
          number={8}
          title="sibling-index() Function"
          description="Get the position of an element among its siblings as an integer (1-indexed). Create staggered widths, animation delays, and alternating patterns without nth-child complexity or JavaScript. Perfect for dynamic layouts and sequential animations."
          support="✅ Chrome 130+ | ⚠️ Very limited support"
          codepenUrl="https://codepen.io/pen?template=XWLYmNd"
          mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-index"
        >
          <CodeExample
            code={`/* Staggered widths - no complex nth-child */
.list-item {
  width: calc(sibling-index() * 50px);
  background: #0f0f0f;
  border: 1px solid #262626;
  color: #d8dadb;
}

/* Staggered animation delays */
.animated-item {
  animation: fade-in 0.5s;
  animation-delay: calc(sibling-index() * 0.1s);
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Alternating colors made easy */
.card {
  background: hsl(
    calc(sibling-index() * 30deg), 
    5%, 
    calc(8% + sibling-index() * 2%)
  );
  color: #d8dadb;
}`}
          />
        </CSSFeature>

        <CSSFeature
          number={9}
          title="if() Function - Inline Conditionals"
          description="Conditional logic directly in CSS properties! Use media queries, style queries, or supports queries inline. Choose values based on conditions without separate @media blocks. Cleaner, more maintainable responsive code."
          support="✅ Chrome 130+ | ⚠️ Very limited support"
          codepenUrl="https://codepen.io/pen?template=abewqXR"
          mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/if"
        >
          <CodeExample
            code={`/* Inline media query conditions */
.container {
  flex-direction: if(
    media(width < 768px): column,
    row
  );
  background: #0a0a0a;
}

/* Style query - theme switching */
.button {
  background: if(
    style(--theme: dark): #0f0f0f,
    style(--theme: light): #fff,
    #262626
  );
  
  color: if(
    style(--theme: dark): #d8dadb,
    style(--theme: light): #0a0a0a,
    inherit
  );
}

/* Complex example - responsive font sizing */
.heading {
  font-size: if(
    media(width > 1200px): 3rem,
    media(width > 768px): 2rem,
    media(width > 480px): 1.5rem,
    1rem
  );
  color: #d8dadb;
}`}
          />
        </CSSFeature>

        <CSSFeature
          number={10}
          title="@function - Custom CSS Functions"
          description="Define your own reusable CSS functions with parameters and logic! Create utility functions, calculations, and abstractions. The most powerful feature - turns CSS into a true programming language. Define local variables, run logic, return computed values."
          support="⚠️ Experimental - No browser support yet"
          codepenUrl="https://codepen.io/pen?template=QWRYmBd"
          mdn="https://drafts.csswg.org/css-mixins/"
        >
          <CodeExample
            code={`/* Define custom alpha function */
@function --alpha(--color, --opacity) {
  @return oklch(
    from var(--color) 
    l c h / var(--opacity)
  );
}

/* Use it anywhere */
.button {
  background: --alpha(#262626, 0.8);
  color: #d8dadb;
}

.button:hover {
  background: --alpha(#262626, 1);
}

/* Responsive utility function */
@function --narrow-wide(--narrow-val, --wide-val) {
  result: if(
    media(width < 768px): var(--narrow-val),
    var(--wide-val)
  );
  @return result;
}

/* Clean inline usage */
.container {
  flex-direction: --narrow-wide(column, row);
  background: #0a0a0a;
}

.heading {
  font-size: --narrow-wide(1.5rem, 3rem);
  color: #d8dadb;
}`}
          />
        </CSSFeature>

        <div className="mt-12 p-8 bg-neutral-800/20 rounded-lg border border-neutral-800/50">
          <h2 className="text-2xl font-bold text-neutral-200 mb-4">
            Additional Resources
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-neutral-300 mb-2">
                Official Documentation
              </h3>
              <ul className="space-y-1 text-sm text-neutral-400">
                <li>
                  •{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    className="text-neutral-300 hover:text-neutral-100 transition-colors"
                  >
                    MDN CSS Documentation
                  </a>
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://web.dev/learn/css"
                    target="_blank"
                    className="text-neutral-300 hover:text-neutral-100 transition-colors"
                  >
                    web.dev CSS Learning Path
                  </a>
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://caniuse.com"
                    target="_blank"
                    className="text-neutral-300 hover:text-neutral-100 transition-colors"
                  >
                    Can I Use - Browser Compatibility
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-300 mb-2">
                Interactive Playgrounds
              </h3>
              <ul className="space-y-1 text-sm text-neutral-400">
                <li>
                  •{" "}
                  <a
                    href="https://codepen.io"
                    target="_blank"
                    className="text-neutral-300 hover:text-neutral-100 transition-colors"
                  >
                    CodePen
                  </a>
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://jsfiddle.net"
                    target="_blank"
                    className="text-neutral-300 hover:text-neutral-100 transition-colors"
                  >
                    JSFiddle
                  </a>
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://cssbattle.dev"
                    target="_blank"
                    className="text-neutral-300 hover:text-neutral-100 transition-colors"
                  >
                    CSS Battle (Practice)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-300 mb-2">
                Original Video
              </h3>
              <p className="text-sm text-neutral-400">
                Watch{" "}
                <a
                  href="https://www.youtube.com/watch?v=svqu6FDiMAs"
                  target="_blank"
                  className="text-neutral-300 hover:text-neutral-100 transition-colors font-semibold"
                >
                  Web Dev Simplified's full tutorial
                </a>{" "}
                for detailed explanations and live demonstrations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-neutral-500">
          <p>Click each feature to expand and explore code examples!</p>
          <p className="mt-2">
            All CodePen links open examples you can edit and experiment with.
          </p>
        </div>
      </div>
    </div>
  );
}
