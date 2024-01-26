DROP TABLE IF EXISTS ToDoList;

CREATE TABLE ToDoList (
  id SERIAL PRIMARY KEY,
  item TEXT
);

INSERT INTO ToDoList (item) VALUES ('Finish React MVP');
INSERT INTO ToDoList (item) VALUES ('Schedule Meeting with Team');
INSERT INTO ToDoList (item) VALUES ('Review Code Changes');