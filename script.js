//  Фильтры по разделам меню 
document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {

        // 1. Снять подсветку со ВСЕХ кнопок-фильтров
        document.querySelectorAll('.filter-btn').forEach(function (b) {
            b.classList.remove('active');
        });

        // 2. Подсветить нажатую
        btn.classList.add('active');

        // 3. Взять её фильтр
        const filter = btn.dataset.filter;

        // 4. Пройти по всем карточкам: показать/спрятать
        document.querySelectorAll('.card').forEach(function (card) {
            const category = card.dataset.category;

            if (filter === 'all' || filter === category) {
                card.classList.remove('hidden-card');
            } else {
                card.classList.add('hidden-card');
            }
        });
    });
});

// 1. Берем список кнопок
const buttons = document.querySelectorAll('.order-btn');

let orders = [];

// 2. проходимся по каждный кнопке
buttons.forEach(function(button) {
    button.addEventListener('click', function() {

        // 3. берем название еды
        const name = button.dataset.name;
        // 4. берем цену
        const price = Number(button.dataset.price);
        

        //5. Добавляем в массив заказов
        orders.push({
            name : name,
            price : price,
        });
        addToCart();
    });

});

const cartText = document.getElementById('cartText');
const cartTotal = document.getElementById('cartTotal');

// 1. изменяет текст заказов и цену
function addToCart() {
    // 2. если массив = 0, то текст прежний
    if (orders.length === 0) {
        cartText.textContent = 'Пока ничего не заказано';
        cartTotal.textContent = `Итого: ${0} ₽`;
        return;
    }

    // 3. сюда будем добавлять текст и изменять счетчик
    let text = '';
    let price = 0;

    // 4. проходим по массиву
    orders.forEach(function(item){

        text += item.name + ', ';
        price += item.price;

    })

    // 5. убирает запетую и пробел в конце текста.
    text = text.slice(0, -2);

    cartText.textContent = text;
    cartTotal.textContent = `Итого: ${price} ₽`;
}