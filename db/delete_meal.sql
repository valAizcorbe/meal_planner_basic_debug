DELETE FROM meals
WHERE id = $1;

SELECT * FROM meals
WHERE category = $2