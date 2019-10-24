INSERT INTO meals (category, title, image, description, favorited)
VALUES($1, $2, $3, $4, $5)
RETURNING *;