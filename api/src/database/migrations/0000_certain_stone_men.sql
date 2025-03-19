CREATE TABLE "apartments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"unit_number" varchar(255) NOT NULL,
	"unit_name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"project" varchar(255) NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"bedrooms" integer NOT NULL,
	"bathrooms" integer NOT NULL,
	"area" numeric(10, 2) NOT NULL,
	"amenities" varchar(255)[],
	"images" varchar(255)[] NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
