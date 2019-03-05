import React from "react";
import Layout from "../components/Layout";
import ServiceUnitPlate from "../components/services/ServiceUnitPlate";
import FormPage from "../components/form";
import "../scss/services/serviceDetail.scss";

const AutoCenters = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid vspomOborud">
      <div className="mycontainer section-plate headers">
        <div className="headers-container">
          <span className="header-min-colored">
            Стандартный состав комплекта{" "}
            <span className="dark-color">
              проектной и рабочей документации:
            </span>
          </span>
          <p className="text">
            При необходимости проводятся инженерные изыскания: геодезические,
            геологические, экологические. Разработка проектной документации
            осуществляется в соответствии с постановлением Правительства РФ от
            16.02.2008 г. №87 «О составе разделов проектной документации и
            требованиях к их содержанию».
          </p>
        </div>
      </div>
      <div className="container documentation">
        <div className="row">
          <div className="col-12">
            <div className="orderlist">
              <div className="doc-point">
                <span className="razdel">Раздел 1</span>
                <p className="text-bold">«Пояснительная записка»</p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 2</span>
                <p className="text-bold">
                  «Схема планировочной организации земельного участка»
                </p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 3</span>
                <p className="text-bold">«Архитектурные решения»</p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 4 </span>
                <p className="text-bold">
                  «Конструктивные и объемно-планировочные решения»
                </p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 5 </span>
                <p className="text-bold">
                  «Сведения об инженерном оборудовании, о сетях
                  инженерно-технического обеспечения, перечень
                  инженерно-технических мероприятий, содержание технологических
                  решений»:
                </p>
                <ul className="razdel-list">
                  <li className="razdel-li">
                    <span className="text-min text-black">
                      1. Технологическая часть
                    </span>
                  </li>
                  <li className="razdel-li">
                    <span className="text-min text-black">
                      2. Газоснабжение.{" "}
                    </span>
                  </li>
                  <li className="razdel-li">
                    <span className="text-min text-black">
                      3. Отопление, вентиляция и кондиционирование, тепловые
                      сети.
                    </span>
                  </li>
                  <li className="razdel-li">
                    <span className="text-min text-black">
                      4. Водоснабжение и водоотведение.{" "}
                    </span>
                  </li>
                  <li className="razdel-li">
                    <span className="text-min text-black">
                      5. Электроснабжение 0,4 кВ (внутренние сети)
                    </span>
                  </li>
                  <li className="razdel-li">
                    <span className="text-min text-black">
                      6. Электроснабжение 10 кВ (внутренние и наружные сети)
                    </span>
                  </li>
                  <li className="razdel-li">
                    <span className="text-min text-black">
                      7. Автоматизация (АСУ ТП, учет э/э, тепла, газа и воды)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 6 </span>
                <p className="text-bold">«Проект организации строительства»</p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 7 </span>
                <p className="text-bold">
                  «Проект организации работ по сносу или демонтажу объектов
                  капитального строительства»
                </p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 8 </span>
                <p className="text-bold">
                  «Мероприятия по охране окружающей среды»
                </p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 9 </span>
                <p className="text-bold">
                  «Мероприятия по обеспечению пожарной безопасности»
                </p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 10</span>
                <p className="text-bold">
                  Мероприятия по обеспечению соблюдения требований
                  энергетической эффективности и требований оснащенности зданий,
                  строений, сооружений приборами учета используемых
                  энергетических ресурсов.
                </p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 11 </span>
                <p className="text-bold">«Смета на строительство»</p>
              </div>
              <div className="doc-point">
                <span className="razdel">Раздел 12 </span>
                <p className="text-bold">
                  «Иная документация в случаях, предусмотренных федеральными
                  законами»
                </p>
              </div>
              <div className="doc-point">
                <p className="text-bold">Охрана труда</p>
              </div>
              <div className="doc-point">
                <p className="text-bold">
                  Требования к обеспечению безопасной эксплуатации объекта
                  капитального строительства.
                </p>
              </div>
              <div className="doc-point">
                <p className="text-bold">Рабочая документация.</p>
              </div>
              <div className="doc-point">
                <p className="text-bold">
                  Заказные спецификации на оборудование и материалы;
                </p>
              </div>
              <div className="doc-point">
                <p className="text-bold">Компоновочные чертежи</p>
              </div>
              <div className="doc-point">
                <p className="text-bold">Установочные чертежи.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FormPage product={serviceName} />
  </Layout>
);

AutoCenters.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default AutoCenters;
