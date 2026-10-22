CREATE TABLE endpoints (
  id         SERIAL PRIMARY KEY,
  url        TEXT NOT NULL UNIQUE,
  status     TEXT NOT NULL DEFAULT 'Unchecked',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);