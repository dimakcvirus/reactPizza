import React from "react";
import classNames from 'classnames';


  const Button = ({ onClick, className, outline, children }) => {
    return (
      <button
      onClick={onClick}
        className={classNames('button',className,{
        'button--outline':outline,
        })}>
          {children}
      </button>    
      

    );



  };













// class Button extends React.Component {
//     componentDidMount() {
//         console.log('сообщи мне что компонет кнопка отобразился');
//     }
        
//         return(
//                 <button className="button button--cart">{this.props.text}</button>
        

//         return <button className={this.props.outline ? 'button--outline' : ''}>{this.props.text}</button> тут задаются разные стили для кнопок в скобочках { если outline true то применяются стили если нет то другие стили}
//         return <button className="button button--cart">{this.props.children}</button> ---children получить дочерние элементы

//          const hello = 'qwe'
//          return <button>{hello}</button>

//         return <button> Показывает как созать кнопку через классовый метод</button>;
//         );
    



export default Button;