import React, { Component } from 'react';

//놓친 에러를 처리하는 방법
class ErrorBoundary extends Component {
    state = {
        error : false
    };

    //param1 : 에러 내용, param2 : 에러 위치
    componentDidCatch(error, info) {
        console.log('에러가 발생했습니다.');
        console.log({
            error,
            info
        });
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <h1>에러 발생!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;