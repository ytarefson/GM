import React from 'react';
import Router from 'next/router';
import TextFieldGroup from '../common/TextFieldGroup';
import RadioInputGroup from '../common/RadioInputGroup';
import validateFormInput from '../../validation/ask-form-validation';

class AskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationname: '',
      organizationadres: '',
      personname: '',
      personstatus: '',
      personemail: '',
      personphone: '',
      personmobile: '',
      locationparams: '',
      projectmountadres: '',
      projectdescription: '',
      operationmode: '',
      proposedmodel: '',
      electricpower: '',
      connectiontype: '',
      minimalload: '',
      energyloadgraph: '',
      installationsettings: '',
      fueltype: '',
      utilsystem: '',
      reqheatpower: '',
      chefmontage: '',
      stafflearning: '',
      otherworks: '',
      gasprice: '',
      currentenergytarif: '',
      currentheattarif: '',
      commentary: '',
      isValid: false,
      errors: {},
    };
    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelect(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = {
      organizationname: this.state.organizationname,
      organizationadres: this.state.organizationadres,
      personname: this.state.personname,
      personstatus: this.state.personstatus,
      personemail: this.state.personemail,
      personphone: this.state.personphone,
      personmobile: this.state.personmobile,
      locationparams: this.state.locationparams,
      projectmountadres: this.state.projectmountadres,
      projectdescription: this.state.projectdescription,
      operationmode: this.state.operationmode,
      proposedmodel: this.state.proposedmodel,
      electricpower: this.state.electricpower,
      connectiontype: this.state.connectiontype,
      minimalload: this.state.minimalload,
      energyloadgraph: this.state.energyloadgraph,
      installationsettings: this.state.installationsettings,
      fueltype: this.state.fueltype,
      utilsystem: this.state.utilsystem,
      reqheatpower: this.state.reqheatpower,
      chefmontage: this.state.chefmontage,
      stafflearning: this.state.stafflearning,
      otherworks: this.state.otherworks,
      gasprice: this.state.gasprice,
      currentenergytarif: this.state.currentenergytarif,
      currentheattarif: this.state.currentheattarif,
      commentary: this.state.commentary,
    }
    
    let result = validateFormInput(data);
    if (result.isValid) {
      fetch('/api/form-validation', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => 
          Router.push('/confirm-email')
      );  
      window.scrollTo(0, 0);
    } else {
     
      this.setState({errors: result.errors})
    }
  }
  render() {
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
                      label="Название организации:"
                      value={this.state.organizationname}
                      onChange={this.onChange}
                      error={this.state.errors?.organizationname}
                      info=""
                    />
                    <TextFieldGroup
                      name="organizationadres"
                      placeholder="123456 г. Ярославль, дом, корпус, помещение..."
                      label="Адрес организации:"
                      value={this.state.organizationadres}
                      onChange={this.onChange}
                      error={this.state.errors?.organizationadres}
                    />
                    <TextFieldGroup
                      name="personname"
                      placeholder="Иванов Иван Иванович"
                      label="ФИО:"
                      value={this.state.personname}
                      onChange={this.onChange}
                      error={this.state.errors?.personname}
                    />
                    <TextFieldGroup
                      name="personstatus"
                      placeholder="Коммерческий директор"
                      label="Должность:"
                      value={this.state.personstatus}
                      onChange={this.onChange}
                      error={this.state.errors?.personstatus}
                    />
                    <TextFieldGroup
                      name="personemail"
                      placeholder="mail@mail.ru"
                      label="e-mail:"
                      value={this.state.personemail}
                      onChange={this.onChange}
                      error={this.state.errors?.personemail}
                    />
                    <TextFieldGroup
                      name="personphone"
                      placeholder="8-4852-12-34-56"
                      label="Городской телефон:"
                      value={this.state.personphone}
                      onChange={this.onChange}
                      error={this.state.errors?.personphone}
                    />
                    <TextFieldGroup
                      name="personmobile"
                      placeholder="8-903-123-45-67"
                      label="Мобильный телефон:"
                      value={this.state.personmobile}
                      onChange={this.onChange}
                      error={this.state.errors?.personmobile}
                    />
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
                    <TextFieldGroup
                      name="locationparams"
                      placeholder="промышленное предприятие, жилая зона, др."
                      label="Характеристики места расположения:"
                      value={this.state.locationparams}
                      onChange={this.onChange}
                      error={this.state.errors?.locationparams}
                    />
                    <TextFieldGroup
                      name="projectmountadres"
                      placeholder="адрес установки"
                      label="Адрес установки (город расположения монтажной площадки): "
                      value={this.state.projectmountadres}
                      onChange={this.onChange}
                      error={this.state.errors?.projectmountadres}
                    />
                    <TextFieldGroup
                      name="projectdescription"
                      placeholder="наименование объекта, описание "
                      label="Дополнительная информация о проекте: "
                      value={this.state.projectdescription}
                      onChange={this.onChange}
                      error={this.state.errors?.projectdescription}
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
                  <div className="fields">
                    <RadioInputGroup
                      name="operationmode"
                      label="Режим работы оборудования: "
                      values={[
                        'Резервный генератор (аварийный)',
                        'Посменный длительный режим',
                        'Постоянный режим работы (круглосуточный)',
                      ]}
                      askother={true}
                      otherlabel="Другой"
                      onSelect={this.onSelect}
                      error={this.state.errors?.operationmode}
                    />
                    <TextFieldGroup
                      name="proposedmodel"
                      placeholder="например, «2  по 400 кВт»: "
                      label="Предполагаемая модель (единичная электрическая мощность) 
                    и количество генераторных установок: "
                      value={this.state.proposedmodel}
                      onChange={this.onChange}
                      error={this.state.errors?.proposedmodel}
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
                      error={this.state.errors?.electricpower}
                    />
                    <RadioInputGroup
                      name="connectiontype"
                      label="Вид подключения: "
                      values={[
                        'Один генератор на изолированную нагрузку (изолированно от централизованной сети)',
                        'Параллельная работа нескольких генераторов на общую нагрузку (изолированно от сети )',
                        'Параллельная работа с централизованной сетью (с запретом экспорта электроэнергии в сеть)',
                      ]}
                      askother={true}
                      otherlabel="Другое"
                      onSelect={this.onSelect}
                      error={this.state.errors?.connectiontype}
                    />
                    <TextFieldGroup
                      name="minimalload"
                      placeholder="кВт"
                      label="Минимальная продолжительная нагрузка: "
                      value={this.state.minimalload}
                      onChange={this.onChange}
                      error={this.state.errors?.minimalload}
                    />
                    <RadioInputGroup
                      name="installationsettings"
                      label="Варианты исполнения и размещения генераторных установок: "
                      values={[
                        'Поставка в открытом исполнении (монтаж в здании)',
                        'Поставка в шумозащитном кожухе на улице',
                        'Поставка в шумозащитном кожухе в здании',
                        'В контейнере (монтажная площадка расположена на улице)',
                      ]}
                      askother={true}
                      otherlabel="Другое"
                      onSelect={this.onSelect}
                      error={this.state.errors?.installationsettings}
                    />
                    <RadioInputGroup
                      name="fueltype"
                      label="Тип и характеристики используемого топлива: "
                      values={['Магистральный природный газ (метан)']}
                      askother={true}
                      otherlabel="Другой (попутный газ, сжиженный пропан-бутан, биогаз, др.) 
											(для любого газа кроме метана, приложить компонентный состав)
											"
                      onSelect={this.onSelect}
                      error={this.state.errors?.fueltype}
                    />
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
                      error={this.state.errors?.utilsystem}
                    />
                    <TextFieldGroup
                      name="reqheatpower"
                      placeholder="кВт"
                      label="Требуемая тепловая мощность: "
                      value={this.state.reqheatpower}
                      onChange={this.onChange}
                      error={this.state.errors?.reqheatpower}
                    />
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
                      error={this.state.errors?.chefmontage}
                    />
                    <TextFieldGroup
                      name="stafflearning"
                      placeholder="Обучение эксплуатирующего персонала: "
                      label="Обучение эксплуатирующего персонала: "
                      value={this.state.stafflearning}
                      onChange={this.onChange}
                      error={this.state.errors?.stafflearning}
                    />
                    <TextFieldGroup
                      name="otherworks"
                      placeholder="Перечислите желаемые дополнительные работы и услуги: "
                      label="Перечислите желаемые дополнительные работы и услуги: "
                      value={this.state.otherworks}
                      onChange={this.onChange}
                      error={this.state.errors?.otherworks}
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
                      error={this.state.errors?.gasprice}
                    />
                    <TextFieldGroup
                      name="currentenergytarif"
                      placeholder="Текущий тариф на электроэнергию, руб./кВт*час: "
                      label="Текущий тариф на электроэнергию, руб./кВт*час: "
                      value={this.state.currentenergytarif}
                      onChange={this.onChange}
                      error={this.state.errors?.currentenergytarif}
                    />
                    <TextFieldGroup
                      name="currentheattarif"
                      placeholder="Текущий тариф на тепловую энергию, руб./Гкал: "
                      label="Текущий тариф на тепловую энергию, руб./Гкал: "
                      value={this.state.currentheattarif}
                      onChange={this.onChange}
                      error={this.state.errors?.currentheattarif}
                    />
                    <TextFieldGroup
                      name="commentary"
                      placeholder="Комментарии: "
                      label="Комментарии: "
                      value={this.state.commentary}
                      onChange={this.onChange}
                      error={this.state.errors?.commentary}
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
        <style jsx global>{`
          .razdel-title {
            display: block;
            text-transform: uppercase;
            font-size: 17px;
            font-weight: 900;
            color: var(--accent-grey);
            line-height: 23px;
            margin-bottom: 0px;
          }
          .title-description {
            font-size: 14px;
            line-height: 12px;
          }
          .form-razdel {
            padding-top: 30px;
            padding-bottom: 15px;
          }
          .fields {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .fields .label-title {
            display: block;
            font-size: 16px;
            line-height: 20px;
            font-weight: 700;
            margin-top: 7px;
            margin-bottom: 5px;
          }
          .fields .form-control {
            font-size: 16px;
            padding-left: 10px;
            font-weight: 300;
          }
          .fields .radio-input-group .label-title {
            margin-bottom: 10px;
          }
          .fields .radio-input-group .radio-input-field {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            padding-left: 25px;
          }
          .fields .radio-input-group .radio-input-field input {
            width: 100%;
            height: inherit;
            position: absolute;
            left: 0;
            z-index: 1;
            opacity: 0;
            margin-right: 10px;
          }
          .fields
            .radio-input-group
            .radio-input-field
            input:checked
            + label::after {
            opacity: 1;
          }
          .fields .radio-input-group .radio-input-field label {
            position: relative;
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 0;
            margin-left: 5px;
            font-weight: 300;
            cursor: pointer;
          }
          .fields .radio-input-group .radio-input-field label::before {
            position: absolute;
            display: block;
            content: '';
            top: 50%;
            transform: translateY(-50%);
            left: -30px;
            width: 20px;
            height: 20px;
            border-radius: 13px;
            border: 1px solid rgba(0, 0, 0, 0.4);
          }
          .fields .radio-input-group .radio-input-field label::after {
            position: absolute;
            display: block;
            content: '';
            top: 50%;
            transform: translateY(-50%);
            left: -25px;
            width: 10px;
            height: 10px;
            border-radius: 13px;
            background: var(--accent-red);
            opacity: 0;
          }
          .radio:checked + label:after {
            opacity: 1;
          }
          .radio:focus + label:before {
            box-shadow: 0 0 0 3px rgba(255, 255, 0, 0.7);
          }
          .fields .radio-input-group .radio-input-field:last-child {
            display: block;
          }
          .form-razdel:nth-child(even) {
            background-color: #fff;
          }

          .button-section .button-submit {
            display: block;
            margin: 0 auto;
            display: block;
            border-radius: 50px;
            color: #fff;
            font-family: var(--molot-font);
            background-color: var(--accent-red);
            border: none;
            padding: 12px 20px;
            letter-spacing: 1px;
            margin: 15px auto;
            box-shadow: var(--box-shadow-up);
            font-size: 15px;
            transition: all 0.2s ease-in;
          }
          .button-section .button-submit:hover {
            cursor: pointer;
            box-shadow: var(--box-shadow);
          }
          @media (min-width: 768px) {
            .razdel-title {
              display: block;
              text-transform: uppercase;
              font-size: 21px;
              font-weight: 300;
              color: var(--accent-grey);
              line-height: 28px;
              margin-bottom: 0px;
            }
            .title-description {
              font-size: 16px;
              line-height: 12px;
            }
            .form-razdel {
              padding-top: 30px;
              padding-bottom: 15px;
            }
            .fields {
              padding-top: 15px;
              padding-bottom: 15px;
            }
            .fields .label-title {
              display: block;
              font-size: 20px;
              line-height: 24px;
              font-weight: 700;
              margin-top: 7px;
              margin-bottom: 10px;
            }
            .fields .form-control {
              font-size: 16px;
              padding-left: 10px;
            }
            .fields .radio-input-group .label-title {
              margin-bottom: 12px;
              font-size: 20px;
              line-height: 24px;
            }
            .fields .radio-input-group .radio-input-field {
              display: flex;
              align-items: center;
              margin-bottom: 12px;
            }
            .fields .radio-input-group .radio-input-field input {
              margin-right: 10px;
            }
            .fields .radio-input-group .radio-input-field label {
              font-size: 16px;
              line-height: 18px;
              margin-bottom: 0;
              font-weight: 300;
            }
          }

          @media (min-width: 1200px) {
            .razdel-title {
              display: block;
              text-transform: uppercase;
              font-size: 27px;
              font-weight: 300;
              color: var(--accent-grey);
              line-height: 34px;
              margin-bottom: 0px;
              padding-right: 300px;
            }
            .title-description {
              font-size: 16px;
              line-height: 12px;
            }
            .form-razdel {
              padding-top: 30px;
              padding-bottom: 15px;
            }
            .fields {
              padding-top: 15px;
              padding-bottom: 15px;
            }
            .fields .label-title {
              display: block;
              font-size: 22px;
              line-height: 24px;
              font-weight: 700;
              margin-top: 10px;
              margin-bottom: 7px;
            }
            .fields .form-control {
              font-size: 18px;
              padding-left: 15px;
            }
            .fields .radio-input-group .label-title {
              margin-bottom: 15px;
              font-size: 22px;
              line-height: 24px;
            }
            .fields .radio-input-group .radio-input-field {
              display: flex;
              align-items: center;
              margin-bottom: 15px;
            }
            .fields .radio-input-group .radio-input-field input {
              margin-right: 10px;
            }
            .fields .radio-input-group .radio-input-field label {
              font-size: 18px;
              line-height: 18px;
              margin-bottom: 0;
              font-weight: 300;
            }
          }
        `}</style>
      </form>
    );
  }
}

export default AskForm;
