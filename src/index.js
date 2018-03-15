module.exports = function longestConsecutiveLength(array) {
  // your solution here
  
	if (array.length == 0) return 0;
	if (array.length == 1) return 1;
    
    // быстрая сортировка массива
    array.sort((a, b) => a - b);
	
    var max = 0; // максимальная последовательность
    var count = 1; // счетчик
	
    for (let i = 0; i <= array.length; i++) {
        if (array[i] == array[i + 1]) continue;
        if (array[i] + 1 == array[i + 1]) {
            count++;
        } else {
            count = 1;
        }
        max = Math.max(count, max);
    }
    return max;
}
