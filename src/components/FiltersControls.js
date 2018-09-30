import React from "react";
import { connect } from "react-redux";
import {
  setFilterText,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

export class FiltersControls extends React.Component {
  state = {
    focusedInput: null
  };
  handleFilterTextChange = e => {
    const newValue = e.target.value;
    this.props.setFilterText(newValue);
  };
  handleSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  render() {
    return (
      <div className="filters-controls">
        <div className="filters-controls__item">
          <input
            id="filter-text-input"
            type="text"
            value={this.props.filters.text}
            onChange={this.handleFilterTextChange}
            placeholder="Search Expenses..."
          />
        </div>
        <div className="filters-controls__item">
          <select
            id="sort-select"
            value={this.props.filters.sortBy}
            onChange={this.handleSortChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="filters-controls__item">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId={"a1b2"}
            endDate={this.props.filters.endDate}
            endDateId={"x1z2"}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            numberOfMonths={1}
            isOutsideRange={day => false}
            showClearDates={true}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({
  filters
});

const mapDispatchToProps = dispatch => {
  return {
    setFilterText: text => dispatch(setFilterText(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endtDate => dispatch(setEndDate(endtDate))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersControls);
