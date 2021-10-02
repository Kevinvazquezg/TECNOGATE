CREATE DATABASE demo
GO
USE demo;
GO
CREATE TABLE users (
    id INT IDENTITY NOT NULL,
    [user] varchar(50) NOT NULL,
    [name] VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    [password] VARCHAR(255) NOT NULL,

    PRIMARY KEY(id)
)
GO
CREATE TABLE category(
    id INT IDENTITY NOT NULL,
    [name] VARCHAR(15) NOT NULL,
    PRIMARY KEY(id)
)
GO
CREATE TABLE products(
    id INT IDENTITY NOT NULL,
    [name] VARCHAR(50) NOT NULL,
    price FLOAT NOT NULL,
    [description] VARCHAR(50) NOT NULL,
    [image] VARCHAR(255) NOT NULL,
    id_category INT NOT NULL,
    stock INT NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY (id_category) REFERENCES category(id)
)
GO

CREATE TABLE cartProducts (
    id INT IDENTITY NOT NULL,
    id_product VARCHAR(30) NOT NULL,
    [name] VARCHAR(500) NOT NULL,
    price FLOAT NOT NULL,
    cantidad INT NOT NULL
)
GO
INSERT INTO category ([name]) VALUES(
    'laptops'
),
(
    'tablets'
),
(
    'accesorios'
),
(
    'servidores'
)
GO
INSERT INTO products ([name], price, [description], [image], id_category, stock) VALUES (
    'Laptop Huawei Matebook',
    13499,
    'HUAWEI MateBook D 14 está equipada con una extra',
    'https://http2.mlstatic.com/D_NQ_NP_893704-MLM47180608937_082021-V.jpg',
    1,
    50
),
(
    'Laptop Dell Inspiron 3505 gris 15.6"',
    136885,
    'Laptop Dell Inspiron 3505 gris 15.6", AMD Ryzen 5',
    'https://http2.mlstatic.com/D_NQ_NP_893704-MLM47180608937_082021-V.jpg',
    1,
    50
),
(
    'Laptop HP 240 G7',
    8248,
    'Laptop HP 240 G7 plateado ceniza oscuro 14',
    'https://http2.mlstatic.com/D_NQ_NP_944725-MLA46706886088_072021-V.jpg',
    1,
    15
),
(
    'Ultrabook Huawei MateBook D16',
    22999,
    'Ultrabook Huawei MateBook D16 space gray 16.1", AM',
    'https://http2.mlstatic.com/D_NQ_NP_648825-MLA46218432666_052021-V.jpg',
    1,
    34
),
(
    'Apple Macbook Air 13 pulgadas, 2020',
    24376,
    'Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256',
    'https://http2.mlstatic.com/D_NQ_NP_767201-MLA46898178480_072021-V.jpg',
    1,
    9
);
GO
INSERT INTO products ([name], price, [description], [image], id_category, stock) VALUES (
    'Hyjoy 32 Gb',
    2238,
    'Hyjoy 32 Gb Tablet 9" Android 10 Doble Cámara',
    'https://http2.mlstatic.com/D_NQ_NP_880962-CBT46674831767_072021-V.jpg',
    2,
    35
),
(
    'Tablet Huawei MatePad T"',
    4049,
    'Tablet Huawei MatePad T 10s AGS3-W09 10.1" 64GB',
    'https://http2.mlstatic.com/D_NQ_NP_630286-MLA45003012514_022021-V.jpg',
    2,
    50
),
(
    'Laptop HP 240 G7',
    8248,
    'Laptop HP 240 G7 plateado ceniza oscuro 14',
    'https://http2.mlstatic.com/D_NQ_NP_944725-MLA46706886088_072021-V.jpg',
    2,
    15
),
(
    'Apple iPad Air de 10.9" WI-FI 64GB',
    15297,
    'Apple iPad Air de 10.9" WI-FI 64GB Gris espacial',
    'https://http2.mlstatic.com/D_NQ_NP_845790-MLA46951995928_082021-V.jpg',
    2,
    30
),
(
    'Tablet Samsung Galaxy Tab',
    4761,
    'Tablet Samsung Galaxy Tab A7 SM-T500 10.4" 32GB d',
    'https://http2.mlstatic.com/D_NQ_NP_751390-MLA45258171299_032021-V.jpg',
    2,
    9
);
GO
INSERT INTO products ([name], price, [description], [image], id_category, stock) VALUES (
    'Funda De Teclado Iluminado Touchpad',
    881,
    'Funda De Teclado Iluminado Touchpad Para Ipad',
    'https://http2.mlstatic.com/D_NQ_NP_753606-CBT47170326130_082021-V.jpgg',
    3,
    35
),
(
    'Envio Gratis Funda Para iPad 10.2 7m"',
    349,
    'Envio Gratis Funda Para iPad 10.2 7ma Y 8va',
    'https://http2.mlstatic.com/D_NQ_NP_630286-MLA45003012514_022021-V.jpg',
    3,
    50
),
(
    'Funda Con Teclado Iluminado',
    696,
    'Funda Con Teclado Iluminado Bluetooth Para iPad 10',
    'https://http2.mlstatic.com/D_NQ_NP_808602-CBT43307048546_082020-V.jpg',
    3,
    40
),
(
    'Lápiz Óptico Para Pantalla',
    173,
    'Lápiz Óptico Para Pantallas Táctiles Para iPad',
    'https://http2.mlstatic.com/D_NQ_NP_967495-MLM47520510190_092021-V.jpg',
    3,
    30
),
(
    'Cable Usb Tablet Samsung Galaxy Tab 2',
    4761,
    'Cable Usb Tablet Samsung Galaxy Tab 2',
    'https://http2.mlstatic.com/D_NQ_NP_890590-MLM32554971026_102019-V.jpg',
    3,
    100
);
GO
INSERT INTO products ([name], price, [description], [image], id_category, stock) VALUES (
    'Rack Para Discos Duros Servidor',
    3400,
    'Rack Para Discos Duros Servidor',
    'https://http2.mlstatic.com/D_NQ_NP_847192-MLM27881037096_082018-V.jpg',
    4,
    3
),
(
    'Servidor Blaster Gsm 3g',
    26000,
    'Servidor Blaster Gsm 3g, 8 Puertos',
    'https://http2.mlstatic.com/D_NQ_NP_652242-MLM44547951547_012021-V.jpg',
    4,
    10
),
(
    'Istarusa Wn421',
    11000,
    'Istarusa Wn4210 42u Rack Servidor Armario',
    'https://http2.mlstatic.com/D_NQ_NP_845441-MLM31957515814_082019-V.jpg',
    4,
    20
),
(
    'Dispositivo Ud1100001-0',
    14431,
    'Dispositivo Ud1100001-01 Servr 1prt 10/100',
    'https://http2.mlstatic.com/D_NQ_NP_968113-MLM30581559506_052019-V.jpg',
    4,
    30
),
(
    'Servidor Hp',
    6898,
    'Servidor Hp Proliant Dl360 G6',
    'https://http2.mlstatic.com/D_NQ_NP_889501-MLM41004950729_032020-V.jpg',
    4,
    10
);

GO
DELETE FROM users;
GO

select * from users;
GO
SELECT * FROM category;
GO
SELECT * FROM products;

    SELECT * from cartProducts

DROP TABLE cartProducts

