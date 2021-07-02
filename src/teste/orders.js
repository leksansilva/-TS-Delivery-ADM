import imagem from '../assets/images/default.jpg';
function createData(id, order, name, address, price, img, tel, status) {
    return { id, order, name, address, price, img, tel, status };
  }
export const orders = [
    createData(0, 'Yakisoba', 'Elvis Presley', 'Tupelo, MS', 32.44, imagem, "4002-8922",1 ),
    createData(1, 'Temaki', 'Paul McCartney', 'London, UK', 86.99, imagem, "3533-9600", 1),
    createData(2, 'A moda da Casa', 'Tom Scholz', 'Boston, MA', 10.81, imagem, "4004-111", 3),
    createData(4, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 1),
    createData(5, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 1),
    createData(6, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 1),
    createData(7, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 1),
    createData(8, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 2),
    createData(9, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 1),
    createData(10, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 2),
    createData(11, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 2),
    createData(12, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 5),
    createData(13, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 7),
    createData(14, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 5),
    createData(15, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 5),
    createData(16, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 5),
    createData(17, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 6),
    createData(18, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 6),
    createData(19, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 7),
    createData(20, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 4),
    createData(21, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 4),
    createData(22, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 5),
    createData(23, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 5),
    createData(24, 'Sushi Rush', 'Michael Jackson', 'Gary, IN', 64.39, imagem, "4346-111", 4),

  ];
