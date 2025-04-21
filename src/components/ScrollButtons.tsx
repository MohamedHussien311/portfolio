
import { ArrowUp, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 30);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initialize
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = () => {
    if (atTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-5 bottom-6 z-30">
      <button
        aria-label={atTop ? "Scroll to bottom" : "Scroll to top"}
        className="bg-white shadow-lg p-3 rounded-full hover:bg-primary/10 transition"
        onClick={handleScroll}
      >
        {atTop ? (
          <ArrowDown size={28} className="text-primary" />
        ) : (
          <ArrowUp size={28} className="text-primary" />
        )}
      </button>
    </div>
  );
};

export default ScrollButton;
