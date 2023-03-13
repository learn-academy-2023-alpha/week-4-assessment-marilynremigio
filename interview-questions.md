# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming or O.O.P. is programming that is heavily based on objects. It's where almost everything is considered an object as all elements are instances of classes. Object-oriented programming differs from functional programming by not focusing on invoking functions but rather, methods to access or store objects. Functional programming is programming that revolves around functions, which is behavioral code that can be reused over and over again. 
 
Researched answer: Object-oriented programming (O.O.P.) was invented in the late 1970s and became commonly used by most developers later on from programming languages such as C++, Java, and C#. An example of an O.O.P. language is Ruby, where software applications are modeled as collections of objects that communicate with each other. Each object is an instance of a class, which holds data and behaviors that allow developers to work with reuable code. A main comparison between object-oriented programming and functional programming is that O.O.P. has mutable objects, which means values within an object can be modified. In functional programming, which happens to be one of the oldest types of programming, developers build applications that rely solely on immutable objects, or data that cannot change.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: The difference between a Float and an Integer in Ruby is that an Integer is any whole number and a Float is a partial number or a number expressed as a decimal. For example: 1, 500, and 82 are Integers, whereas 1.0, 43.5, and 0.007 are Floats. Float and Integer are the data types, but also refers to the class of the value. 
 
Researched answer: A Float and an Integer are the two main types of numbers in Ruby. Floats are numbers that contain a decimal in it such as 0.4, 8.0, and 3.14. Integers are whole numbers like 0, 6004, and 45. When applying arithmetic with two integers in Ruby, the result will always be an integer. In cases where dividing two integers that should have a remainder like 13 / 4, the result will end up being 3 instead of 3.25. In order to get an accurate result of a float, there must be at least one float included in the equation. We can modify 13 / 4 to be 13.0 / 4 and get 3.25. We could've also done 13 / 4.0 and still gotten 3.25 since one of the numbers is a float. To convert a float to an integer or an integer to a float you can use these conversion methods: .to_i to change a float to an integer and .to_f to change an integer to a float. Example: 6.to_f outputs 6.0 and 7.9.to_i outputs 7. It doesn't round the number up or down, it just simply cuts off the decimal and everything after it. 

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return in Ruby means that a method can run without 'return' typed and will automatically read the last line and execute it. In JavaScipt, functions need a return in order to run the function, but in Ruby the return happens regardless. An example of a Ruby method having an implicit return looks like this:
    
    def add_numbers (num1, num2)
        num1 - num2
        num1 + num2
    end 
    p add_numbers (5, 4)

This method called add_numbers takes in 2 numbers as parameters and adds them together. On line 26 it subtracts num2 from num1, but on the last line before the method ends on line 27, it says num1 + num2. Ruby's implicit return will pass over line 26 and automatically execute line 27. If we print method add_numbers taking in numbers 5 and 4, the output will be 5+4 which is 9. Even without the word 'return' the last line is executed and the method runs.

Researched answer: In Ruby, the implicit return is the last statement within a method. This means that the line before the keyword 'end' will be returned automatically. Ruby methods can still have the return keyword, but that would be called an explicit return, which for common practice, is unnecessary. Ruby is a language that was made to be simpler, favoring minimal amounts of code and thus, not requiring to have they keyword 'return' written.

4. What is a block in Ruby? 

Your answer: In Ruby, a block is an anonymous function that is contained within 'do' and 'end' keywords. Similar to a JavaScript function that uses () parentheses to take in an argument, blocks use || pipes to take in arguments after the 'do' keyword.

Researched answer: A block in Ruby is a small anonymous function that developers use to pass into methods. They are either contained within a 'do' statement and an 'end' statement or within curly brackets {}. Ruby blocks can take in one or more arguments and pass them through pipes ||. They are blocks of code within a method that act as a function.

5. How do you extract a value in a Ruby hash? 

Your answer: A Ruby hash is very similiar to a JavaScript object. Ruby Hashes have a name it is defined by and however many key:value pairs inside. To extract a value, you type the hash name and then the key name in [] brackets. This syntax will give access to a value in a Ruby hash.

Researched answer: To extract a value in a Ruby hash, you use bracket notation. The name of the key goes in square bractets [] after the name of the hash. If you were to print hash_name[key], the output would be the value accessed. A Ruby hash is a collection of unique key:value pairs that is similiar to an array because it is enumerable, or able to be iterated over. However they are different because instead of values being accessed by their index in an array, hash values are accessed by their unique key.

## Looking Ahead: Terms for Next Week

1. Class Inheritance: In Ruby, there is a philosophy behind its object-oriented programming, which is to enable developers to prioritize a focus on the data and data structure, by creating a model that can organize large blocks of code. To further explain this philosophy, there are four pillars of OOP. The last one is called Class Inheritance, which gives Ruby classes the ability to have relationships and share like behaviors with each other. Class inheritance is beneficial for code efficiency, especially when multiple classes need the same attributes. Putting these similar-behaving classes together is called creating a superclass. Superclasses follow class inheritance by passing down information to subclasses that need to access data from the superclass. The syntax for an inheritance is the left pointing carrot '<'.

2. RSpec: RSpec stands for Request Specification and is a domaine specific language testing framework. It is used specifically for testing and describing Ruby objects and their behaviors. An RSpec test consists of an import statement, a describe statement, an it statement, at least one expect statement, and a matcher. The matcher method is what will compare the test and the actual outputs. 

3. CRUD: CRUD is an acronym for the four ways we can manipulate date in programming. It stands for Create, Read, Update, and Delete. We can always create new data, read existing data, update current data, and delete data. 

4. Test-driven development: Test-driven development or TDD can increase a developer's confidence in their code and can give clarity on what the expectations are for the output. To follow this approach, you write your test before you write your code. In Ruby, we use a testing framework called RSpec, which follows a specific task of describing the behavior of Ruby objects.

5. HTTP: HTTP stands for Hypertext Transfer Protocol, which gives Internet users the ability to interact with web resources like an HTML file. As an application protocol, specifically for distributed, collaborative, and hypermedia information systems, HTTP continues to be the primary means of using the World Wide Web today.