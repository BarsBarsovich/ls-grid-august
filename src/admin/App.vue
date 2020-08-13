<template lang="pug">
  .wrapper
    .page-container
      header.header
        .header__container.container
          .avatar
            .avatar__logo
            span.avatar__name Борис Дрябин
          .header__title
            span.header__title-par Панель администрирования
          .header__logout
            button.button Выйти
      nav.nav
        .nav__container
          .nav__list
            .nav__item.nav__item_active
              a(href="#" class="nav__item-link nav__link_active") Обо мне
            .nav__item
              a(href="#" class="nav__item-link") Работы
            .nav__item
              a(href="#" class="nav__item-link") Отзывы

      main.main
        .main__container
          .main__title
            .buttons
              .buttons__title
                span Блок "Обо мне"
              .buttons__button
                button.add-button +
                p Добавить группу
          .main__cards
            .main__cards-list
              .main__cards-item
                .card
                  .card__title
                    .card__container
                      .card__input
                        input(type="text" placeholder="Название новой группы")
                      .card__buttons
                        a(href="#").card__add-button
                        a(href="#").card__remove-button
                  .card__content
                    .card__content-container
                      .skills
                        .skills__list
                          .skills__item
                            span.skillls__item-name Git
                            span.skillls__item-value 100%
                            span.skills__item-buttons
                              a.card__add-button
                              a.card__remove-button
                  .card__footer
                    .card__footer-container
                      .card__footer-inputs
                        .card__input
                          input(type="text" placeholder="Новый навык")
                        .card__input
                          input(type="text" placeholder="100%")
                      .card__footer-button
                        button.add-button.add-button_big.add-button_mr0 +
              .main__cards-item
                .card
                  .card__title
                    .card__container
                      .card__input
                        input(type="text" placeholder="Название новой группы")
                      .card__buttons
                        a(href="#").card__add-button
                        a(href="#").card__remove-button
                  .card__content
                    .card__content-container
                      .skills
                        .skills__list
                          .skills__item
                            span.skillls__item-name Git
                            span.skillls__item-value 100%
                            span.skills__item-buttons
                              a.card__add-button
                              a.card__remove-button
                  .card__footer
                    .card__footer-container
                      .card__footer-inputs
                        .card__input
                          input(type="text" placeholder="Новый навык")
                        .card__input
                          input(type="text" placeholder="100%")
                      .card__footer-button
                        button.add-button.add-button_big.add-button_mr0 +


</template>


<style lang="postcss">
  @import "./admin.pcss";
</style>
