DELETE FROM meals
WHERE id = $1;

select * from meals
where category = $2