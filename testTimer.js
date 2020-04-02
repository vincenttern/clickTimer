const model = {
  countClick: 0
};

const controller = {
  handleClick: function() {
    model.countClick++;

    // Ternary operator to check if HTML element id displayCount is true if so it will execute view.clearCount() if false will do nothing.
    view.elements.displayCount.textContent ? view.clearCount() : null;

    view.displayClick(model.countClick);
  }
};

const view = {
  displayClick: function(count) {
    const displayCount = this.elements.displayCount;
    return displayCount.insertAdjacentHTML("beforeend", count);
  },
  clearCount: function() {
    const displayCount = this.elements.displayCount;
    const clearDisplayCount = (displayCount.textContent = "");
    return clearDisplayCount;
  },
  elements: {
    displayCount: document.getElementById("displayCount")
  }
};
