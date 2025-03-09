let cart = []; // Кошик для зберігання товарів
let favorites = []; // Вподобані товари
let breadcrumbs = [{ name: "Головна", page: "home" }]; // Хлібні крихти для навігації
let cartIcon = document.getElementById("cart-count"); // Іконка кошика

// Дані про товари
const products = {
    "Каталог": {
        "Зібрані ПК": {
            image: "https://via.placeholder.com/100", // Додаємо фото для категорії
            items: [
                {
                    name: "ПК Intel i7",
                    price: 27000,
                    year: 2023,
                    version: "Pro",
                    ram: "16GB",
                    storage: "512GB SSD",
                    processor: "Intel Core i7-13700K",
                    gpu: "NVIDIA RTX 4060",
                    description: "Потужний ПК для геймінгу та роботи.",
                    image: "https://via.placeholder.com/200"
                },
                {
                    name: "ПК AMD Ryzen 5",
                    price: 24000,
                    year: 2022,
                    version: "Standard",
                    ram: "8GB",
                    storage: "256GB SSD",
                    processor: "AMD Ryzen 5 7600X",
                    gpu: "AMD RX 6700",
                    description: "Ідеальний ПК для повсякденних задач.",
                    image: "https://via.placeholder.com/200"
                },
                {
                    name: "ПК Intel i9",
                    price: 32000,
                    year: 2023,
                    version: "Pro",
                    ram: "32GB",
                    storage: "1TB SSD",
                    processor: "Intel Core i9-13900K",
                    gpu: "NVIDIA RTX 4090",
                    description: "Найпотужніший ПК для професіоналів.",
                    image: "https://via.placeholder.com/200"
                },
                {
                    name: "ПК AMD Ryzen 9",
                    price: 35000,
                    year: 2021,
                    version: "Lite",
                    ram: "16GB",
                    storage: "512GB SSD",
                    processor: "AMD Ryzen 9 7950X",
                    gpu: "NVIDIA GTX 1660",
                    description: "ПК для творчих задач та геймінгу.",
                    image: "https://via.placeholder.com/200"
                }
            ]
        },
        "Ноутбуки": {
            image: "https://via.placeholder.com/100", // Додаємо фото для категорії
            items: [
                {
                    name: "Lenovo ThinkPad X1",
                    price: 43000,
                    year: 2023,
                    version: "Pro",
                    screenSize: '14"',
                    weight: "1.2kg",
                    processor: "Intel Core i7-13700K",
                    ram: "16GB",
                    storage: "512GB SSD",
                    description: "Легкий та потужний ноутбук для бізнесу.",
                    image: "https://via.placeholder.com/200"
                },
                {
                    name: "Asus ZenBook",
                    price: 38000,
                    year: 2022,
                    version: "Standard",
                    screenSize: '13.3"',
                    weight: "1.1kg",
                    processor: "AMD Ryzen 5 7600X",
                    ram: "8GB",
                    storage: "256GB SSD",
                    description: "Стильний ноутбук для повсякденного використання.",
                    image: "https://via.placeholder.com/200"
                },
                {
                    name: "HP Spectre x360",
                    price: 46000,
                    year: 2021,
                    version: "Lite",
                    screenSize: '15.6"',
                    weight: "1.8kg",
                    processor: "Intel Core i7-13700K",
                    ram: "16GB",
                    storage: "512GB SSD",
                    description: "Універсальний ноутбук з сенсорним екраном.",
                    image: "https://via.placeholder.com/200"
                },
                {
                    name: "MacBook Pro 14",
                    price: 65000,
                    year: 2023,
                    version: "Pro",
                    screenSize: '14"',
                    weight: "1.6kg",
                    processor: "Apple M2 Pro",
                    ram: "16GB",
                    storage: "1TB SSD",
                    description: "Потужний ноутбук для професіоналів.",
                    image: "https://via.placeholder.com/200"
                }
            ]
        },
        "Комплектуючі": {
            image: "https://via.placeholder.com/100", // Додаємо фото для категорії
            items: {
                "Відеокарти": [
                    {
                        name: "NVIDIA RTX 4060",
                        price: 18000,
                        year: 2023,
                        memory: "8GB",
                        interface: "PCIe 4.0",
                        description: "Відеокарта для геймінгу та рендерингу.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "AMD RX 6700",
                        price: 16000,
                        year: 2022,
                        memory: "12GB",
                        interface: "PCIe 4.0",
                        description: "Відеокарта для високопродуктивних задач.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "NVIDIA RTX 4090",
                        price: 75000,
                        year: 2023,
                        memory: "24GB",
                        interface: "PCIe 5.0",
                        description: "Найпотужніша відеокарта для геймінгу.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "NVIDIA GTX 1660",
                        price: 12000,
                        year: 2020,
                        memory: "6GB",
                        interface: "PCIe 3.0",
                        description: "Відеокарта для бюджетного геймінгу.",
                        image: "https://via.placeholder.com/200"
                    }
                ],
                "Процесори": [
                    {
                        name: "Intel i9-13900K",
                        price: 15000,
                        year: 2023,
                        cores: 24,
                        socket: "LGA1700",
                        description: "Потужний процесор для геймінгу та роботи.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "AMD Ryzen 5 7600X",
                        price: 13000,
                        year: 2022,
                        cores: 6,
                        socket: "AM5",
                        description: "Процесор для повсякденних задач.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "Intel i7-13700K",
                        price: 14000,
                        year: 2021,
                        cores: 16,
                        socket: "LGA1700",
                        description: "Процесор для продуктивної роботи.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "AMD Ryzen 9 7950X",
                        price: 60000,
                        year: 2023,
                        cores: 16,
                        socket: "AM5",
                        description: "Найпотужніший процесор для професіоналів.",
                        image: "https://via.placeholder.com/200"
                    }
                ],
                "Материнські плати": [
                    {
                        name: "ASUS ROG STRIX B550-F",
                        price: 7000,
                        year: 2023,
                        socket: "AM4",
                        formFactor: "ATX",
                        description: "Материнська плата для геймерів.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "MSI MAG Z690",
                        price: 12000,
                        year: 2022,
                        socket: "LGA1700",
                        formFactor: "ATX",
                        description: "Материнська плата для потужних ПК.",
                        image: "https://via.placeholder.com/200"
                    }
                ],
                "Оперативна пам'ять": [
                    {
                        name: "Corsair Vengeance 16GB",
                        price: 4000,
                        year: 2023,
                        speed: "3200MHz",
                        type: "DDR4",
                        description: "Оперативна пам'ять для швидкої роботи.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "G.Skill Trident Z 32GB",
                        price: 8000,
                        year: 2022,
                        speed: "3600MHz",
                        type: "DDR4",
                        description: "Оперативна пам'ять для геймінгу.",
                        image: "https://via.placeholder.com/200"
                    }
                ],
                "SSD": [
                    {
                        name: "Samsung 980 Pro 1TB",
                        price: 5000,
                        year: 2023,
                        type: "NVMe",
                        capacity: "1TB",
                        description: "Швидкий SSD для швидкого завантаження.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "WD Black SN850 2TB",
                        price: 9000,
                        year: 2022,
                        type: "NVMe",
                        capacity: "2TB",
                        description: "SSD для великих обсягів даних.",
                        image: "https://via.placeholder.com/200"
                    }
                ],
                "Блоки живлення": [
                    {
                        name: "Corsair RM850x",
                        price: 6000,
                        year: 2023,
                        wattage: "850W",
                        certification: "80+ Gold",
                        description: "Надійний блок живлення для ПК.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "Seasonic Focus GX-750",
                        price: 5500,
                        year: 2022,
                        wattage: "750W",
                        certification: "80+ Gold",
                        description: "Енергоефективний блок живлення.",
                        image: "https://via.placeholder.com/200"
                    }
                ],
                "Корпуси": [
                    {
                        name: "NZXT H510",
                        price: 4000,
                        year: 2023,
                        size: "Mid Tower",
                        color: "Black",
                        description: "Стильний корпус для ПК.",
                        image: "https://via.placeholder.com/200"
                    },
                    {
                        name: "Fractal Design Meshify C",
                        price: 4500,
                        year: 2022,
                        size: "Mid Tower",
                        color: "White",
                        description: "Корпус з хорошою вентиляцією.",
                        image: "https://via.placeholder.com/200"
                    }
                ]
            }
        }
    }
};

