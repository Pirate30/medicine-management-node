functionalities: Node api to create, delete, update, find the list of your products

to run this program in your PC, 
    1) after cloning this to your pc you need to just run command "npm init" in root directory
    2) Add this file into the root direactory ".env" 
    3) in the .env file ADD this line  MONGO_URL = "// YOUR MONGODB CONNECTION URL"

Technology used: 
    node.js 
    express 
    mongoDB(mongoose to deal with it)


=====>
    1) insert operation
    
        api url: localhost:8800/api/products/seed
        method: post
        body: {
                "name": "medicine0",
                "image": "image0",
                "brand": "brand0",
                "seller": "seller0",
                "details": "details0",
                "price": 500,
                "inStockCount": 50
               }
     2) get all medicine 
        api url: localhost:8800/api/products/seed
        method: get
        
     3) get particular medicine
        api url:http://localhost:8800/api/products/seed/(id)
        method: get
        
     4)update the medicine
        api url: http://localhost:8800/api/products/seed/(id)
        method: put
        body: (same as insert but with make updated field)
        
     5) delete the medicine
        api url:http://localhost:8800/api/products/seed/delete/(id)
        method: delete
        
        
