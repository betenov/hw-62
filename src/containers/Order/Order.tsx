import React from 'react';

const Order = () => {
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя клиента</label>
            <input
              id="name" type="text" name="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес клиента</label>
            <input
              id="address" type="text" name="address"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone" type="text" name="phone"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Заказать!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;