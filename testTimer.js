const model = {
  countClick: 0
};

const controller = {
  handleClick: function() {
    model.countClick++;
    view.clearCount();
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