// Ініціалізація сторінки
document.addEventListener("DOMContentLoaded", () => {
    updateBreadcrumbs();
    navigate("home");
});

// ------------------------- НАВІГАЦІЯ -------------------------
function navigate(page) {
    const content = document.getElementById("content");
    const filter = document.getElementById("filter");

    // Додаємо клас для приховування контенту перед зміною
    content.classList.add('hidden');

    // Затримка для завершення анімації перед зміною контенту
    setTimeout(() => {
        if (page === "home") {
            breadcrumbs = [{ name: "Головна", page: "home" }];
            content.innerHTML = `
                <h2>Вітаємо у нашому магазині!</h2>
                <p>Оберіть категорію або товар для перегляду.</p>
                <div class="button-group">
                    <button class="home-button" onclick="navigate('catalog')">Перейти до каталогу</button>
                    <button class="home-button" onclick="navigate('about')">Про нас</button>
                    <button class="home-button" onclick="navigate('contacts')">Контакти</button>
                </div>
            `;
            filter.style.display = "none";
        } else if (page === "about") {
            breadcrumbs = [{ name: "Головна", page: "home" }, { name: "Про нас", page: "about" }];
            content.innerHTML = `<h2>Про нас</h2><p>Наш магазин продає найкращу комп'ютерну техніку.</p>`;
            filter.style.display = "none";
        } else if (page === "contacts") {
            breadcrumbs = [{ name: "Головна", page: "home" }, { name: "Контакти", page: "contacts" }];
            content.innerHTML = `<h2>Контакти</h2><p>Email: shop@example.com<br>Телефон: +380123456789</p>`;
            filter.style.display = "none";
        } else if (page === "catalog") {
            breadcrumbs = [{ name: "Головна", page: "home" }, { name: "Каталог", page: "catalog" }];
            renderCatalog();
        } else if (products["Каталог"][page]) {
            renderCategory(page);
        } else {
            navigate("home");
        }

        // Видаляємо клас для відображення нового контенту
        setTimeout(() => {
            content.classList.remove('hidden');
        }, 300); // Затримка повинна відповідати тривалості анімації
    }, 300); // Затримка перед оновленням контенту
}
function renderCatalog() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Очистити попередній контент

    let contentHTML = "<h2>Каталог</h2>";
    for (let category in products["Каталог"]) {
        const categoryData = products["Каталог"][category];
        contentHTML += `
            <div class="category-item">
                <img src="${categoryData.image}" alt="${category}" style="width: 100px; height: 100px;">
                <button onclick="renderCategory('${category}')">${category}</button>
            </div>
        `;
    }
    content.innerHTML = contentHTML;
    document.getElementById("filter").style.display = "none";

    // Додати анімацію
    content.classList.add('catalog-animation');
}

