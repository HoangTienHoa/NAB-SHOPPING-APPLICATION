# NAB-SHOPPING-APPLICATION
NodeJS Development Challenge

● A high-level solution diagram for the components/infrastructure design if
any.
    See High_Level_Design.png

    Overview: 
        This Project apply Microservice Architecture.
        This project include 3 services. Each service has it own database.
            #1 I-COMMERCE-API Service
                User can request to show all product, show a product, search sort, filter, place an order.
                This use icommerce DB
            #2 I-CALL-CENTER-API Service
                Place an order and store to DB
                This use icallcenter DB
            #3 I-HISTORY-API Service
                Store all users activities to DB
                This use ihistory DB

● Sequence diagram for a specific workflow.
    See Sequence_Diagram.png

● Entity relationship diagram for the database.
    Each service use it own database. They are not depend each other

    icallcenter collection
        orders document
            OrderSchema ({
                customerId: { type: String, required: true },
                productId: { type: Number, required: true },
                amount: { type: Number, required: true },
                status: { type: String, enum: ['Spending', 'Fulfill', 'Processcing', 'Resolved'], default: 'Processcing', required: true },
                isDeleted: { type: Boolean, default: false },
                createdAt: { type: Date, default: Date.now },
                modifiedAt: { type: Date, default: Date.now }
            });

    icommerce
        products document
            ProductSchema ({
            id: { type: Number, required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            amount: { type: Number, required: true },
            branch: { type: String, required: true },
            color: { type: String, required: true },
            isDeleted: { type: Boolean, default: false },
            createdAt: { type: Date, default: Date.now },
            modifiedAt: { type: Date, default: Date.now }
        });

    ihistory
        activities document
            ActivitiesSchema ({
                customerId: { type: String, required: true },
                action: { type: String, required: true },
                createdAt: { type: Date, default: Date.now },
            });


● Software development principles, patterns & practices being applied
    
    #1 This project apply micro-services pattern. Because We want create serveral services and each service can communication each orther.
    #2 This project apply Singeton pattern for create connection to mongdoDB. I want control connection instance.
    #3 This project apply functional programming design patterns. Because we follow Microservice Architecture.
    #4 Use distributed messaging system like Kafka to demonstrate Asynchronous comminication.
    #5 Apply Clean code, DRY, KISS for make code clean, easier to maintain and expands.

    

● Code folder structure and the libraries / frameworks being used.
    About structure:
    Three services are the same structure. Show I will talk about the main service is I-COMMERSE-API.
    NAB-SHOPPING-APPLICATION (The whole project)
        I-CALL-CENTER-API
        I-HISTORY-API
        I-COMMERCE-API
            node_modules
            .evn  (use for define Environment variable)
            package.json
            src
                __mocks__  (use for mock file)
                __tests__  (use for test file)
                common (use for contain common thing. In this case use for create connection  to mongo DB))
                    __tests__
                    Kafka 
                        KafkaInstance.js
                        producer.js
                        consumer.js
                    mongodDB.js
                product (this is a feature. In this folder contain everything related to this feature)
                    __mocks__
                    __tests__
                    product.model.js
                    product.repository.js
                    product.service.js
                    product.controller.js
                    product.constant.js
                    product.validator.js
                    product.producer.js
                config.js
                routes.js
                server.js

    About framworks/ module used
        "express"   for control request, response
        "axios"     to send request to another service
        "dotenv"    to config environment variable
        "joi"       to validation
        "kafkajs"   to send or recieve message
        "mongoose"  to work with mongoDB
        "jest"      to run test
        and some minor modules

● All the required steps in order to get the applications run on local
computer.
    # First Terminal
        Plese go to .evn file. 
            Find constant DB_LOCAL_CONNECTION and put your local mongo DB link.
            Put your KAFKA_HOST
            Put your KAFKA_PORT
        cd I-COMMERCE-API
        npm i
        npm start
    # Second Terminal
        Plese go to .evn file. Find constant DB_LOCAL_CONNECTION and put your local mongo DB link.
        cd I-CALL-CENTER-API
        npm i
        npm start
    # Third Terminal
        Plese go to .evn file. 
            Find constant DB_LOCAL_CONNECTION and put your local mongo DB link.
            Put your KAFKA_HOST
            Put your KAFKA_PORT
        cd I-HISTORY-API
        npm i
        npm start
● Test
    Open terminal in each service and run this command npm run test

● CURL commands to verify the APIs
    I-COMMERCE-API
        Show all products:
            Path: /
            Method: Get
            Example: localhost:3000/product

        Show a product
            Path: /:productId
            Method: Get
            Example: localhost:3000/product/1

        Search Products By Name, Branch, Color
            Path: /search/:info
            Method: Get
            Example: localhost:3000/product/search/white

        Sort Products By Column Name
            Path: /sort/:colName/:colOrder
            Method: Get
            Example: localhost:3000/product/sort/price/asc

        Filter Products By Price
            Path: /filter/:fromPrice/:toPrice
            Method: Get
            Example: localhost:3000/product/filter/100/900

        Order a product
            Path: /order/:productId/:amount
            Method: Get
            Example: localhost:3000/product/order/1/1000

        I-CALL-CENTER-API
            Show all orders
                Path: /
                Method: Get
                Example: localhost:3001/order

            Place an order
                Path: /
                Method: Post
                JSON Data: {
                                "order":{
                                    "customerId": "123133456dfgetrewr",
                                    "productId": "1",
                                    "amount": "1000"
                                }
                            }
                Example: localhost:3001/order

        I-HISTORY-API
            Show all activies
                Path: /
                Method: Get
                Example: localhost:3002/activities