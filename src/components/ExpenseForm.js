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
    descriptionError: null,
    amountError: null
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
        descriptionError: "Please insert a description of your expense"
      }));
    } else if (this.state.description && this.state.descriptionError) {
      this.setState(() => ({ descriptionError: null }));
    }
    // handle amount error
    if (!this.state.amount) {
      this.setState(() => ({
        amountError: "Please insert an amount of your expense"
      }));
    } else if (this.state.amount && this.state.amountError) {
      this.setState(() => ({ amountError: null }));
    }
    // Submit
    if (this.state.description && this.state.amount) {
      this.setState(() => ({
        descriptionError: null,
        amountError: null
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
        <form onSubmit={this.handleFormSubmit}>
          <input
            id="description-input"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            placeholder="Expense Description"
            autoFocus
          />
          <br />
          {this.state.descriptionError && <p>{this.state.descriptionError}</p>}
          <input
            id="amount-input"
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
            placeholder="Amount"
          />
          <br />
          {this.state.amountError && <p>{this.state.amountError}</p>}
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
          <br />
          <textarea
            id="note-input"
            name="note"
            value={this.state.note}
            onChange={this.handleNoteChange}
            placeholder="Expense Note"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
