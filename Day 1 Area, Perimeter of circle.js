

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    const PI = Math.PI;
    var r = +(readLine()); //readLine() takes input as string. use +()                                 to make it number type. chk day1 problem                                  editorial, solve for more info if needed
    let area, perimeter;
    
    // Print the area of the circle: 
    area = PI * Math.pow(r,2);
    console.log(area);
    
    // Print the perimeter of the circle:
    perimeter= 2 * PI * r;
    console.log(perimeter);
}