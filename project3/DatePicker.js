class DatePicker {
  constructor(id, callback) {
    this.id = id;
    this.callback = callback;
    this.fixedDate = {};
  }

  render(date) {
    let months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    this.fixedDate.year = date.getFullYear();
    this.fixedDate.month = date.getMonth();
    this.fixedDate.day = date.getDate();
    let all_days = getDays(this.fixedDate.year, this.fixedDate.month);
    this.el = window.document.getElementById(this.id);
    this.el.innerHTML = `<div><div class="button" onclick='${
      this.id
    }.render(new Date("${
      date.getMonth() > 0 ? date.getMonth() : 12
    }/${date.getDate()}/${
      date.getMonth() > 0 ? date.getFullYear() : date.getFullYear() - 1
    }"))'>&#11207</div>${months.filter(
      (el, ind) => ind === this.fixedDate.month
    )} ${this.fixedDate.year}<div class="button" onclick='${
      this.id
    }.render(new Date("${
      date.getMonth() < 11 ? date.getMonth() + 2 : 1
    }/${date.getDate()}/${
      date.getMonth() < 11 ? date.getFullYear() : date.getFullYear() + 1
    }"))'>&#11208</div></div>`;
    this.el.innerHTML =
      this.el.innerHTML +
      "<div><div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sat</div></div>";
    this.el.innerHTML = this.el.innerHTML + "<div></div>";
    all_days.map((el) => {
      this.el.lastChild.innerHTML =
        this.el.lastChild.innerHTML +
        `<div class="d${el.ind} ${
          el.day === this.fixedDate.day ? "active" : ""
        }" onclick='${this.id}.render(new Date("${date.getMonth() + 1}/${
          el.day
        }/${date.getFullYear()}"))'>${el.day}</div>`;
    });
    this.callback(this.id, this.fixedDate);
  }
}

getDays = function (year, month) {
  let date = new Date(year, month, 1);
  let days = [];
  while (date.getMonth() === month) {
    days.push({ day: date.getDate(), ind: date.getDay() });
    date.setDate(date.getDate() + 1);
  }
  return days;
};
