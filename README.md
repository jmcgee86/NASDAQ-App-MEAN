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
    
    
    --------------- del below
    
    # What's Html Agility Pack (HAP)?
This is an agile HTML parser that builds a read/write DOM and supports plain XPATH or XSLT (you actually don't HAVE to understand XPATH nor XSLT to use it, don't worry...). It is a .NET code library that allows you to parse "out of the web" HTML files. The parser is very tolerant with "real world" malformed HTML. The object model is very similar to what proposes System.Xml, but for HTML documents (or streams).

NuGet: https://www.nuget.org/packages/HtmlAgilityPack/

## Stack Overflow Support
Have a question? Ask questions and find answers from over 2500 questions.

[Stack Overflow](https://stackoverflow.com/questions/tagged/html-agility-pack)

## Tutorials & Examples
Need help to getting started? Find answers you need through tutorials and online examples.

[Tutorials](http://html-agility-pack.net/tutorials)

## Issue Tracker
Found a bug? Have suggestion? Report it and get support from our professional team.

[Issues](https://github.com/zzzprojects/html-agility-pack/issues)

--- 

[ZZZ Projects](http://www.zzzprojects.com/) is the new home of Html Agility Pack since 2017-05-01. We do not plan to provide support by mail or on GitHub until the online documentation is completed.

We plan to start to provide support starting on 2017-07-01

## Roadmap

1. Support .NET Standard (_In Progress_)
2. Add Website (Completed)
3. Add Website Documentation (_In Progress_)
4. Support CSS Selector
5. Clean Code && Comment

