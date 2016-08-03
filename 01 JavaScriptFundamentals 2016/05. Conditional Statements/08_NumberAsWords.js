function convertNumberToWord(args) {
    var number = +args[0],
        result = 'a';

        var onesArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		var tensArray = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
		var teensArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        var hundreds = number / 100 | 0;
        var tens = (number / 10) % 10 | 0;
        var ones = number % 10;
        //console.log(hundreds, tens, ones);

        if(hundreds === 0 && tens === 0){
            result = onesArray[number];
        }
        else if(hundreds === 0){
            if(tens === 1){
                result = teensArray[ones];
            }
            else{
                if(ones === 0){
                    result = tensArray[tens];
                }
                else{
                    result = tensArray[tens] + ' ' + onesArray[ones];
                }
            }
        }
        else{
            if(tens === 0 && ones === 0){
                result = onesArray[hundreds] + ' ' + 'hundred';
            }
            else{
                if(tens ===0){
                    result = onesArray[hundreds] + ' ' + 'hundred' + ' ' + 'and' + ' ' + onesArray[ones];
                }
                else if(ones === 0){
                    result = onesArray[hundreds] + ' ' + 'hundred'+ ' ' + 'and' + ' ' + tensArray[tens];
                }
                else{
                    if(tens === 1){
                        result = onesArray[hundreds] + ' ' + 'hundred'+ ' ' + 'and' + ' ' + teensArray[ones];
                    }
                    else{
                        result = onesArray[hundreds] + ' ' + 'hundred'+ ' ' + 'and' + ' ' + tensArray[tens] + ' ' + onesArray[ones];
                    }

                }
            }
        }

        function capitalizeFirstLetter(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        console.log(capitalizeFirstLetter(result));
}

convertNumberToWord(['273']);