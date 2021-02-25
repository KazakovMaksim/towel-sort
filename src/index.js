
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    let arr = [];
    let  str;
    let  result;
     if (arguments.length == 0 || matrix.length == 0) return [];

        for (j = 0; j < matrix.length; j++) {
        
            if (j % 2 >0) {
                str = matrix[j].join(",");
                arr = str.split(",").reverse();
                    
                    for (i = 0; i < arr.length; i++) {
                         arr[i] = +arr[i];
                    }
          
                matrix[j] = arr.join(",");
                result = matrix.join(",");
                arr = result.split(",");
                        for (i = 0; i < arr.length; i++){
                            arr[i] = +arr[i];
                        }
            }
        }
    
    return arr;
}