function renderCategory(category) {
    const content = document.getElementById("content");
    content.classList.add('hidden');

    setTimeout(() => {
        breadcrumbs = breadcrumbs.slice(0, 2);
        breadcrumbs.push({ name: category, page: category });

        let contentHTML = `<h2>${category}</h2>`;
        let items = products["Каталог"][category].items;

        if (Array.isArray(items)) {
            contentHTML += `<div class="product-grid">`;
            contentHTML += items.map((product, index) => `
                <div class="product-item">
                    <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px;">
                    <button onclick="openProduct('${category}', '', ${index})">
                        ${product.name} - ${product.price} грн
                    </button>
                </div>
            `).join('');
            contentHTML += `</div>`;
        } else if (typeof items === "object") {
            contentHTML += Object.keys(items).map(subCategory => `
                <div class="subcategory-item">
                    <img src="${products["Каталог"][category].image}" alt="${subCategory}" style="width: 100px; height: 100px;">
                    <button onclick="renderSubCategory('${category}', '${subCategory.replace(/'/g, "\\'")}')">
                        ${subCategory}
                    </button>
                </div>
            `).join('');
        } else {
            contentHTML = `<p>Категорія не знайдена</p>`;
        }

        content.innerHTML = contentHTML;
        updateBreadcrumbs();
        updateFilters(category);

        // Видаляємо клас для відображення нового контенту
        setTimeout(() => {
            content.classList.remove('hidden');
        }, 300); // Невелика затримка для коректного відображення
    }, 300);
}

function renderSubCategory(category, subCategory) {
    const content = document.getElementById("content");
    content.classList.add('hidden');

    setTimeout(() => {
        breadcrumbs = breadcrumbs.slice(0, 3);
        breadcrumbs.push({ name: subCategory, page: subCategory });

        let contentHTML = `<h2>${subCategory}</h2>`;
        let items = products["Каталог"][category].items[subCategory];

        if (Array.isArray(items)) {
            contentHTML += `<div class="product-grid">`;
            contentHTML += items.map((product, index) => `
                <div class="product-item">
                    <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px;">
                    <button onclick="openProduct('${category}', '${subCategory.replace(/'/g, "\\'")}', ${index})">
                        ${product.name} - ${product.price} грн
                    </button>
                </div>
            `).join('');
            contentHTML += `</div>`;
        } else {
            contentHTML = `<p>Товари не знайдено</p>`;
        }

        content.innerHTML = contentHTML;
        updateBreadcrumbs();
        updateFilters(category, subCategory);

        // Видаляємо клас для відображення нового контенту
        setTimeout(() => {
            content.classList.remove('hidden');
        }, 300); // Невелика затримка для коректного відображення
    }, 300);
}

