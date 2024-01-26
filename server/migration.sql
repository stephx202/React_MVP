DROP TABLE IF EXISTS ToDoList;

CREATE TABLE ToDoList (
  id SERIAL PRIMARY KEY,
  item TEXT
);

INSERT INTO ToDoList (item) VALUES ('Finish Laundry');
INSERT INTO ToDoList (item) VALUES ('Schedule Meeting');
INSERT INTO ToDoList (item) VALUES ('Grocery shopping');