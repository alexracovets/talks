function Swiper({
    ...settings
}) {
    let {
        type,
        pageName,
        selectBack,
        loop,
        dev
    } = settings;

    let atributeType = type;
    let atributeName = pageName;
    let atributeSelect = selectBack;
    let atributeLoop = loop;
    let atributeDev = dev;

    let swiperNameEval = `localStorage.${atributeName}`;
    let swiperName = String(eval(swiperNameEval));

    if (swiperName == 'undefined') {
        let currentIndexPageEval = '1';
        localStorage.setItem(`${atributeName}`, `${currentIndexPageEval}`);
    }

    let currentIndexPage = eval(`localStorage.${atributeName}`);

    function renderData() {

        $(`[${atributeName}]`).fadeOut();
        $(`[${atributeName}]`).attr('style', 'display: none')
        $(`[${atributeName}='${currentIndexPage}']`).fadeIn();

        if (atributeType == 'bouncer') {
            let toNext = $(`[${atributeName}='${currentIndexPage}'] [next]`).attr('toNext');
            let toBack = $(`[${atributeName}='${currentIndexPage}'] [next]`).attr('toBack');

            if (toNext != undefined) {
                localStorage.toNext = toNext;
            }
            if (toBack != undefined) {
                localStorage.toBack = toBack;
            }

        }

        // Проверка: нужен ли рендерить кнопку back
        if ($(`[${atributeName}='${currentIndexPage}'] [next]`).attr('isSelect') != undefined && atributeSelect) {

            $(`[${atributeName}='${currentIndexPage}']`).append('<div back class="select-back"><img src="img/next.svg" alt="back"></div>')

        }
        // Проверка: на вывод реолоудера
        if (atributeDev == true) {
            if ($('body .reloader').length < 1) {
                $('body').append('<div class="reloader"><img src="img/reloader.svg" alt="back"></div>')
            }

        }
    }

    // Нажатие next
    $("body").on('click', "[next]", function () {

        let nextIndexPage = ''
        if (atributeType == 'default') {
            nextIndexPage = Number(currentIndexPage) + 1;
        } else if (atributeType == 'bouncer') {
            nextIndexPage = $(this).attr('toNext');
        }

        if (nextIndexPage <= $(`[${atributeName}]`).length) {
            currentIndexPage = nextIndexPage
        } else if (atributeLoop) {
            currentIndexPage = nextIndexPage - $(`[${atributeName}]`).length;
        } else {
            currentIndexPage = currentIndexPage
        }
        let nextPageEval = `localStorage.${atributeName}='${currentIndexPage}'`
        console.log(nextPageEval)
        eval(nextPageEval)


        renderData();

        $("nav.navigation li").removeClass('active');
        $(this).addClass('active');
    });

    // Нажатие back
    $("body").on('click', "[back]", function () {

        let beckIndexPage = ''
        if (atributeType == 'default') {
            beckIndexPage = Number(currentIndexPage) - 1;
        } else if (atributeType == 'bouncer') {
            beckIndexPage = localStorage.toBack;
        }

        if (beckIndexPage > 0) {
            currentIndexPage = beckIndexPage
        } else if (atributeLoop) {
            currentIndexPage = beckIndexPage + $(`[${atributeName}]`).length;
        } else {
            currentIndexPage = currentIndexPage
        }

        let nextPageEval = `localStorage.${atributeName}='${currentIndexPage}'`
        eval(nextPageEval)


        renderData();
    });

    // Нажатие reload
    $("body").on('click', ".reloader", function () {
        localStorage.page = undefined;
        localStorage.toNext = undefined
        localStorage.toBack = undefined
        currentIndexPage = '1';
        renderData();
    });


    renderData()
}