// Оновлення фільтрів
function updateFilters(category, subCategory = '') {
    const filterContent = document.getElementById("filter-content");
    filterContent.innerHTML = ""; // Очистити попередні фільтри

    if (category === "Зібрані ПК") {
        filterContent.innerHTML = `
            <div class="filter-section">
                <h3>Ціна</h3>
                <label><input type="checkbox" name="price" value="0-20000"> До 20 000 грн</label>
                <label><input type="checkbox" name="price" value="20000-40000"> 20 000 - 40 000 грн</label>
                <label><input type="checkbox" name="price" value="40000+"> Від 40 000 грн</label>
            </div>
            <div class="filter-section">
                <h3>Рік випуску</h3>
                <label><input type="checkbox" name="year" value="2023"> 2023</label>
                <label><input type="checkbox" name="year" value="2022"> 2022</label>
                <label><input type="checkbox" name="year" value="2021"> 2021</label>
            </div>
            <div class="filter-section">
                <h3>Версія</h3>
                <label><input type="checkbox" name="version" value="Pro"> Pro</label>
                <label><input type="checkbox" name="version" value="Standard"> Standard</label>
                <label><input type="checkbox" name="version" value="Lite"> Lite</label>
            </div>
            <div class="filter-section">
                <h3>Оперативна пам'ять</h3>
                <label><input type="checkbox" name="ram" value="8GB"> 8GB</label>
                <label><input type="checkbox" name="ram" value="16GB"> 16GB</label>
                <label><input type="checkbox" name="ram" value="32GB"> 32GB</label>
            </div>
            <div class="filter-section">
                <h3>Накопичувач</h3>
                <label><input type="checkbox" name="storage" value="256GB SSD"> 256GB SSD</label>
                <label><input type="checkbox" name="storage" value="512GB SSD"> 512GB SSD</label>
                <label><input type="checkbox" name="storage" value="1TB SSD"> 1TB SSD</label>
            </div>
        `;
        document.getElementById("filter").style.display = "block";

        // Додаємо обробники подій для чекбоксів
        const checkboxes = document.querySelectorAll('#filter-content input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterAssembledPCs);
        });
    } else if (category === "Ноутбуки") {
        filterContent.innerHTML = `
            <div class="filter-section">
                <h3>Ціна</h3>
                <label><input type="checkbox" name="price" value="0-30000"> До 30 000 грн</label>
                <label><input type="checkbox" name="price" value="30000-50000"> 30 000 - 50 000 грн</label>
                <label><input type="checkbox" name="price" value="50000+"> Від 50 000 грн</label>
            </div>
            <div class="filter-section">
                <h3>Рік випуску</h3>
                <label><input type="checkbox" name="year" value="2023"> 2023</label>
                <label><input type="checkbox" name="year" value="2022"> 2022</label>
                <label><input type="checkbox" name="year" value="2021"> 2021</label>
            </div>
            <div class="filter-section">
                <h3>Версія</h3>
                <label><input type="checkbox" name="version" value="Pro"> Pro</label>
                <label><input type="checkbox" name="version" value="Standard"> Standard</label>
                <label><input type="checkbox" name="version" value="Lite"> Lite</label>
            </div>
            <div class="filter-section">
                <h3>Діагональ екрану</h3>
                <label><input type="checkbox" name="screenSize" value="13.3\""> 13.3"</label>
                <label><input type="checkbox" name="screenSize" value="14\""> 14"</label>
                <label><input type="checkbox" name="screenSize" value="15.6\""> 15.6"</label>
            </div>
            <div class="filter-section">
                <h3>Вага</h3>
                <label><input type="checkbox" name="weight" value="1.1kg"> 1.1 кг</label>
                <label><input type="checkbox" name="weight" value="1.2kg"> 1.2 кг</label>
                <label><input type="checkbox" name="weight" value="1.6kg"> 1.6 кг</label>
                <label><input type="checkbox" name="weight" value="1.8kg"> 1.8 кг</label>
            </div>
        `;
        document.getElementById("filter").style.display = "block";

        // Додаємо обробники подій для чекбоксів
        const checkboxes = document.querySelectorAll('#filter-content input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterLaptops);
        });
    } else if (category === "Комплектуючі" && subCategory) {
        switch (subCategory) {
            case "Відеокарти":
                filterContent.innerHTML = `
                    <div class="filter-section">
                        <h3>Ціна</h3>
                        <label><input type="checkbox" name="price" value="0-10000"> До 10 000 грн</label>
                        <label><input type="checkbox" name="price" value="10000-20000"> 10 000 - 20 000 грн</label>
                        <label><input type="checkbox" name="price" value="20000-50000"> 20 000 - 50 000 грн</label>
                        <label><input type="checkbox" name="price" value="50000+"> Від 50 000 грн</label>
                    </div>
                    <div class="filter-section">
                        <h3>Рік випуску</h3>
                        <label><input type="checkbox" name="year" value="2023"> 2023</label>
                        <label><input type="checkbox" name="year" value="2022"> 2022</label>
                        <label><input type="checkbox" name="year" value="2021"> 2021</label>
                        <label><input type="checkbox" name="year" value="2020"> 2020</label>
                    </div>
                    <div class="filter-section">
                        <h3>Обсяг пам'яті</h3>
                        <label><input type="checkbox" name="memory" value="6GB"> 6GB</label>
                        <label><input type="checkbox" name="memory" value="8GB"> 8GB</label>
                        <label><input type="checkbox" name="memory" value="12GB"> 12GB</label>
                        <label><input type="checkbox" name="memory" value="24GB"> 24GB</label>
                    </div>
                    <div class="filter-section">
                        <h3>Інтерфейс</h3>
                        <label><input type="checkbox" name="interface" value="PCIe 3.0"> PCIe 3.0</label>
                        <label><input type="checkbox" name="interface" value="PCIe 4.0"> PCIe 4.0</label>
                        <label><input type="checkbox" name="interface" value="PCIe 5.0"> PCIe 5.0</label>
                    </div>
                `;
                break;
            case "Процесори":
                filterContent.innerHTML = `
                    <div class="filter-section">
                        <h3>Ціна</h3>
                        <label><input type="checkbox" name="price" value="0-10000"> До 10 000 грн</label>
                        <label><input type="checkbox" name="price" value="10000-20000"> 10 000 - 20 000 грн</label>
                        <label><input type="checkbox" name="price" value="20000-50000"> 20 000 - 50 000 грн</label>
                        <label><input type="checkbox" name="price" value="50000+"> Від 50 000 грн</label>
                    </div>
                    <div class="filter-section">
                        <h3>Кількість ядер</h3>
                        <label><input type="checkbox" name="cores" value="6"> 6 ядер</label>
                        <label><input type="checkbox" name="cores" value="16"> 16 ядер</label>
                        <label><input type="checkbox" name="cores" value="24"> 24 ядра</label>
                    </div>
                    <div class="filter-section">
                        <h3>Сокет</h3>
                        <label><input type="checkbox" name="socket" value="AM4"> AM4</label>
                        <label><input type="checkbox" name="socket" value="AM5"> AM5</label>
                        <label><input type="checkbox" name="socket" value="LGA1700"> LGA1700</label>
                    </div>
                `;
                break;
            case "Материнські плати":
                filterContent.innerHTML = `
                    <div class="filter-section">
                        <h3>Ціна</h3>
                        <label><input type="checkbox" name="price" value="0-5000"> До 5 000 грн</label>
                        <label><input type="checkbox" name="price" value="5000-10000"> 5 000 - 10 000 грн</label>
                        <label><input type="checkbox" name="price" value="10000+"> Від 10 000 грн</label>
                    </div>
                    <div class="filter-section">
                        <h3>Сокет</h3>
                        <label><input type="checkbox" name="socket" value="AM4"> AM4</label>
                        <label><input type="checkbox" name="socket" value="LGA1700"> LGA1700</label>
                    </div>
                    <div class="filter-section">
                        <h3>Форм-фактор</h3>
                        <label><input type="checkbox" name="formFactor" value="ATX"> ATX</label>
                        <label><input type="checkbox" name="formFactor" value="Micro-ATX"> Micro-ATX</label>
                    </div>
                `;
                break;
            case "Оперативна пам'ять":
                filterContent.innerHTML = `
                    <div class="filter-section">
                        <h3>Ціна</h3>
                        <label><input type="checkbox" name="price" value="0-5000"> До 5 000 грн</label>
                        <label><input type="checkbox" name="price" value="5000-10000"> 5 000 - 10 000 грн</label>
                        <label><input type="checkbox" name="price" value="10000+"> Від 10 000 грн</label>
                    </div>
                    <div class="filter-section">
                        <h3>Частота</h3>
                        <label><input type="checkbox" name="speed" value="3200MHz"> 3200 MHz</label>
                        <label><input type="checkbox" name="speed" value="3600MHz"> 3600 MHz</label>
                    </div>
                    <div class="filter-section">
                        <h3>Тип</h3>
                        <label><input type="checkbox" name="type" value="DDR4"> DDR4</label>
                        <label><input type="checkbox" name="type" value="DDR5"> DDR5</label>
                    </div>
                `;
                break;
            case "SSD":
                filterContent.innerHTML = `
                    <div class="filter-section">
                        <h3>Ціна</h3>
                        <label><input type="checkbox" name="price" value="0-5000"> До 5 000 грн</label>
                        <label><input type="checkbox" name="price" value="5000-10000"> 5 000 - 10 000 грн</label>
                        <label><input type="checkbox" name="price" value="10000+"> Від 10 000 грн</label>
                    </div>
                    <div class="filter-section">
                        <h3>Тип</h3>
                        <label><input type="checkbox" name="type" value="NVMe"> NVMe</label>
                        <label><input type="checkbox" name="type" value="SATA"> SATA</label>
                    </div>
                    <div class="filter-section">
                        <h3>Обсяг</h3>
                        <label><input type="checkbox" name="capacity" value="256GB"> 256GB</label>
                        <label><input type="checkbox" name="capacity" value="512GB"> 512GB</label>
                        <label><input type="checkbox" name="capacity" value="1TB"> 1TB</label>
                        <label><input type="checkbox" name="capacity" value="2TB"> 2TB</label>
                    </div>
                `;
                break;
            case "Блоки живлення":
                filterContent.innerHTML = `
                    <div class="filter-section">
                        <h3>Ціна</h3>
                        <label><input type="checkbox" name="price" value="0-5000"> До 5 000 грн</label>
                        <label><input type="checkbox" name="price" value="5000-10000"> 5 000 - 10 000 грн</label>
                        <label><input type="checkbox" name="price" value="10000+"> Від 10 000 грн</label>
                    </div>
                    <div class="filter-section">
                        <h3>Потужність</h3>
                        <label><input type="checkbox" name="wattage" value="750W"> 750W</label>
                        <label><input type="checkbox" name="wattage" value="850W"> 850W</label>
                    </div>
                    <div class="filter-section">
                        <h3>Сертифікація</h3>
                        <label><input type="checkbox" name="certification" value="80+ Gold"> 80+ Gold</label>
                        <label><input type="checkbox" name="certification" value="80+ Platinum"> 80+ Platinum</label>
                    </div>
                `;
                break;
            case "Корпуси":
                filterContent.innerHTML = `
                    <div class="filter-section">
                        <h3>Ціна</h3>
                        <label><input type="checkbox" name="price" value="0-5000"> До 5 000 грн</label>
                        <label><input type="checkbox" name="price" value="5000-10000"> 5 000 - 10 000 грн</label>
                        <label><input type="checkbox" name="price" value="10000+"> Від 10 000 грн</label>
                    </div>
                    <div class="filter-section">
                        <h3>Розмір</h3>
                        <label><input type="checkbox" name="size" value="Mid Tower"> Mid Tower</label>
                        <label><input type="checkbox" name="size" value="Full Tower"> Full Tower</label>
                    </div>
                    <div class="filter-section">
                        <h3>Колір</h3>
                        <label><input type="checkbox" name="color" value="Black"> Чорний</label>
                        <label><input type="checkbox" name="color" value="White"> Білий</label>
                    </div>
                `;
                break;
        }
        document.getElementById("filter").style.display = "block";

        // Додаємо обробники подій для чекбоксів
        const checkboxes = document.querySelectorAll('#filter-content input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => filterComponents(subCategory));
        });
    } else {
        document.getElementById("filter").style.display = "none";
    }
}

