import { observable } from 'mobx';

const User = {
    email: 'test@test.ru',
    phone: '+7 (333) 333-33-33',
    password: '123123q',
    fullName: 'тестовый тест тестенко'
}

const LoginSuccess = {
    "data":
        {
            "user":
                {
                    "_id": { "$id": "5c63f0d66bb9c9615ad2784a" },
                    "user_type": 3,
                    "emails": [{ "email": "test@test.ru", "confirmed": false }]
                }
        }
}

const LoginError = {
    "error": true
};

const RestoreSuccess = {
    "data": {
        "success": true
    }
}

const RestoreError = {
    "data": {
        "success": false
    },
    "error": true
}

export class AuthorizationStore {
    @observable login = '';
    @observable password = '';

    registerURL = '/';
    loginURL = 'http://mrkt.little.team/api/public/users/login';
    resetPasswordURL = 'http://mrkt.little.team/api/public/users/reset-password';

    handleLoginClick = async () => {
        const res = await this.fetch(this.loginURL, { login: this.login, password: this.password });
        return res;
    }

    handleRestorePasswordClick = async () => {
        const res = await this.fetch(this.resetPasswordURL, { login: this.login });
        return res;
    }

    async fetch(url: string, options: { login: string, password?: string }) {
        switch (url) {
            case this.loginURL: {
                if ((options.login === User.email || options.login === User.phone) && options.password === User.password) {
                    return (await this.answer(LoginSuccess));
                } else {
                    return (await this.answer(LoginError));
                }
            }
            case this.resetPasswordURL: {
                if (options.login === User.email || options.login === User.phone) {
                    return (await this.answer(RestoreSuccess));
                } else {
                    return (await this.answer(RestoreError));
                }
            }
            default: {
                return (await this.answer(LoginError));
            }
        }
    }

    async answer(res: {}) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(res);
            }, 2000)
        })
    }

}

