export default class Collapse {
  constructor(button, content) {
    this.button = button;
    this.content = content;
    this.isOpen = false;
    this.isAnimating = false;

    this.init();
  }

  init() {
    this.button.addEventListener("click", () => this.toggle());
    this.content.addEventListener("transitionend", () => {
      this.isAnimating = false;
      if (!this.isOpen) {
        this.content.style.maxHeight = null;
      }
    });
  }

  toggle() {
    if (this.isAnimating) return;

    if (this.isOpen) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  expand() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.isOpen = true;
    this.button.classList.add("active");

    const contentHeight = this.content.scrollHeight;
    this.content.style.maxHeight = `${contentHeight}px`;
    this.content.classList.add("show");
  }

  collapse() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.isOpen = false;
    this.button.classList.remove("active");

    const contentHeight = this.content.scrollHeight;
    this.content.style.maxHeight = `${contentHeight}px`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.content.style.maxHeight = "0px";
        this.content.classList.remove("show");
      });
    });
  }
}