// Функція для фільтрації товарів у категорії "Зібрані ПК"
function filterAssembledPCs() {
    const filters = {
        price: Array.from(document.querySelectorAll('input[name="price"]:checked')).map(input => input.value),
        year: Array.from(document.querySelectorAll('input[name="year"]:checked')).map(input => input.value),
        version: Array.from(document.querySelectorAll('input[name="version"]:checked')).map(input => input.value),
        ram: Array.from(document.querySelectorAll('input[name="ram"]:checked')).map(input => input.value),
        storage: Array.from(document.querySelectorAll('input[name="storage"]:checked')).map(input => input.value)
    };

    const productsToFilter = products["Каталог"]["Зібрані ПК"].items;
    const filteredProducts = productsToFilter.filter(product => {
        const matchesPrice = filters.price.length === 0 || filters.price.some(filter => {
            if (filter === "50000+") return product.price >= 50000;
            let [min, max] = filter.split("-");
            return product.price >= parseInt(min) && product.price <= parseInt(max);
        });
        const matchesYear = filters.year.length === 0 || filters.year.includes(product.year?.toString());
        const matchesVersion = filters.version.length === 0 || filters.version.includes(product.version);
        const matchesRam = filters.ram.length === 0 || filters.ram.includes(product.ram);
        const matchesStorage = filters.storage.length === 0 || filters.storage.includes(product.storage);

        return matchesPrice && matchesYear && matchesVersion && matchesRam && matchesStorage;
    });

    renderFilteredProducts(filteredProducts, "Зібрані ПК");
}

