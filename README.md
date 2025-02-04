
# Backend API (Node.js, Express, MongoDB) with OpenAI Integration

This project sets up a RESTful API with full CRUD operations for managing items, as well as an OpenAI integration for generating text responses based on user input.

This api is deployed at this link https://analytica-be.onrender.com/

## Features

### **Item Management (CRUD)**

- `GET /items`: Fetch all items from the database.
- `GET /items/:id`: Fetch a specific item by ID.
- `POST /items`: Add a new item to the database.
- `PUT /items/:id`: Update an existing item by ID.
- `DELETE /items/:id`: Delete an item by ID.

### **OpenAI Integration**

- `POST /generate`: Accepts a text prompt and uses OpenAI's API to generate a response.

## Technologies

- Node.js
- Express.js
- MongoDB (for storing items)
- OpenAI API

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ShamailAbbas/analytica-be
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up MongoDB (locally or via a cloud service like MongoDB Atlas).

4. Create a `.env` file in the root of the project and add the following:

```
PORT=4000
MONGO_URI=your_mongo_db_connection_string
OPENAIAPIKEY=your_openai_api_key
```

5. Run the server:

```bash
npm start
```

The API will be running at `http://localhost:4000`.

## API Endpoints

### 1. **GET /items**

Fetch all items from the database.

#### Response

```json
{
"success":true,"data":
[
  {
    "_id": "itemId1",
    "name": "Item Name 1",
    "description": "Item Description 1"
  },
  {
    "_id": "itemId2",
    "name": "Item Name 2",
    "description": "Item Description 2"
  }
]
}
```



### 2. **POST /items**

Add a new item to the database. The request body should contain the following structure:

```json

{
  "name": "Item Name",
  "description": "Item Description"
}
```

#### Response

```json
{
"success":true,"data":
{
  "_id": "newItemId",
  "name": "Item Name",
  "description": "Item Description"
}
}
```

### 3. **PUT /items/:id**

Update an existing item by ID. The request body should contain the following structure:

```json
{
  "name": "Updated Item Name",
  "description": "Updated Item Description"
}
```

#### Response

```json
{
"success":true,"data":
{
  "_id": "updatedItemId",
  "name": "Updated Item Name",
  "description": "Updated Item Description"
}
}
```

### 4. **DELETE /items/:id**

Delete an item by ID.

#### Response

```json
{
"success":true,"data":
{
  "message": "Item deleted successfully"
}
}
```

### 6. **POST /generate**

Accept a text prompt and generate a response using the OpenAI API.

#### Request Body

```json
{
  "prompt": "Generate some text based on this prompt"
}
```

#### Response

```json
{
 "success":true,"data":"generated response...."
}
```



