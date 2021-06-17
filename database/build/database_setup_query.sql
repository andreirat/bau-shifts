BEGIN;

DROP TABLE IF EXISTS engineers CASCADE;
DROP TABLE IF EXISTS shifts CASCADE;

CREATE TABLE engineers (
  id                    SERIAL,
name                    VARCHAR     PRIMARY KEY     UNIQUE,
  shifts_worked         INTEGER
);

CREATE TABLE shifts (
  id                 SERIAL,
  shift_today        VARCHAR[],
  shift_yesterday    VARCHAR[]
);

INSERT INTO shifts
  (shift_today, shift_yesterday)
VALUES
(null, null);


INSERT INTO engineers
  (name, shifts_worked)
VALUES
  ('Jacob Ryan', 0),
  ('Dan Henderson', 0),
  ('Mike Digne', 0),
  ('Chris Jhonson', 0),
  ('Anna Doe', 0),
  ('George Pilmore', 0),
  ('Bill Craig', 0),
  ('Duncan Dan', 0),
  ('Maria Hernandez', 0),
  ('Philip More', 0);

COMMIT;
