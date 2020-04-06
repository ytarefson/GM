import React from 'react';

export default function ProductsBenefits() {
  return (
    <div className="benefits-plate">
      <div className="benefit-card">
        <div className="icon-container">
          <img
            src="/images/icons/debit-card.png"
            title="Выгодные условия оплаты"
            alt="Условия оплаты"
            className="bene-icon"
          />
        </div>
        <div className="text-container">
          <span className="bene-title">Гибкие формы оплаты:</span>
          <span className="bene-text">Лизинг и аренда</span>
        </div>
      </div>
      <div className="benefit-card">
        <div className="icon-container">
          <img
            src="/images/icons/bar-chart.png"
            title="Окупаемость 12 месяцев"
            alt="Срок окупаемости проекта"
            className="bene-icon"
          />
        </div>
        <div className="text-container">
          <span className="bene-title">Срок окупаемости:</span>
          <span className="bene-text">12 месяцев</span>
        </div>
      </div>
      <div className="benefit-card">
        <div className="icon-container">
          <img
            src="/images/icons/location.png"
            title="Все регионы РФ"
            alt="Доставка и обслуживание"
            className="bene-icon"
          />
        </div>
        <div className="text-container">
          <span className="bene-title">Доставка и обслуживание:</span>
          <span className="bene-text">Все регионы РФ</span>
        </div>
      </div>
      <div className="benefit-card">
        <div className="icon-container">
          <img
            src="/images/icons/customer-support.png"
            title="Гарантия на оборудование 24 месяца"
            alt="Гарантийное обслуживание"
            className="bene-icon"
          />
        </div>
        <div className="text-container">
          <span className="bene-title">Гарантия:</span>
          <span className="bene-text">24 месяца</span>
        </div>
      </div>
    </div>
  );
}
