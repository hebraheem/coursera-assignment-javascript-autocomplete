//select all the input fileds
let input = document.getElementsByTagName('input');
//billing function
function billingFunction(){
    //iterate throught the input fields
    for (i = 0; i< input.length; i++){
        //condition to check it input is checked
        if (input[2].checked){
             // grab the input values
            input[3].value = input[0].value;
            input[4].value = input[1].value;
        } else {
            input[3].setAttribute('required', true);
            // set the billing info empty at uncheck
            input[3].value = " ";
            input[4].value = " ";

        }
        
    }
    

}
