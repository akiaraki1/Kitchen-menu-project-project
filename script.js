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