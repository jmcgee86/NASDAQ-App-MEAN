# NASDAQ-App-MEAN

- NASDAQ Stock Application built using MEAN stack

- Requires a key.js file in /public/angular-app/stock-display with the following format:
        var APIKEY = "apikey from newsapi.org"
        var stockPriceKey = "apikey from alphavantage.co"

Features:

    - NASDAQ Stock information imported into a mongo database from: http://www.nasdaq.com/screening/company-list.aspx
    - User able to type in a stock symbol and see results based on the query
    - This query is stored so that the user or other users can see a history page of all previous queries.
    - A Stock list page of all stocks (paginated and searchable by stock name or symbol)
    - User click on  stock to get more information on the company for the stock.
    
    - Authentication system allows users to log-in and view/save personal info.

    - Basic non logged in features:
        - search by symbol
        - see recent searches
        - view 'trending stocks' sorted by market cap, sale price, and most searched
        - top financial headlines on main page using API from newsapi.org

    - Logged in only features:
        - user's saved stocks display on profile page
        - user’s search history on profile page
        - retrieve and display list of recent articles about stock using API from newsapi.org
        - tweet summary and url to article with 'Tweet It' button
        - save article to user's 'reading list' on profile page
        - buttons to remove saved articles and stocks from user profile 
        - buy/sell stocks
        - add funds to user account
        
Future improvements/fixes:

    - add validation to prevent user from saving a stock or article if it is already saved
    - add validation to check if user already owns stock and if so, add to shares owned
    - allow user to sell some of their shares instead of all shares of a particular stock
    - refactor to better organize code

