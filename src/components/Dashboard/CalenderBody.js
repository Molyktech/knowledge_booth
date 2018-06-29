import React from "react";
import dateFns from "date-fns";

let iconStyle = {
    width: '20px',
    height: '20px'
}

export default class CalendarBody extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
        <div className="header row cal-row flex-middle">
        <div className="col cal-col col-start">
            <div className="icon" onClick={this.prevMonth}>
                <span><img src="images/icon-back.png" alt="previous" style={iconStyle}/></span>
            </div>
        </div>
        <div className="col cal-col col-center text-center">
            <span>
                {dateFns.format(this.state.currentMonth, dateFormat)}
            </span>
        </div>
        <div className="col cal-col col-end">
            <div className="icon" onClick={this.nextMonth}>
                <span><img src="images/icon-forward.png" alt="next" style={iconStyle}/></span>
            </div>
        </div>
    </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];
     // get  start of the week, go through seven days and display their names.
    

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);


    // loop from startDate to endDate to show all the dates. 

//we will also check if current day in the loop is before monthStart or 
//after monthEnd and disable clicks on it, which will be shown with different style.
//To show selected date, we will also need to ask if current day in the loop isSameDay as selectedDate in our state. 
//Each day will also need anonClick event to pick clicked date as selectedDate

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    //using const cloneDay in our loop because otherwise our onClick event will always take endDate as clicked value, 
        //as that’s the value when our loop ends because we defined day in the outer scope and its value is changed.
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}
