import React from 'react';
import {useNavigate} from "react-router-dom";

const Card = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Акция!</h5>
              <p className="card-text">У нас Акция при заказе 30 фото размера S (85*70) <br/>
                коробочка с оформлернием и белым наполнителем в подарок</p>
              <button  className="btn btn-primary" onClick={ () => navigate('/order')}>Перейти</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Полароид Фото</h5>
              <p className="card-text">Работаем только с оригинальными краскаит от Epson ! <br/>
              Минимальный заказ 10 фото
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/order')}>Перейти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;