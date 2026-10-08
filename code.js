// ==================================
// 1. DANH SÁCH 52 SẢN PHẨM RƯỢU VANG
// ==================================
const products = [
    {
        id: 1, name: "Château Margaux Premier Grand Cru Classé", category: "red", price: 15500000, discount: 10, stock: 12,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODBJAfwod1miYOu9gok623v5iFFx9mzjJuSKwDq4skg&s=10",
        origin: "Bordeaux, Pháp", alcohol: "13.5%", volume: "750ml",
        description: "Một trong những chai vang đỏ huyền thoại nhất thế giới. Hương thơm phong phú của quả mọng đen, hoa violet, xì gà và gỗ sồi tinh tế. Cấu trúc tannin mượt mà như nhung."
    },
    {
        id: 2, name: "Cabernet Sauvignon Napa Valley Reserve", category: "red", price: 3200000, discount: 15, stock: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3itBQgtN6oi_lTcx-qmXpIs9zo21gokvdDvq1xzM4A&s",
        origin: "Napa Valley, Mỹ", alcohol: "14.5%", volume: "750ml",
        description: "Hương vị đậm đà, bùng nổ với nốt hương cherry đen, mận chín, vanilla và chocolate đen. Hậu vị kéo dài hoàn hảo cho các món thịt bò bít tết."
    },
    {
        id: 3, name: "Sassicaia Tenuta San Guido DOC", category: "red", price: 8900000, discount: 0, stock: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1UgPe8OrS7rb15OrjnXaRI7FKLRS6PEHBdtOkcv1AA&s=10",
        origin: "Tuscany, Ý", alcohol: "14.0%", volume: "750ml",
        description: "Được mệnh danh là 'Super Tuscan' đầu tiên. Sự pha trộn hoàn hảo giữa Cabernet Sauvignon và Cabernet Franc mang lại hương vị mạnh mẽ nhưng vô cùng thanh lịch."
    },
    {
        id: 4, name: "Almaviva Puente Alto Chile Edition", category: "red", price: 5400000, discount: 5, stock: 18,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPav7q5IQR1efsBitLME4YBefjqa56XN2RWhD509_iSA&s=10",
        origin: "Maipo Valley, Chile", alcohol: "14.5%", volume: "750ml",
        description: "Tuyệt tác hợp tác giữa Baron Philippe de Rothschild và Concha y Toro. Rượu có màu đỏ ruby sâu, hương vị cay nồng của tiêu đen hòa quyện với trái cây chín đỏ."
    },
    {
        id: 5, name: "Penfolds Grange Shiraz", category: "red", price: 18200000, discount: 0, stock: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbDPYpDna6yVZGMcgagGSWtwRkAqPab5dP5jIcW_OLw&s=10",
        origin: "South Australia, Úc", alcohol: "14.5%", volume: "750ml",
        description: "Biểu tượng của rượu vang Úc. Grange Shiraz mang tới sự bùng nổ của việt quất, cam thảo, cà phê rang và gia vị Á Đông. Có khả năng lưu trữ trên 50 năm."
    },
    {
        id: 6, name: "Château Lafite Rothschild Pauillac", category: "red", price: 24500000, discount: 0, stock: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfi0VnTPKeSPlGx2DpGdTSRDEmCmrSTZ2FRmlT747-UA&s=10",
        origin: "Pauillac, Pháp", alcohol: "13.0%", volume: "750ml",
        description: "Đẳng cấp hoàng gia không thể chối cãi. Rượu mang nét hương thanh tao của nấm truffle, chì bút chì và phúc bồn tử. Một trải nghiệm đẳng cấp thượng lưu."
    },
    {
        id: 7, name: "Opus One Napa Valley Red Wine", category: "red", price: 11800000, discount: 8, stock: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iv8SBJwTPUjXhR14RA2cwpsgce9ZfRnIMNH2LJUfbA&s=10",
        origin: "Napa Valley, Mỹ", alcohol: "14.5%", volume: "750ml",
        description: "Sự kết hợp giữa nghệ thuật làm vang Pháp và thổ nhưỡng tuyệt vời của Mỹ. Rượu mềm mại, sâu sắc với hương cassis, espresso và một chút hoa hồng khô."
    },
    {
        id: 8, name: "Tignanello Toscana IGT Antinori", category: "red", price: 4600000, discount: 12, stock: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Zt661PEYzsEIHqrRzaaLMb9uWFeJ8Gbhs2ATMN647w&s=10",
        origin: "Tuscany, Ý", alcohol: "14.0%", volume: "750ml",
        description: "Sử dụng giống nho Sangiovese chủ đạo. Rượu nổi bật với vị chua thanh, tannin chắc chắn và hương thơm của anh đào chín, thuốc lá và vanilla."
    },
    {
        id: 9, name: "Marqués de Riscal Rioja Reserva", category: "red", price: 980000, discount: 20, stock: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGnINdz1N-RCHE-iWKlvTylGJSZWm_JAjVl02ufOZJg&s=10",
        origin: "Rioja, Tây Ban Nha", alcohol: "14.0%", volume: "750ml",
        description: "Chai vang đỏ Rioja truyền thống với hương vị gỗ sồi đặc trưng, mượt mà, dễ uống và kết hợp tuyệt vời với các món thịt nướng hay phô mai cừu."
    },
    {
        id: 10, name: "Sauvignon Blanc Marlborough Reserve", category: "white", price: 850000, discount: 15, stock: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJZEoJArlztR6GuPdbo_NmGAZ7m6cMy4jioAAPXYadA&s=10",
        origin: "Marlborough, New Zealand", alcohol: "12.5%", volume: "750ml",
        description: "Tươi mát và sảng khoái với sự bùng nổ của chanh dây, bưởi xanh và dưa lưới. Rất thích hợp dùng kèm hải sản và các món salad tươi."
    },
    {
        id: 11, name: "Chardonnay Bourgogne Louis Jadot", category: "white", price: 1250000, discount: 10, stock: 22,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAbHMYusa7fxwdSPi33XNgZYPXXkEjfN2WIpAo8Kv7g&s=10",
        origin: "Burgundy, Pháp", alcohol: "13.0%", volume: "750ml",
        description: "Phong cách Chardonnay cổ điển của Pháp. Vị bơ béo ngậy xen lẫn hương thơm của đào trắng, táo xanh và một chút nốt khoáng chất mát lạnh."
    },
    {
        id: 12, name: "Pinot Grigio Delle Venezie DOC", category: "white", price: 680000, discount: 5, stock: 16,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeRQqiqPMfZPRGheCGCZmHmq8OmZQAQ_WRb3qOl1YRQ&s=10",
        origin: "Veneto, Ý", alcohol: "12.0%", volume: "750ml",
        description: "Chai vang trắng nhẹ nhàng, dễ uống, thanh lịch với hương lê, táo xanh và hoa trắng. Hoàn hảo cho một buổi chiều mùa hè thư giãn."
    },
    {
        id: 13, name: "Chablis Premier Cru Domaine Laroche", category: "white", price: 2150000, discount: 0, stock: 11,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6RZvEHh-jN3xW5bSzzg-tHhXpM_JCh-466ukg5BDLA&s=10",
        origin: "Chablis, Pháp", alcohol: "12.5%", volume: "750ml",
        description: "Tuyệt phẩm vang trắng với hương vị khoáng chất cực kỳ đặc trưng, sắc nét. Vị chua thanh cao cấp, thích hợp nhất khi thưởng thức cùng hàu sống."
    },
    {
        id: 14, name: "Riesling Mosel Dr. Loosen Kabinett", category: "white", price: 920000, discount: 10, stock: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Npr7aB8EqmpZzMJgrtJ-vj6c2hxg7I4xi9Aa_ZvOoA&s=10",
        origin: "Mosel, Đức", alcohol: "8.5%", volume: "750ml",
        description: "Chai Riesling với độ ngọt nhẹ, hương thơm nồng nàn của mật ong, quả mơ và hương nhài. Rất hợp dùng chung với đồ ăn cay, ẩm thực Châu Á."
    },
    {
        id: 15, name: "Moët & Chandon Impérial Brut", category: "sparkling", price: 1850000, discount: 10, stock: 14,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0opn_igNf2zdfqXJmZefKill4_p7jOTTKKJ2wKf5Bjg&s=10",
        origin: "Champagne, Pháp", alcohol: "12.0%", volume: "750ml",
        description: "Dòng Champagne quốc dân. Sủi bọt mịn màng, hương thơm trái cây tươi rói với điểm nhấn của táo xanh và trái cây họ cam quýt."
    },
    {
        id: 16, name: "Dom Pérignon Vintage Champagne", category: "sparkling", price: 7200000, discount: 0, stock: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNGPrWGIS4cWWaxrvmXqmxK9nkzcOFxcKQlWenHWmnw&s=10",
        origin: "Champagne, Pháp", alcohol: "12.5%", volume: "750ml",
        description: "Đỉnh cao của nghệ thuật làm sâm panh. Chỉ được sản xuất vào những năm nho thu hoạch tốt nhất. Phức hợp, sâu sắc với hương bánh mì nướng và hạnh nhân."
    },
    {
        id: 17, name: "Prosecco Superiore DOCG", category: "sparkling", price: 950000, discount: 15, stock: 28,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlw4dU__WfLJkYKrJr0KhQRkqPUt2gYW-AQYEciX9HQ&s",
        origin: "Veneto, Ý", alcohol: "11.0%", volume: "750ml",
        description: "Vang sủi tăm của Ý với bọt khí tươi vui. Rượu thơm mùi lê, hoa tử đằng và đào trắng. Rất thích hợp để khai vị trong các bữa tiệc."
    },
    {
        id: 18, name: "Veuve Clicquot Ponsardin Brut Yellow", category: "sparkling", price: 2100000, discount: 5, stock: 9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqxDeiCEkR8KRVlWVbHbYR3NF7qLytXywOeuZeJVn7QA&s=10",
        origin: "Champagne, Pháp", alcohol: "12.0%", volume: "750ml",
        description: "Mạnh mẽ và cá tính với tỉ lệ nho Pinot Noir cao. Hương thơm của bánh brioche ngọt ngào và quả sung chín."
    },
    {
        id: 19, name: "Cava Freixenet Cordon Negro Brut", category: "sparkling", price: 550000, discount: 25, stock: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AEt6Dqy5dDmm68DqOlK3HICwXaE7bnhigvkjZZ6-_g&s=10",
        origin: "Catalonia, Tây Ban Nha", alcohol: "11.5%", volume: "750ml",
        description: "Chai Cava vỏ đen huyền thoại. Sủi bọt giòn giã, sạch sẽ trên vòm miệng, thích hợp làm đồ uống khai tiệc với giá thành vô cùng hợp lý."
    },
    {
        id: 20, name: "Krug Grande Cuvée 170th Edition", category: "sparkling", price: 8500000, discount: 0, stock: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSaEQMIX77S3RDVfEQChVthKhZDS55w5Ss6laqdppag&s=10",
        origin: "Champagne, Pháp", alcohol: "12.0%", volume: "750ml",
        description: "Được pha trộn từ hơn 120 loại rượu vang từ hơn 10 năm khác nhau. Hương vị đa chiều cực kỳ sang trọng, là lựa chọn của giới sành điệu thượng lưu."
    },
    {
        id: 21, name: "Vang Đà Lạt Classic Red Wine", category: "local", price: 120000, discount: 5, stock: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_TmulH0kjpp2Mxh9SyrwTAwVM8GDknyeiyMwRHe3Uw&s=10",
        origin: "Đà Lạt, Việt Nam", alcohol: "12.0%", volume: "750ml",
        description: "Dòng vang đỏ truyền thống đậm đà bản sắc Việt. Được làm từ nho Cardinal và quả dâu tằm Đà Lạt, mang hương thơm trái cây tự nhiên, vị chát nhẹ nhàng hài hòa."
    },
    {
        id: 22, name: "Vang Đà Lạt Chateau Premium Red", category: "local", price: 250000, discount: 10, stock: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoz29Y8ErP5VQNIfJ9TCgGKLT1YtaZTMUZiHJ32arZg&s=10",
        origin: "Đà Lạt, Việt Nam", alcohol: "12.5%", volume: "750ml",
        description: "Dòng vang cao cấp được ủ lâu năm trong thùng gỗ sồi. Hương vị mượt mà, thoảng nốt hương vani, mận chín và gỗ sồi tinh tế, thích hợp cho các bữa tiệc sang trọng."
    },
    {
        id: 23, name: "Vang Phan Rang Ninh Thuận Reserve", category: "local", price: 180000, discount: 0, stock: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN0_nGQyUpLHPOr7_tf3pzs100PX9qM-BUjzBbbqFVg&s=10",
        origin: "Ninh Thuận, Việt Nam", alcohol: "12.5%", volume: "750ml",
        description: "Sản xuất từ những chùm nho chín mọng tột cùng nắng gió Ninh Thuận. Rượu có màu đỏ ruby tươi sáng, vị chát đượm hòa quyện cùng vị chua thanh đặc trưng."
    },
    {
        id: 24, name: "Vang Thăng Long Red Wine Premier", category: "local", price: 135000, discount: 5, stock: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PHoEeBEhbigHWISy5qH0L5xjkWAiLetjPu7AAbA6YA&s=10",
        origin: "Hà Nội, Việt Nam", alcohol: "11.5%", volume: "750ml",
        description: "Dòng vang nội phổ biến tại miền Bắc Việt Nam, được phối trộn giữa nho nốt ngọt nhẹ và thảo mộc truyền thống. Dễ uống, thích hợp cho các dịp lễ Tết gia đình."
    },
    {
        id: 25, name: "Vang Đà Lạt White Wine Excellence", category: "local", price: 140000, discount: 8, stock: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4ok1tK1B1nCuzl2T0BEWEy7cC1biLjC4GK78ftjWjA&s",
        origin: "Đà Lạt, Việt Nam", alcohol: "12.0%", volume: "750ml",
        description: "Vang trắng Việt Nam tươi mát làm từ giống nho Chardonnay trồng tại cao nguyên Đà Lạt. Thơm hương bưởi, chanh dây và hoa bưởi thanh khiết."
    },
    {
        id: 26, name: "Catena Zapata Malbec Mendoza", category: "red", price: 1650000, discount: 10, stock: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SptM3xObQ0WseAZGpiM2v0AQuTR9Y-IPNNmk1EfiKw&s=10",
        origin: "Mendoza, Argentina", alcohol: "14.0%", volume: "750ml",
        description: "Biểu tượng vang Malbec Nam Mỹ. Rượu có màu tím đậm, hương thơm nồng nàn của quả việt quất, mận đen, đinh hương và mượt mà vị gỗ sồi Pháp."
    },
    {
        id: 27, name: "Château Margaux Pavillon Rouge", category: "red", price: 7800000, discount: 5, stock: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFre5FSVFdpRwVRoZzKKGLwWZyZRe9ifrhvrqt63TUA&s",
        origin: "Bordeaux, Pháp", alcohol: "13.5%", volume: "750ml",
        description: "Dòng vang 'Premier Vin' thứ hai tuyệt đẹp từ Château Margaux. Đậm đà vị mâm xôi, gỗ tuyết tùng và tannin tròn trịa cực kỳ tinh tế."
    },
    {
        id: 28, name: "Meiomi Pinot Noir California", category: "red", price: 1150000, discount: 12, stock: 22,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVA1D2hyXjImN9xQ3o-CvAZhXN-HxbZoShCzlNTmZykg&s=10",
        origin: "California, Mỹ", alcohol: "13.7%", volume: "750ml",
        description: "Pinot Noir bán chạy hàng đầu nước Mỹ. Hương vị quả dại, mocha béo ngậy và chút nốt hương gỗ sồi ngọt ngào, mượt mà trên vòm miệng."
    },
    {
        id: 29, name: "Barolo Cannubi DOCG Marchesi di Barolo", category: "red", price: 3450000, discount: 0, stock: 12,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXbHza5Faq8uVzTr2zJ64sVMfVUkCeBaz5Axf-G9BgQ&s=10",
        origin: "Piedmont, Ý", alcohol: "14.5%", volume: "750ml",
        description: "Được gọi là 'Vua của các loại rượu vang' làm từ nho Nebbiolo. Rượu có hương hoa hồng khô, cam thảo, nấm truffle và vị tannin săn chắc."
    },
    {
        id: 30, name: "Château Pontet-Canet Pauillac Grand Cru", category: "red", price: 4950000, discount: 8, stock: 9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclVtMss2UiyrUQ6A1itLlSiMIQDQxMW1CXX4W0NplQQ&s=10",
        origin: "Pauillac, Pháp", alcohol: "14.0%", volume: "750ml",
        description: "Chai vang hữu cơ (Biodynamic) đỉnh cao của Bordeaux. Hương vị nguyên bản của cassis, khoáng chất, xì gà và gỗ sồi sang trọng."
    },
    {
        id: 31, name: "Beringer Knights Valley Cabernet Sauvignon", category: "red", price: 1850000, discount: 15, stock: 18,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cTItqd6RVcv6n6zkBEXyVL1AK3tU0q-RZLBg4bip4A&s=10",
        origin: "Sonoma County, Mỹ", alcohol: "14.8%", volume: "750ml",
        description: "Cấu trúc cô đọng với trái dâu đen, sô-cô-la đen, thảo mộc dại và vị cay nhẹ của hạt tiêu. Thích hợp cho tiệc đồ nướng cao cấp."
    },
    {
        id: 32, name: "Torres Mas La Plana Cabernet Sauvignon", category: "red", price: 2800000, discount: 10, stock: 14,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0YmbfrAjqkxoeOAC0QDFwjRjBftMMmtAY4lfgv4MxQ&s=10",
        origin: "Penedès, Tây Ban Nha", alcohol: "14.5%", volume: "750ml",
        description: "Chai vang huyền thoại từng đánh bại nhiều Grand Cru Classé Pháp. Hương vị anh đào đen, cà phê, truffle và cấu trúc cực kỳ quý phái."
    },
    {
        id: 33, name: "Kim Crawford Sauvignon Blanc Marlborough", category: "white", price: 790000, discount: 10, stock: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOWkTuQdn8ejtLZpeDTiJU6QWcHa0WcKpQ1EBkx-k6t0eq6jO-X4MAy8&s=10",
        origin: "Marlborough, New Zealand", alcohol: "13.0%", volume: "750ml",
        description: "Vang trắng bán chạy nhất thế giới với vị chanh dây, dưa gang, bưởi hồng tươi mát bùng nổ, hậu vị chua thanh cân bằng tuyệt vời."
    },
    {
        id: 34, name: "Santa Margherita Pinot Grigio Valdadige", category: "white", price: 890000, discount: 5, stock: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsw5e7snPF3VY7vX5i79qeiOxrnPUCyCYw0lHozbtZw&s=10",
        origin: "Alto Adige, Ý", alcohol: "12.5%", volume: "750ml",
        description: "Dòng Pinot Grigio biểu tượng của nước Ý. Rượu sắc nét, tươi mát với nốt hương táo xanh, cam quýt và độ khoáng chất dễ chịu."
    },
    {
        id: 35, name: "Cloudy Bay Sauvignon Blanc", category: "white", price: 1450000, discount: 0, stock: 16,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTvqnzQPSIQcesJPI5-n9IM47prtCWrgu3SIMiYRryQ&s=10",
        origin: "Marlborough, New Zealand", alcohol: "13.2%", volume: "750ml",
        description: "Huyền thoại vang trắng New Zealand. Đậm đà hương dứa, lá chanh vò, ổi chín và kết thúc mượt mà tinh tế."
    },
    {
        id: 36, name: "Pouilly-Fumé Baron de L Ladoucette", category: "white", price: 3200000, discount: 10, stock: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1IFNXetHD1ywVCJLyJJHb8Vq_YcAKXfzPmTzKdkH0Q&s",
        origin: "Loire Valley, Pháp", alcohol: "12.5%", volume: "750ml",
        description: "Được mệnh danh là chai Sauvignon Blanc đỉnh cao nước Pháp. Hương khói đá lửa đặc trưng hòa quyện cùng trái cây họ cam chanh thanh lịch."
    },
    {
        id: 37, name: "Whispering Angel Rosé Côtes de Provence", category: "white", price: 990000, discount: 12, stock: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42opFYIUIsgfuThDXK6YU4Xd_FGKf5kcDSdUIRBd17g&s=10",
        origin: "Provence, Pháp", alcohol: "13.0%", volume: "750ml",
        description: "Rượu vang hồng (Rosé) nổi tiếng nhất thế giới. Màu hồng nhạt quyến rũ, thơm ngát dâu tây tươi, đào trắng và cảm giác khô nhẹ mát rượi."
    },
    {
        id: 38, name: "La Marca Prosecco DOC Spumante", category: "sparkling", price: 620000, discount: 15, stock: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPMFkAQQaL1V7wxtvESYQ4fNFFhvKtkDhfXMQraqj5w&s=10",
        origin: "Veneto, Ý", alcohol: "11.0%", volume: "750ml",
        description: "Chai Prosecco bán chạy nhất toàn cầu. Bọt sủi mịn màng, thơm ngát hoa ngân hoa, táo xanh và đào chín mọng sảng khoái."
    },
    {
        id: 39, name: "Laurent-Perrier La Cuvée Brut Champagne", category: "sparkling", price: 2150000, discount: 8, stock: 12,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJUgfRmQ9kxgfzMFgWc-CncaqOLzBmq7may212b2iww&s=10",
        origin: "Champagne, Pháp", alcohol: "12.0%", volume: "750ml",
        description: "Sâm panh đẳng cấp với tỉ lệ nho Chardonnay cao. Tươi mát, tinh khiết với hương bưởi trắng, hoa bưởi và bánh brioche nướng."
    },
    {
        id: 40, name: "Louis Roederer Cristal Brut Vintage", category: "sparkling", price: 9800000, discount: 0, stock: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WGmjEjSvWdj5ZhoHwKX1wDS5NAmdoR--IdQYwUyDUw&s=10",
        origin: "Champagne, Pháp", alcohol: "12.5%", volume: "750ml",
        description: "Tuyệt tác Sâm panh Hoàng gia Nga năm 1876. Chai thủy tinh trong suốt sang trọng, bọt sủi tăm tắp, giàu hương vỏ cam phơi, hạt dẻ nướng và khoáng chất."
    },
    {
        id: 41, name: "Moscato d'Asti Castello del Poggio", category: "sparkling", price: 580000, discount: 10, stock: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYC5DeVPddN8bv-iC7AwdLjkkWHWqY_wZO3ztrBYAs8w&s=10",
        origin: "Piedmont, Ý", alcohol: "5.5%", volume: "750ml",
        description: "Vang sủi ngọt nhẹ cực kỳ dễ uống. Thơm nức mùi nho Muscat tươi, đào vàng và hoa cam, nồng độ cồn nhẹ nhàng thích hợp cho phái đẹp."
    },
    {
        id: 42, name: "Bottega Gold Prosecco Spumante DOC", category: "sparkling", price: 980000, discount: 5, stock: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_050Xw8B2W8kimBRIa60B0LrmdrOFPF1bhQ449nSkA&s=10",
        origin: "Veneto, Ý", alcohol: "11.0%", volume: "750ml",
        description: "Chai mạ vàng kim sang trọng bậc nhất. Vị vang thanh thoát, cân bằng giữa vị chua nhẹ và hương thơm trái cây nhiệt đới."
    },
    {
        id: 43, name: "Vang Đà Lạt Nouveau Red Wine", category: "local", price: 160000, discount: 5, stock: 45,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYNZo_L2Qzrt8IElvCL3kn_SH6DCkMFOChvEFMYSzgw&s=10",
        origin: "Đà Lạt, Việt Nam", alcohol: "12.5%", volume: "750ml",
        description: "Dòng vang tươi Đà Lạt theo phong cách Nouveau của Pháp. Rượu tươi mới, đậm đà vị mận chín, quả mâm xôi và chút chát thanh nhẹ."
    },
    {
        id: 44, name: "Vang Sim Rừng Phú Quốc Premium", category: "local", price: 220000, discount: 10, stock: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCmlyK1qF_yuZD0LFhb7w6nE4cRrwjAo3qJkGFb5peQ&s=10",
        origin: "Phú Quốc, Việt Nam", alcohol: "12.0%", volume: "750ml",
        description: "Đặc sản nổi tiếng đảo ngọc Phú Quốc được lên men tự nhiên từ trái sim rừng chín mọng. Vị ngọt hậu, chát nhẹ, có tác dụng tốt cho tiêu hóa."
    },
    {
        id: 45, name: "Vang Táo Mèo Yên Bái Mầm Distillery", category: "local", price: 290000, discount: 0, stock: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvW46DTR2GjbYvbUX57hHsnPTMleDzhfBnxmQuVwqVw&s",
        origin: "Lào Cai, Việt Nam", alcohol: "14.0%", volume: "500ml",
        description: "Ủ thủ công từ quả táo mèo rừng Hoàng Liên Sơn. Rượu có màu hổ phách, vị chua chát thanh thoát hòa quyện nốt ngọt của mật ong rừng."
    },
    {
        id: 46, name: "Vang Nho Phan Rang Ninh Thuận Đỏ", category: "local", price: 110000, discount: 5, stock: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaSfx949RG3FAyNpnUe9Y4a4Hlsvk42rb-2g77ouWLw&s=10",
        origin: "Ninh Thuận, Việt Nam", alcohol: "11.5%", volume: "750ml",
        description: "Sản phẩm truyền thống làm từ giống nho Red Cardinal Ninh Thuận. Hương vị mộc mạc, ngọt dịu tự nhiên, vô cùng dễ uống trong bữa cơm gia đình."
    },
    {
        id: 47, name: "Vang Đà Lạt Dankia Red Wine", category: "local", price: 130000, discount: 5, stock: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC0ZsQOngUamcQS4R99SrmG-vl5bpR6RMNfCYe_360w&s",
        origin: "Đà Lạt, Việt Nam", alcohol: "12.0%", volume: "750ml",
        description: "Đặt tên theo hồ Dankia thơ mộng. Rượu vang đỏ mượt mà, thơm mùi quả mọng dại Đà Lạt và có hậu vị ngọt nhẹ rất êm ái."
    },
    {
        id: 48, name: "Vang Thanh Long Bình Thuận White Wine", category: "local", price: 195000, discount: 10, stock: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl24jxGHkoX4jABmEfOmFgI389ZroQTanT70LrafF4WQ&s=10",
        origin: "Bình Thuận, Việt Nam", alcohol: "11.0%", volume: "750ml",
        description: "Dòng vang trắng độc đáo lên men từ trái thanh long ruột trắng Bình Thuận. Rượu trong suốt, vị chua thanh mát dễ chịu và hương thơm tự nhiên."
    },
    {
        id: 49, name: "Vang Dâu Tây Mộc Châu Premium", category: "local", price: 240000, discount: 5, stock: 28,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iv8SBJwTPUjXhR14RA2cwpsgce9ZfRnIMNH2LJUfbA&s=10",
        origin: "Sơn La, Việt Nam", alcohol: "12.0%", volume: "750ml",
        description: "Lên men từ những quả dâu tây chín mọng được trồng tại xứ lạnh Mộc Châu. Rượu mang sắc đỏ tươi quyến rũ, vị ngọt dịu hòa quyện cùng hương thơm trái dâu tự nhiên ngọt ngào."
    },
    {
        id: 50, name: "Vang Đà Lạt Superior Red Wine", category: "local", price: 175000, discount: 8, stock: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtJOti9DMMRw6iroGA31TOj_z0cjBS8-b3zX-Dg-_OQ&s=10",
        origin: "Đà Lạt, Việt Nam", alcohol: "12.0%", volume: "750ml",
        description: "Sự kết hợp giữa nho Cardinal và giống nho Shiraz cao cấp. Rượu có màu đỏ đậm, vị chát đượm vừa phải, thích hợp dùng cùng các món thịt đỏ nướng."
    },
    {
        id: 51, name: "Vang Măng Đen Sim Rừng Kon Tum", category: "local", price: 210000, discount: 5, stock: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0zHPGTo0uE_zAckoCNIa2xxznXdXZbmlhBCWbdoOHA&s=10",
        origin: "Kon Tum, Việt Nam", alcohol: "12.0%", volume: "750ml",
        description: "Lên men tự nhiên từ trái sim rừng thu hoạch tại đại ngàn Măng Đen - Kon Tum. Rượu có màu tím sẫm, vị chát nhẹ hòa quyện cùng hậu vị ngọt đượm thảo mộc."
    },
    {
        id: 52, name: "Château Palmer Margaux Grand Cru Classé", category: "red", price: 9200000, discount: 0, stock: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzs2oUHBSSwEpjw97PTh3SsnOkwZJCFdNK5mguQEhgg&s=10",
        origin: "Bordeaux, Pháp", alcohol: "13.5%", volume: "750ml",
        description: "Tuyệt phẩm vang Pháp nổi tiếng thuộc vùng Margaux. Sự kết hợp hoàn hảo giữa Cabernet Sauvignon và Merlot tạo nên hương vị hoa violet, anh đào đen và gỗ sồi quý phái."
    }
];

