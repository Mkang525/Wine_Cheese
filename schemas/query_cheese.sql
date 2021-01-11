--check cheese_region
SELECT * FROM cheese_region;

-- check final_cheese
SELECT * FROM final_cheese;

-- count variety final_cheese
SELECT COUNT(cheese)
FROM final_cheese;

-- count cheese cheese_region
SELECT COUNT(cheese)
FROM cheese_region;

-- distinct count wines for final_cheese
SELECT COUNT(DISTINCT wines)
FROM final_cheese;

-- distinct count cheese for cheese_region
SELECT COUNT(DISTINCT cheese)
FROM cheese_region;

-- distinct count variety for final_cheese
SELECT COUNT(DISTINCT cheese)
FROM final_cheese;

-- distinct count type for final_cheese
SELECT COUNT(DISTINCT "Type")
FROM final_cheese;

-- distinct count type for cheese_region
SELECT COUNT(DISTINCT "Type")
FROM cheese_region;
