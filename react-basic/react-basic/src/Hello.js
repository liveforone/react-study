import React from 'react';

function Hello({name, color, isSpecial}) {
    return (
        <div style={{color : color}}>
            { isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

//클래스형 컴포넌트
// class Hello extends Component {
//     render() {
//       const { color, name, isSpecial } = this.props;
//       return (
//         <div style={{ color }}>
//           {isSpecial && <b>*</b>}
//           안녕하세요 {name}
//         </div>
//       );
//     }
// }

Hello.defaultProps = {
    name : '이름 없음'
};

export default Hello;