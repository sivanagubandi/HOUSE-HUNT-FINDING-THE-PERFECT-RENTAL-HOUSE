// This is a simple Java program that demonstrates basic syntax
public class HelloWorld {

    // Main method - entry point of the program
    public static void main(String[] args) {
        System.out.println("Hello, World!");  // Print to console
        
        // Create an instance of Calculator
        Calculator calc = new Calculator();
        
        // Perform some calculations
        int sum = calc.add(5, 3);
        int difference = calc.subtract(5, 3);
        
        System.out.println("5 + 3 = " + sum);
        System.out.println("5 - 3 = " + difference);
    }
}

// A simple Calculator class
class Calculator {
    
    // Method to add two numbers
    public int add(int a, int b) {
        return a + b;
    }
    
    // Method to subtract two numbers
    public int subtract(int a, int b) {
        return a - b;
    }
}