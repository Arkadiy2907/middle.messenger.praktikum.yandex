type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

type TOptions = {
    headers: Record<string, string>;
    method: Methods;
    data: Record<string, unknown>;
    timeout?: number;
};

function queryStringify(data: Record<string, any>) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

class Client {
    get = (url: string, options: TOptions) => this.request(url, { ...options, method: 'GET' }, options.timeout);

    post = (url: string, options: TOptions) => this.request(url, { ...options, method: 'POST' }, options.timeout);

    put = (url: string, options: TOptions) => this.request(url, { ...options, method: 'PUT' }, options.timeout);

    delete = (url: string, options: TOptions) => this.request(
        url,
        {
            ...options,
            method: 'DELETE',
        },
        options.timeout,
    );

    request = (url: string, options: TOptions, time = 5000) => {
        const { headers = {}, method, data } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject(new Error('No method'));
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === 'GET';

            xhr.open(method, isGet && !!data ? `${url}${queryStringify(data as any)}` : url);

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = time;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data as any);
            }
        });
    };
}
