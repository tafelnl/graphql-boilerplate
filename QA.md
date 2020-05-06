# QA

## Intro

A list of questions and answers. The questions are also referred to in the code in the following way: `@QUESTION(x)` with `x` being the question number.

### Q1: Parent-child guarantees

Run the following query:

```
query {
  book(id: 1) {
    id
    title
    author {
      id
      name
    }
  }
}
```

This query returns the one book that has `id: 1`.

The corresponding author is returned by the resolver `Book.author` in [book.resolvers.js](src/modules/book.resolvers.js). But what if the resolver of `Book.book` does not return the required variables? How does one guarantee that this will happen?

#### Answer

_Status_: unanswered

### Q2: Search parent by child attributes

Run the following query:

```
query {
  books(input: { author: { name: "M" } }) {
    id
  }
}
```

This query finds all books by searching authors with a name starting with the letter "M".

But mind you that once you specify an author in the input. The code is currently limited so that once you search for an author it will immediately return all books for those authors without taking the other input into account.

Also check the method `BookService.search` in [book.service.js](src/modules/book.service.js).

A architecural design change is needed to allow for this. It should also simultaneously work as efficient as possible. The current code use a plain and simple object as a database. But now imagine using sequalize to connect to a MySQL database for instance. How would you efficiently search by author then? Preferably without creating join queries etc.

#### Answer

_Status_: unanswered
