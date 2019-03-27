import * as React from 'react';
import * as Styles from './authorization.less';
import { inject, observer } from 'mobx-react';
import { AuthorizationStore } from '../../stores/authorization.store';

@inject("authorizationStore")
@observer
export class Authorization extends React.Component<{ authorizationStore?: AuthorizationStore }> {
    store = this.props.authorizationStore!;
    
    handleRestore = async () => {
        const res: any = await this.store.handleRestorePasswordClick();
        if (res.error) {
            alert('Error restoring password!');
        } else {
            alert('Success restoring password!');
        }
    }
    
    handleLogin = async () => {
        const res: any = await this.store.handleLoginClick();
        if (res.error) {
            alert('Error login!');
        } else {
            alert('Success login!');
        }
    }
    
    render() {
        return (
            <div className={Styles.loginBox}>
                <div className={Styles.loginBoxHeader}>
                    <span className={Styles.text}>Вход</span>
                    <a href={this.store.registerURL} className={Styles.link}>Регистрация</a>
                </div>
                <div className={Styles.form}>
                    <label>Эл. почта или телефон</label>
                    <div className={Styles.inputField}>
                        <input type="text" value={this.store.login} onChange={ev => {
                            this.store.login = ev.target.value
                        }} />
                    </div>
                    <label>Пароль</label>
                    <div className={Styles.inputField}>
                        <input type="text" value={this.store.password} onChange={ev => {
                            this.store.password = ev.target.value
                        }} />
                        <span 
                            className={Styles.remindButton}
                            onClick={this.handleRestore}
                        >
                            Напомнить
                        </span>
                    </div>
                </div>
                <hr />
                <button onClick={this.handleLogin}>Войти на площадку</button>
            </div>
        )
    }
}
