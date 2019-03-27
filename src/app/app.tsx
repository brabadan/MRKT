import * as React from 'react';
import { Authorization } from './components/authorization/authorization';
import * as Styles from './app.less';
import { Provider } from 'mobx-react';
import { AuthorizationStore } from './stores/authorization.store';

export class App extends React.Component {
    authorizationStore = new AuthorizationStore();

    render() {
        return (
            <Provider authorizationStore={this.authorizationStore}>
                <div className={Styles.appContainer}>
                    <Authorization />
                </div>
            </Provider>
        )
    }
}
