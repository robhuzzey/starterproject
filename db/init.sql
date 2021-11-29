DROP TABLE IF EXISTS "initial";
CREATE TABLE "public"."initial" (
    "id" integer NOT NULL,
    "story" text NOT NULL
) WITH (oids = false);

CREATE TABLE "users" (
  "id" serial NOT NULL,
  PRIMARY KEY ("id"),
  "name" text NOT NULL
);