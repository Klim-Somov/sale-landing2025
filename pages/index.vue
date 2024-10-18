<template>
  <header class="header">
    <div class="_container">
      <div class="header__content">
        <div class="header__logo">
          <NuxtLink to="/">
            <img src="../assets/images/logo.svg" alt="" />
          </NuxtLink>
        </div>
        <ul class="header__menu">
          <li
            @click.prevent="scrollToBlock('taxopark')"
            class="header__menu-item"
          >
            <NuxtLink @click="isMenu = false">Мой таксопарк</NuxtLink>
          </li>
          <li
            @click.prevent="scrollToBlock('threats')"
            class="header__menu-item"
          >
            <NuxtLink @click="isMenu = false">Угрозы</NuxtLink>
          </li>
          <li
            @click.prevent="scrollToBlock('whatToDo')"
            class="header__menu-item"
          >
            <NuxtLink @click="isMenu = false">Что делать?</NuxtLink>
          </li>
          <li @click.prevent="scrollToBlock('help')" class="header__menu-item">
            <NuxtLink @click="isMenu = false">Помощь</NuxtLink>
          </li>
        </ul>
        <div class="header__phone">
          <a href="tel:+78006003043">+7 (800) 600 30-43</a>
        </div>
        <!-- hamburger_mobile -->
        <div @click="menuToggle" class="hamurger__menu">
          <div :class="{ 'modal-overlay': isMenu }"></div>

          <img src="../assets/images/mobile_hamburger.svg" alt="" />
        </div>
        <div :class="{ active: isMenu }" class="header__mob-menu">
          <div @click="menuToggle" class="header__mob-menu-closer">
            <img src="../assets/images/close.svg" alt="" />
          </div>
          <ul>
            <li @click.prevent="scrollToBlock('taxopark')">
              <NuxtLink @click="isMenu = false">Мой таксопарк</NuxtLink>
            </li>
            <li @click.prevent="scrollToBlock('threats')">
              <NuxtLink @click="isMenu = false">Угрозы</NuxtLink>
            </li>
            <li @click.prevent="scrollToBlock('whatToDo')">
              <NuxtLink @click="isMenu = false">Что делать?</NuxtLink>
            </li>
            <li
              @click.prevent="scrollToBlock('help')"
              class="header__menu-item"
            >
              <NuxtLink @click="isMenu = false">Помощь</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <section class="rustam _container_fluid">
    <div class="rustam__image-wrapper">
      <img src="../assets/images/logo-big.svg" alt="Speaker Image" />
    </div>
    <div class="rustam__image-wrapper-sm">
      <img src="../assets/images/rustam-photo.jpg" alt="Speaker Image" />
    </div>
    <div class="rustam__text-content">
      <h1 class="rustam__heading">Давайте знакомиться</h1>
      <h2 class="rustam__subheading">Меня зовут Рустам Юськаев</h2>
      <p class="rustam__description">
        Я - основатель сервиса PayTaxi, который с 2016 года помогает тысячам
        таксопарков развиваться и защищать свой бизнес.
      </p>
      <p class="rustam__description">
        Не секрет, что на сегодняшний день
        <span class="rustam__description__span">
          усилился контроль за отраслью такси,</span
        >
        и сейчас те, кто не изменил свой подход к бизнесу рискует без него
        остаться.
      </p>
    </div>
  </section>

  <div class="_container">
    <section class="frighten">
      <p class="frighten__text">
        Не хочу никого пугать, но раз вы занимаетесь
        <span>именно бизнесом такси</span> – значит вы по адресу.
        <strong> Это касается как подключашек, так и железных парков. </strong>
      </p>
    </section>
  </div>

  <section ref="taxopark" class="taxopark">
    <div class="_container">
      <div class="taxopark__intro-wrapper">
        <div class="taxopark__intro-img-sm">
          <img src="../assets/images/lupa-mini.svg" alt="" />
        </div>
        <div class="taxopark__intro-img">
          <img src="../assets/images/lupa.svg" alt="" />
        </div>
        <p class="taxopark__intro">
          Попробуем вместе взглянуть на ваш бизнес со стороны и понять в каком
          из направлений вам
          <strong> необходима помощь.</strong>
        </p>
      </div>
      <div class="taxopark__arrow-sm">
        <img src="../assets/images/arrow-yellow-mimi.svg" alt="" />
      </div>
      <h2 class="taxopark__title title">Если ваш таксопарк:</h2>
      <ul class="taxopark__list">
        <li class="taxopark__item">
          <span class="taxopark__number">1</span>
          Разработал «правильный» договор с водителем, к которому по мнению
          юристов невозможно подкопаться.
        </li>
        <li class="taxopark__item">
          <span class="taxopark__number">2</span>
          Регулярно предоставляет отчёты агента. Знает где и как они хранятся.
        </li>
        <li class="taxopark__item">
          <span class="taxopark__number">3</span>
          Не ведет деятельность железного парка и «подключашек» в одном юр.
          лице.
        </li>
        <li class="taxopark__item">
          <span class="taxopark__number">4</span>
          Предоставляет кассовые чеки за аренду автомобилей и комиссионное
          парка.
        </li>
        <li class="taxopark__item">
          <span class="taxopark__number">5</span>
          Уверен в том, что использует корректную модель налогообложения.
        </li>
        <li class="taxopark__item">
          <span class="taxopark__number">6</span>
          Не оставляет без ответа запросы контролирующих органов.
        </li>
        <li class="taxopark__item">
          <span class="taxopark__number">7</span>
          Использует систему моментальных выплат, которая хранит данные и имеет
          возможность подготовки отчёта агента по всем водителям.
        </li>
      </ul>

      <ul class="taxopark__list-sm">
        <li class="taxopark__item-sm">
          <div class="taxopark__number-sm">1</div>
          <p>
            Разработал «правильный» договор с водителем, к которому по мнению
            юристов невозможно подкопаться.
          </p>
        </li>
        <li class="taxopark__item-sm">
          <div class="taxopark__number-sm">2</div>
          <p>
            Регулярно предоставляет отчёты агента. Знает где и как они хранятся.
          </p>
        </li>
        <li class="taxopark__item-sm">
          <div class="taxopark__number-sm">3</div>
          <p>
            Не ведет деятельность железного парка и «подключашек» в одном юр.
            лице.
          </p>
        </li>
        <li class="taxopark__item-sm">
          <div class="taxopark__number-sm">4</div>
          <p>
            Предоставляет кассовые чеки за аренду автомобилей и комиссионное
            парка.
          </p>
        </li>
        <li class="taxopark__item-sm">
          <div class="taxopark__number-sm">5</div>
          <p>Уверен в том, что использует корректную модель налогообложения.</p>
        </li>
        <li class="taxopark__item-sm">
          <div class="taxopark__number-sm">6</div>
          <p>Не оставляет без ответа запросы контролирующих органов.</p>
        </li>
        <li class="taxopark__item-sm">
          <div class="taxopark__number-sm">7</div>
          <p>
            Использует систему моментальных выплат, которая хранит данные и
            имеет возможность подготовки отчёта агента по всем водителям.
          </p>
        </li>
      </ul>

      <div class="taxopark__bottom">
        <div class="taxopark__conclusion">
          <div class="taxopark__conclusion-img">
            <img src="../assets/images/smile.png" alt="" />
          </div>
          <div class="taxopark__conclusion-img-sm">
            <img src="../assets/images/smile-sm.svg" alt="" />
          </div>
          <p class="taxopark__conclusion-text">
            Если вы однозначно смогли ответить “Да” на каждый из пунктов -
            поздравляем, у вас образцовый таксопарк и вы можете быть спокойны за
            свой бизнес.
          </p>
        </div>

        <div class="taxopark__conclusion">
          <div class="taxopark__conclusion-img">
            <img src="../assets/images/smile-sad.svg" alt="" />
          </div>
          <div class="taxopark__conclusion-img-sm">
            <img src="../assets/images/smile-sad-sm.svg" alt="" />
          </div>
          <p class="taxopark__conclusion-text">
            Если вы не уверены даже в одном пункте,<br />
            то у меня для вас <span> плохие новости... </span>
          </p>
        </div>
      </div>
    </div>
  </section>

  <section ref="threats" class="threats _container_fluid">
    <div class="_container">
      <div class="threats__img">
        <img src="../assets/images/arrow-red.svg" alt="" />
      </div>
      <div class="threats__img-sm">
        <img src="../assets/images/arrow-red-sm.svg" alt="" />
      </div>
      <h2 class="threats__title title">
        <span>Угрозы</span> для вашего бизнеса:
      </h2>
    </div>

    <div class="threats__content">
      <ul class="threats__list">
        <li class="threats__item">
          <div class="threats__img">
            <img src="../assets/images/danger.svg" alt="" />
          </div>
          <div class="threats__img-bottom-sm">
            <img src="../assets/images/danger-sm.svg" alt="" />
          </div>
          <div class="threats__text">
            Штраф до
            <strong class="threats__highlight">1 000 000 рублей.</strong>
          </div>
        </li>
        <li class="threats__item">
          <div class="threats__img">
            <img src="../assets/images/danger.svg" alt="" />
          </div>
          <div class="threats__img-bottom-sm">
            <img src="../assets/images/danger-sm.svg" alt="" />
          </div>
          <div class="threats__text">
            Административное приостановление деятельности юр. лица на срок
            <strong class="threats__highlight">до 90 суток</strong>
          </div>
        </li>
        <li class="threats__item">
          <div class="threats__img">
            <img src="../assets/images/danger.svg" alt="" />
          </div>
          <div class="threats__img-bottom-sm">
            <img src="../assets/images/danger-sm.svg" alt="" />
          </div>
          <div class="threats__text">
            Дисквалификация должностных лиц <br />
            на срок
            <strong class="threats__highlight"
              >от одного года до двух лет</strong
            >
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section ref="whatToDo" class="avoid _container_fluid">
    <div class="avoid__img">
      <img src="../assets/images/arrow-yellow-big.svg" alt="" />
    </div>
    <h2 class="avoid__title title">Как избежать?</h2>
    <p class="avoid__text">
      Очевидно, что вы попали на эту страницу<span>
        не просто так. Я предлагаю вам уже готовые решения по каждому из
        пунктов.</span
      >
    </p>
    <ul class="avoid__list">
      <li class="avoid__list-item">
        Есть решение по автоматизации процесса оформления кассовых чеков на
        комиссию парка с заказов, моментальных выплат и аренду автомобиля.
      </li>
      <li class="avoid__list-item">
        Есть автоматическое формирование отчетов агента для водителей с
        выгрузкой для Налоговой Инспекции нажатием одной кнопки.
      </li>
      <li class="avoid__list-item">
        Разработана типовая форма договора, которая постоянно актуализируется.
        Более того, мы множество раз предоставляли ее в налоговые органы. Как мы
        упоминали ранее - ни одного доначисления налогов у клиентов PayTaxi нет.
        Для работы с ПСМЗ обновили договор еще 15 апреля.
      </li>
      <li class="avoid__list-item">
        А так же большое количество действительно полезных инструментов, которые
        могут пригодиться для вашего бизнеса.
      </li>
    </ul>
    <h2 class="avoid__bottom-title">
      Не ставьте свой бизнес под угрозу штрафов и приостановки
      <span class="avoid__bottom-title-span">деятельности.</span>
    </h2>
  </section>

  <div class="_container">
    <section ref="help" class="form">
      <form>
        <p class="form__desc">
          Заполните форму и мы с вами свяжемся в течение часа
        </p>
        <div class="form__inputs">
          <div class="_error" v-if="v$.name.$error">
            {{ v$.name.$errors[0].$message }}
          </div>
          <input
            :class="{
              _error_border: v$.name.$error,
              '_succes-border ': !v$.name.$invalid,
            }"
            @change="v$.name.$touch"
            v-model="formData.name"
            placeholder="Имя"
          />

          <div class="_error" v-if="v$.phone.$error">
            {{ v$.phone.$errors[0].$message }}
          </div>
          <input
            :class="{
              _error_border: v$.phone.$error,
              '_succes-border ': !v$.phone.$invalid,
            }"
            v-maska
            data-maska="+7 (9##) ### ## ##"
            v-model="formData.phone"
            placeholder="Телефон"
          />
          <button :disabled="disabled" @click.prevent="onSubmit">
            Узнать подробнее
          </button>
          <Error v-if="error" />
          <Success v-if="success" />
        </div>
      </form>
    </section>
  </div>
