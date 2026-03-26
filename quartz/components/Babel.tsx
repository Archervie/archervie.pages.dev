import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Babel: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`babel-container ${displayClass ?? ""}`}>
        <p id="babel-text"></p>
      </div>
    )
 }

  Babel.afterDOMLoaded = `
  const generateBabel = () => {
    const targetText = "The delivery man has yet to arrive";
    const charset = "abcdefghijklmnopqrstuvwxyz., ";
    
    // 1. Simple Hashing function to turn Page Title into a Number
    const seedString = document.title || window.location.pathname;
    let seed = 0;
    for (let i = 0; i < seedString.length; i++) {
        seed = ((seed << 5) - seed) + seedString.charCodeAt(i);
        seed |= 0; // Convert to 32bit integer
    }

    // 2. Deterministic Random Function (Mulberry32)
    // This ensures that the same seed ALWAYS produces the same "random" sequence
    const random = () => {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };

    const paragraphs = document.querySelectorAll(".callout-content p");
    
    paragraphs.forEach(p => {
      if (p.innerText.includes(targetText)) {
        const calloutNode = p.closest('.callout');
        const parentNode = calloutNode.parentNode;
        
        if (parentNode && !parentNode.querySelector('.babel-injected')) {
          const babelDiv = document.createElement("div");
          babelDiv.className = "babel-injected";
          babelDiv.style.marginTop = "2rem";
          babelDiv.style.fontFamily = "monospace";
          babelDiv.style.opacity = "0.35";
          babelDiv.style.lineHeight = "1.4";
          babelDiv.style.wordBreak = "break-all";
          babelDiv.style.fontSize = "0.85rem";
          babelDiv.style.userSelect = "none";
          
          let content = "";
          for (let i = 0; i < 3500; i++) {
            // Use our seeded random() instead of Math.random()
            content += charset.charAt(Math.floor(random() * charset.length));
          }
          
          babelDiv.innerText = content;
          calloutNode.insertAdjacentElement('afterend', babelDiv);
        }
      }
    });
  }

  generateBabel();
  document.addEventListener("nav", generateBabel);
`

  return Babel
}) satisfies QuartzComponentConstructor