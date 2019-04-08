const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFormInput(data) {
  let errors = {};

  // Имя организации:
  data.organizationname = !isEmpty(data.organizationname)
    ? data.organizationname
    : '';
  if (Validator.isEmpty(data.organizationname)) {
    errors.organizationname = 'Поле имя организации не должно быть пустым';
  }
  // Адрес огранизации:
  data.organizationadres = !isEmpty(data.organizationadres)
    ? data.organizationadres
    : '';
  if (Validator.isEmpty(data.organizationadres)) {
    errors.organizationadres = 'Поле адрес организации не должно быть пустым';
  }
  // Имя клиента:
  data.personname = !isEmpty(data.personname) ? data.personname : '';
  if (Validator.isEmpty(data.personname)) {
    errors.personname = 'Поле ФИО не должно быть пустым';
  }
  // Должность клиента:
  data.personstatus = !isEmpty(data.personstatus) ? data.personstatus : '';
  if (Validator.isEmpty(data.personstatus)) {
    errors.personstatus = 'Поле должность не должно быть пустым';
  }
  // Почта клиента:
  data.personemail = !isEmpty(data.personemail) ? data.personemail : '';
  if (Validator.isEmpty(data.personemail)) {
    errors.personemail = 'Поле почта не должно быть пустым';
  }
  if (!Validator.isEmail(data.personemail)) {
    errors.personemail = 'Укажите почту в формате inbox@mail.ru';
  }
  // Телефон клиента:
  data.personphone = !isEmpty(data.personphone) ? data.personphone : '';
  if (Validator.isEmpty(data.personphone)) {
    errors.personphone = 'Поле не должно быть пустым';
  }
  // Мобильный номер клиента:
  data.personmobile = !isEmpty(data.personmobile) ? data.personmobile : '';
  if (Validator.isEmpty(data.personmobile)) {
    errors.personmobile = 'Поле не должно быть пустым';
  }
  // Место установки генератора:
  data.projectmountadres = !isEmpty(data.projectmountadres)
    ? data.projectmountadres
    : '';
  if (Validator.isEmpty(data.projectmountadres)) {
    errors.projectmountadres = 'Поле не должно быть пустым';
  }
  // Описание проекта:
  data.projectdescription = !isEmpty(data.projectdescription)
    ? data.projectdescription
    : '';
  if (Validator.isEmpty(data.projectdescription)) {
    errors.projectdescription = 'Поле не должно быть пустым';
  }
  // Режим работы оборудования:
  data.operationmode = !isEmpty(data.operationmode) ? data.operationmode : '';
  if (Validator.isEmpty(data.operationmode)) {
    errors.operationmode = 'Поле не должно быть пустым';
  }
  // Предполагаемая модель:
  data.proposedmodel = !isEmpty(data.proposedmodel) ? data.proposedmodel : '';
  if (Validator.isEmpty(data.proposedmodel)) {
    errors.proposedmodel = 'Поле не должно быть пустым';
  }
  // Требуемавя электрическая мощность:
  data.electricpower = !isEmpty(data.electricpower) ? data.electricpower : '';
  if (Validator.isEmpty(data.electricpower)) {
    errors.electricpower = 'Поле не должно быть пустым';
  }
  // Вид подключения:
  data.connectiontype = !isEmpty(data.connectiontype)
    ? data.connectiontype
    : '';
  if (Validator.isEmpty(data.connectiontype)) {
    errors.connectiontype = 'Поле не должно быть пустым';
  }
  // Минимальная продолжительная нагрузка
  data.minimalload = !isEmpty(data.minimalload) ? data.minimalload : '';
  if (Validator.isEmpty(data.minimalload)) {
    errors.minimalload = 'Поле не должно быть пустым';
  }
  // Варианты исполнения и размещения генераторных установок:
  data.installationsettings = !isEmpty(data.installationsettings)
    ? data.installationsettings
    : '';
  if (Validator.isEmpty(data.installationsettings)) {
    errors.installationsettings = 'Поле не должно быть пустым';
  }
  // Характеристики места расположения:
  data.locationparams = !isEmpty(data.locationparams)
    ? data.locationparams
    : '';
  if (Validator.isEmpty(data.locationparams)) {
    errors.locationparams = 'Поле не должно быть пустым';
  }
  // Тип и характеристики используемого топлива:
  data.fueltype = !isEmpty(data.fueltype) ? data.fueltype : '';
  if (Validator.isEmpty(data.fueltype)) {
    errors.fueltype = 'Поле не должно быть пустым';
  }
  // Система Утилизации Тепла:
  data.utilsystem = !isEmpty(data.utilsystem) ? data.utilsystem : '';
  if (Validator.isEmpty(data.utilsystem)) {
    errors.utilsystem = 'Поле не должно быть пустым';
  }
  // Требуемая тепловая мощность:
  data.reqheatpower = !isEmpty(data.reqheatpower) ? data.reqheatpower : '';
  if (Validator.isEmpty(data.reqheatpower)) {
    errors.reqheatpower = 'Поле не должно быть пустым';
  }
  // Шеф-монтажные работы:
  data.chefmontage = !isEmpty(data.chefmontage) ? data.chefmontage : '';
  if (Validator.isEmpty(data.chefmontage)) {
    errors.chefmontage = 'Поле не должно быть пустым';
  }
  // Обучение эксплуатирующего персонала:
  data.stafflearning = !isEmpty(data.stafflearning) ? data.stafflearning : '';
  if (Validator.isEmpty(data.stafflearning)) {
    errors.stafflearning = 'Поле не должно быть пустым';
  }
  // Перечислите желаемые дополнительные работы и услуги:
  data.otherworks = !isEmpty(data.otherworks) ? data.otherworks : '';
  if (Validator.isEmpty(data.otherworks)) {
    errors.otherworks = 'Поле не должно быть пустым';
  }
  // Стоимость 1000 м3 газа:
  data.gasprice = !isEmpty(data.gasprice) ? data.gasprice : '';
  if (Validator.isEmpty(data.gasprice)) {
    errors.gasprice = 'Поле не должно быть пустым';
  }
  // Текущий тариф на электроэнергию:
  data.currentenergytarif = !isEmpty(data.currentenergytarif)
    ? data.currentenergytarif
    : '';
  if (Validator.isEmpty(data.currentenergytarif)) {
    errors.currentenergytarif = 'Поле не должно быть пустым';
  }
  // Текущий тариф на тепловую энергию:
  data.currentheattarif = !isEmpty(data.currentheattarif)
    ? data.currentheattarif
    : '';
  if (Validator.isEmpty(data.currentheattarif)) {
    errors.currentheattarif = 'Поле не должно быть пустым';
  }
  // Комментарии:
  data.commentary = !isEmpty(data.commentary) ? data.commentary : '';
  if (Validator.isEmpty(data.commentary)) {
    errors.commentary = 'Поле не должно быть пустым';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
