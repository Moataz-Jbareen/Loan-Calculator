document.getElementById("btn").addEventListener('click', calculateLoan);




function calculateLoan(){
    const loanAmount=parseFloat(document.getElementById('amount').value);
    const interestRate=parseFloat(document.getElementById('rate').value);
    const loanTerm=parseFloat(document.getElementById('term').value);
    

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        alert("Please enter valid Numbers for all the fields");
    }

    const monthlyInterset= interestRate /100 /12
    const totalPayments =loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterset)/ (1-Math.pow(1 + monthlyInterset, -totalPayments));

    const totalInterst =(monthlyPayment * totalPayments) -loanAmount;

    displayResult(monthlyPayment,totalInterst);
    
}


function displayResult(monthlyPayment,totalInterst){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML= `<p><strong> Monthly Payment : ${monthlyPayment.toFixed(2)}</strong></p><hr />
    <p><strong> Total Interst : ${totalInterst.toFixed(2)}</strong></p>`;
    

}

