-- Active: 1680113675721@@35.226.146.116@3306@Hopper-4314167-rafael-beserra

CREATE TABLE IF NOT EXISTS PIZZARIA_User (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    role ENUM("NORMAL","ADMIN") DEFAULT "NORMAL"
);

CREATE TABLE IF NOT EXISTS PIZZARIA_Menu (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    price DOUBLE NOT NULL,
    description VARCHAR(1024) NOT NULL,
    image TEXT NOT NULL,
    cratedAt DATE,
    -- active_recipe ENUM("TRUE", "FALSE") DEFAULT "TRUE",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES PIZZARIA_User(id)
);

CREATE TABLE IF NOT EXISTS PIZZARIA_Order (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) NOT NULL,
    total_price DOUBLE NOT NULL,
    createdAt VARCHAR(64),
    FOREIGN KEY (user_id) REFERENCES PIZZARIA_User (id)
);

CREATE TABLE IF NOT EXISTS PIZZARIA_Item_Order (
    id VARCHAR(64) PRIMARY KEY,
    order_id VARCHAR(64) NOT NULL,
    user_id VARCHAR(64) NOT NULL,
    item_id VARCHAR(64) NOT NULL,
    item_title VARCHAR(100) NOT NULL,
    item_price DOUBLE NOT NULL,
    quantity INT NOT NULL,
    total_price DOUBLE NOT NULL,
    createdAt VARCHAR(64),
    FOREIGN KEY (order_id) REFERENCES PIZZARIA_Order (id),
    FOREIGN KEY (user_id) REFERENCES PIZZARIA_User (id)
);

CREATE TABLE IF NOT EXISTS PIZZARIA_User_Address (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) NOT NULL,
    street VARCHAR(100) NOT NULL,
    number INT NOT NULL,
    zipcode VARCHAR(64) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES PIZZARIA_User (id)
)
