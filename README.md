# Ticketswap

This repo contains a frontend and uses React/Redux.
Once the server is up and running, you can singup and login to create your first event, to which you can add tickets, to which you can add comments.

![](Ticketswap-addEvent.gif)

The tickets will display a Fraudrisk which is and algorithm created in the backend, that takes into account:
* if the ticket is the only ticket of the author, adds 10%
* if the ticket price is lower than the average ticket price for that event:
	* a ticket is X% cheaper than the average price, adds X% to the risk 
	* a ticket is X% more expensive than the average price, deducts X% from the risk, with a maximum of 10% deduction
* if the ticket was added during business hours (9-17), deducts 10% from the risk, if not, add 10% to the risk
* if there are >3 comments on the ticket, add 5% to the risk
The minimal risk is 5% and the maximum risk is 95%.

## Getting Started
Run `npm install` and `npm install react-animated-css` to install all dependencies then run `npm start` to start the dev server.

