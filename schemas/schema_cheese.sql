-- drop tables
drop table if exists blue_pair;
drop table if exists final_cheese;
drop table if exists cheese_region;

-- test blue cheese table
create table blue_pair (
	Variety varchar,
	Wines varchar,
	Beverages varchar,
	"Fruits/Vegetables" varchar,
	"Breads/Crackers" varchar,
	"Condiments/Nuts" varchar,
	"Meats/Fish" varchar	
)

SELECT * FROM blue_pair;

-- cheeseboard_final csv with all the pdfs together
create table final_cheese (
	Cheese varchar,
	"Type" VARCHAR,
	Wines varchar,
	Beverages varchar,
	"Fruits/Vegetables" varchar,
	"Breads/Crackers" varchar,
	"Condiments/Nuts" varchar,
	"Meats/Fish" varchar	
);

SELECT * FROM final_cheese;

-- different cheese breakdown.
create table cheese_region (
	Cheese VARCHAR,
	"Country of origin" VARCHAR,
	Region VARCHAR,
	"Family" VARCHAR,
	"Type" VARCHAR,
	"Fat content(g)" VARCHAR,
	"Fat content" FLOAT,
	Texture VARCHAR,
	Rind VARCHAR,
	Colour VARCHAR,
	Flavour VARCHAR, 
	Aroma VARCHAR,
	Vegetarian VARCHAR,
	Producers VARCHAR
);

SELECT * FROM cheese_region;