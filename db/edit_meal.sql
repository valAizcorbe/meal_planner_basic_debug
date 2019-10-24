UPDATE meals
SET category = $1,
    title = $2,
    image = $3,
    description = $4,
    favorited = $5
WHERE id = $6
RETURNING *;