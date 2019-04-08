const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFormInput(data) {
  let errors = {};

  // Имя организации:
  data.organizationname = !isEmpty(data.organizationname)
    ? data.organizationname.trim()
    : '';
  if (Validator.isEmpty(data.organizationname)) {
    errors.organizationname = 'Поле имя организации не должно быть пустым';
  }
  // Адрес огранизации:
  data.organizationadres = !isEmpty(data.organizationadres)
    ? data.organizationadres.trim()
    : '';
  if (Validator.isEmpty(data.organizationadres)) {
    errors.organizationadres = 'Поле адрес организации не должно быть пустым';
  }
  // Имя клиента:
  data.personname = !isEmpty(data.personname) ? data.personname.trim() : '';
  if (Validator.isEmpty(data.personname)) {
    errors.personname = 'Поле ФИО не должно быть пустым';
  }
  // Должность клиента:
  data.personstatus = !isEmpty(data.personstatus)
    ? data.personstatus.trim()
    : '';
  if (Validator.isEmpty(data.personstatus)) {
    errors.personstatus = 'Поле должность не должно быть пустым';
  }
  // Почта клиента:
  data.personemail = !isEmpty(data.personemail) ? data.personemail.trim() : '';
  if (Validator.isEmpty(data.personemail)) {
    errors.personemail = 'Поле почта не должно быть пустым';
  }
  if (!Validator.isEmail(data.personemail)) {
    errors.personemail = 'Укажите почту в формате inbox@mail.ru';
  }
  // Телефон клиента:
  data.personphone = !isEmpty(data.personphone) ? data.personphone.trim() : '';
  if (Validator.isEmpty(data.personphone)) {
    errors.personphone = 'Поле не должно быть пустым';
  }
  // Мобильный номер клиента:
  data.personmobile = !isEmpty(data.personmobile)
    ? data.personmobile.trim()
    : '';
  if (Validator.isEmpty(data.personmobile)) {
    errors.personmobile = 'Поле не должно быть пустым';
  }

  // Характеристики места расположения:
  data.locationparams = !isEmpty(data.locationparams)
    ? data.locationparams.trim()
    : '';
  if (Validator.isEmpty(data.locationparams)) {
    errors.locationparams = 'Поле не должно быть пустым';
  }
  // Место установки генератора:
  data.projectmountadres = !isEmpty(data.projectmountadres)
    ? data.projectmountadres.trim()
    : '';
  if (Validator.isEmpty(data.projectmountadres)) {
    errors.projectmountadres = 'Поле не должно быть пустым';
  }
  // Описание проекта:
  data.projectdescription = !isEmpty(data.projectdescription)
    ? data.projectdescription.trim()
    : '';
  if (Validator.isEmpty(data.projectdescription)) {
    errors.projectdescription = 'Поле не должно быть пустым';
  }

  // Режим работы оборудования:
  data.operationmode = !isEmpty(data.operationmode)
    ? data.operationmode.trim()
    : '';
  if (Validator.isEmpty(data.operationmode)) {
    errors.operationmode = 'Поле не должно быть пустым';
  }
  // Предполагаемая модель:
  data.proposedmodel = !isEmpty(data.proposedmodel)
    ? data.proposedmodel.trim()
    : '';
  if (Validator.isEmpty(data.proposedmodel)) {
    errors.proposedmodel = 'Поле не должно быть пустым';
  }
  // Требуемавя электрическая мощность:
  data.electricpower = !isEmpty(data.electricpower)
    ? data.electricpower.trim()
    : '';
  if (Validator.isEmpty(data.electricpower)) {
    errors.electricpower = 'Поле не должно быть пустым';
  }
  // Вид подключения:
  data.connectiontype = !isEmpty(data.connectiontype)
    ? data.connectiontype.trim()
    : '';
  if (Validator.isEmpty(data.connectiontype)) {
    errors.connectiontype = 'Поле не должно быть пустым';
  }
  // Минимальная продолжительная нагрузка
  data.minimalload = !isEmpty(data.minimalload) ? data.minimalload.trim() : '';
  if (Validator.isEmpty(data.minimalload)) {
    errors.minimalload = 'Поле не должно быть пустым';
  }
  // Варианты исполнения и размещения генераторных установок:
  data.installationsettings = !isEmpty(data.installationsettings)
    ? data.installationsettings.trim()
    : '';
  if (Validator.isEmpty(data.installationsettings)) {
    errors.installationsettings = 'Поле не должно быть пустым';
  }
  // Тип и характеристики используемого топлива:
  data.fueltype = !isEmpty(data.fueltype) ? data.fueltype.trim() : '';
  if (Validator.isEmpty(data.fueltype)) {
    errors.fueltype = 'Поле не должно быть пустым';
  }
  // Система Утилизации Тепла:
  data.utilsystem = !isEmpty(data.utilsystem) ? data.utilsystem.trim() : '';
  if (Validator.isEmpty(data.utilsystem)) {
    errors.utilsystem = 'Поле не должно быть пустым';
  }
  // Требуемая тепловая мощность:
  data.reqheatpower = !isEmpty(data.reqheatpower)
    ? data.reqheatpower.trim()
    : '';
  if (Validator.isEmpty(data.reqheatpower)) {
    errors.reqheatpower = 'Поле не должно быть пустым';
  }
  // Шеф-монтажные работы:
  data.chefmontage = !isEmpty(data.chefmontage) ? data.chefmontage.trim() : '';
  if (Validator.isEmpty(data.chefmontage)) {
    errors.chefmontage = 'Поле не должно быть пустым';
  }
  // Обучение эксплуатирующего персонала:
  data.stafflearning = !isEmpty(data.stafflearning)
    ? data.stafflearning.trim()
    : '';
  if (Validator.isEmpty(data.stafflearning)) {
    errors.stafflearning = 'Поле не должно быть пустым';
  }
  // Перечислите желаемые дополнительные работы и услуги:
  data.otherworks = !isEmpty(data.otherworks) ? data.otherworks.trim() : '';
  if (Validator.isEmpty(data.otherworks)) {
    errors.otherworks = 'Поле не должно быть пустым';
  }
  // Стоимость 1000 м3 газа:
  data.gasprice = !isEmpty(data.gasprice) ? data.gasprice.trim() : '';
  if (Validator.isEmpty(data.gasprice)) {
    errors.gasprice = 'Поле не должно быть пустым';
  }
  // Текущий тариф на электроэнергию:
  data.currentenergytarif = !isEmpty(data.currentenergytarif)
    ? data.currentenergytarif.trim()
    : '';
  if (Validator.isEmpty(data.currentenergytarif)) {
    errors.currentenergytarif = 'Поле не должно быть пустым';
  }
  // Текущий тариф на тепловую энергию:
  data.currentheattarif = !isEmpty(data.currentheattarif)
    ? data.currentheattarif.trim()
    : '';
  if (Validator.isEmpty(data.currentheattarif)) {
    errors.currentheattarif = 'Поле не должно быть пустым';
  }
  // Комментарии:
  data.commentary = !isEmpty(data.commentary) ? data.commentary.trim() : '';
  if (Validator.isEmpty(data.commentary)) {
    errors.commentary = 'Поле не должно быть пустым';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
