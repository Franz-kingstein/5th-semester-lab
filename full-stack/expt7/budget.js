$(document).ready(function(){
  let totalIncome = 0, totalExpense = 0;

  $("#add").click(function(){
    let income = parseFloat($("#income").val()) || 0;
    let expense = parseFloat($("#expense").val()) || 0;

    totalIncome += income;
    totalExpense += expense;

    let balance = totalIncome - totalExpense;

    $("#totalIncome").text(totalIncome);
    $("#totalExpense").text(totalExpense);
    $("#balance").text(balance);

    $("#income").val('');
    $("#expense").val('');
  });

  $("#reset").click(function(){
    totalIncome = totalExpense = 0;
    $("#totalIncome, #totalExpense, #balance").text(0);
  });
});
