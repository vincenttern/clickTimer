var myObject = {
  countClick: 0,
  handleClick: function() {
    this.countClick++;
    view.displayClick(this.countClick);
  }
};

var view = {
  displayClick: function(count) {
    var displayCount = document.getElementById("displayCount");
    displayCount.insertAdjacentHTML("beforeend", count);
  }
};
