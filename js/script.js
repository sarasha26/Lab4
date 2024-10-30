//Global variables
let customerType
let invoiceTotal
let discountPercent
let discountAmount
let newInvoiceTotal

//display heading

document.write('<h3> Welcome to the Invoice Application </h3>')

//Ask user for customer type and get the initial invoice total
customerType = prompt('Enter customer type(r/w):')
invoiceTotal = parseFloat(prompt('Enter invoice total'))

//Check if the customer is wholesale or retail
if(customerType == 'r'){
    if(invoiceTotal >= 500){

        discountPercent = 0.25
    } else if(invoiceTotal >= 250 && invoiceTotal < 500){
        discountPercent = 0.10

    } else{
        discountPercent = 0
    }

}else if(customerType == 'w'){
    if(invoiceTotal >= 1000){
        discountPercent = 0.35

    } else if(invoiceTotal >= 500 && invoiceTotal < 1000){
        discountPercent = 0.30

    } else{
        discountPercent = 0.10

    }  

}else{
    discountPercent = 0

}

//perform calculations
discountAmount = invoiceTotal * discountPercent
newInvoiceTotal = invoiceTotal - discountAmount

//Display results
if(customerType == 'r'){
    document.write('Retail Customer <br>')
}else{
    document.write('Wholesale Customer<br>')
}
document.write(`Invoice Total: $${invoiceTotal}<br>`)
document.write(`Discount Percent: ${discountPercent * 100}% <br>`)
document.write(`Discount Amount: $${discountAmount.toFixed(2)} <br>`)
document.write(`Grand Total: $${newInvoiceTotal.toFixed(2)}`)

