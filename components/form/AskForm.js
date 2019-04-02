import React, { Component } from "react";
import "../../scss/form/ask-form.scss";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import RadioInputGroup from "../common/RadioInputGroup";
import { connect } from "react-redux";
import { validateFormData } from "../../actions/formActions";

class AskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationname: "",
      organizationadres: "",
      organizationrole: "",
      personname: "",
      personstatus: "",
      personemail: "",
      personphone: "",
      personmobile: "",
      personfax: "",
      projectclientname: "",
      projectmountadres: "",
      projecttargets: [],
      projectdescription: "",
      operationmode: "",
      proposedmodel: "",
      electricpower: "",
      connectiontype: "",
      maximumload: "",
      minimalload: "",
      maximumpossibleload: "",
      energyloadgraph: "",
      requiredvoltage: "",
      installationsettings: "",
      deliveryoptions: "",
      locationparams: "",
      additionalrequirements: "",
      fueltype: "",
      fueltank: "",
      gaspressurerange: "",
      utilsystem: "",
      reqheatpower: "",
      maxobjectload: "",
      minobjectload: "",
      gasgraph: "",
      chefmontage: "",
      stafflearning: "",
      otherworks: "",
      gasprice: "",
      currentenergytarif: "",
      currentheattarif: "",
      annualgeneratingtime: "",
      commentary: "",
      errors: {}
    };
    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelect(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const askFormData = {
      organizationname: this.state.organizationname,
      organizationadres: this.state.organizationadres,
      organizationrole: this.state.organizationrole,
      personname: this.state.personname,
      personstatus: this.state.personstatus,
      personemail: this.state.personemail,
      personphone: this.state.personphone,
      personmobile: this.state.personmobile,
      personfax: this.state.personfax,
      projectclientname: this.state.projectclientname,
      projectmountadres: this.state.projectmountadres,
      projecttargets: this.state.projecttargets,
      projectdescription: this.state.projectdescription,
      operationmode: this.state.operationmode,
      proposedmodel: this.state.proposedmodel,
      electricpower: this.state.electricpower,
      connectiontype: this.state.connectiontype,
      maximumload: this.state.maximumload,
      minimalload: this.state.minimalload,
      maximumpossibleload: this.state.maximumpossibleload,
      energyloadgraph: this.state.energyloadgraph,
      requiredvoltage: this.state.requiredvoltage,
      installationsettings: this.state.installationsettings,
      deliveryoptions: this.state.deliveryoptions,
      locationparams: this.state.locationparams,
      additionalrequirements: this.state.additionalrequirements,
      fueltype: this.state.fueltype,
      fueltank: this.state.fueltank,
      gaspressurerange: this.state.gaspressurerange,
      utilsystem: this.state.utilsystem,
      reqheatpower: this.state.reqheatpower,
      maxobjectload: this.state.maxobjectload,
      minobjectload: this.state.minobjectload,
      gasgraph: this.state.gasgraph,
      chefmontage: this.state.chefmontage,
      stafflearning: this.state.stafflearning,
      otherworks: this.state.otherworks,
      gasprice: this.state.gasprice,
      currentenergytarif: this.state.currentenergytarif,
      currentheattarif: this.state.currentheattarif,
      annualgeneratingtime: this.state.annualgeneratingtime,
      commentary: this.state.commentary
    };
    this.props.validateFormData(askFormData);
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container-fluid form-razdel ask-form">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="header-min-colored mb-2">
                  Опросный лист для расчёта параметров проекта
                </h1>
                {/* <small className="d-block">* = обязательные поля</small> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid form-razdel razdel-contacts">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="razdel">
                  <span className="razdel-title">
                    1. Контактные данные организации и лица, заполняющего
                    опросный лист
                  </span>
                  <div className="fields">
                    <TextFieldGroup
                      name="organizationname"
                      placeholder="ООО 'Ваша организация'"
                      label="Название организации: *"
                      value={this.state.organizationname}
                      onChange={this.onChange}
                      error={errors.organizationname}
                      info=""
                    />
                    <TextFieldGroup
                      name="organizationadres"
                      placeholder="123456 г. Ярославль, дом, корпус, помещение..."
                      label="Адрес организации: *"
                      value={this.state.organizationadres}
                      onChange={this.onChange}
                      error={errors.organizationadres}
                    />
                    {/* <RadioInputGroup
                      name="organizationrole"
                      label="Ваша организация является: "
                      values={[
                        "Конечным заказчиком",
                        "Посреднической организацией"
                      ]}
                      askother={true}
                      otherlabel="Другое"
                      onSelect={this.onSelect}
                      error={errors.organizationrole}
                    /> */}
                    <TextFieldGroup
                      name="personname"
                      placeholder="Иванов Иван Иванович"
                      label="ФИО: *"
                      value={this.state.personname}
                      onChange={this.onChange}
                      error={errors.personname}
                    />
                    <TextFieldGroup
                      name="personstatus"
                      placeholder="Коммерческий директор"
                      label="Должность: *"
                      value={this.state.personstatus}
                      onChange={this.onChange}
                      error={errors.personstatus}
                    />
                    <TextFieldGroup
                      name="personemail"
                      placeholder="mail@mail.ru"
                      label="e-mail: *"
                      value={this.state.personemail}
                      onChange={this.onChange}
                      error={errors.personemail}
                    />
                    <TextFieldGroup
                      name="personphone"
                      placeholder="8-4852-12-34-56"
                      label="Городской телефон:"
                      value={this.state.personphone}
                      onChange={this.onChange}
                      error={errors.personphone}
                    />
                    <TextFieldGroup
                      name="personmobile"
                      placeholder="8-903-123-45-67"
                      label="Мобильный телефон:"
                      value={this.state.personmobile}
                      onChange={this.onChange}
                      error={errors.personmobile}
                    />
                    {/* <TextFieldGroup
                      name="personfax"
                      placeholder="8-4852-12-34-56"
                      label="Факс:"
                      value={this.state.personfax}
                      onChange={this.onChange}
                      error={errors.personfax}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid form-razdel project-description">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="razdel">
                  <h2 className="razdel-title">
                    2. Характеристика места установки оборудования
                  </h2>

                  <div className="fields">
                    {/* <TextFieldGroup
                      name="projectclientname"
                      placeholder="Наименование организации"
                      label="Наименование организации, являющейся конечным Заказчиком: *"
                      value={this.state.projectclientname}
                      onChange={this.onChange}
                      error={errors.projectclientname}
										/> */}
                    <TextFieldGroup
                      name="locationparams"
                      placeholder="промышленное предприятие, жилая зона, др."
                      label="Характеристики места расположения: "
                      value={this.state.locationparams}
                      onChange={this.onChange}
                      error={errors.locationparams}
                    />
                    <TextFieldGroup
                      name="projectmountadres"
                      placeholder="адрес установки"
                      label="Адрес установки (город расположения монтажной площадки): *"
                      value={this.state.projectmountadres}
                      onChange={this.onChange}
                      error={errors.projectmountadres}
                    />
                    {/* <RadioInputGroup
                      name="projecttargets"
                      label="Цели проекта: "
                      values={[
                        "Новое строительство",
                        "Расширение (наращивание) мощностей",
                        "Снижение энерго-затрат для действую-щего предприятия"
                      ]}
                      askother={true}
                      otherlabel="Другое укажите (например: модернизация, повышение надёжности и т.д.)"
                      onSelect={this.onSelect}
                      error={errors.projecttargets}
                    /> */}
                    <TextFieldGroup
                      name="projectdescription"
                      placeholder="наименование объекта, описание "
                      label="Дополнительная информация о проекте: "
                      value={this.state.projectdescription}
                      onChange={this.onChange}
                      error={errors.projectdescription}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid form-razdel parametres">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="razdel">
                  <h2 className="razdel-title">
                    3. Основные параметры для выбора оборудования
                  </h2>
                  {/* 
                    TODO: operationmode
									*/}
                  <div className="fields">
                    <RadioInputGroup
                      name="operationmode"
                      label="Режим работы оборудования: "
                      values={[
                        "Резервный генератор (аварийный)",
                        "Посменный длительный режим",
                        "Постоянный режим работы (круглосуточный)"
                      ]}
                      askother={true}
                      otherlabel="Другой"
                      onSelect={this.onSelect}
                      error={errors.operationmode}
                    />
                    <TextFieldGroup
                      name="proposedmodel"
                      placeholder="например, «2  по 400 кВт»: "
                      label="Предполагаемая модель (единичная электрическая мощность) 
                    и количество генераторных установок: "
                      value={this.state.proposedmodel}
                      onChange={this.onChange}
                      error={errors.proposedmodel}
                    />
                    {/* <span>
                      Электрические параметры для подбора оборудования:
                    </span> */}
                    <TextFieldGroup
                      name="electricpower"
                      placeholder="Требуемая электрическая мощность (кВт): "
                      label="Требуемая электрическая мощность (кВт): "
                      value={this.state.electricpower}
                      onChange={this.onChange}
                      error={errors.electricpower}
                    />
                    {/* 
                    TODO: connectiontype
                  */}
                    <RadioInputGroup
                      name="connectiontype"
                      label="Вид подключения: "
                      values={[
                        "Один генератор на изолированную нагрузку (изолированно от централизованной сети)",
                        "Параллельная работа нескольких генераторов на общую нагрузку (изолированно от сети )",
                        "Параллельная работа с централизованной сетью (с запретом экспорта электроэнергии в сеть)"
                      ]}
                      askother={true}
                      otherlabel="Другое"
                      onSelect={this.onSelect}
                      error={errors.connectiontype}
                    />
                    {/* <TextFieldGroup
                      name="maximumload"
                      placeholder="Максимальная (пиковая) нагрузка на объекте (кВт): "
                      label="Максимальная (пиковая) нагрузка на объекте (кВт): "
                      value={this.state.maximumload}
                      onChange={this.onChange}
                      error={errors.maximumload}
                    /> */}
                    <TextFieldGroup
                      name="minimalload"
                      placeholder="кВт"
                      label="Минимальная продолжительная нагрузка: "
                      value={this.state.minimalload}
                      onChange={this.onChange}
                      error={errors.minimalload}
                    />
                    {/* <TextFieldGroup
                      name="maximumpossibleload"
                      placeholder="Максимально возможный единовременный наброс нагрузки"
                      label="Максимально возможный единовременный наброс нагрузки при изолированной работе без централизованной сети (мощность максимального потребителя, кВт), кратность пусковых токов: "
                      value={this.state.maximumpossibleload}
                      onChange={this.onChange}
                      error={errors.maximumpossibleload}
                    /> */}
                    {/* 
                    TODO: energyloadgraph
                  */}
                    <RadioInputGroup
                      name="energyloadgraph"
                      label="Варианты исполнения и размещения генераторных установок: "
                      values={[
                        "Поставка в открытом исполнении (монтаж в здании)",
                        "Поставка в шумозащитном кожухе на улице",
                        "Поставка в шумозащитном кожухе в здании",
                        "В контейнере (монтажная площадка расположена на улице)"
                      ]}
                      askother={true}
                      otherlabel="Другое"
                      onSelect={this.onSelect}
                      error={errors.energyloadgraph}
                    />
                    <RadioInputGroup
                      name="fueltype"
                      label="Тип и характеристики используемого топлива: "
                      values={["Магистральный природный газ (метан)"]}
                      askother={true}
                      otherlabel="Другой (попутный газ, сжиженный пропан-бутан, биогаз, др.) 
											(для любого газа кроме метана, приложить компонентный состав)
											"
                      onSelect={this.onSelect}
                      error={errors.fueltype}
                    />
                    {/* <TextFieldGroup
                      name="requiredvoltage"
                      placeholder="Требуемое напряжение на генераторе, В: "
                      label="Требуемое напряжение на генераторе, В: "
                      value={this.state.requiredvoltage}
                      onChange={this.onChange}
                      error={errors.requiredvoltage}
                    /> */}
                    {/* <span>
                      Параметры места установки оборудования и окружающей среды
                    </span> */}
                    {/* 
                  deliveryoptions
                */}
                    {/* <RadioInputGroup
                      name="deliveryoptions"
                      label="Варианты исполнения и размещения генераторных установок: "
                      values={[
                        "Поставка в открытом исполнении (монтаж в здании)",
                        "Поставка в шумозащитном кожухе на улице",
                        "Поставка в шумозащитном кожухе в здании",
                        "В контейнере (монтажная площадка расположена на улице)"
                      ]}
                      askother={true}
                      otherlabel="Другое"
                      onSelect={this.onSelect}
                      error={errors.deliveryoptions}
                    /> */}

                    {/* <TextFieldGroup
                      name="additionalrequirements"
                      placeholder="дополнительные опции"
                      label=" Требования к дополнительному оборудованию: "
                      value={this.state.additionalrequirements}
                      onChange={this.onChange}
                      error={errors.additionalrequirements}
                    /> */}

                    {/* 
               
                    TODO: fueltype
                  */}
                    {/* <TextFieldGroup
                      name="fueltank"
                      placeholder="Необходимо предусмотреть ёмкость для дизельного топлива, _______л или _______ часов работы: "
                      label="Необходимо предусмотреть ёмкость для дизельного топлива, _______л или _______ часов работы: "
                      value={this.state.fueltank}
                      onChange={this.onChange}
                      error={errors.fueltank}
                    /> */}
                    {/* <TextFieldGroup
                      name="gaspressurerange"
                      placeholder="min бар - max бар"
                      label="Диапазон давления газа в магистрали, бар (min…max): "
                      value={this.state.gaspressurerange}
                      onChange={this.onChange}
                      error={errors.gaspressurerange}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid form-razdel heat-params">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="razdel">
                  <h2 className="razdel-title">4. Тепловые параметры</h2>
                  <div className="fields">
                    <TextFieldGroup
                      name="utilsystem"
                      placeholder="да / нет"
                      label="Система Утилизации Тепла (СУТ): "
                      value={this.state.utilsystem}
                      onChange={this.onChange}
                      error={errors.utilsystem}
                    />
                    <TextFieldGroup
                      name="reqheatpower"
                      placeholder="кВт"
                      label="Требуемая тепловая мощность: "
                      value={this.state.reqheatpower}
                      onChange={this.onChange}
                      error={errors.reqheatpower}
                    />
                    {/* <TextFieldGroup
                      name="maxobjectload"
                      placeholder="Максимальная (пиковая) нагрузка на объекте (кВт): "
                      label="Максимальная (пиковая) нагрузка на объекте (кВт): "
                      value={this.state.maxobjectload}
                      onChange={this.onChange}
                      error={errors.maxobjectload}
                    /> */}
                    {/* <TextFieldGroup
                      name="minobjectload"
                      placeholder="Минимальная продолжительная нагрузка (кВт): "
                      label="Минимальная продолжительная нагрузка (кВт): "
                      value={this.state.minobjectload}
                      onChange={this.onChange}
                      error={errors.minobjectload}
                    /> */}
                    {/* <TextFieldGroup
                      name="gasgraph"
                      placeholder="График потребления тепла (приложить): "
                      label="График потребления тепла (приложить): "
                      value={this.state.gasgraph}
                      onChange={this.onChange}
                      error={errors.gasgraph}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid form-razdel add-works">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="razdel">
                  <h2 className="razdel-title">5. Дополнительные виды работ</h2>
                  <div className="fields">
                    <TextFieldGroup
                      name="chefmontage"
                      placeholder="Шеф-монтажные работы и Пуско-наладочные работы: "
                      label="Шеф-монтажные работы и Пуско-наладочные работы: "
                      value={this.state.chefmontage}
                      onChange={this.onChange}
                      error={errors.chefmontage}
                    />
                    <TextFieldGroup
                      name="stafflearning"
                      placeholder="Обучение эксплуатирующего персонала: "
                      label="Обучение эксплуатирующего персонала: "
                      value={this.state.stafflearning}
                      onChange={this.onChange}
                      error={errors.stafflearning}
                    />
                    <TextFieldGroup
                      name="otherworks"
                      placeholder="Перечислите желаемые дополнительные работы и услуги: "
                      label="Перечислите желаемые дополнительные работы и услуги: "
                      value={this.state.otherworks}
                      onChange={this.onChange}
                      error={errors.otherworks}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid form-razdel economic-params">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="razdel">
                  <h2 className="razdel-title">6. Экономические параметры</h2>
                  <span className="title-description">
                    (необходимо для проведения технико-экономического
                    обоснования)
                  </span>
                  <div className="fields">
                    <TextFieldGroup
                      name="gasprice"
                      placeholder="Стоимость 1000 м3 газа (руб./1000 м3): "
                      label="Стоимость 1000 м3 газа (руб./1000 м3): "
                      value={this.state.gasprice}
                      onChange={this.onChange}
                      error={errors.gasprice}
                    />
                    <TextFieldGroup
                      name="currentenergytarif"
                      placeholder="Текущий тариф на электроэнергию, руб./кВт*час: "
                      label="Текущий тариф на электроэнергию, руб./кВт*час: "
                      value={this.state.currentenergytarif}
                      onChange={this.onChange}
                      error={errors.currentenergytarif}
                    />
                    <TextFieldGroup
                      name="currentheattarif"
                      placeholder="Текущий тариф на тепловую энергию, руб./Гкал: "
                      label="Текущий тариф на тепловую энергию, руб./Гкал: "
                      value={this.state.currentheattarif}
                      onChange={this.onChange}
                      error={errors.currentheattarif}
                    />
                    {/* <TextFieldGroup
                      name="annualgeneratingtime"
                      placeholder="Годовая наработка генераторной установки (кВт*час/год): "
                      label="Годовая наработка генераторной установки (кВт*час/год): "
                      value={this.state.annualgeneratingtime}
                      onChange={this.onChange}
                      error={errors.annualgeneratingtime}
                    /> */}
                    <TextFieldGroup
                      name="commentary"
                      placeholder="Комментарии: "
                      label="Комментарии: "
                      value={this.state.commentary}
                      onChange={this.onChange}
                      error={errors.commentary}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid form-razdel button-section pb-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="button-container">
                  <button className="button-submit" type="submit">
                    Отправить данные
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

AskForm.propTypes = {
  validateFormData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { validateFormData }
)(AskForm);