// Функція для фільтрації товарів у категорії "Ноутбуки"
function filterLaptops() {
    const filters = {
        price: Array.from(document.querySelectorAll('input[name="price"]:checked')).map(input => input.value),
        year: Array.from(document.querySelectorAll('input[name="year"]:checked')).map(input => input.value),
        version: Array.from(document.querySelectorAll('input[name="version"]:checked')).map(input => input.value),
        screenSize: Array.from(document.querySelectorAll('input[name="screenSize"]:checked')).map(input => input.value),
        weight: Array.from(document.querySelectorAll('input[name="weight"]:checked')).map(input => input.value)
    };

    const productsToFilter = products["Каталог"]["Ноутбуки"].items;
    const filteredProducts = productsToFilter.filter(product => {
        const matchesPrice = filters.price.length === 0 || filters.price.some(filter => {
            if (filter === "50000+") return product.price >= 50000;
            let [min, max] = filter.split("-");
            return product.price >= parseInt(min) && product.price <= parseInt(max);
        });
        const matchesYear = filters.year.length === 0 || filters.year.includes(product.year?.toString());
        const matchesVersion = filters.version.length === 0 || filters.version.includes(product.version);
        const matchesScreenSize = filters.screenSize.length === 0 || filters.screenSize.includes(product.screenSize);
        const matchesWeight = filters.weight.length === 0 || filters.weight.includes(product.weight);

        return matchesPrice && matchesYear && matchesVersion && matchesScreenSize && matchesWeight;
    });

    renderFilteredProducts(filteredProducts, "Ноутбуки");
}

