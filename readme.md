
# RESTful API Template for Book Management

This is a simple RESTful API template built using Node.js, Express.js, and MongoDB with Mongoose. The API allows you to manage book data, including adding new books, fetching books, updating book information, and deleting books.

## Getting Started

To get started with this API template, follow the steps below:

1. **Prerequisites**: Make sure you have Node.js and MongoDB installed on your system.

2. **Clone the repository**: Clone this repository to your local machine using the following command:

   ```
   git clone https://github.com/your-username/book-api-template.git
   ```

3. **Install dependencies**: Navigate to the project directory and install the required dependencies:

   ```
   cd book-api-template
   npm install
   ```

4. **Configure MongoDB**: Before running the API, make sure you have MongoDB running locally or provide the correct MongoDB connection URL in `index.js`.

5. **Run the server**: Start the server by running the following command:

   ```
   node index.js
   ```

   The server will run on `http://localhost:3000` by default.

6. **API Endpoints**: The following API endpoints are available:

   - **POST /api/book**: Create a new book. Use JSON body with fields `title`, `author`, `genre`, and `publishedYear`.

   - **GET /api/book**: Get all books.

   - **GET /api/book/:id**: Get book by ID. Replace `:id` with the book ID.

   - **PUT /api/book/:id**: Update book by ID. Replace `:id` with the book ID. Use JSON body with fields `title`, `author`, `genre`, and `publishedYear` to update.

   - **DELETE /api/book/:id**: Delete book by ID. Replace `:id` with the book ID.

## Data Model

The book data model includes the following fields:

- `title`: The title of the book (required).
- `author`: The author of the book (required).
- `genre`: The genre of the book.
- `publishedYear`: The year the book was published.
- `createdAt`: The timestamp of book creation (auto-generated).

## Contributions

Feel free to fork this repository and adapt it to your specific needs. Contributions and suggestions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