// ============================================
// 2. BIẾN QUẢN LÝ DỮ LIỆU CỬA HÀNG & TÀI KHOẢN
// ============================================
let cart = [];
let currentUser = null;
let currentCancelCode = null;
let currentActiveOrder = null;

let orderHistory = [
    {
        code: "RVP-8821",
        date: "14/09/2026, 10:15:30",
        timestamp: new Date("2026-09-14T10:15:30").getTime(),
        customerName: "Nguyễn Văn Hùng",
        phone: "0912345678",
        email: "hungnv@gmail.com",
        address: "Số 15 Lê Văn Lương, Hà Nội",
        method: "Chuyển khoản ngân hàng (QR Code)",
        note: "Giao trước 12h",
        items: [
            { id: 1, name: "Château Margaux Premier Grand Cru Classé", price: 13950000, quantity: 1 }
        ],
        shippingFee: 30000,
        totalPrice: 13980000,
        status: "Đã chuyển khoản"
    },
    {
        code: "RVP-7742",
        date: "13/09/2026, 16:40:12",
        timestamp: new Date("2026-09-13T16:40:12").getTime(),
        customerName: "Trần Thị Mai",
        phone: "0987654321",
        email: "maitt@gmail.com",
        address: "Số 88 Trần Duy Hưng, Hà Nội",
        method: "Thanh toán khi nhận hàng (COD)",
        note: "",
        items: [
            { id: 21, name: "Vang Đà Lạt Classic Red Wine", price: 114000, quantity: 5 }
        ],
        shippingFee: 30000,
        totalPrice: 600000,
        status: "Đã chuyển khoản"
    }
];