function filterComponents(subCategory) {
    const filters = {
        price: Array.from(document.querySelectorAll('input[name="price"]:checked')).map(input => input.value),
        year: Array.from(document.querySelectorAll('input[name="year"]:checked')).map(input => input.value),
        memory: Array.from(document.querySelectorAll('input[name="memory"]:checked')).map(input => input.value),
        interface: Array.from(document.querySelectorAll('input[name="interface"]:checked')).map(input => input.value),
        cores: Array.from(document.querySelectorAll('input[name="cores"]:checked')).map(input => input.value),
        socket: Array.from(document.querySelectorAll('input[name="socket"]:checked')).map(input => input.value),
        formFactor: Array.from(document.querySelectorAll('input[name="formFactor"]:checked')).map(input => input.value),
        speed: Array.from(document.querySelectorAll('input[name="speed"]:checked')).map(input => input.value),
        type: Array.from(document.querySelectorAll('input[name="type"]:checked')).map(input => input.value),
        capacity: Array.from(document.querySelectorAll('input[name="capacity"]:checked')).map(input => input.value),
        wattage: Array.from(document.querySelectorAll('input[name="wattage"]:checked')).map(input => input.value),
        certification: Array.from(document.querySelectorAll('input[name="certification"]:checked')).map(input => input.value),
        size: Array.from(document.querySelectorAll('input[name="size"]:checked')).map(input => input.value),
        color: Array.from(document.querySelectorAll('input[name="color"]:checked')).map(input => input.value)
    };

    const productsToFilter = products["Каталог"]["Комплектуючі"].items[subCategory];
    const filteredProducts = productsToFilter.filter(product => {
        const matchesPrice = filters.price.length === 0 || filters.price.some(filter => {
            if (filter === "50000+") return product.price >= 50000;
            let [min, max] = filter.split("-");
            return product.price >= parseInt(min) && product.price <= parseInt(max);
        });
        const matchesYear = filters.year.length === 0 || filters.year.includes(product.year?.toString());
        const matchesMemory = filters.memory.length === 0 || filters.memory.includes(product.memory);
        const matchesInterface = filters.interface.length === 0 || filters.interface.includes(product.interface);
        const matchesCores = filters.cores.length === 0 || filters.cores.includes(product.cores?.toString());
        const matchesSocket = filters.socket.length === 0 || filters.socket.includes(product.socket);
        const matchesFormFactor = filters.formFactor.length === 0 || filters.formFactor.includes(product.formFactor);
        const matchesSpeed = filters.speed.length === 0 || filters.speed.includes(product.speed);
        const matchesType = filters.type.length === 0 || filters.type.includes(product.type);
        const matchesCapacity = filters.capacity.length === 0 || filters.capacity.includes(product.capacity);
        const matchesWattage = filters.wattage.length === 0 || filters.wattage.includes(product.wattage);
        const matchesCertification = filters.certification.length === 0 || filters.certification.includes(product.certification);
        const matchesSize = filters.size.length === 0 || filters.size.includes(product.size);
        const matchesColor = filters.color.length === 0 || filters.color.includes(product.color);

        return matchesPrice && matchesYear && matchesMemory && matchesInterface && matchesCores && matchesSocket && matchesFormFactor && matchesSpeed && matchesType && matchesCapacity && matchesWattage && matchesCertification && matchesSize && matchesColor;
    });

    renderFilteredProducts(filteredProducts, "Комплектуючі", subCategory);
}

// Відображення відфільтрованих товарів
function renderFilteredProducts(filteredProducts, category, subCategory = '') {
    let content = "<h2>Результати фільтрації</h2>";
    if (filteredProducts.length === 0) {
        content += `<p>Товарів не знайдено</p>`;
    } else {
        content += `<div class="product-grid">`;
        content += filteredProducts.map((product, index) => `
            <div class="product-item">
                <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px;">
                <button onclick="openProduct('${category}', '${subCategory}', ${index})">
                    ${product.name} - ${product.price} грн
                </button>
            </div>
        `).join('');
        content += `</div>`;
    }
    document.getElementById("content").innerHTML = content;
}

// Функція для фільтрації товарів
function filterProducts(query) {
    const searchResults = document.getElementById("search-results");
    if (query.trim() === "") {
        searchResults.style.display = "none"; // Приховати результати, якщо поле порожнє
        return;
    }

    let results = [];

    // Пошук товарів у всіх категоріях
    function searchInCategory(category, categoryName, subCategoryName = '') {
        if (Array.isArray(category)) {
            category.forEach((product, index) => {
                if (product.name.toLowerCase().includes(query.toLowerCase())) {
                    results.push({ ...product, category: categoryName, subCategory: subCategoryName, index });
                }
            });
        } else if (typeof category === "object") {
            Object.keys(category).forEach(subCategory => {
                searchInCategory(category[subCategory], categoryName, subCategory);
            });
        }
    }

    searchInCategory(products["Каталог"], "Каталог");

    // Відображення результатів пошуку
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = "";

    if (results.length === 0) {
        searchResultsContainer.innerHTML = `<p>Товарів не знайдено</p>`;
    } else {
        results.forEach(product => {
            searchResultsContainer.innerHTML += `
                <div class="search-result-item">
                    <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;">
                    <p>${product.name} - ${product.price} грн</p>
                    <button onclick="addToCartFromSearch('${product.category}', '${product.subCategory || ''}', ${product.index})">Додати до кошика</button>
                </div>
            `;
        });
    }

    searchResultsContainer.style.display = "block"; // Показати результати
}

// Додавання обробника події для поля пошуку
document.getElementById("search-box").addEventListener("input", function (e) {
    filterProducts(e.target.value);
});

