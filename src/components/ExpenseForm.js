import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends React.Component {
  state = {
    description: this.props.editedExpense
      ? this.props.editedExpense.description
      : "",
    amount: this.props.editedExpense ? this.props.editedExpense.amount : "",
    note: this.props.editedExpense ? this.props.editedExpense.note : "",
    createdAt: this.props.editedExpense
      ? this.props.editedExpense.createdAt
      : moment(),
    datePickerFocused: false,
    descriptionError: false,
    amountError: false
  };
  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  handleAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState(() => ({ amount }));
  };
  handleNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  handleFormSubmit = e => {
    e.preventDefault();
    // handle description error
    if (!this.state.description) {
      this.setState(() => ({
        descriptionError: true
      }));
    } else if (this.state.description && this.state.descriptionError) {
      this.setState(() => ({ descriptionError: false }));
    }
    // handle amount error
    if (!this.state.amount) {
      this.setState(() => ({
        amountError: true
      }));
    } else if (this.state.amount && this.state.amountError) {
      this.setState(() => ({ amountError: false }));
    }
    // Submit
    if (this.state.description && this.state.amount) {
      this.setState(() => ({
        descriptionError: false,
        amountError: false
      }));
      this.props.onSubmitHandler({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <div className="form__group">
            <input
              id="description-input"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              placeholder="Expense Description"
              className="form__input"
              autoFocus
            />
            <p
              className={
                this.state.descriptionError
                  ? "error-msg error-msg--visible"
                  : "error-msg"
              }
            >
              Please insert a valid description of your expense
            </p>
          </div>
          <div className="form__group">
            <input
              id="amount-input"
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleAmountChange}
              placeholder="Amount"
              className="form__input"
            />
            <p
              className={
                this.state.amountError
                  ? "error-msg error-msg--visible"
                  : "error-msg"
              }
            >
              Please insert a valid amount of your expense
            </p>
          </div>
          <div className="form__group">
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={date => {
                if (date) {
                  this.setState({ createdAt: date });
                }
              }}
              focused={this.state.datePickerFocused}
              onFocusChange={({ focused }) =>
                this.setState({ datePickerFocused: focused })
              }
              numberOfMonths={1}
              isOutsideRange={day => false}
            />
          </div>
          <div className="form__group">
            <textarea
              id="note-input"
              name="note"
              value={this.state.note}
              onChange={this.handleNoteChange}
              placeholder="Expense Note"
              className="form__input"
            />
          </div>
          <div className="form__group">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
