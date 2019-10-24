CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100),
    title VARCHAR(100),
    description VARCHAR(3000),
    image VARCHAR(3000),
    favorited BOOLEAN
);

INSERT INTO meals (category, title, description, favorited, image)
VALUES('breakfast', 'Scrambled Eggs', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('breakfast', 'Protein Shake', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('breakfast', 'Oatmeal', 'Sample description', false, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('lunch', 'Salad', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('lunch', 'Sandwich', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('lunch', 'Leftovers', 'Sample description', false, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('dinner', 'Steak', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('dinner', 'Meatball Marinara', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('dinner', 'Chicken Parm', 'Sample description', false, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('snack', 'Cashews', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('snack', 'Trail Mix', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('snack', 'Almonds', 'Sample description', false, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('dessert', 'Brownies', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('dessert', 'Ice Cream', 'Sample description', true, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

INSERT INTO meals (category, title, description, favorited, image)
VALUES('dessert', 'Sugar-free Chocolate', 'Sample description', false, 'https://www.pinclipart.com/picdir/middle/59-597244_eat-healthy-well-balanced-meals-eat-foods-that.png');

SELECT * FROM meals;