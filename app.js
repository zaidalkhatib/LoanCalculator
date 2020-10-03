var loading = true;
const loanAmount = document.querySelector(".loan-amount");
const interestRate = document.querySelector(".interest-rate");
const repaymentYears = document.querySelector(".repayment-years");

document.querySelector(".btn-primary").addEventListener("click", (e) => {
  let interestRateValue =
    Number(interestRate.value) * 0.01 * Number(loanAmount.value);
  let totalPayements = Number(loanAmount.value) + interestRateValue;
  let monthlyPayments = totalPayements / (repaymentYears.value * 12);

  getCalcualtion(interestRateValue, totalPayements, monthlyPayments);
  e.preventDefault();
});

const getCalcualtion = (interestRateValue, totalPayements, monthlyPayments) => {
  loading = false;
  var x = document.querySelector(".calculations");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  if (!loading) {
    document.querySelector(".monthly-payment").value = monthlyPayments;
    document.querySelector(".total-amount").value = totalPayements;
    document.querySelector(".total-interest").value = interestRateValue;
  }
};
