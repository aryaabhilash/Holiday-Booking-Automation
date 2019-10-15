Automated test


Please write an automated test script which would perform the following steps:

1. At https://www.ab-in-den-urlaub.de/ select “Hotel (City)” option
2. Provide the following data: destination – Madrid, dates – 25.11.2019 – 29.11.2019, 2 adults, 1 room, go to offers.
3. Select 5 stars and the best review rating (Bewertung)
4. Sort the results by price descending (Preis)

You are free to choose the language/framework. Please upload results to Github and send us a link.


Holiday-Booking-Automation


Prerequisites

1. jdk version 8 for Selenium Webdriver driver
2. Selenium Web Driver
3. ChromeDriver Web Driver
4. Nighwatch.js framework
5. Node.js runtime
6. GIT Bash


Technologies Used
1.	JavaScript
2.	Node.js
3.	IDE: MS Visual Studio Code
4.  ChromeDriver Web Driver
4.	Nightwatch.js automated testing framework
5.	Selenium WebDriver driver – for communication between Nightwatch.js and Web browser.
6.	XPath – to find the Web elements


Note: The implementation for Hotel dates was possible from 25.10.2019 – 29.10.2019.


Getting Started

Cloning the repository

1. Open Git Bash.

2. Change the current working directory to the location where you want the cloned directory to be made.

3. Type git clone, and then paste the URL you copied in Step 2.

    $ git clone https://github.com/aryaabhilash/Holiday-Booking-Automation.git 


4. Press Enter. Your local clone will be created.



Running the tests

In the terminal, please type the following command:

node nightwatch tests/test.js -e chrome


Authors

Abhilash Acharya


License

This project is licensed to Abhilash Acharya