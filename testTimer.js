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
    const self = this;
    const elements = self.elements;
    elements.displayCount.insertAdjacentHTML("beforeend", count);
  },
  clearCount: function() {
    const displayCount = document.getElementById("displayCount");
    displayCount.textContent = "";
  },
  elements: {
    displayCount: document.getElementById("displayCount")
  }
};