const registeredUsers = [
    { username: "quantrivien", password: "123@", fullname: "Quản Trị Viên", isAdmin: true }
];

function getFinalPrice(product) {
    if (!product.discount || product.discount <= 0) return product.price;
    return product.price * (1 - product.discount / 100);
}

// =====================================
// 3. HIỂN THỊ SẢN PHẨM & MODAL CHI TIẾT
// =====================================
function displayProducts(items) {
    const grid = document.getElementById("product-grid");
    if (!grid) return;
    
    grid.innerHTML = items.map(product => {
        const isOutOfStock = product.stock <= 0;
        const finalPrice = getFinalPrice(product);
        const hasDiscount = product.discount && product.discount > 0;

        return `
            <div class="product-card" style="position:relative;">
                ${hasDiscount ? `<span style="position:absolute; top:10px; left:10px; background:#ff4d4d; color:#fff; font-weight:bold; font-size:11px; padding:3px 8px; border-radius:12px; z-index:2;">-${product.discount}%</span>` : ''}
                
                <div class="img-container" onclick="openModal(${product.id})" style="cursor:pointer;">
                    <img src="${product.image}" alt="${product.name}" referrerpolicy="no-referrer" onerror="this.src='https://placehold.co/400x600/800020/ffffff?text=Ruou+Vang'">
                </div>
                <h3 class="product-title" onclick="openModal(${product.id})" style="cursor:pointer;">${product.name}</h3>
                
                <div class="product-price-box" style="margin-bottom:6px;">
                    ${hasDiscount ? `
                        <span style="color:#e6b800; font-weight:bold; font-size:16px;">${finalPrice.toLocaleString('vi-VN')} VNĐ</span>
                        <span style="color:#888; text-decoration:line-through; font-size:12px; margin-left:6px;">${product.price.toLocaleString('vi-VN')} VNĐ</span>
                    ` : `
                        <span style="color:#e6b800; font-weight:bold; font-size:16px;">${product.price.toLocaleString('vi-VN')} VNĐ</span>
                    `}
                </div>
                
                <p class="product-stock ${isOutOfStock ? 'out-of-stock' : ''}">
                    <i class="fa-solid ${isOutOfStock ? 'fa-circle-xmark' : 'fa-boxes-stacked'}"></i>
                    ${isOutOfStock ? 'HẾT HÀNG' : `Số lượng có sẵn: <strong>${product.stock}</strong> chai`}
                </p>

                <div style="display:flex; gap:6px; margin-top:10px;">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})" title="Thêm vào giỏ hàng" ${isOutOfStock ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : 'style="width:42px; background:#111; border:1px solid #e6b800; color:#e6b800; font-size:16px;"'}>
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                    <button class="btn-add-cart" onclick="openModal(${product.id})" style="flex:1; background:#2a2a2a; border:1px solid #444; color:#fff; font-size:12px;">
                        <i class="fa-solid fa-circle-info"></i> CHI TIẾT
                    </button>
                    <button class="btn-add-cart" onclick="buyNow(${product.id})" ${isOutOfStock ? 'disabled style="flex:1; background:#555; border:1px solid #555; color:#aaa; font-size:12px; cursor:not-allowed;"' : 'style="flex:1; background:#800020; border:1px solid #800020; color:#ffd700; font-weight:bold; font-size:12px;"'}>
                        ${isOutOfStock ? 'HẾT HÀNG' : 'MUA NGAY'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const isOutOfStock = product.stock <= 0;
    const finalPrice = getFinalPrice(product);
    const hasDiscount = product.discount && product.discount > 0;
    const modalBody = document.getElementById("modal-body");

    modalBody.innerHTML = `
        <div class="modal-img" style="display:flex; flex-direction:column; gap:12px;">
            <div style="position:relative; border-radius:8px; overflow:hidden; border:1px solid #444; background:#111;">
                <img id="main-product-img" src="${product.image}" referrerpolicy="no-referrer" alt="${product.name}" style="width:100%; height:340px; object-fit:contain; background:#000;">
                ${hasDiscount ? `<span style="position:absolute; top:10px; left:10px; background:#ff4d4d; color:#fff; font-weight:bold; font-size:11px; padding:3px 8px; border-radius:12px;">-${product.discount}%</span>` : ''}
            </div>

            <div>
                <p style="color:#ffd700; font-size:12px; font-weight:bold; margin-bottom:6px;">
                    <i class="fa-solid fa-images"></i> Bộ sưu tập ảnh thực tế & Bối cảnh:
                </p>
                <div style="display:flex; gap:8px; overflow-x:auto; padding-bottom:4px;">
                    <img src="${product.image}" onclick="document.getElementById('main-product-img').src=this.src" style="width:65px; height:65px; object-fit:cover; border-radius:4px; border:2px solid #ffd700; cursor:pointer;" title="Ảnh tách nền chuẩn" alt="Tách nền">
                    <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" onclick="document.getElementById('main-product-img').src=this.src" style="width:65px; height:65px; object-fit:cover; border-radius:4px; border:1px solid #444; cursor:pointer;" title="Ảnh bối cảnh bàn tiệc" alt="Bối cảnh">
                    <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=400&q=80" onclick="document.getElementById('main-product-img').src=this.src" style="width:65px; height:65px; object-fit:cover; border-radius:4px; border:1px solid #444; cursor:pointer;" title="Ảnh hầm ủ gỗ sồi" alt="Hầm rượu">
                    <img src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=400&q=80" onclick="document.getElementById('main-product-img').src=this.src" style="width:65px; height:65px; object-fit:cover; border-radius:4px; border:1px solid #444; cursor:pointer;" title="Ảnh nhãn mác chi tiết" alt="Chi tiết">
                </div>
            </div>
        </div>

        <div class="modal-info">
            <h2>${product.name}</h2>
            <div class="modal-price" style="margin-bottom:12px;">
                ${hasDiscount ? `
                    <span style="font-size:22px; color:#ff4d4d; font-weight:bold;">${finalPrice.toLocaleString('vi-VN')} VNĐ</span>
                    <span style="font-size:14px; color:#888; text-decoration:line-through; margin-left:10px;">${product.price.toLocaleString('vi-VN')} VNĐ</span>
                ` : `
                    <span style="font-size:22px; color:#ff4d4d; font-weight:bold;">${product.price.toLocaleString('vi-VN')} VNĐ</span>
                `}
            </div>
            
            <div class="modal-details">
                <p><strong><i class="fa-solid fa-location-dot"></i> Xuất xứ:</strong> ${product.origin}</p>
                <p><strong><i class="fa-solid fa-wine-glass"></i> Phân loại:</strong> ${product.category === 'red' ? 'Vang Đỏ' : product.category === 'white' ? 'Vang Trắng' : product.category === 'local' ? 'Vang Việt Nam' : 'Sâm Panh'}</p>
                <p><strong><i class="fa-solid fa-percent"></i> Nồng độ cồn:</strong> ${product.alcohol}</p>
                <p><strong><i class="fa-solid fa-bottle-water"></i> Dung tích:</strong> ${product.volume}</p>
                
                <p style="background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 6px; border: 1px solid #444; color:${isOutOfStock ? '#ff4d4d' : '#38ef7d'}; font-weight:bold; font-size:14px; margin-top:10px;">
                    <strong><i class="fa-solid ${isOutOfStock ? 'fa-circle-xmark' : 'fa-boxes-stacked'}"></i> Kho hàng:</strong> 
                    ${isOutOfStock ? '<span style="color:#ff4d4d;">HẾT HÀNG</span>' : `<span style="color:#ffd700;">${product.stock}</span> chai sẵn có`}
                </p>
            </div>

            <div style="background: rgba(255, 77, 77, 0.1); border: 1px solid #ff4d4d; border-radius: 6px; padding: 10px 12px; margin-top: 12px; font-size: 12px; color: #ffb3b3; line-height: 1.4;">
                <p style="font-weight: bold; color: #ff4d4d; margin-bottom: 3px;"><i class="fa-solid fa-triangle-exclamation"></i> CẢNH BÁO AN TOÀN:</p>
                Sản phẩm chứa cồn. Không dành cho người dưới 18 tuổi hoặc lái xe sau khi sử dụng.
            </div>

            <div class="modal-desc" style="margin-top:12px;">
                <p><strong>Mô tả chi tiết: </strong></p>
                <p style="font-size:13px; color:#ccc; line-height:1.5;">${product.description}</p>
            </div>

            <div style="display:flex; gap:10px; margin-top:18px; flex-wrap:wrap;">
                <button class="btn-modal-add" onclick="addToCartFromModal(${product.id})" ${isOutOfStock ? 'disabled style="background:#444; cursor:not-allowed;"' : 'style="background:#2a2a2a; border:1px solid #e6b800; color:#e6b800;"'}>
                    <i class="fa-solid fa-cart-plus"></i> THÊM GIỎ HÀNG
                </button>
                <button class="btn-modal-add" onclick="buyNow(${product.id})" ${isOutOfStock ? 'disabled style="background:#555; cursor:not-allowed;"' : 'style="background:#800020; border:1px solid #800020; color:#ffd700;"'}>
                    <i class="fa-solid fa-credit-card"></i> MUA NGAY
                </button>
            </div>
        </div>
    `;

    document.getElementById("product-modal").classList.add("show");
}

function closeModal() {
    document.getElementById("product-modal").classList.remove("show");
}

// ==============================
// 3. HÀM LỌC SẢN PHẨM RIÊNG BIỆT
// ==============================
let currentActiveCategory = 'all';

function filterProducts(category, event) {
    currentActiveCategory = category;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const targetBtn = event ? event.currentTarget || event.target : null;
    if (targetBtn && targetBtn.classList) targetBtn.classList.add('active');

    applyAdvancedFilters();
}

function applyAdvancedFilters() {
    let result = [...products];

    if (currentActiveCategory && currentActiveCategory !== 'all') {
        if (currentActiveCategory === 'Pháp') {
            result = result.filter(p => p.origin.toLowerCase().includes('pháp') || p.origin.toLowerCase().includes('bordeaux') || p.origin.toLowerCase().includes('pauillac') || p.origin.toLowerCase().includes('burgundy') || p.origin.toLowerCase().includes('champagne') || p.origin.toLowerCase().includes('loire valley'));
        } else if (currentActiveCategory === 'Ý') {
            result = result.filter(p => p.origin.toLowerCase().includes('ý') || p.origin.toLowerCase().includes('tuscany') || p.origin.toLowerCase().includes('veneto') || p.origin.toLowerCase().includes('piedmont'));
        } else if (currentActiveCategory === 'sparkling') {
            result = result.filter(p => p.category === 'sparkling');
        } else {
            result = result.filter(p => p.category === currentActiveCategory);
        }
    }

    const priceFilter = document.getElementById("filter-price") ? document.getElementById("filter-price").value : "all";
    if (priceFilter === "under1m") {
        result = result.filter(p => getFinalPrice(p) < 1000000);
    } else if (priceFilter === "1m-3m") {
        result = result.filter(p => {
            const fp = getFinalPrice(p);
            return fp >= 1000000 && fp <= 3000000;
        });
    } else if (priceFilter === "over3m") {
        result = result.filter(p => getFinalPrice(p) > 3000000);
    }

    const searchInput = document.getElementById("search-input");
    if (searchInput && searchInput.value.trim() !== "") {
        const keyword = searchInput.value.toLowerCase().trim();
        result = result.filter(p => p.name.toLowerCase().includes(keyword));
    }

    displayProducts(result);
}

function searchProducts() {
    applyAdvancedFilters();
}

// ==============================================
// 4. XỬ LÝ ĐĂNG KÝ, ĐĂNG NHẬP & PHÂN QUYỀN ADMIN
// ==============================================
function openAuthModal(mode) {
    switchAuthTab(mode);
    document.getElementById("auth-modal").classList.add("show");
}

function closeAuthModal() {
    document.getElementById("auth-modal").classList.remove("show");
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById("login-form");
    const regForm = document.getElementById("register-form");
    const tabLogin = document.getElementById("tab-login");
    const tabReg = document.getElementById("tab-register");

    if (tab === 'login') {
        if (loginForm) loginForm.style.display = 'block';
        if (regForm) regForm.style.display = 'none';
        if (tabLogin) { tabLogin.style.color = '#e6b800'; tabLogin.style.borderBottom = '2px solid #e6b800'; }
        if (tabReg) { tabReg.style.color = '#888'; tabReg.style.borderBottom = 'none'; }
    } else {
        if (loginForm) loginForm.style.display = 'none';
        if (regForm) regForm.style.display = 'block';
        if (tabReg) { tabReg.style.color = '#e6b800'; tabReg.style.borderBottom = '2px solid #e6b800'; }
        if (tabLogin) { tabLogin.style.color = '#888'; tabLogin.style.borderBottom = 'none'; }
    }
}

function handleRegister(e) {
    e.preventDefault();

    const fullname = document.getElementById("reg-fullname").value.trim();
    const username = document.getElementById("reg-username") ? document.getElementById("reg-username").value.trim() : fullname;
    const password = document.getElementById("reg-password") ? document.getElementById("reg-password").value.trim() : "123456";

    const isExist = registeredUsers.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (isExist) {
        alert("Tài khoản này đã tồn tại! Vui lòng chọn tên khác hoặc chuyển sang Đăng nhập.");
        return;
    }

    registeredUsers.push({ username, password, fullname, isAdmin: false });
    currentUser = { name: fullname, isAdmin: false, username };
    updateUserUI();
    closeAuthModal();
    alert(`Chúc mừng ${fullname} đã đăng ký tài khoản thành công!`);
}

function handleLogin(e) {
    e.preventDefault();

    const usernameInput = document.getElementById("login-username").value.trim();
    const passwordInput = document.getElementById("login-password").value.trim();
    const userFound = registeredUsers.find(u => u.username.toLowerCase() === usernameInput.toLowerCase());

    if (!userFound) {
        alert("Tài khoản chưa được đăng ký! Vui lòng bấm sang tab 'Đăng ký' để tạo tài khoản.");
        return;
    }

    if (userFound.password !== passwordInput) {
        alert("Mật khẩu không chính xác! Vui lòng kiểm tra lại.");
        return;
    }

    currentUser = { name: userFound.fullname, username: userFound.username, isAdmin: userFound.isAdmin };
    updateUserUI();
    closeAuthModal();

    if (currentUser.isAdmin) {
        alert("ĐĂNG NHẬP THÀNH CÔNG VỚI QUYỀN QUẢN TRỊ VIÊN!");
    } else {
        alert(`Xin chào ${currentUser.name}! Bạn đã đăng nhập thành công.`);
    }
}

function handleLogout() {
    currentUser = null;
    updateUserUI();
    alert("Bạn đã đăng xuất tài khoản.");
}

function updateUserUI() {
    const area = document.getElementById("user-account-area");
    if (!area) return;

    if (currentUser) {
        if (currentUser.isAdmin) {
            area.innerHTML = `
                <div class="user-logged-in">
                    <i class="fa-solid fa-user-shield" style="color:#ffd700;"></i> 
                    <span style="color:#ffd700; font-weight:bold;">${currentUser.name}</span>
                    <button onclick="openRevenueModal()" style="background:#2e7d32; border:1px solid #38ef7d; color:#fff; padding:5px 12px; border-radius:4px; font-size:12px; cursor:pointer; font-weight:bold;">
                        <i class="fa-solid fa-chart-line"></i> DOANH THU
                    </button>
                    <button onclick="openAdminPanel()" style="background:#800020; border:1px solid #e6b800; color:#ffd700; padding:5px 12px; border-radius:4px; font-size:12px; cursor:pointer; font-weight:bold;">
                        <i class="fa-solid fa-boxes-packing"></i> KHO HÀNG
                    </button>
                    <button onclick="openMyOrdersModal()" style="background:#222; border:1px solid #e6b800; color:#ffd700; padding:5px 12px; border-radius:4px; font-size:12px; cursor:pointer; font-weight:bold;">
                        <i class="fa-solid fa-clock-rotate-left"></i> ĐƠN HÀNG
                    </button>
                    <button onclick="handleLogout()" class="btn-logout">(Thoát)</button>
                </div>
            `;
        } else {
            area.innerHTML = `
                <div class="user-logged-in">
                    <i class="fa-solid fa-circle-user"></i> <span>${currentUser.name}</span>
                    <button onclick="openMyOrdersModal()" style="background:#222; border:1px solid #e6b800; color:#ffd700; padding:5px 12px; border-radius:4px; font-size:12px; cursor:pointer; font-weight:bold;">
                        <i class="fa-solid fa-clock-rotate-left"></i> ĐƠN HÀNG CỦA TÔI
                    </button>
                    <button onclick="handleLogout()" class="btn-logout">(Thoát)</button>
                </div>
            `;
        }
    } else {
        area.innerHTML = `
            <div style="display:flex; gap:8px;">
                <button onclick="openAuthModal('login')" class="btn-auth">
                    <i class="fa-solid fa-user"></i> Đăng nhập
                </button>
                <button onclick="openMyOrdersModal()" class="btn-auth" style="border-color:#555; color:#ccc;">
                    <i class="fa-solid fa-clock-rotate-left"></i> Tra cứu đơn
                </button>
            </div>
        `;
    }
}

// ===============================
// 5. QUẢN LÝ KHO (DÀNH CHO ADMIN)
// ===============================
function openAdminPanel() {
    if (!currentUser || !currentUser.isAdmin) {
        alert("TỪ CHỐI TRUY CẬP! Chỉ Quản trị viên mới có quyền vào khu vực này.");
        return;
    }
    const searchInput = document.getElementById("admin-search-input");
    if (searchInput) searchInput.value = "";
    renderAdminTable(products);
    document.getElementById("admin-modal").classList.add("show");
}

function closeAdminModal() {
    const adminModal = document.getElementById("admin-modal");
    if (adminModal) adminModal.classList.remove("show");
}

function renderAdminTable(items) {
    const tbody = document.getElementById("admin-product-tbody");
    if (!tbody) return;

    tbody.innerHTML = items.map(p => {
        const finalPrice = getFinalPrice(p);
        return `
            <tr>
                <td><strong>#${p.id}</strong></td>
                <td><img src="${p.image}" class="admin-img-thumb" alt="${p.name}"></td>
                <td>
                    <strong style="color:#fff;">${p.name}</strong><br>
                    <small style="color:#888;">${p.origin} - ${p.alcohol}</small>
                </td>
                <td>
                    <div style="font-weight:bold; color:#e6b800;">${finalPrice.toLocaleString('vi-VN')} đ</div>
                    ${p.discount > 0 ? `<small style="color:#888; text-decoration:line-through;">${p.price.toLocaleString('vi-VN')} đ</small>` : ''}
                </td>
                <td>
                    <div style="display:flex; align-items:center; gap:4px;">
                        <input type="number" data-id="${p.id}" value="${p.discount || 0}" min="0" max="100" class="input-stock-edit bulk-discount-input" style="width:55px; border-color:#ff4d4d; color:#ff4d4d;">
                        <span style="color:#ccc; font-size:12px;">%</span>
                    </div>
                </td>
                <td>
                    <div style="display:flex; align-items:center; gap:4px;">
                        <input type="number" data-id="${p.id}" value="${p.stock}" min="0" class="input-stock-edit bulk-stock-input" style="width:60px;">
                        <span style="color:#ccc; font-size:12px;">chai</span>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function saveAllBulkStock() {
    const stockInputs = document.querySelectorAll(".bulk-stock-input");
    const discountInputs = document.querySelectorAll(".bulk-discount-input");

    stockInputs.forEach(input => {
        const prodId = parseInt(input.getAttribute("data-id"));
        const newStock = parseInt(input.value);
        const product = products.find(p => p.id === prodId);
        if (product && !isNaN(newStock) && newStock >= 0) product.stock = newStock;
    });

    discountInputs.forEach(input => {
        const prodId = parseInt(input.getAttribute("data-id"));
        let newDiscount = parseInt(input.value);
        if (isNaN(newDiscount) || newDiscount < 0) newDiscount = 0;
        if (newDiscount > 100) newDiscount = 100;

        const product = products.find(p => p.id === prodId);
        if (product) product.discount = newDiscount;
    });

    displayProducts(products); 
    renderAdminTable(products); 
    alert(`ĐÃ CẬP NHẬT THÀNH CÔNG THÔNG TIN TỒN KHO & GIẢM GIÁ!`);
}

function filterAdminTable() {
    const keyword = document.getElementById("admin-search-input").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    renderAdminTable(filtered);
}

// ================================================
// 6. QUẢN LÝ THỐNG KÊ DOANH THU & XUẤT CSV (ADMIN)
// ================================================
function openRevenueModal() {
    if (!currentUser || !currentUser.isAdmin) {
        alert("TỪ CHỐI TRUY CẬP! Chỉ Quản trị viên mới được xem doanh thu.");
        return;
    }
    renderRevenueDashboard();
    document.getElementById("revenue-modal").classList.add("show");
}

function closeRevenueModal() {
    document.getElementById("revenue-modal").classList.remove("show");
}

function switchRevenueTab(tabName) {
    const ordersView = document.getElementById("revenue-orders-view");
    const productsView = document.getElementById("revenue-products-view");
    const customersView = document.getElementById("revenue-customers-view");
    
    const tabOrders = document.getElementById("rev-tab-orders");
    const tabProducts = document.getElementById("rev-tab-products");
    const tabCustomers = document.getElementById("rev-tab-customers");

    if (ordersView) ordersView.style.display = "none";
    if (productsView) productsView.style.display = "none";
    if (customersView) customersView.style.display = "none";

    if (tabOrders) { tabOrders.style.color = "#888"; tabOrders.style.borderBottom = "none"; }
    if (tabProducts) { tabProducts.style.color = "#888"; tabProducts.style.borderBottom = "none"; }
    if (tabCustomers) { tabCustomers.style.color = "#888"; tabCustomers.style.borderBottom = "none"; }

    if (tabName === 'orders') {
        if (ordersView) ordersView.style.display = "block";
        if (tabOrders) { tabOrders.style.color = "#ffd700"; tabOrders.style.borderBottom = "2px solid #ffd700"; }
    } else if (tabName === 'products') {
        if (productsView) productsView.style.display = "block";
        if (tabProducts) { tabProducts.style.color = "#ffd700"; tabProducts.style.borderBottom = "2px solid #ffd700"; }
    } else if (tabName === 'customers') {
        if (customersView) customersView.style.display = "block";
        if (tabCustomers) { tabCustomers.style.color = "#ffd700"; tabCustomers.style.borderBottom = "2px solid #ffd700"; }
    }
}

function renderRevenueDashboard() {
    const timeFilter = document.getElementById("revenue-time-filter") ? document.getElementById("revenue-time-filter").value : "all";
    const statusFilter = document.getElementById("revenue-status-filter") ? document.getElementById("revenue-status-filter").value : "all";
    const searchKeyword = document.getElementById("revenue-search-input") ? document.getElementById("revenue-search-input").value.toLowerCase().trim() : "";

    const now = Date.now();
    let filteredOrders = [...orderHistory];

    if (timeFilter === "today") {
        const todayStr = new Date().toLocaleDateString('vi-VN');
        filteredOrders = filteredOrders.filter(o => o.date.includes(todayStr));
    } else if (timeFilter === "7days") {
        const sevenDaysAgo = now - (7 * 24 * 60 * 60 * 1000);
        filteredOrders = filteredOrders.filter(o => (o.timestamp || now) >= sevenDaysAgo);
    } else if (timeFilter === "30days") {
        const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
        filteredOrders = filteredOrders.filter(o => (o.timestamp || now) >= thirtyDaysAgo);
    }

    if (statusFilter === "paid") {
        filteredOrders = filteredOrders.filter(o => o.status.includes("Đã chuyển khoản") || o.status.includes("Đã thanh toán"));
    } else if (statusFilter === "pending") {
        filteredOrders = filteredOrders.filter(o => !o.status.includes("Đã chuyển khoản") && !o.status.includes("Đã thanh toán") && o.status !== "Đã hủy");
    } else if (statusFilter === "cancelled") {
        filteredOrders = filteredOrders.filter(o => o.status === "Đã hủy");
    }

    if (searchKeyword) {
        filteredOrders = filteredOrders.filter(o => 
            o.code.toLowerCase().includes(searchKeyword) ||
            o.customerName.toLowerCase().includes(searchKeyword) ||
            o.phone.includes(searchKeyword)
        );
    }

    let totalRevenue = 0;
    let pendingRevenue = 0;
    let grossRevenue = 0;
    let totalBottles = 0;
    let successOrders = 0;
    let cancelledOrders = 0;

    const productStats = {};
    const customerStats = {};

    filteredOrders.forEach(o => {
        if (o.status === "Đã hủy") {
            cancelledOrders++;
        } else {
            successOrders++;
            grossRevenue += o.totalPrice;
            totalBottles += o.items.reduce((sum, item) => sum + item.quantity, 0);

            if (o.status.includes("Đã chuyển khoản") || o.status.includes("Đã thanh toán")) {
                totalRevenue += o.totalPrice;
            } else {
                pendingRevenue += o.totalPrice;
            }

            o.items.forEach(item => {
                if (!productStats[item.id]) {
                    productStats[item.id] = {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        totalQuantity: 0,
                        totalRevenue: 0,
                        image: item.image || (products.find(p => p.id === item.id) || {}).image || ''
                    };
                }
                productStats[item.id].totalQuantity += item.quantity;
                productStats[item.id].totalRevenue += (item.price * item.quantity);
            });

            const custKey = o.phone.trim();
            if (!customerStats[custKey]) {
                customerStats[custKey] = {
                    name: o.customerName,
                    phone: o.phone,
                    email: o.email,
                    address: o.address,
                    orderCount: 0,
                    totalSpent: 0
                };
            }
            customerStats[custKey].orderCount += 1;
            customerStats[custKey].totalSpent += o.totalPrice;
        }
    });

    const averageOrderValue = successOrders > 0 ? Math.round(grossRevenue / successOrders) : 0;

    const statTotalRev = document.getElementById("stat-total-revenue");
    const statPendingRev = document.getElementById("stat-pending-revenue");
    const statGrossRev = document.getElementById("stat-gross-revenue");
    const statTotalBot = document.getElementById("stat-total-bottles");
    const statAov = document.getElementById("stat-aov-value");
    const statRatio = document.getElementById("stat-orders-ratio");

    if (statTotalRev) statTotalRev.innerText = totalRevenue.toLocaleString('vi-VN') + " VNĐ";
    if (statPendingRev) statPendingRev.innerText = pendingRevenue.toLocaleString('vi-VN') + " VNĐ";
    if (statGrossRev) statGrossRev.innerText = grossRevenue.toLocaleString('vi-VN') + " VNĐ";
    if (statTotalBot) statTotalBot.innerText = totalBottles.toLocaleString('vi-VN') + " chai";
    if (statAov) statAov.innerText = averageOrderValue.toLocaleString('vi-VN') + " VNĐ";
    if (statRatio) statRatio.innerText = `${successOrders} / ${cancelledOrders}`;

    const ordersTbody = document.getElementById("revenue-orders-tbody");
    if (ordersTbody) {
        if (filteredOrders.length === 0) {
            ordersTbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#888; padding:25px;">Không có đơn hàng nào khớp với điều kiện lọc.</td></tr>`;
        } else {
            ordersTbody.innerHTML = filteredOrders.map(o => {
                const isCancelled = o.status === "Đã hủy";
                const isPaid = o.status.includes("Đã chuyển khoản") || o.status.includes("Đã thanh toán");
                
                const itemsListSummary = o.items.map(i => `
                    <div style="font-size:12px; color:#ccc; margin-bottom:2px;">
                        • ${i.name} <strong style="color:#ffd700;">x${i.quantity}</strong> 
                        <span style="color:#888;">(${(i.price * i.quantity).toLocaleString('vi-VN')}đ)</span>
                    </div>
                `).join('');

                return `
                    <tr style="${isCancelled ? 'opacity: 0.55;' : ''}">
                        <td><strong style="color:#ffd700;">#${o.code}</strong></td>
                        <td><small style="color:#aaa;">${o.date}</small></td>
                        <td>
                            <strong style="color:#fff;">${o.customerName}</strong><br>
                            <small style="color:#888;">SĐT: ${o.phone}</small>
                        </td>
                        <td>${itemsListSummary}</td>
                        <td><small style="color:#ccc;">${o.method}</small></td>
                        <td>
                            <strong style="color:${isCancelled ? '#888' : isPaid ? '#38ef7d' : '#ffd700'}; ${isCancelled ? 'text-decoration:line-through;' : ''}">
                                ${o.totalPrice.toLocaleString('vi-VN')} VNĐ
                            </strong>
                        </td>
                        <td>
                            <span style="background:${isCancelled ? '#444' : isPaid ? '#2e7d32' : '#800020'}; color:${isCancelled ? '#aaa' : '#fff'}; font-size:11px; padding:4px 8px; border-radius:10px; font-weight:bold; display:inline-block;">
                                ${o.status}
                            </span>
                        </td>
                    </tr>
                `;
            }).join('');
        }
    }

    const productsTbody = document.getElementById("revenue-products-tbody");
    if (productsTbody) {
        const sortedProducts = Object.values(productStats).sort((a, b) => {
            if (b.totalQuantity !== a.totalQuantity) {
                return b.totalQuantity - a.totalQuantity; // Số lượng lớn hơn xếp trên
            }
            return b.totalRevenue - a.totalRevenue;
        });

        // Tính tổng số lượng chai bán ra để làm mẫu số cho tỷ lệ % bán chạy chuẩn xác
        const sumAllQuantity = sortedProducts.reduce((acc, curr) => acc + curr.totalQuantity, 0);

        if (sortedProducts.length === 0) {
            productsTbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#888; padding:25px;">Chưa có sản phẩm nào phát sinh doanh số.</td></tr>`;
        } else {
            productsTbody.innerHTML = sortedProducts.map((p, index) => {
                // Tỷ lệ % dựa trên số lượng bán (Sản phẩm bán nhiều hơn -> % cao hơn, thanh progress bar dài hơn)
                const percent = sumAllQuantity > 0 ? ((p.totalQuantity / sumAllQuantity) * 100).toFixed(1) : 0;
                return `
                    <tr>
                        <td><strong style="color:#ffd700;">#${index + 1}</strong></td>
                        <td><img src="${p.image}" class="admin-img-thumb" alt="${p.name}"></td>
                        <td><strong style="color:#fff;">${p.name}</strong></td>
                        <td><span style="color:#e6b800;">${p.price.toLocaleString('vi-VN')} đ</span></td>
                        <td><strong style="color:#fff; font-size:15px;">${p.totalQuantity}</strong> chai</td>
                        <td><strong style="color:#38ef7d; font-size:14px;">${p.totalRevenue.toLocaleString('vi-VN')} VNĐ</strong></td>
                        <td>
                            <div style="background:#222; border-radius:10px; overflow:hidden; border:1px solid #444; height:18px; position:relative; text-align:center;">
                                <div style="background:#800020; width:${percent}%; height:100%;"></div>
                                <span style="position:absolute; top:0; left:0; width:100%; font-size:11px; font-weight:bold; color:#fff; line-height:18px;">${percent}%</span>
                            </div>
                        </td>
                    </tr>
                `;
            }).join('');
        }
    }

    let customersTbody = document.getElementById("revenue-customers-tbody");
    if (!customersTbody) {
        const revModalBody = document.querySelector("#revenue-modal .modal-content");
        if (revModalBody) {
            let custViewDiv = document.createElement("div");
            custViewDiv.id = "revenue-customers-view";
            custViewDiv.style.display = "none";
            custViewDiv.innerHTML = `
                <h4 style="color:#ffd700; margin-bottom:12px; font-size:15px;"><i class="fa-solid fa-users"></i> Danh sách Khách hàng đóng góp doanh thu</h4>
                <div style="overflow-x:auto;">
                    <table class="admin-table" style="width:100%;">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Họ tên khách hàng</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ giao hàng</th>
                                <th>Số đơn hàng</th>
                                <th>Tổng tiền đã mua</th>
                            </tr>
                        </thead>
                        <tbody id="revenue-customers-tbody-inner"></tbody>
                    </table>
                </div>
            `;
            revModalBody.appendChild(custViewDiv);
            customersTbody = document.getElementById("revenue-customers-tbody-inner");
        }
    }

    if (customersTbody) {
        const sortedCustomers = Object.values(customerStats).sort((a, b) => b.totalSpent - a.totalSpent);
        if (sortedCustomers.length === 0) {
            customersTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888; padding:25px;">Chưa có dữ liệu khách hàng.</td></tr>`;
        } else {
            customersTbody.innerHTML = sortedCustomers.map((c, idx) => `
                <tr>
                    <td><strong>#${idx + 1}</strong></td>
                    <td><strong style="color:#fff;">${c.name}</strong><br><small style="color:#888;">${c.email || 'Không có email'}</small></td>
                    <td><span style="color:#ffd700;">${c.phone}</span></td>
                    <td><small style="color:#ccc;">${c.address}</small></td>
                    <td><strong style="color:#fff;">${c.orderCount}</strong> đơn</td>
                    <td><strong style="color:#38ef7d;">${c.totalSpent.toLocaleString('vi-VN')} VNĐ</strong></td>
                </tr>
            `).join('');
        }
    }
}

function exportRevenueReportCSV() {
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "Ma Don Hang,Ngay Dat,Khach Hang,So Dien Thoai,Dia Chi,Hinh Thuc Thanh Toan,Phi Ship,Tong Tien,Trang Thai\n";

    orderHistory.forEach(o => {
        let row = [
            `"${o.code}"`, `"${o.date}"`, `"${o.customerName}"`, `"${o.phone}"`,
            `"${o.address}"`, `"${o.method}"`, o.shippingFee || 0, o.totalPrice, `"${o.status}"`
        ].join(",");
        csvContent += row + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Bao_Cao_Doanh_Thu_Ruou_Vang_${new Date().toLocaleDateString('vi-VN').replace(/\//g, '-')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ======================
// 7. GIỎ HÀNG & MUA HÀNG
// ======================
function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar) sidebar.classList.toggle("open");
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock <= 0) {
        alert("Sản phẩm này hiện đã hết hàng!");
        return false;
    }

    const finalPrice = getFinalPrice(product);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        if (cartItem.quantity + 1 > product.stock) {
            alert(`Rất tiếc! Trong kho chỉ còn ${product.stock} chai sản phẩm này.`);
            return false;
        }
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, price: finalPrice, quantity: 1 });
    }
    updateCartUI();
    return true;
}

function addToCartFromModal(productId) {
    const added = addToCart(productId);
    if (added) alert("Đã thêm sản phẩm vào giỏ hàng thành công!");
}

function buyNow(productId) {
    const added = addToCart(productId);
    if (added) {
        closeModal();
        openCheckoutModal();
    }
}

function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    if (!cartItem || !product) return;

    if (change > 0 && cartItem.quantity + change > product.stock) {
        alert(`Rất tiếc! Số lượng trong kho chỉ còn tối đa ${product.stock} chai.`);
        return;
    }

    cartItem.quantity += change;
    if (cartItem.quantity <= 0) removeFromCart(productId);
    else updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.innerText = totalCount;

    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: #888; margin-top: 20px;">Giỏ hàng trống</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div>
                        <h4 style="font-size:13px; color:#fff; margin-bottom:4px;">${item.name}</h4>
                        <p style="font-size:12px; color:#e6b800;">${item.price.toLocaleString('vi-VN')} VNĐ</p>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div class="quantity-controls">
                            <button onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="btn-remove" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            `).join('');
        }
    }

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.innerText = totalPrice.toLocaleString('vi-VN');
}

// =================================
// 8. VẬN CHUYỂN TỰ ĐỘNG & TOÀN QUỐC
// =================================
const shippingRates = {
    "Hà Nội": 30000,
    "TP. Hồ Chí Minh": 35000,
    "Đà Nẵng": 30000,
    "Khác": 45000
};

function calculateShippingFee(city) {
    const totalBottles = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalBottles >= 3) {
        return 0;
    }

    if (!city) return shippingRates["Khác"];
    const normalizedCity = city.trim();
    for (let region in shippingRates) {
        if (normalizedCity.toLowerCase().includes(region.toLowerCase())) {
            return shippingRates[region];
        }
    }
    return shippingRates["Khác"];
}

function updateCheckoutSummaryTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cityInput = document.getElementById("cust-city");
    const city = cityInput ? cityInput.value : "Khác";
    
    const shippingFee = calculateShippingFee(city);
    const grandTotal = subtotal + shippingFee;

    const subtotalEl = document.getElementById("checkout-subtotal");
    const shipFeeEl = document.getElementById("checkout-shipping-fee");
    const grandTotalEl = document.getElementById("checkout-grand-total");

    const totalBottles = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (subtotalEl) subtotalEl.innerText = subtotal.toLocaleString('vi-VN') + " VNĐ";
    
    if (shipFeeEl) {
        if (totalBottles >= 3) {
            shipFeeEl.innerHTML = `<span style="color:#38ef7d; font-weight:bold;">0 VNĐ (Miễn phí mua từ 3 chai)</span>`;
        } else {
            shipFeeEl.innerText = shippingFee.toLocaleString('vi-VN') + " VNĐ";
        }
    }

    if (grandTotalEl) grandTotalEl.innerText = grandTotal.toLocaleString('vi-VN') + " VNĐ";
    
    return { subtotal, shippingFee, grandTotal };
}

function openCheckoutModal() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm.");
        return;
    }

    const summaryContainer = document.getElementById("checkout-summary");
    const totals = updateCheckoutSummaryTotals();

    summaryContainer.innerHTML = `
        <h4 style="color:#e6b800; margin-bottom:10px; font-size:15px;"><i class="fa-solid fa-basket-shopping"></i> Chi tiết đơn hàng:</h4>
        ${cart.map(item => `
            <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:5px; color:#ddd;">
                <span>${item.name} (x${item.quantity})</span>
                <strong>${(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</strong>
            </div>
        `).join('')}
        
        <hr style="border:0; border-top:1px solid #333; margin:10px 0;">
        
        <div style="display:flex; justify-content:space-between; font-size:13px; color:#bbb; margin-bottom:4px;">
            <span>Tạm tính tiền hàng:</span>
            <span id="checkout-subtotal">${totals.subtotal.toLocaleString('vi-VN')} VNĐ</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:13px; color:#bbb; margin-bottom:8px;">
            <span>Phí vận chuyển dự kiến:</span>
            <span id="checkout-shipping-fee" style="color:#38ef7d;">${totals.shippingFee.toLocaleString('vi-VN')} VNĐ</span>
        </div>
        
        <div style="display:flex; justify-content:space-between; font-size:16px; color:#ff4d4d; font-weight:bold; border-top:1px dashed #444; padding-top:8px;">
            <span>Tổng thanh toán:</span>
            <span id="checkout-grand-total">${totals.grandTotal.toLocaleString('vi-VN')} VNĐ</span>
        </div>
    `;

    if (currentUser) {
        const custNameInput = document.getElementById("cust-name");
        if (custNameInput) custNameInput.value = currentUser.name;
    }

    document.getElementById("checkout-modal").classList.add("show");
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar) sidebar.classList.remove("open");
}

function closeCheckoutModal() {
    document.getElementById("checkout-modal").classList.remove("show");
}

function submitOrder(event) {
    event.preventDefault();
    if (!cart || cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    
    const name = document.getElementById("cust-name") ? document.getElementById("cust-name").value : "";
    const phone = document.getElementById("cust-phone") ? document.getElementById("cust-phone").value : "";
    const email = document.getElementById("cust-email") ? document.getElementById("cust-email").value : "Không cung cấp";
    const address = document.getElementById("cust-address") ? document.getElementById("cust-address").value : "";
    const city = document.getElementById("cust-city") ? document.getElementById("cust-city").value : "Hà Nội";
    const method = document.getElementById("payment-method") ? document.getElementById("payment-method").value : "Thanh toán khi nhận hàng (COD)";
    const note = document.getElementById("cust-note") ? document.getElementById("cust-note").value : "";

    const shippingFee = calculateShippingFee(city);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalPrice = subtotal + shippingFee;

    const orderCode = "RVP-" + Math.floor(1000 + Math.random() * 9000);
    const orderDate = new Date().toLocaleString('vi-VN');
    const timestamp = Date.now();

    cart.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (prod) {
            prod.stock -= item.quantity;
            if (prod.stock < 0) prod.stock = 0;
        }
    });

    let orderStatus = "Đang xử lý & giao hàng";
    if (method.includes("Chuyển khoản") || method.includes("Ví") || method.includes("VNPay") || method.includes("Thẻ") || method.includes("Apple Pay")) {
        orderStatus = "Đã thanh toán trực tuyến";
    }

    const newOrder = {
        code: orderCode, date: orderDate, timestamp, customerName: name, phone, email,
        address: `${address}, ${city}`, method, note, items: [...cart], shippingFee, totalPrice, status: orderStatus
    };

    currentActiveOrder = newOrder;
    orderHistory.unshift(newOrder);

    closeCheckoutModal();
    cart = [];
    updateCartUI();
    displayProducts(products);

    if (method.includes("Chuyển khoản")) {
        showQRCodeModal(newOrder);
    } else if (method.includes("MoMo")) {
        showEWalletModal(newOrder, "MoMo", "#a50064");
    } else if (method.includes("ZaloPay")) {
        showEWalletModal(newOrder, "ZaloPay", "#008fe5");
    } else if (method.includes("VNPay")) {
        showVNPayQRModal(newOrder);
    } else if (method.includes("Thẻ quốc tế") || method.includes("Apple Pay")) {
        showCardPaymentModal(newOrder);
    } else {
        showThankYouModal(newOrder);
    }
}

function showQRCodeModal(order) {
    const qrModal = document.getElementById("qr-payment-modal");
    const qrContainer = document.getElementById("qr-modal-details");
    const bankCode = "MB", accountNo = "0988888888", accountName = "CUA HANG RUOU VANG PLAZA";
    const qrUrl = `https://img.vietqr.io/image/${bankCode}-${accountNo}-compact2.png?amount=${order.totalPrice}&addInfo=${encodeURIComponent("THANH TOAN " + order.code)}&accountName=${encodeURIComponent(accountName)}`;

    if (qrContainer) {
        qrContainer.innerHTML = `
            <div style="text-align: center; background: #111; padding: 15px; border-radius: 8px; border: 1px solid #ffd700; margin-bottom: 15px;">
                <p style="color: #ffd700; font-weight: bold; font-size: 14px; margin-bottom: 5px;">MÃ ĐƠN HÀNG: #${order.code}</p>
                <p style="color: #fff; font-size: 18px; font-weight: bold; margin-bottom: 10px;">SỐ TIỀN: <span style="color: #ff4d4d;">${order.totalPrice.toLocaleString('vi-VN')} VNĐ</span></p>
                <div style="background: #fff; padding: 10px; border-radius: 8px; display: inline-block; margin-bottom: 10px;">
                    <img src="${qrUrl}" alt="QR Ngân Hàng" style="width: 220px; height: 220px; display: block;">
                </div>
            </div>
            <div style="text-align:center;">
                <button onclick="confirmQRPaid()" style="background:#2e7d32; color:#fff; border:none; padding:10px 25px; border-radius:4px; font-weight:bold; cursor:pointer;">XÁC NHẬN ĐÃ CHUYỂN KHOẢN</button>
            </div>
        `;
    }
    if (qrModal) qrModal.classList.add("show");
}

function showEWalletModal(order, walletName, brandColor) {
    const qrModal = document.getElementById("qr-payment-modal");
    const qrContainer = document.getElementById("qr-modal-details");
    const phoneWallet = "0988888888";
    const qrUrl = `https://api.vietqr.io/image/970422-${phoneWallet}-compact2.png?amount=${order.totalPrice}&addInfo=TT%20${order.code}`;

    if (qrContainer) {
        qrContainer.innerHTML = `
            <div style="text-align: center; background: #111; padding: 15px; border-radius: 8px; border: 1px solid ${brandColor}; margin-bottom: 15px;">
                <p style="color: ${brandColor}; font-weight: bold; font-size: 16px; margin-bottom: 5px;"><i class="fa-solid fa-mobile-screen-button"></i> QUÉT MÃ QUA APP ${walletName.toUpperCase()}</p>
                <p style="color: #ffd700; font-weight: bold; font-size: 13px; margin-bottom: 5px;">MÃ ĐƠN: #${order.code}</p>
                <p style="color: #fff; font-size: 18px; font-weight: bold; margin-bottom: 10px;">SỐ TIỀN: <span style="color: #ff4d4d;">${order.totalPrice.toLocaleString('vi-VN')} VNĐ</span></p>
                <div style="background: #fff; padding: 10px; border-radius: 8px; display: inline-block; margin-bottom: 10px;">
                    <img src="${qrUrl}" alt="QR ${walletName}" style="width: 210px; height: 210px; display: block;">
                </div>
                <p style="color: #aaa; font-size: 12px;">Mở ứng dụng <strong>${walletName}</strong> để quét mã thanh toán.</p>
            </div>
            <div style="text-align:center;">
                <button onclick="confirmQRPaid()" style="background:#2e7d32; color:#fff; border:none; padding:10px 25px; border-radius:4px; font-weight:bold; cursor:pointer;">XÁC NHẬN THANH TOÁN TRÊN APP</button>
            </div>
        `;
    }
    if (qrModal) qrModal.classList.add("show");
}

function showVNPayQRModal(order) {
    const qrModal = document.getElementById("qr-payment-modal");
    const qrContainer = document.getElementById("qr-modal-details");
    const qrUrl = `https://img.vietqr.io/image/ICB-10088888888-compact2.png?amount=${order.totalPrice}&addInfo=VNPAY%20${order.code}`;

    if (qrContainer) {
        qrContainer.innerHTML = `
            <div style="text-align: center; background: #111; padding: 15px; border-radius: 8px; border: 1px solid #0056b3; margin-bottom: 15px;">
                <p style="color: #3399ff; font-weight: bold; font-size: 16px; margin-bottom: 5px;"><i class="fa-solid fa-qrcode"></i> CỔNG VNPAY-QR</p>
                <p style="color: #ffd700; font-weight: bold; font-size: 13px; margin-bottom: 5px;">MÃ ĐƠN: #${order.code}</p>
                <p style="color: #fff; font-size: 18px; font-weight: bold; margin-bottom: 10px;">SỐ TIỀN: <span style="color: #ff4d4d;">${order.totalPrice.toLocaleString('vi-VN')} VNĐ</span></p>
                <div style="background: #fff; padding: 10px; border-radius: 8px; display: inline-block; margin-bottom: 10px;">
                    <img src="${qrUrl}" alt="VNPay QR" style="width: 210px; height: 210px; display: block;">
                </div>
                <p style="color: #aaa; font-size: 12.5px;">Sử dụng App Mobile Banking bất kỳ để quét VNPAY-QR.</p>
            </div>
            <div style="text-align:center;">
                <button onclick="confirmQRPaid()" style="background:#2e7d32; color:#fff; border:none; padding:10px 25px; border-radius:4px; font-weight:bold; cursor:pointer;">XÁC NHẬN ĐÃ THANH TOÁN</button>
            </div>
        `;
    }
    if (qrModal) qrModal.classList.add("show");
}

function showCardPaymentModal(order) {
    const qrModal = document.getElementById("qr-payment-modal");
    const qrContainer = document.getElementById("qr-modal-details");

    if (qrContainer) {
        qrContainer.innerHTML = `
            <div style="background: #181818; padding: 15px; border-radius: 8px; border: 1px solid #e6b800;">
                <h4 style="color: #ffd700; font-size: 15px; margin-bottom: 12px;"><i class="fa-solid fa-credit-card"></i> Thẻ Quốc Tế / Apple Pay</h4>
                <p style="font-size: 13px; color: #ccc; margin-bottom: 10px;">Đơn hàng: <strong style="color:#fff;">#${order.code}</strong> — Tổng: <strong style="color:#ff4d4d;">${order.totalPrice.toLocaleString('vi-VN')} VNĐ</strong></p>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <input type="text" style="padding:10px; background:#222; border:1px solid #444; color:#fff; border-radius:4px;" value="4111 2222 3333 4444" readonly>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                        <input type="text" style="padding:10px; background:#222; border:1px solid #444; color:#fff; border-radius:4px;" value="12/28" readonly>
                        <input type="text" style="padding:10px; background:#222; border:1px solid #444; color:#fff; border-radius:4px;" value="888" readonly>
                    </div>
                    <button onclick="confirmQRPaid()" style="background:#2e7d32; color:#fff; padding:10px; border:none; border-radius:4px; font-weight:bold; cursor:pointer; margin-top:5px;">XÁC THỰC THANH TOÁN</button>
                </div>
            </div>
        `;
    }
    if (qrModal) qrModal.classList.add("show");
}

function closeQRModal() {
    const qrModal = document.getElementById("qr-payment-modal");
    if (qrModal) qrModal.classList.remove("show");
}

function confirmQRPaid() {
    closeQRModal();
    if (currentActiveOrder) showThankYouModal(currentActiveOrder);
    else alert("Xác nhận thanh toán thành công!");
}

function showThankYouModal(order) {
    const itemsListHtml = order.items.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom: 6px; color:#bbb; font-size:13.5px;">
            <span>• ${item.name} <strong>(x${item.quantity})</strong></span>
            <strong style="color:#fff;">${(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</strong>
        </div>
    `).join('');

    const orderDetailsContainer = document.getElementById("thank-you-order-details");
    if (orderDetailsContainer) {
        orderDetailsContainer.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #333; padding-bottom:8px; margin-bottom:12px;">
                <h4 style="color:#ffd700; font-size:15px; margin:0;"><i class="fa-solid fa-file-invoice"></i> MÃ ĐƠN: <span style="color:#38ef7d;">#${order.code}</span></h4>
                <small style="color:#888; font-size:12px;">${order.date}</small>
            </div>
            <div style="margin-bottom: 12px;">${itemsListHtml}</div>
            <hr style="border:0; border-top:1px dashed #444; margin: 12px 0;">
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; color:#ddd; font-size:13.5px;">
                <p><strong>Người nhận:</strong> ${order.customerName}</p>
                <p><strong>SĐT:</strong> ${order.phone}</p>
                <p><strong>Thanh toán:</strong> ${order.method}</p>
                <p><strong>Phí ship:</strong> ${(order.shippingFee || 0).toLocaleString('vi-VN')} đ</p>
                <p style="grid-column: span 2;"><strong>Địa chỉ:</strong> ${order.address}</p>
            </div>
            <hr style="border:0; border-top:1px dashed #444; margin: 12px 0;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:15px; color:#fff; font-weight:bold;">TỔNG THANH TOÁN:</span>
                <span style="font-size:20px; color:#ff4d4d; font-weight:bold;">${order.totalPrice.toLocaleString('vi-VN')} VNĐ</span>
            </div>
        `;
    }
    const thankYouModal = document.getElementById("thank-you-modal");
    if (thankYouModal) thankYouModal.classList.add("show");
}

function closeThankYouModal() {
    document.getElementById("thank-you-modal").classList.remove("show");
}

function closeWelcome() {
    const welcomeModal = document.getElementById("welcome-modal");
    if (welcomeModal) {
        welcomeModal.classList.remove("show");
        welcomeModal.style.display = "none";
    }
}

// ===================
// 9. TRA CỨU ĐƠN HÀNG
// ===================
function openMyOrdersModal() {
    if (!currentUser) {
        alert("Vui lòng đăng nhập tài khoản để tra cứu lịch sử đơn hàng của bạn!");
        openAuthModal('login');
        return;
    }

    let modal = document.getElementById("my-orders-modal");
    
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "my-orders-modal";
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-content" style="max-width:650px; width:90%; background:#1a1a1a; border:1px solid #e6b800; border-radius:8px; padding:25px; color:#fff; max-height:85vh; overflow-y:auto; position:relative;">
                <span onclick="closeMyOrdersModal()" style="position:absolute; top:15px; right:20px; font-size:24px; cursor:pointer; color:#aaa;">&times;</span>
                <h3 style="color:#ffd700; font-size:18px; margin-bottom:15px;"><i class="fa-solid fa-clock-rotate-left"></i> Đơn Hàng Của Tôi</h3>
                <div id="my-orders-list"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    let userOrders = orderHistory;
    if (!currentUser.isAdmin) {
        userOrders = orderHistory.filter(o => o.customerName.toLowerCase() === currentUser.name.toLowerCase() || currentUser.username);
    }

    const listContainer = document.getElementById("my-orders-list");
    if (listContainer) {
        if (orderHistory.length === 0) {
            listContainer.innerHTML = `<div style="text-align:center; padding: 30px; color:#aaa;"><p>Bạn chưa có đơn hàng nào!</p></div>`;
        } else {
            listContainer.innerHTML = orderHistory.map((order) => {
                const isCancelled = order.status === "Đã hủy";
                return `
                    <div style="background:#222; border:1px solid ${isCancelled ? '#444' : '#333'}; border-radius:8px; padding:15px; margin-bottom:12px; opacity: ${isCancelled ? '0.65' : '1'};">
                        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #333; padding-bottom:8px; margin-bottom:10px;">
                            <div>
                                <strong style="color:#ffd700; font-size:14px;"><i class="fa-solid fa-receipt"></i> #${order.code}</strong>
                                <span style="color:#888; font-size:11.5px; margin-left:8px;">${order.date}</span>
                            </div>
                            <span style="background:${isCancelled ? '#444' : '#800020'}; color:${isCancelled ? '#aaa' : '#ffd700'}; font-size:11px; padding:3px 8px; border-radius:10px; font-weight:bold;">
                                ${order.status}
                            </span>
                        </div>
                        <div style="margin-bottom:10px;">
                            ${order.items.map(item => `
                                <div style="display:flex; justify-content:space-between; color:#ccc; font-size:13px; margin-bottom:3px;">
                                    <span>• ${item.name} <strong>(x${item.quantity})</strong></span>
                                    <span style="color:#fff;">${(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</span>
                                </div>
                            `).join('')}
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed #444; padding-top:8px;">
                            <div>
                                ${!isCancelled ? `
                                    <button onclick="openCancelModal('${order.code}')" style="background:#800020; color:#fff; border:1px solid #ff4d4d; padding:5px 10px; border-radius:4px; font-size:11px; font-weight:bold; cursor:pointer;">
                                        <i class="fa-solid fa-ban"></i> HỦY ĐƠN
                                    </button>
                                ` : `
                                    <span style="color:#ff4d4d; font-size:11px; font-style:italic;">Đã hủy: ${order.cancelReason || 'Không có lý do'}</span>
                                `}
                            </div>
                            <div>
                                <span style="color:#ff4d4d; font-size:16px; font-weight:bold; ${isCancelled ? 'text-decoration:line-through; color:#888;' : ''}">${order.totalPrice.toLocaleString('vi-VN')} VNĐ</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    modal.classList.add("show");
}

function closeMyOrdersModal() {
    const modal = document.getElementById("my-orders-modal");
    if (modal) modal.classList.remove("show");
}

function openCancelModal(orderCode) {
    currentCancelCode = orderCode;
    const targetCodeEl = document.getElementById("cancel-target-code");
    if (targetCodeEl) targetCodeEl.innerText = "#" + orderCode;

    const reasonSelect = document.getElementById("cancel-reason-select");
    const customReason = document.getElementById("cancel-reason-custom");
    if (reasonSelect) reasonSelect.value = "";
    if (customReason) customReason.value = "";
    toggleCustomReasonInput();

    document.getElementById("cancel-reason-modal").classList.add("show");
}

function closeCancelModal() {
    const cancelModal = document.getElementById("cancel-reason-modal");
    if (cancelModal) cancelModal.classList.remove("show");
    currentCancelCode = null;
}

function toggleCustomReasonInput() {
    const reasonSelect = document.getElementById("cancel-reason-select");
    const customGroup = document.getElementById("custom-reason-group");
    if (reasonSelect && customGroup) {
        if (reasonSelect.value === "Lý do khác") {
            customGroup.style.display = "block";
            document.getElementById("cancel-reason-custom").required = true;
        } else {
            customGroup.style.display = "none";
            document.getElementById("cancel-reason-custom").required = false;
        }
    }
}

function showCancelSuccessModal(order, reason) {
    const cancelSuccessModal = document.getElementById("cancel-success-modal");
    const cancelDetailsContainer = document.getElementById("cancel-success-details");

    if (cancelDetailsContainer) {
        cancelDetailsContainer.innerHTML = `
            <div style="background: rgba(255, 77, 77, 0.1); border: 1px solid #ff4d4d; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
                <h4 style="color: #ff4d4d; margin-bottom: 8px; font-size: 16px;"><i class="fa-solid fa-circle-check"></i> ĐƠN HÀNG #${order.code} ĐÃ ĐƯỢC HỦY THÀNH CÔNG</h4>
                <p style="color: #ddd; font-size: 13.5px; margin-bottom: 6px;"><strong>Lý do hủy:</strong> <span style="color: #ffd700;">${reason}</span></p>
                <p style="color: #bbb; font-size: 12.5px; margin: 0;">Thời gian hủy: ${new Date().toLocaleString('vi-VN')}</p>
            </div>
            <h5 style="color:#e6b800; font-size:14px; margin-bottom:10px;"><i class="fa-solid fa-boxes-stacked"></i> Sản phẩm đã được hoàn lại tồn kho:</h5>
            <div style="margin-bottom: 15px;">
                ${order.items.map(item => `
                    <div style="display:flex; justify-content:space-between; color:#ccc; font-size:13px; margin-bottom:4px; border-bottom:1px dashed #333; padding-bottom:4px;">
                        <span>• ${item.name} <strong>(x${item.quantity})</strong></span>
                        <span style="color:#888; text-decoration:line-through;">${(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                `).join('')}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; background:#111; padding:12px; border-radius:6px; font-size:14px; color:#fff; font-weight:bold;">
                <span>Tổng giá trị đơn đã hủy:</span>
                <span style="color:#ff4d4d; text-decoration:line-through; font-size:17px;">${order.totalPrice.toLocaleString('vi-VN')} VNĐ</span>
            </div>
            <p style="color:#aaa; font-size:12px; text-align:center; margin-top:15px; font-style:italic;">Cảm ơn bạn đã phản hồi. Chúng tôi rất tiếc vì trải nghiệm chưa trọn vẹn!</p>
        `;
    }
    if (cancelSuccessModal) cancelSuccessModal.classList.add("show");
}

function closeCancelSuccessModal() {
    const cancelSuccessModal = document.getElementById("cancel-success-modal");
    if (cancelSuccessModal) cancelSuccessModal.classList.remove("show");
}

function confirmCancelOrder(event) {
    event.preventDefault();
    if (!currentCancelCode) return;

    const order = orderHistory.find(o => o.code === currentCancelCode);
    if (!order) return;

    const reasonSelect = document.getElementById("cancel-reason-select").value;
    const customReason = document.getElementById("cancel-reason-custom").value;
    const finalReason = reasonSelect === "Lý do khác" ? customReason : reasonSelect;

    order.items.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (prod) prod.stock += item.quantity;
    });

    order.status = "Đã hủy";
    order.cancelReason = finalReason;

    closeCancelModal();
    displayProducts(products);
    openMyOrdersModal();
    showCancelSuccessModal(order, finalReason);
}

// ===============================
// 10. SỰ KIỆN KHỞI TẠO & AGE GATE
// ===============================
window.onclick = function(event) {
    const modals = [
        "product-modal", "checkout-modal", "auth-modal", "admin-modal", "revenue-modal",
        "thank-you-modal", "welcome-modal", "my-orders-modal", "cancel-reason-modal",
        "cancel-success-modal", "qr-payment-modal"
    ];
    modals.forEach(id => {
        const m = document.getElementById(id);
        if (event.target === m) m.classList.remove("show");
    });
}

function checkAgeVerification() {
    const isVerified = sessionStorage.getItem("ageVerified");
    const ageModal = document.getElementById("age-gate-modal");
    const welcomeModal = document.getElementById("welcome-modal");

    if (!isVerified) {
        if (ageModal) ageModal.classList.add("show");
    } else {
        if (!sessionStorage.getItem("welcomeShown")) {
            if (welcomeModal) welcomeModal.classList.add("show");
            sessionStorage.setItem("welcomeShown", "true");
        }
    }
}

function confirmAge(isAdult) {
    if (isAdult) {
        sessionStorage.setItem("ageVerified", "true");
        const ageModal = document.getElementById("age-gate-modal");
        if (ageModal) ageModal.classList.remove("show");
        
        if (!sessionStorage.getItem("welcomeShown")) {
            const welcomeModal = document.getElementById("welcome-modal");
            if (welcomeModal) welcomeModal.classList.add("show");
            sessionStorage.setItem("welcomeShown", "true");
        }
    } else {
        alert("Rất tiếc! Bạn phải đủ 18 tuổi mới được phép truy cập trang web này.");
        window.location.href = "https://www.google.com"; 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
    updateCartUI();
    updateUserUI();
    checkAgeVerification();  
});

// ===============================
// 11. ĐÁNH GIÁ CHẤT LƯỢNG PHỤC VỤ
// ===============================
let serviceReviewsData = [
    { name: "Phạm Minh Quân", rating: 5, date: "15/09/2026", comment: "Shop tư vấn rượu vang rất có tâm, chọn đúng chai vang tặng đối tác làm ăn ai cũng khen sang trọng." },
    { name: "Nguyễn Thu Hà", rating: 5, date: "12/09/2026", comment: "Giao hàng siêu tốc nội thành Hà Nội chưa đầy 2 tiếng. Đóng gói hộp quà lịch sự, chống sốc tốt." },
    { name: "Đỗ Hoàng Long", rating: 4, date: "10/09/2026", comment: "Dịch vụ khách hàng chu đáo, hỗ trợ xuất hóa đơn VAT nhanh chóng." }
];

function renderServiceReviews() {
    const listContainer = document.getElementById("service-reviews-list");
    if (!listContainer) return;

    listContainer.innerHTML = serviceReviewsData.map(rev => `
        <div style="background: #222; border: 1px solid #333; border-radius: 6px; padding: 12px; font-size: 13px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <strong style="color: #fff;"><i class="fa-solid fa-circle-user" style="color:#ffd700;"></i> ${rev.name}</strong>
                <span style="color: #888; font-size: 11px;">${rev.date}</span>
            </div>
            <div style="color: #ffd700; font-size: 11px; margin-bottom: 6px;">
                ${'<i class="fa-solid fa-star"></i>'.repeat(rev.rating)}
            </div>
            <p style="color: #ccc; margin: 0; line-height: 1.4;">${rev.comment}</p>
        </div>
    `).join('');
}

function submitServiceReview(e) {
    e.preventDefault();

    const name = document.getElementById("srv-name").value.trim();
    const rating = parseInt(document.getElementById("srv-rating").value);
    const comment = document.getElementById("srv-comment").value.trim();
    const date = new Date().toLocaleDateString('vi-VN');

    if (!name || !comment) {
        alert("Vui lòng điền đầy đủ thông tin đánh giá!");
        return;
    }

    serviceReviewsData.unshift({ name, rating, comment, date });

    document.getElementById("service-review-form").reset();

    renderServiceReviews();

    alert("Cảm ơn bạn đã gửi đánh giá chất lượng phục vụ cho Rượu Vang Plaza!");
}

document.addEventListener("DOMContentLoaded", () => {
    renderServiceReviews();
});

// ===================
// 12. THÀNH VIÊN NHÓM
// ===================
function openTeamModal() {
    const modal = document.getElementById("team-modal");
    if (modal) modal.style.display = "flex";
}

function closeTeamModal() {
    const modal = document.getElementById("team-modal");
    if (modal) modal.style.display = "none";
}

function validateAndSubmitFeedback(e) {
    e.preventDefault();
    const name = document.getElementById("fb-name").value.trim();
    const email = document.getElementById("fb-email").value.trim();
    const phone = document.getElementById("fb-phone").value.trim();
    const message = document.getElementById("fb-message").value.trim();

    let isValid = true;
    const errName = document.getElementById("error-fb-name");
    if (!name) { 
        errName.innerText = "Họ và tên không được để trống!"; 
        errName.style.display = "block"; 
        isValid = false; 
    } else { 
        errName.style.display = "none"; 
    }

    const errEmail = document.getElementById("error-fb-email");
    if (!email || !email.includes("@")) { 
        errEmail.innerText = "Định dạng email không hợp lệ!"; 
        errEmail.style.display = "block"; 
        isValid = false; 
    } else { 
        errEmail.style.display = "none"; 
    }

    const errPhone = document.getElementById("error-fb-phone");
    if (!phone || phone.length < 10) { 
        errPhone.innerText = "Số điện thoại phải từ 10 chữ số trở lên!"; 
        errPhone.style.display = "block"; 
        isValid = false; 
    } else { 
        errPhone.style.display = "none"; 
    }

    const errMessage = document.getElementById("error-fb-message");
    if (!message) { 
        errMessage.innerText = "Nội dung góp ý không được để trống!"; 
        errMessage.style.display = "block"; 
        isValid = false; 
    } else { 
        errMessage.style.display = "none"; 
    }

    if (isValid) {
        alert("Cảm ơn bạn! Thông tin góp ý đã được gửi thành công đến quản trị viên.");
        document.getElementById("contact-feedback-form").reset();
    }
}