import { icons } from "feather-icons";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach((pre) => {
    // Prevent double processing
    if (pre.parentElement.classList.contains("code-wrapper")) return;

    /* Wrapper */
    const wrapper = document.createElement("div");
    wrapper.className = "code-wrapper";

    /* Toolbar */
    const toolbar = document.createElement("div");
    toolbar.className = "code-toolbar";

    const expandButton = document.createElement("button");
    expandButton.className = "expand-button";
    expandButton.innerHTML = icons.maximize.toSvg({
      class: "feather",
      width: "18",
      height: "18",
    });

    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.innerHTML = icons.copy.toSvg({
      class: "feather",
      width: "18",
      height: "18",
    });

    toolbar.append(expandButton, copyButton);

    /* Wrap DOM */
    pre.before(wrapper);
    wrapper.append(toolbar, pre);
    function handleEsc(e) {
      if (e.key === "Escape") {
        const active = document.querySelector(".code-wrapper.code-fullscreen");
        if (active) {
          active.classList.remove("code-fullscreen");
          document.body.classList.remove("body-no-scroll");
          document.removeEventListener("keydown", handleEsc);
        }
      }
    }
    copyButton.addEventListener("click", async () => {
      const code = pre.querySelector("code");
      await navigator.clipboard.writeText(code.innerText);

      // swap icon to check
      copyButton.innerHTML = icons.check.toSvg({
        class: "feather",
        width: "18",
        height: "18",
      });

      // revert back to copy
      setTimeout(() => {
        copyButton.innerHTML = icons.copy.toSvg({
          class: "feather",
          width: "18",
          height: "18",
        });
      }, 1200);
    });
    expandButton.addEventListener("click", () => {
      const isFullscreen = wrapper.classList.toggle("code-fullscreen");

      document.body.classList.toggle("body-no-scroll", isFullscreen);

      if (isFullscreen) {
        document.addEventListener("keydown", handleEsc);
      } else {
        document.removeEventListener("keydown", handleEsc);
      }
    });
  });
});
