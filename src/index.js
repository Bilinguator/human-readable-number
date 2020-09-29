module.exports = function toReadable (number) {

    //Получение единиц
    function getUnit (n) {
        switch (n) {
            case '1':
                return 'one'
            case '2':
                return 'two'
            case '3':
                return 'three'
            case '4':
                return 'four'
            case '5':
                return 'five'
            case '6':
                return 'six'
            case '7':
                return 'seven'
            case '8':
                return 'eight'
            case '9':
                return 'nine'
            default:
                return ''
        }
    }

    //Получение десятков
    function getTens (n) {
        switch (n) {
            case '2':
                return 'twenty'
            case '3':
                return 'thirty'
            case '4':
                return 'forty'
            case '5':
                return 'fifty'
            case '6':
                return 'sixty'
            case '7':
                return 'seventy'
            case '8':
                return 'eighty'
            case '9':
                return 'ninety'
            default:
                return ''
        }
    }

    //Получение 10-19
    function getTeen (n) {
        switch (n) {
            case '10':
                return 'ten'
            case '11':
                return 'eleven'
            case '12':
                return 'twelve'
            case '13':
                return 'thirteen'
            case '14':
                return 'fourteen'
            case '15':
                return 'fifteen'
            case '16':
                return 'sixteen'
            case '17':
                return 'seventeen'
            case '18':
                return 'eighteen'
            case '19':
                return 'nineteen'
            default:
                return ''
        }
    }

    number = String(number);

    if (number === '0') return 'zero';  

    //Единицы и десятки
    let unit = '';
    let teen = '';
    let tens = '';

    if (number[number.length - 2] !== '1') {
        unit = getUnit(number[number.length - 1]);
        tens = getTens(number[number.length - 2]) ;
    } else {
        teen = getTeen(number.slice(number.length - 2, number.length));
    }

    //Сборка единиц и десятков
    let number21;

    if (teen !== '') {
        number21 = teen;
    } else {
        number21 = (`${tens} ${unit}`).trim();
    }
    
    //Сотни
    let hundred = '';
    
    if (number[number.length - 3]) {
        hundred = `${getUnit(number[number.length - 3])} hundred`;
    }

    //Сборка окончательной строки
    let result = (`${hundred} ${number21}`).trim();

    return result;
}