// Додавання товару до кошика з результатів пошуку
function addToCartFromSearch(category, subCategory, index) {
    let product;
    if (subCategory) {
        product = products["Каталог"][category].items[subCategory][index];
    } else {
        product = products["Каталог"][category].items[index];
    }

    if (!product) {
        alert("Товар не знайдено!");
        return;
    }

    let existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Додавання товару до вподобаних
function addToFavorites(category, subCategory, index) {
    let product;
    if (subCategory) {
        product = products["Каталог"][category].items[subCategory][index];
    } else {
        product = products["Каталог"][category].items[index];
    }

    if (!product) {
        alert("Товар не знайдено!");
        return;
    }

    let existingProduct = favorites.find(item => item.name === product.name);

    if (!existingProduct) {
        favorites.push({ ...product });
        updateFavorites();
    }
}

// Оновлення списку вподобаних
function updateFavorites() {
    let favoritesItems = document.getElementById("favorites-items");
    favoritesItems.innerHTML = "";

    favorites.forEach((item, index) => {
        favoritesItems.innerHTML += `
            <li>
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <button onclick="removeFromFavorites(${index})">❌</button>
            </li>`;
    });
}

// Видалення товару з вподобаних
function removeFromFavorites(index) {
    favorites.splice(index, 1);
    updateFavorites();
}

// Відкриття/закриття вподобаних
function toggleFavorites() {
    let favoritesElement = document.getElementById("favorites");
    favoritesElement.style.display = (favoritesElement.style.display === "none" || favoritesElement.style.display === "") ? "block" : "none";
}

// Додавання кнопки закриття вподобаних
document.addEventListener("DOMContentLoaded", () => {
    let favoritesElement = document.getElementById("favorites");
    let closeButton = document.createElement("button");
    closeButton.textContent = "❌";
    closeButton.style.position = "absolute";
    closeButton.onclick = () => { favoritesElement.style.display = "none"; };
    favoritesElement.prepend(closeButton);
});

// Оновлення функції openProduct для додавання кнопки "Додати до вподобаних"
function openProduct(category, subCategory, index) {
    const content = document.getElementById("content");
    const filter = document.getElementById("filter");
    content.classList.add('hidden');

    setTimeout(() => {
        let product;
        if (subCategory) {
            product = products["Каталог"][category].items[subCategory][index];
        } else {
            product = products["Каталог"][category].items[index];
        }

        if (!product) {
            alert("Товар не знайдено!");
            return;
        }

        breadcrumbs = breadcrumbs.slice(0, 3);
        breadcrumbs.push({ name: product.name, page: "product" });

        const contentHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" style="width: 100%; max-width: 400px;">
            <p>Ціна: ${product.price} грн</p>
            <h2>Характеристики:</h2>
            <ul>
                ${Object.entries(product).map(([key, value]) => `
                    <li><strong>${key}:</strong> ${value}</li>
                `).join('')}
            </ul>
            <button onclick="addToCart('${category}', '${subCategory}', ${index})">Додати до кошика</button>
            <button onclick="addToFavorites('${category}', '${subCategory}', ${index})">Додати до вподобаних</button>
            <button onclick="navigate('${breadcrumbs[breadcrumbs.length - 2].page}')">Повернутися</button>
        `;

        content.innerHTML = contentHTML;
        updateBreadcrumbs();

        // Приховуємо фільтр
        filter.style.display = "none";

        // Видаляємо клас для відображення нового контенту
        setTimeout(() => {
            content.classList.remove('hidden');
        }, 300); // Невелика затримка для коректного відображення
    }, 300);
}
// Додавання товару до кошика
function addToCart(category, subCategory, index) {
    let product;
    if (subCategory) {
        product = products["Каталог"][category].items[subCategory][index];
    } else {
        product = products["Каталог"][category].items[index];
    }

    if (!product) {
        alert("Товар не знайдено!");
        return;
    }

    let existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Оновлення кошика
function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <li>${item.name} - ${item.price} грн 
                <button onclick="changeQuantity(${index}, -1)">➖</button> 
                ${item.quantity} 
                <button onclick="changeQuantity(${index}, 1)">➕</button> 
                <button onclick="removeFromCart(${index})">❌</button>
            </li>`;
    });

    cartTotal.textContent = `Загальна сума: ${total} грн`;
    cartIcon.textContent = cart.length;
}

// Зміна кількості товару
function changeQuantity(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
}

// Видалення товару з кошика
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Очищення кошика
function clearCart() {
    cart = [];
    updateCart();
}

// Оформлення замовлення
function checkout() {
    if (cart.length === 0) {
        alert("Ваш кошик порожній!");
    } else {
        alert("Замовлення оформлено!");
        clearCart();
    }
}

// Оновлення хлібних крихт
function updateBreadcrumbs() {
    let breadcrumbsNav = document.getElementById("breadcrumbs");
    breadcrumbsNav.innerHTML = breadcrumbs
        .map((crumb, index) =>
            `<a href="#" onclick="navigate('${crumb.page}')">${crumb.name}</a>${index < breadcrumbs.length - 1 ? ' > ' : ''}`
        ).join("");
}

// Відкриття/закриття кошика
function toggleCart() {
    let cartElement = document.getElementById("cart");
    cartElement.style.display = (cartElement.style.display === "none" || cartElement.style.display === "") ? "block" : "none";
}

// Додавання кнопки закриття кошика
document.addEventListener("DOMContentLoaded", () => {
    let cartElement = document.getElementById("cart");
    let closeButton = document.createElement("button");
    closeButton.textContent = "❌";
    closeButton.style.position = "absolute";
    closeButton.onclick = () => { cartElement.style.display = "none"; };
    cartElement.prepend(closeButton);
});

// Скидання фільтрів
function resetFilters() {
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    const yearCheckboxes = document.querySelectorAll('input[name="year"]');
    const versionCheckboxes = document.querySelectorAll('input[name="version"]');

    priceCheckboxes.forEach(checkbox => (checkbox.checked = false));
    yearCheckboxes.forEach(checkbox => (checkbox.checked = false));
    versionCheckboxes.forEach(checkbox => (checkbox.checked = false));
}