</template>
<script setup>
import { required, helpers, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const { $csrfFetch } = useNuxtApp();
const taxopark = ref(null);
const whatToDo = ref(null);
const threats = ref(null);
const help = ref(null);
const error = ref(false);
const success = ref(false);
const disabled = ref(false);

const isMenu = ref(false);
const formData = reactive({
  name: '',
  phone: '',
});

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('это поле обязательное', required),
      minLength: helpers.withMessage('минимум 3 символа', minLength(3)),
    },
    phone: {
      required: helpers.withMessage('это поле обязательное', required),
      minLength: helpers.withMessage(
        'введите номер в формате +7 999 999 99 99',
        minLength(18)
      ),
    },
  };
});
const v$ = useVuelidate(rules, formData);

const handleModalError = () => {
  error.value = true;
  setTimeout(() => {
    error.value = false;
  }, 4500);
};
const handleModalSuccess = () => {
  success.value = true;
  setTimeout(() => {
    success.value = false;
  }, 4500);
};

const onSubmit = () => {
  v$.value.$validate();
  if (formData.phone.length >= 18 && formData.name.length >= 3) {
    disabled.value = true;
    $csrfFetch('/api/contact', {
      method: 'POST',
      body: {
        from: formData.name,
        phone: formData.phone,
        button: 'отправить заявку. Главная',
      },
    })
      .then(() => {
        handleModalSuccess();
      })
      .catch((e) => {
        handleModalError();
        console.log(e);
      })
      .finally(() => {
        disabled.value = false;
      });
    formData.name = '';
    formData.phone = '';
  }
  v$.value.$reset();
};

const menuToggle = () => {
  isMenu.value = !isMenu.value;
};

const scrollToBlock = (refName) => {
  let targetBlock = null;

  switch (refName) {
    case 'taxopark':
      targetBlock = taxopark.value;
      break;
    case 'whatToDo':
      targetBlock = whatToDo.value;
      break;
    case 'threats':
      targetBlock = threats.value;
      break;
    case 'help':
      targetBlock = help.value;
      break;
    default:
      console.log('Неверное имя блока');
  }

  if (targetBlock) {
    targetBlock.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
